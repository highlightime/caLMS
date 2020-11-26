import './css/home.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function StartButton(){
    return(
        <div id='start-btn' className="container my-4">
                <div className="text-center">
                    <a href='/login'>
                        <button type="button" className="btn btn-primary btn-css">Start!!!</button>
                    </a>
                </div>
        </div>
    )
}

export default StartButton;