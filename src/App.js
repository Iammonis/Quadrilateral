import { Provider } from 'react-redux';
import './App.css';
import { Router } from './Components/Route/Route';
import { store } from './Redux/store';
// https://quadrilateral-naukri.herokuapp.com/posts?q=
function App() {
  return (
    <Provider store= {store}>
      <div className="App">
        <Router/>
      </div>
    </Provider>
  );
}

export default App;