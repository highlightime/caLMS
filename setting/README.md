## google chrome version 86.0.4240.198 

## python version 3.6.9

## server ubuntu version 18.04.5 LTS (GNU/Linux 5.4.0-1029-aws x86_64)

## mysql 접속

```
mysql -u admin -p -h calms-database.cyubjk2aho2f.ap-northeast-2.rds.amazonaws.com
```

## schema name

```
use calms;
```

## python 에서 mysql 접속
----------------------------추후 비번 hide
```python
import MySQLdb
db=MySQLdb.connect("calms-database.cyubjk2aho2f.ap-northeast-2.rds.amazonaws.com","admin","Qwerty12^^","calms")
```


