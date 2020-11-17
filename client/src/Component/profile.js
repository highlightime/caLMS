function Profile({user}){
    const{ID, password, name} = user || {}
    return(
        <div className='d-flex justify-content-center wrapper fadeIn'>
            <div id="formContent">
                <form style={{textAlign:"left"}}>
                    <h1><br/>ID : {ID}<br/></h1>
                    <h3><span>알림 설정   </span>
                    <input type="radio" name="alert" value="on"/> ON
                    <input type="radio" name="alert" value="off"/> OFF<br/>
                    알림 방식 <input type="radio" name="method" value="email"/> E-mail  
                    <input type="radio" name="method" value="sms"/> 문자 <br/>
                    Phone : <input type="text" name="Phone" placeholder="010-1234-5678" style={{width:200+'px'}}/> <br/>
                    Email : <input type="text" name="E-mail" placeholder="abc@email.com" style={{width:240+'px'}}/>
                    <input type="submit" value="확인" style={{fontSize:20+'px'}}/> </h3>
                </form>
            </div>
        </div>
    )
}

export default Profile;