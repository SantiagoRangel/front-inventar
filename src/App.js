import './App.css';
import Main from './components/Main.js';
import Coherence from './components/Coherence.js';
import Wordcloud from './components/Wordcloud.js';
import LDA from './components/LDA.js';
import NER from './components/NER';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Comparar from './components/Comparar';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path='/' component={Main}>
          </Route>
          <Route path='/coherence' component={Coherence}>
          </Route>
          <Route path='/wordcloud' component={Wordcloud}>
          </Route>
          <Route path='/lda' component={LDA}>
          </Route>
          <Route path='/comparar' component={Comparar}>
          </Route>
        </Switch>

      </div>

    </Router>

  );
}

export default App;
