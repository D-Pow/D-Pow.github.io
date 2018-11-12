import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'styles/App.css';
import Home from 'components/Home';
import About from 'components/About';
import Footer from 'components/Footer';

const ENV_ROUTES = {
  production: '/build',
  development: '/'
}

function Routes(props) {
  return (
    <Router basename={props.basedir}>
      <div>
        <Route exact path='/' component={Home} />
        <Route path='/about' component={About} />
      </div>
    </Router>
  );
}

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Routes basedir={ENV_ROUTES[process.env.NODE_ENV]} />
        <Footer />
      </div>
    );
  }
}

export default App;
