import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './store/configureStore'
import Page from './components/containers/Page';
import Total from './components/containers/Total';
import Rules from './components/presentationals/Rules';
import Menu from './components/presentationals/Menu';
import Win from './components/presentationals/Win';
import registerServiceWorker from './registerServiceWorker';
import { Route, Router, BrowserRouter} from 'react-router-dom';
import history from './history'

class App extends Component {
  render() {
    return (
      <div className="app">
      <Router history={history}>
      <div>
      <Route exact= {true} path="/" component={Menu}/>
      <Route path="/game" component={Page}/>
      <Route path="/rules" component={Rules}/> 
      <Route path="/total" component={Total}/> 
      <Route path="/win" component={Win}/>     
      </div>   
      </Router>  
         
      </div>
    )
  }
}

ReactDOM.render(
  <Provider store = { store }>
    <BrowserRouter >
      <App />    
    </BrowserRouter>   
  </Provider>,
  document.getElementById('app')
)
registerServiceWorker()