import React, {Component} from 'react';
import './home.css'
import LGLogo from '../images/final-logo.png';



let HomePage = (props) => {
    return(
        <div className="home-body container">
            <div className="d-flex justify-content-center">
                <img src={props.biglogo} className="img-fluid " alt="Responsive image" />
            </div>
        </div>
    )
}



class Home extends Component {
    render() {
        return(
            <HomePage biglogo={LGLogo} />
        )
    }
}

export default Home;