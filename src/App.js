import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddSubscribers from './components/AddSubscribers';
import ViewSubscribers from './components/ViewSubscribers';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/'element={<AddSubscribers/>}/>
        <Route path='/add'element={<AddSubscribers/>}/>
        <Route path='/view'element={<ViewSubscribers/>}/>
      </Routes>
      </BrowserRouter>


    </div>
  );
}

export default App;
