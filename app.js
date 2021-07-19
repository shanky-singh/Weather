const express=require("express");
const https=require("https")
const app=express();


app.get("/",function(req,res){
    const url="https://api.openweathermap.org/data/2.5/weather?q=chandigarh&appid=35e1f627d066e4b364d6221573911cef&units=metric";
    https.get(url,function(response){
        console.log(response.statusCode);
        response.on("data",function(data){
            const wheatherdata=JSON.parse(data);
            const temp=wheatherdata.main.temp;
            const desc=wheatherdata.weather[0].description;
            res.write("temrature:"+temp);
            res.write(desc);
            res.send();
        });
    });
});

app.listen(3000,function(){
    console.log("Server is running on port 3000");
});