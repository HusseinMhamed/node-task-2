const request = require('request');
const weather = require('./pacs.js');
const address = process.argv[2];
// console.log(request);
const geoCod = (address,callback)=> {
    const url='https://api.mapbox.com/geocoding/v5/mapbox.places/' + address +'.json?access_token=pk.eyJ1IjoiaXNsYW0yODQiLCJhIjoiY2wwamEzNmFhMGFtNTNkb3pqaXk4bXNnYSJ9.qYlrWIqo41gXgNNc4h8yIw';

    request({url:url,json:true},(error,response)=>{
        if(error){
            callback('Unable to connect',undefined);
        }
        else if(response.body.error){
            callback(response.body.error.message,undefined);
        }
        else if(response.body.features.length == 0){
            callback('THIS COUNTERY NOT FOUND',undefined);
        }
        else{
        //    console.log(response.body.features[0].place_name , response.body.features[0].center[0] , response.body.features[0].center[1]);
            //weather(response.body.features[0].center[0] , response.body.features[0].center[1],callback);'
            callback(undefined,{
                long : response.body.features[0].center[0],
                atot : response.body.features[0].center[1]
            });

        }
    })
}
geoCod(address,(error , response)=> {
    console.log("ERROR : " + error);
    console.log("RESPONSE : " + response.long + " " + response.atot);
    weather(response.long , response.atot,(err , respons) => {
        console.log("ERROR : " + err);
        console.log("RESPONSE : " + respons);
    });
})
