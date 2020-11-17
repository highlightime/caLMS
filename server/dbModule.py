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
        result = "["
        while row:
            result+="\n\t{"
            result+="\n\t\t\"name_work\" : "+"\""+str(row[4])+"\""
            result += "\n\t\t\"start\" : " + "\"" + str(row[1])+"\""
            result += "\n\t\t\"end\" : " + "\"" + str(row[2])+"\""
            result+="\n\t},"
            row = cursor.fetchone()
        result+="\n]"
        print(result)

      #  db.commit()
finally:
    db.close()
