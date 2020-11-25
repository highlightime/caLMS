import h1 from './images/1.png';
import h2 from './images/2.png';
import h3 from './images/3.png';
import h4 from './images/4.png';
import h5 from './images/5.png';
import h6 from './images/6.png';
import w1 from './images/w1.png';

function Home(){
    return(
    <body>
         <div class="row">
            <div class ="col-image">
                <div class="find aos-init aos-animate" data-aos="fade-right" data-aos-duration="1500">
			         <img src={h6}/>
                </div>
            </div>
            <div class="col-word find-ment">
                <span class="font">
                    당신의 일정을
                    <br/>모두 관리하세요<br/></span>
            </div>
        </div>
    </body>
    )
}

export default Home;