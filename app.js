const request = require("request");
const chalk =require('chalk')
const query = "karachi";
const api_key ="1a34b5f5f9e1449cb031e024acfb905f";
const country ="au";

request(`https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${api_key}`,(req,res)=>{
    const pars = JSON.parse(res.body);
    pars.articles.map(rec=>{
        console.log(rec.content)
    })
})




// const api_key ="pk.eyJ1Ijoic2J1Z3RpIiwiYSI6ImNqdWZiNGdyaTA4aTU0NG5xaWY3MzUzaWcifQ.sCo8wP6DYbJ1kXuFQhYJVA";
// request(`https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20${query}.json?access_token=${api_key}`,(req,res)=>{
// //console.log(res.body);
// const pars=JSON.parse(res.body);
// pars.features.map((rec)=>{
//         console.log(rec.place_name);
//     });
// })
// const api_key="Ue0yzPWkft3tKdGF4GL6FQGd1wxNd1Db";
// request(`http://api.accuweather.com/locations/v1/search?q=${query}&apikey=${api_key}`,(req,res)=>{
//     console.log("res:",res);

// })

// const options = {
//   url: "http://dataservice.accuweather.com/locations/v1/topcities/{150}",

//   apikey: "Ue0yzPWkft3tKdGF4GL6FQGd1wxNd1Db",
//   language: "en-us",
//   details: "true"
// };
// request(
//   "http://dataservice.accuweather.com/locations/v1/topcities/150?apikey=Ue0yzPWkft3tKdGF4GL6FQGd1wxNd1Db&language=en-us&details=true",
//   (req, res) => {
//     const data = res;
//     console.log(chalk.bgGreen("data:"),data)
    //     data.map((rec)=>{
    //       console.log("rec",rec);
    //   });
    // res.SupplementalAdminAreas.toJSON().map((rec)=>{
    //     console.log("names :"  , rec.localizeName)
    // });
   
//   }

// );
