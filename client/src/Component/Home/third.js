import './css/home.css'
import {Container, Row, Col} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from './images/7.png';
import Typing from 'react-typing-animation';

function Third(){
    return(
        <div id="Home" className="padding-top--btm-5e">
            <Container>
                <Row>
                    <Col xs={12} sm={12} md={6}>
                        <div>
                            <div>
                                <img src={Image} width='95%'/>
                            </div>
                        </div>
                    </Col>
                    <Col xs={12} sm={12} md={6} className="padding-top-btm-2e text-center">
                        <div className="fontSizeBig">
                            <Typing speed={100}>
                                <span>
                                    LMS 아이디로
                                    <br/>지금 시작하세요!
                                    <br/><span style={{color:'#72CDFC'}}>CALMS</span>
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