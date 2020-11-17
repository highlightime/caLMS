function AddEvent(){
    return(
        <div className='d-flex justify-content-center wrapper fadeIn'>
            <div id="formContent">
                <form>
                    <h1><br/>일정 추가<br/><br/></h1>
                    <h3>과목명 : <input type="text" placeholder="과목명" maxLength='10' style={{fontSize:25+'px'}, {width:250+'px'}}/><br/><br/>
                    시작 날짜 : <input type="date" max="9999-12-31" style={{fontSize:25+'px'}}/><br/><br/>
                    종료 날짜 : <input type="date" max="9999-12-31" style={{fontSize:25+'px'}}/><br/><br/>
                    색상 : <span style={{width:10+'px'}, {color:'#FADBFF'}}>■</span><input type="radio" name='color'/>
                    <span style={{width:10+'px'}, {color:'#FFE4D7'}}>  ■</span><input type="radio" name='color'/>
                    <span style={{width:10+'px'}, {color:'#F4FCCC'}}>  ■</span><input type="radio" name='color'/>
                    <span style={{width:10+'px'}, {color:'#D8FEFB'}}>  ■</span><input type="radio" name='color'/>
                    <span style={{width:10+'px'}, {color:'#D6E4FF'}}>  ■</span><input type="radio" name='color'/><br/><br/>
                    <input type="submit" value="확인" style={{fontSize:20+'px'}}/>
                    </h3>
                </form>
            </div>
        </div>
    )
}

export default AddEvent;