1. Snapshots ID

0: snapshots of statically retrieved page

1 - 15:

| Snapshot ID | Document URL | In iFrame | JavaScript URL | API Call | Timestamp | 0-before API call, 1-after API call |
| ----------- | ------------ | ------------ | -------------- | -------- | --------- | ----------------------------------- |
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

2. Scores of snapshot comparison

| Snapshot ID | Snapshot ID |  PA  | PB  | PAB |
| ----------- | ----------- | ---- | --- | --- |
| 5           | 6           | -1.0 | 0.0 | 0.0 |
| 6           | 12          |  0.0 | 0.0 | 0.0 |
| 0           | 12          |  0.0 | 0.0 | 0.0 |