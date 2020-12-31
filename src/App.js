import { Provider } from 'react-redux';
import './App.css';
import { HorizontalGif } from './Components/HomePage/HorizontalGif';
import { MiddleBox } from './Components/HomePage/MiddleBox';
import { RightBox1 } from './Components/HomePage/RightBox1';
import { VerticalGif } from './Components/HomePage/VerticalGif1';
import { VerticalGif2 } from './Components/HomePage/VerticalGif2';
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
      <RightBox1/>
      <VerticalGif2/>
      <VerticalGif/>
      <HorizontalGif/>
      <MiddleBox/>
    </div>
    </Provider>
  );
}

export default App;