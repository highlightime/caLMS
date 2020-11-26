import socket
from flask import Flask, render_template, request
from flask import jsonify
from dbModule import result
import requests
from selenium import webdriver
import MySQLdb


app = Flask(__name__)
app.config["CACHE_TYPE"] = "null"


app = Flask(__name__)
def crawling(id,pw):
	# Database connection
	conn=MySQLdb.connect("calms.cyubjk2aho2f.ap-northeast-2.rds.amazonaws.com","admin",<pwd>,"calms")
	curs=conn.cursor()
	print("connected to database")
	
	# set the chrome driver
	options=webdriver.ChromeOptions()
	options.add_argument('headless')
	options.add_argument('window-size=1920x1080')
	options.add_argument('disable-gpu')
	options.add_argument('--single-process')
	options.add_argument('--no-sandbox')
	options.add_argument('--disable-dev-shm-usage')
	options.add_argument("--remote-debugging-port=9222") 
	driver=webdriver.Chrome(executable_path='./chromedriver',chrome_options=options)
	driver.implicitly_wait(3)
	driver.get('https://lms.knu.ac.kr/ilos/main/member/login_form.acl')
	# lms login page 
	driver.find_element_by_name('usr_id').send_keys('<id>')
	driver.find_element_by_name('usr_pwd').send_keys('<pwd>')
	driver.find_element_by_xpath('//*[@id="myform"]/div/div/div/div[1]').click()
	page=1
	while True:
	    # Into the subject page
	    driver.get('https://lms.knu.ac.kr/ilos/main/main_form.acl')
	page=page+1
	try:
	    submain_page=driver.find_element_by_xpath('//*[@id="contentsIndex"]/div[2]/div[2]/ol/li[%s]/em' %page).click()
	    subject_name=driver.find_element_by_css_selector('#welcome_form > div.welcome_title.site-mouseover-color > div > span.welcome_subject')
	except:
	    page=page-1
	    print("No more subject")
	    break
	sql=f"INSERT IGNORE INTO subject(name_subject) values('{subject_name.text}');"
	#print(sql)
	try:
	    val=subject_name.text
	    curs.execute(sql)
	except:
	    print("insert error")
	    conn.close()
	finally:    
	    conn.commit()
	    print("Inserted row of data.")
	w=0
	m=0
	sql=f"SELECT id_subject FROM subject WHERE name_subject='{val}';"
	#print(sql)
	try:
	    curs.execute(sql)
	except:
	    print("select error")
	for d in curs:
	    row=d[0]
	while True: 
	    w=w+1
	    try:
	        lecture_page=driver.find_element_by_css_selector('#week-%s' %w).click()
	    except:
	        #print("no lecture page")
	        break
	    # Into the lecture page
	    while True:
	        m=m+1
	        try:
	            lecture_name=driver.find_element_by_css_selector('#lecture-%s > div > ul > li:nth-child(1) > ol > li:nth-child(1) > div:nth-child(2)' %m)
	            lecture_date=driver.find_element_by_css_selector('#lecture-%s > div > ul > li:nth-child(1) > ol > li:nth-child(2) > div:nth-child(2)' %m)
	        except:
	            m=m-1
	            break
	        start,finish=lecture_date.text.split("~")
	        a,b=start.split(':',maxsplit=1)
	        sql=f"REPLACE INTO lecture(name_lecture,start_lecture,finish_lecture,id_subject) values('{lecture_name.text}','{b}','{finish}',{row});"
	        #print(sql)
	        #print(m)
	        try:
	            curs.execute(sql.encode('utf8'))
	            print("Inserted row of data.")
	        except MySQLdb.Error as e:
	            try:
	                print("MySQL Error [%d]: %s" % (e.args[0], e.args[1]))
	            except IndexError:
	                print("MySQL Error: %s" % str(e))
	        except TypeError as e:
	            print(e)
	        except ValueError as e:
	            print(e)
	        finally:
	            conn.commit()
	driver.back() #go back to submain page
	assign_page=driver.find_element_by_css_selector('#submain-contents > div.submain-leftarea > div:nth-child(7) > div.submain-noticebox > ol > li:nth-child(6)').click()
	n=0
	# Into the assignment page
	while True:
	    try:
	        n=n+1
	        assign_page_s=driver.find_element_by_css_selector('#report_list > table > tbody > tr:nth-child(%s)' %n).click()
	    except:
	        #print("no assign_page")
	        break
	    assign_name=driver.find_element_by_css_selector('#content_text > table > tbody > tr:nth-child(1) > td')
	    assign_date=driver.find_element_by_css_selector('#content_text > table > tbody > tr:nth-child(4) > td')
	    assign_start=driver.find_element_by_css_selector('#content_text > table > tbody > tr:nth-child(3) > td')
	    sql=f"REPLACE INTO assignment(name_assignment,finish_assignment,start_assignment,id_subject) values('{assign_name.text}','{assign_date.text}','{assign_start.text}',{row});"
	    #print(sql)
	    try:
	        curs.execute(sql.encode('utf8'))
	        print("Inserted row(s) of data.")
	    except:
	        print("insert error")
	        conn.close()
	    finally:
	        conn.commit()
	    driver.back() #go back to submain page

@app.route("/")
def print_hello():
   return (result)

@app.route('/test')#연결 html이랑
def test():
    return render_template('friend.html')

@app.route('/post', methods=['POST'])#id,pw 받고 바로 post에 들어가짐..?
def post():
    id = request.form['id']
    pw = request.form['pw']
    return crawling(id ,pw)

# @app.route("/info", methods=["POST"])
# def info():
#     info_dict = dict()
#     info_dict["IP_ADDRESS"] = socket.gethostbyname(socket.gethostname())
#     info_dict["HOST_NAME"] = socket.gethostname()
#     return info_dict
if __name__ == '__main__':
    app.secret_key = 'super secret key'
    app.config['SESSION_TYPE'] = 'filesystem'
    app.run(host='0.0.0.0', port=5001,debug=True)
