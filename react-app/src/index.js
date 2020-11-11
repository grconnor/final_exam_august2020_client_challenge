import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Workshops from './components/WorkshopsCourseCard'
import Testing from './components/TestingCourseCard'
import Vue from './components/VueCourseCard'
import Productivity from './components/ProductivityCourseCard'
import NodeReact from './components/NodeReactCourseCard'

const App = () => {
  return (
    <Switch>
      <Route exact path="/main" components={Main}></Route>
      <Route exact path="/workshops" components={Workshops}></Route>
      <Route exact path="/testing" components={Testing}></Route>
      <Route exact path="/vue" components={Vue}></Route>
      <Route exact path="/productivity" components={Productivity}></Route>
      <Route exact path="/node-react" components={NodeReact}></Route>
    </Switch>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
