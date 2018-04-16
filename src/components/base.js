import Rebase from 're-base';
import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyDXl1_FX5nc9RZCUP0VX54V5ZcJWPIzCe4",
    authDomain: "portfolio-blogs.firebaseapp.com",
    databaseURL: "https://portfolio-blogs.firebaseio.com"
}

const app = firebase.initializeApp(config)
const base = Rebase.createClass(app.database())

/* for my demo, be sure to put yours in place
apiKey: "AIzaSyA60-RA1ZHZRXrmmAH-gsp1h7OpRFYWugY",
authDomain: "d18-demo.firebaseapp.com",
databaseURL: "https://d18-demo.firebaseio.com"
*/

export default base;