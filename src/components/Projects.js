import React, {Component} from 'react';
import logo from '../images/parents.jpeg';
import './projects.css';
import Logo from '../images/ARS LOGO.svg';
import wirePic from '../images/wireframing.JPG';
import personaPic from '../images/persona.png';




let ProjectsPage = (props) => {
    return(
        <div className="d-flex flex-column mb-5 mt-5">
            <h1 className="mb-5 text-center">Projects</h1>
        
            <div className="card" style={{width: 35 + 'rem', hieght: 30 + 'rem'}}>
                <img className="card-img-top" src={logo} alt="Card image cap" />
                <div className="card-body">
                    <h3 className="card-title text-dark">Parenting Conundrum</h3>
                    <p className="card-text text-dark">parenting Conundrum is my first large scale indivdual project. It was developed for parents with special needs children to able to share and recieve advice from others in the same situation.</p>
                    <div className="d-flex">
                        <div>
                            <h5 className="text-center">Wireframing</h5>
                            <img src={props.wirepic} alt="" class="img-thumbnail" style={{width: 10 + 'rem', height: 10 + 'rem'}}/>
                        </div>
                        <div>
                            <h5 className="text-center">Persona</h5>
                            <img src={props.personapic} alt="" class="img-thumbnail" style={{width: 10 + 'rem', height: 10 + 'rem'}}/>
                        </div>
                        <div>
                            <h5 className="text-center">Challenge Statement</h5>
                            <img src={props.personapic} alt="" class="img-thumbnail" style={{width: 10 + 'rem', height: 10 + 'rem'}}/>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center align-items-center">
                        <img src={props.logo} width="100" height="70"  alt="" />
                        <a href="https://github.com/ArthurRankin/CapStone-ParConun" className="btn repo-btn">For Github Repo</a>
                    </div>
                </div>
            </div>
        </div>
    )
}



class Projects extends Component {
    render() {
        return(
            <ProjectsPage 
            logo={Logo}
            wirepic={wirePic}
            personapic={personaPic} />
        )
    }
}

export default Projects;