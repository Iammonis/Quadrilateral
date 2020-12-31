import { Provider } from 'react-redux';
import './App.css';
import {  Router } from './Components/Route/Route';
import { SearchBar } from './Components/SearchBar/SearchBar';
import { store } from './Redux/store';

function App() {
  return (
    <Provider store= {store}>
    <div className="App">
      <h1>New Project</h1>
      
      <SearchBar/>
      <Router/>
    </div>
    </Provider>
  );
}

export default App;
