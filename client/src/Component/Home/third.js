import './css/home.css'
import {Container, Row, Col} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from './images/3.png';
import Typing from 'react-typing-animation';
import ScrollAnimation from 'react-animate-on-scroll';

function Third(){
    return(
        <div id="Home" className="padding-top--btm-5e">
            <Container>
                <Row>
                    <Col xs={12} sm={12} md={6}>
                        <ScrollAnimation animateIn='fadeIn'>
                        <div>
                            <img src={Image} width='95%'/>
                        </div>
                        </ScrollAnimation>
                    </Col>
                    <Col xs={12} sm={12} md={6} className="padding-top-btm-2e text-center">
                        <div className="fontSizeBig">
                            <Typing speed={100}>
                                <span>
                                    <span style={{color:'#0775B2'}}>CALMS</span>
                                    <br/>LMS 아이디로
                                    <br/>지금 시작하세요!
                                </span>
                            </Typing>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Third;