import { Provider } from 'react-redux';
import './App.css';
import { Login } from './Components/Login';
// import { Login } from './Components/Recruiter/Register/Login';
import { Register } from './Components/Recruiter/Register/Register';
import {  Router } from './Components/Route/Route';
import { UserPage } from './Components/UserPage/UserPage';
import { UserPostCard } from './Components/UserPage/UserPostCard';
import { store } from './Redux/store';

function App() {
  return (
    <Provider store= {store}>
    <div className="App">
      <h1>New Project</h1>
      
      {/* <SearchBar/> */}
      <Router/>
      {/* <Register/> */}
      {/* <Login/> */}
      {/* <Login/> */}
      {/* <UserPage/> */}
      {/* <UserPostCard/> */}
    </div>
    </Provider>
  );
}

export default App;