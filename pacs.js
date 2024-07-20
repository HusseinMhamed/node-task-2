
request= require('request')
function weather(longTu , atutu , callback){
    const url1='http://api.weatherapi.com/v1/current.json?key=a46305a5e3074d7b83e131536242007&q='+atutu+','+longTu;
request({url:url1,json:true},(error,response)=>{
    if(error){
        callback('Unable to connect',undefined);
    }
    else if(response.body.error){
        callback(response.body.error.message,undefined);
    }
    else{
        // console.log(response.body.current.condition.text);
        // console.log("error", error)
        callback(undefined , response.body.location.name +" it is " + response.body.current.condition.text + " and the temp is : " + response.body.current.temp_c);
    }
})
}
// bsbs(process.argv[2])
module.exports=weather