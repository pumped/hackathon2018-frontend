import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import QuizPage from './components/quiz';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
            <Route exact path='/' component={QuizPage} />
        </Switch>
      </BrowserRouter>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
