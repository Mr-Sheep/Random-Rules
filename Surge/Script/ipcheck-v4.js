/*
https://raw.githubusercontent.com/Mr-Sheep/Random-Rules/master/Surge/Script/ipcheck-v4.js

* [Panel]
* IPv4 Network Info= script-name=IPv4 Network Info, title="IPv4 Network Info", content="Refresh", style=info, update-interval=60
* ...
* [Script]
* IPv4 Network Info= type=generic,timeout=3,script-path=https://raw.githubusercontent.com/Mr-Sheep/Random-Rules/master/Surge/Script/ipcheck-v4.js
*/

let url = "https://api-ipv4.ip.sb/geoip"

$httpClient.get(url, function(error, response, data){
    let jsonData = JSON.parse(data)
    let ip = jsonData.ip
    let country = jsonData.country
    let emoji = getFlagEmoji(jsonData.country_code)
    let asn = jsonData.asn
    let asOrg = jsonData.asn_organization
    let continent = jsonData.continent_code
    const icon = {
      'AF': "globe.europe.africa.fill",
      'AN': "globe",
      'AS': "globe.asia.australia.fill",
      'EU': "globe.europe.africa.fill",
      'NA': "globe.americas.fill",
      'OC': "globe.asia.australia.fill",
      'SA': "globe.americas.fill",
      'default': "globe",
    };

  body = {
    title: "IPv4 Info",
    content: `IPv4: ${ip}\nAS${asn} ${asOrg}\n${emoji} ${country}`,
    icon: icon[continent] || icon["continent"]
  }
  $done(body);
});



function getFlagEmoji(countryCode) {
    const codePoints = countryCode
      .toUpperCase()
      .split('')
      .map(char =>  127397 + char.charCodeAt());
    return String.fromCodePoint(...codePoints);
}