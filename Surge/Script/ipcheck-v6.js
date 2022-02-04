/*
https://raw.githubusercontent.com/Mr-Sheep/Random-Rules/master/Surge/Script/ipcheck-v6.js

* [Panel]
* IPv6 Network Info= script-name=IPv6 Network Info, title="IPv6 Network Info", content="Refresh", style=info, update-interval=60
* ...
* [Script]
* IPv6 Network Info= type=generic,timeout=3,script-path=https://raw.githubusercontent.com/Mr-Sheep/Random-Rules/master/Surge/Script/ipcheck-v6.js
*/

let url = "https://api-ipv6.ip.sb/geoip"

$httpClient.get(url, function(error, response, data){
    let jsonData = JSON.parse(data)
    let ip = jsonData.ip
    let country = jsonData.country
    let emoji = getFlagEmoji(jsonData.country_code)
    let asn = jsonData.asn
    let asOrg = jsonData.asn_organization
    
  body = {
    title: "Network Info",
    content: `IPv6: ${ip}\nAS${asn} ${asOrg}\nGeo: ${emoji}${country}`,
    icon: "link.icloud",
    'icon-color': "#5AC8FA"
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
