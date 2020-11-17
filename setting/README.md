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

## database table 생성
```
drop table work;
drop table assignment;
drop table lecture;
drop table subject;
drop table student;
CREATE TABLE `student` (
  `id` VARCHAR(45) NOT NULL,
  `pw` VARCHAR(45) NULL,
  PRIMARY KEY (`id`))charset = utf8;;

CREATE TABLE `subject` (
  `id_subject` INT NOT NULL AUTO_INCREMENT,
  `name_subject` VARCHAR(45) NULL UNIQUE,
  PRIMARY KEY (`id_subject`))charset = utf8;;

CREATE TABLE `lecture` (
  `id_lecture` INT NOT NULL AUTO_INCREMENT,
  `name_lecture` VARCHAR(45) NULL UNIQUE,
  `start_lecture` VARCHAR(45) NULL,
  `finish_lecture` VARCHAR(45) NULL,
  `flag` INT NULL,
  `id_subject` INT NOT NULL,
  PRIMARY KEY (`id_lecture`),
  INDEX `fk_lecture_subject_idx` (`id_subject` ASC) VISIBLE,
  CONSTRAINT `fk_lecture_subject`
    FOREIGN KEY (`id_subject`)
    REFERENCES `subject` (`id_subject`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)charset = utf8;;

CREATE TABLE `assignment` (
  `id_assignment` INT NOT NULL AUTO_INCREMENT,
  `start_assignment` VARCHAR(45) NULL,
  `finish_assignment` VARCHAR(45) NULL,
  `name_assignment` VARCHAR(45) NULL UNIQUE,
  `flag` INT NULL,
  `id_subject` INT NOT NULL,
    PRIMARY KEY (`id_assignment`),
  INDEX `fk_assignment_subject_idx` (`id_subject` ASC) VISIBLE,
  CONSTRAINT `fk_assignment_subject`
    FOREIGN KEY (`id_subject`)
    REFERENCES `subject` (`id_subject`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)charset = utf8;;

CREATE TABLE `work`(
  `id_work` INT NOT NULL AUTO_INCREMENT,
  `name_work` VARCHAR(45) NULL,
  `start_work` VARCHAR(45) NULL,
  `finish_work` VARCHAR(45) NULL,
  `id_student` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id_work`),
  INDEX `fk_work_student_idx` (`id_student` ASC) VISIBLE,
  CONSTRAINT `fk_work_student`
    FOREIGN KEY (`id_student`)
    REFERENCES `student` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)charset = utf8;;
 ```
