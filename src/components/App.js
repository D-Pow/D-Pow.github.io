import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from 'components/Home';
import About from 'components/About';
import Header from 'components/Header';
import Footer from 'components/Footer';

const routes = [
    {
        path: '/',
        component: Home,
        name: 'Home',
        exact: true
    },
    {
        path: '/about',
        component: About,
        name: 'About'
    }
];

function Routes(props) {
    const renderedRoutes = routes.map(routeAria => (
        <Route key={routeAria.path} {...routeAria} />
    ));
    return (
        <Router basename={props.basedir}>
            <React.Fragment>
                <Header basedir={props.basedir} navRoutes={routes} />
                <div className={'justify-content-center flex-grow-1'}>
                    {renderedRoutes}
                </div>
                <Footer />
            </React.Fragment>
        </Router>
    );
}

class App extends React.Component {
    render() {
        return (
            <div className="App text-center h-100 d-flex flex-column flex-grow-1">
                <Routes />
            </div>
        );
    }
}

export default App;
