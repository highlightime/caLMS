function Setting({user}){
    const{ID, password, name} = user || {}
    return(
        <div className='d-flex justify-content-center wrapper fadeIn'>
            <div id="formContent">
                <form>
                    <h1><br/>ID : {ID}<br/></h1>

                    <h3>알림 설정 : 
                    ON&nbsp;<input type="radio" name="alert" value="on"/> 
                    &nbsp;OFF&nbsp;<input type="radio" name="alert" value="off"/><br/><br/>

                    알림 방식 :  E-mail&nbsp;<input type="radio" name="method" value="email"/> 
                    &nbsp;문자&nbsp;<input type="radio" name="method" value="sms"/> <br/><br/>
                    Phone : <input type="text" name="Phone" placeholder="010-1234-5678" style={{width:200+'px'}}/> <br/><br/>
                    Email : <input type="text" name="E-mail" placeholder="abc@email.com" style={{width:240+'px'}}/><br/><br/>
                    <input type="submit" value="확인" style={{fontSize:20+'px'}}/> </h3> {/* submit 수정 */}
                </form>
            </div>
        </div>
    )
}

export default Setting;