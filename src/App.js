import logo from './logo.svg';
import './App.css';
import TeachingTool from './Components/TeachingTool';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes  } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route Component={TeachingTool} path='/'>
      </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;

