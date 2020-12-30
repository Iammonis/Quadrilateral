import { Provider } from 'react-redux';
import './App.css';
import {  Router } from './Component/Route/Route';
import { store } from './Redux/store';

function App() {
  return (
    <Provider store= {store}>
    <div className="App">
      <h1>New Project</h1>
      <Router/>
    </div>
    </Provider>
  );
}

export default App;
