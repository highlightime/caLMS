import requests
from selenium import webdriver
'''
import MySQLdb
conn=MySQLdb.connect("calms-database.cyubjk2aho2f.ap-northeast-2.rds.amazonaws.com","admin","<pwd>","calms")
curs=conn.cursor()
'''
options=webdriver.ChromeOptions()
options.add_argument('headless')
options.add_argument('window-size=1920x1080')
options.add_argument('disable-gpu')
options.add_argument('--single-process')
options.add_argument('--no-sandbox')
options.add_argument('--disable-dev-shm-usage')
options.add_argument("--remote-debugging-port=9222") 
driver=webdriver.Chrome(executable_path='/Users/hyeong/Downloads/chromedriver',chrome_options=options)
driver.implicitly_wait(3)
driver.get('https://lms.knu.ac.kr/ilos/main/member/login_form.acl')
'''
try:
    sql="INSERT INTO student values(%s,%s)"
    val=('sorious','1234')
    curs.execute(sql,val)
except:
    print("insert error")
    conn.close()
conn.commit()
'''
driver.find_element_by_name('usr_id').send_keys('yeahl97')
driver.find_element_by_name('usr_pwd').send_keys('<pwd>')
try:
    driver.find_element_by_xpath('//*[@id="myform"]/div/div/div/div[1]').click()
except:
    print("login error")
for page in range(2,5):
    driver.get('https://lms.knu.ac.kr/ilos/main/main_form.acl')
    submain_page=driver.find_element_by_xpath('//*[@id="contentsIndex"]/div[2]/div[2]/ol/li[%s]/em' %page).click()
    lecture_name=driver.find_element_by_css_selector('#welcome_form > div.welcome_title.site-mouseover-color > div > span.welcome_subject')
    print(lecture_name.text)
    w=0
    m=0
    while True: 
        w=w+1
        print(w)
        print("week")
        try:
            lecture_page=driver.find_element_by_css_selector('#week-%s' %w).click()
        except:
            #print("no lecture page")
            break
        while True:
            m=m+1
            try:
                lecture_name=driver.find_element_by_css_selector('#lecture-%s > div > ul > li:nth-child(1) > ol > li:nth-child(1) > div:nth-child(2)' %m)
                lecture_date=driver.find_element_by_css_selector('#lecture-%s > div > ul > li:nth-child(1) > ol > li:nth-child(2) > div:nth-child(2)' %m)
            except:
                m=m-1
                break
            print(lecture_name.text)
            print(lecture_date.text)
    # 과제 페이지
    driver.back() #go back to submain page
    assign_page=driver.find_element_by_css_selector('#submain-contents > div.submain-leftarea > div:nth-child(7) > div.submain-noticebox > ol > li:nth-child(6)').click()
    n=0
    while True:
        try:
            n=n+1
            assign_page_s=driver.find_element_by_css_selector('#report_list > table > tbody > tr:nth-child(%s)' %n).click()
        except:
            #print("no assign_page")
            break
        assign_name=driver.find_element_by_css_selector('#content_text > table > tbody > tr:nth-child(1) > td')
        print(assign_name.text)
        assign_date=driver.find_element_by_css_selector('#content_text > table > tbody > tr:nth-child(4) > td')
        print(assign_date.text)
        '''
        try:
            sql="INSERT INTO assignment(assign_name,finish_date) values(%s,%s)"
            val=assign_name.text,assign_date.text
            curs.execute(sql,val)
        except:
            print("insert error")
            conn.close()
        conn.commit()
        '''
        driver.back() #go back to submain page
    
            
	

