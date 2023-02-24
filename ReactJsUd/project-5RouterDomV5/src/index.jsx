import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import './index.css';
import { Abc } from './templates/Abc';
import { App } from './templates/App';
import { Menu } from './components/Menu/index';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Menu />
      <Switch>
          <Route path="/" component={App} exact />
          <Route path="/abc/:slug?/:id?" component={Abc} exact />
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
