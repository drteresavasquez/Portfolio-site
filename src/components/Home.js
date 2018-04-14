import React, {Component} from 'react';
import './home.css'
import LGLogo from '../images/final-logo.png';



let HomePage = (props) => {
    return(
        <div className="home-body container d-flex justify-content-center mt-5 align-items-center">
            <div className="d-flex flex-column align-items-center">
                <p className="pr-3">Welcome</p>
                <p className="pr-5">to</p>
                <p className="pr-3">the</p>
                <p className="pl-5">Portfolio</p>
                <p className="pl-4">of</p>
            </div>
            <div className="d-flex justify-content-center">
                <img src={props.biglogo} className="img-fluid " alt="Responsive image" />
            </div>
        </div>
    )
}



class Home extends Component {
    render() {
        return(
            <div className="mt-5 pt-5">
                <HomePage biglogo={LGLogo} />
            </div>
        )
    }
}

export default Home;