# Snapshots ID

0: the snapshot of the statically retrieved page

1 - 15: snapshots before/after API calls and at events during the page loading

| Snapshot ID | Document URL | In iFrame | JavaScript URL | API Call / Event | Timestamp | 0: before API call, 1: after API call |
| ----------- | ------------ | --------- | -------------- | ---------------- | --------- | ------------------------------------- |
| 1 | http://www.1*i.com/ | false | http://www.1*i.com/jquery.20.min.js | writeln | 1661371431297 | 0 |
| 3 | http://www.1*i.com/ | false | http://www.1*i.com/jquery.20.min.js | writeln | 1661371431297 | 1 |
| 4 | http://www.1*i.com/ | false | https://www.m*8.com/ff/pp.js | write | 1661371433106 | 0 |
| 5 | http://www.1*i.com/ | false | https://www.m*8.com/ff/pp.js | write | 1661371433106 | 1 |
| 6 | http://www.1*i.com/ | false | http://www.1*i.com/jquery.la.min.js | insertBefore | 1661371434715 | 0 |
| 7 | http://www.1*i.com/ | false | http://www.1*i.com/jquery.la.min.js | insertBefore | 1661371434715 | 1 |
| 8 | http://www.1*i.com/ | false | - | Doc_DOMContentLoaded | 1661371435103 | 1 |
| 9 | http://www.1*i.com/ | false | https://www.m*8.com/ff/pp.js | appendChild | 1661371435108 | 0 |
| 10 | http://www.1*i.com/ | false | https://www.m*8.com/ff/pp.js | appendChild | 1661371435108 | 1 |
| 11 | http://www.1*i.com/ | false | https://www.m*8.com/ff/pp.js | insertBefore | 1661371435413 | 0 |
| 12 | http://www.1*i.com/ | false | https://www.m*8.com/ff/pp.js | insertBefore | 1661371435413 | 1 |
| 13 | http://www.1*i.com/ | false | - | Win_DOMContentLoaded | 1661371435719 | 1 |
| 14 | https://www.m*8.com/dan/indexjs.html | true | - | Doc_DOMContentLoaded | 1661371436071 | 1 |
| 15 | https://www.m*8.com/dan/indexjs.html | true | - | Win_DOMContentLoaded | 1661371436074 | 1 |

# Scores of snapshot comparison

| Snapshot ID | Snapshot ID |  PA  | PB  | PAB | Note |
| ----------- | ----------- | ---- | --- | --- | ---- |
| 5           | 6           | -1.0 (initially empty) | 0.0 | 0.0 | |
| 6 (11 is the same as 6) | 12          |  0.0 | 0.0 | 0.0 | Defaced at here |
| 0           | 12          |  0.0 | 0.0 | 0.0 | |
