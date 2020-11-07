# Random Scripts
This project contains rules I used for clash and Surge, feel free to use it.
Most of the script is modified from other open sourced projects, modified to fit Surge's DOMAIN-SET and Clash.😄️

# ℹ️ File related instructions

- Basic.list (Clash ONLY)

  Scripts from multiple projects, some may duplicate AdRule

- AdRule.list

  More than 8000 ad rules， integrate lhie1 and ConnersHua and added some advertising rules

- AdRule-IP-CIDR.list 

  IP-CIDR part from AdRule.list to better fit Surge's [DOMAIN-SET feature](#Difference between RULE-SET and DOMAIN-SET)

- AdRuleTest.list 

  More than 1300 ad rules，This rule is modified from Scomper. Because the original author stopped maintenance, so take over the optimization and delete some normal rules, only for testing

- Download.list 

  Integrate some BT, Thunder, download shunt rules

- MayCrash.list

  This part of the rule is modified from github.com/StevenBlack/hosts, with over 70k+ rules, originally a hosts file, so it may CRASH on surge, created for testing purposes only
  **May Crash due to iOS NE memory limit**

- ChineseWebsite.list

  This list is a modification of https://github.com/vokins/yhosts, with over 8k+ rules
  **May Crash due to iOS NE memory limit**

Also consider adding [RewriteRules.sgmodule](https://github.com/NobyDa/Script/blob/master/Surge/Module/RewriteRules.sgmodule) for better ad filtering.

### RULE-SET & DOMAIN-SET

According to [Surge's official guidance](https://manual.nssurge.com/book/understanding-surge/en/#rule-system)

> 4.3.5.1 Difference between RULE-SET and DOMAIN-SET

> RULE-SET can contain all types of sub-rules, with no difference in execution efficiency from the rules in the main configuration, while DOMAIN-SET can only use both DOMAIN and DOMAIN-SUFFIX forms of content, using special logic optimized to provide a huge performance boost when there is very much content. (over a thousand items, otherwise there is not much difference between the two)

## Project used
|  Name                | Link                                     |
| ----                 |    ----                                  |
|  StevenBlack/hosts   | https://github.com/StevenBlack/hosts     |
| NobyDa/Script        | https://github.com/NobyDa/Script         |
| VeleSila/yhosts | https://github.com/VeleSila/yhosts |
| DivineEngine/Profiles | https://github.com/DivineEngine/Profiles |

