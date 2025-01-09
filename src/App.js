
import './App.scss';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import Main from './pages/Main';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='' Component={Main}/>
        </Routes>
      </BrowserRouter>
      <Outlet/>
    </div>
  );
}

export default App;
