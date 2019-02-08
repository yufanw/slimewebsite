import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navbar from './components/Navbar'
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import 'gestalt/dist/gestalt.css'; 
import Footer from './components/Footer';
import Commands from './components/Commands';
import GettingStarted from './components/GettingStarted';
import Expedition from './components/Expedition';
import Forge from './components/Forge';

const Root = () => (
    <Router>
        <React.Fragment>
            <Navbar />
            <Switch>
                <Route component={App} path = {process.env.PUBLIC_URL + '/'} />
                <Route component={Commands} path ='/commands' />
                <Route component={GettingStarted} path ='/gettingstarted' />
                <Route component={Expedition} path ='/expedition' />
                <Route component={Forge} path ='/forge' />
            </Switch>
            <Footer />
        </React.Fragment>
        
    </Router>
)



ReactDOM.render(<Root />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
