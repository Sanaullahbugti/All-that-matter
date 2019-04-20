const request = require("request");
const chalk = require("chalk");
const query = "karachi";
const getNews = () =>{
      request(
      `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${api_key}`,
      (req, res) => {
        const pars = JSON.parse(res.body);
        let counter = 0;
        pars.articles.map(rec => {
          counter = counter + 1;
          if (counter <= 5) {
            console.log(chalk.bgGreen("Title:", rec.title));
            console.log(chalk.green("Descritption:", rec.description));
          }
        });
      }
    );
}




const weather_api_key = "Ue0yzPWkft3tKdGF4GL6FQGd1wxNd1Db";
process.argv[2]
  ?request(`http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${weather_api_key}&q=${process.argv[2]}`,(req,res)=>{
    let parsedData = JSON.parse(res.body);
    console.log(
      chalk.bgYellow.black(parsedData[0].LocalizedName) +
        "\t" +
        chalk.bgCyan(parsedData[0].AdministrativeArea.LocalizedName) +
        "\t" +
        chalk.whiteBright(parsedData[0].Country.LocalizedName)
    );
    request(
      `http://dataservice.accuweather.com/currentconditions/v1/${
        parsedData[0].Key
      }?apikey=Ue0yzPWkft3tKdGF4GL6FQGd1wxNd1Db`,
      (req, res) => {
        let arr = JSON.parse(res.body);
        console.log();
        console.log(
          chalk.greenBright(
            chalk.bgYellow.black(
              arr[0].Temperature.Metric.Value +
                " " +
                arr[0].Temperature.Metric.Unit
            )
          )
        );
      }
    );
  })
  : request("https://json.geoiplookup.io/", (req, res) => {
      let parsedData = JSON.parse(res.body);
      request(
        `http://dataservice.accuweather.com/locations/v1/cities/ipaddress?apikey=${weather_api_key}&q=${
          parsedData.ip
        }&language=en-us&details=true`,
        (req, res) => {
          let parsed = JSON.parse(res.body);
          console.log(
            chalk.bgYellow.black(parsed.LocalizedName) +
              "\t" +
              chalk.bgCyan(parsed.AdministrativeArea.LocalizedName) +
              "\t" +
              chalk.whiteBright(parsed.Country.LocalizedName)
          );
          request(
            `http://dataservice.accuweather.com/currentconditions/v1/${
              parsed.Key
            }?apikey=Ue0yzPWkft3tKdGF4GL6FQGd1wxNd1Db`,
            (req, res) => {
              let arr = JSON.parse(res.body);
              console.log();
              console.log();
              console.log(
                chalk.greenBright(
                  chalk.bgYellow.black(
                    arr[0].Temperature.Metric.Value +
                      " " +
                      arr[0].Temperature.Metric.Unit
                  )
                )
              );
            }
          );
        }
      );
    });
