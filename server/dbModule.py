import pymysql

db = pymysql.connect(host='localhost',
                     port=3306,
                     user='root',
                     passwd='lhs5934!',
                     db='mydb',
                     charset='utf8')
try:
    with db.cursor() as cursor:
        sql = """
            SELECT * FROM work;
        """
        cursor.execute(sql)
        row = cursor.fetchone()
        result = "[\n\t"
        while row:
            result+="{\n\t"
            result+="\""
            result+="\n},\n"


       # print(result)

      #  db.commit()
finally:
    db.close()
