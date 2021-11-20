# Random Scripts
This project contains rules I used for clash, Quantumult X, and Surge(Mostly), feel free to use it.
Most of the script is modified from other open sourced projects, modified to fit Surge's DOMAIN-SET and Clash.😄
Sample configs are included, but it is best to use your own configuration

# How do I define ADs and Privacy?

To be honest, I didn't think of having two separate sections when I started this project. So there might be a lot of misplaced rules. So you are encouraged to modify this project and create your own rules.

All the applications' requests sent from my phone is monitored by Surge. When the app made some so called "non-essential" requests to hosts such as Data collection companies' server, I will block them and add them to this list. 

Sorry Big Techs lol

Have fun with your ads free internet browsing.

# ℹ️ File related instructions (Clash & Quantumult)
This project now focus primarily on Surge, so you might wanna look for something else when using clash/quantumult.

- Basic.list (Clash ONLY)

  Scripts from multiple projects, some may duplicate AdRule

- AdRule.list

  More than 8000 ad rules， integrate lhie1 and ConnersHua and added some advertising rules

- AdRuleTest.list 

  More than 1300 ad rules，This rule is modified from Scomper. Because the original author stopped maintenance, so take over the optimization and delete some normal rules, only for testing

- AdRule-IP-CIDR.list 

  IP-CIDR part from AdRule.list to better fit Surge's [DOMAIN-SET feature](#Difference between RULE-SET and DOMAIN-SET)

- Download.list 

  Integrate some BT, Thunder, download shunt rules

- China-Site.list
  adopted from https://github.com/Hackl0us/SS-Rule-Snippet

# ℹ️ Surge file instructions
There are three kinds of rule list, one for ads blocking, one for privacy protection, and one for setting correct route for chinese websites. 

### RULE-SET & DOMAIN-SET

According to [Surge's official guidance](https://manual.nssurge.com/book/understanding-surge/en/#rule-system)

> 4.3.5.1 Difference between RULE-SET and DOMAIN-SET

> RULE-SET can contain all types of sub-rules, with no difference in execution efficiency from the rules in the main configuration, while DOMAIN-SET can only use both DOMAIN and DOMAIN-SUFFIX forms of content, using special logic optimized to provide a huge performance boost when there is very much content. (over a thousand items, otherwise there is not much difference between the two)

- CN-IP-SET.list
  This is not for production use, just for testing.

- China-Site.list
  adopted from https://github.com/Hackl0us/SS-Rule-Snippet

- Non-China-Site.list
  adopted from https://github.com/Hackl0us/SS-Rule-Snippet

- Apple.list
  Make all apple request go through proxy server.
  If you don't want this, consider https://github.com/Hackl0us/SS-Rule-Snippet

- Download.list 

  Integrate some BT, Thunder, download shunt rules
  

## ADs

- Tide.list
  Adopted from eHpo1/Rules
  > 通过中间人攻击使用正则表达式实现对广告的精准打击

- AdRule.list

  More than 8000 ad rules， integrate lhie1 and ConnersHua and added some advertising rules

- AdRuleTest.list 

  More than 1300 ad rules，This rule is modified from Scomper. Because the original author stopped maintenance, so take over the optimization and delete some normal rules, only for testing

- AdRule-IP-CIDR.list 
  IP-CIDR part from AdRule.list to better fit Surge's [DOMAIN-SET feature]

- ExtraRule.list
  everything that does not start with DOMAIN-SUFFIX from AdRule.list

- MayCrash.list

  This part of the rule is modified from github.com/StevenBlack/hosts, with over 70k+ rules, originally a hosts file, so it may CRASH on surge, created for testing purposes only
  **May Crash due to iOS Network Extension memory limit**

- ChineseAds.list
  This list is a modification of https://github.com/vokins/yhosts, with over 8k+ rules
  **May Crash due to iOS Network Extension memory limit**

- Zhihu.list
  Special rule list for blocking ads from Zhihu

- anti-AD.list
  Adopted from https://github.com/privacy-protection-tools/anti-AD

Also consider adding [RewriteRules.sgmodule](https://github.com/NobyDa/Script/blob/master/Surge/Module/RewriteRules.sgmodule) for better ad filtering.

## privacy
This section is created for people who hates any kind of data collection from your service provider.


## Miscellaneous

We currently have a domain list for DisneyPlus, Bahamut, Netflix, WeChatSG(WeChat ip range for non-mainland china users), and Steam.
There appeared to be some problem with Netflix on iOS since Netflix can somehow id that a proxy is being used. Pending investigation.


## Project used
|  Name                | Link                                     |
| ----                 |    ----                                  |
|  StevenBlack/hosts   | https://github.com/StevenBlack/hosts     |
| NobyDa/Script        | https://github.com/NobyDa/Script         |
| VeleSila/yhosts | https://github.com/VeleSila/yhosts |
| DivineEngine/Profiles | https://github.com/DivineEngine/Profiles |
| Hackl0us/SS-Rule-Snippet | https://github.com/Hackl0us/SS-Rule-Snippet|
| blackmatrix7/ios_rule_script |https://github.com/blackmatrix7/ios_rule_script|
| 787a68/Rules | https://github.com/787a68/Rules|
| privacy-protection-tools| https://github.com/privacy-protection-tools/anti-AD |