import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddSubscribers from './components/AddSubscribers';
import ViewSubscribers from './components/ViewSubscribers';
import Home from './components/Home';
import SearchSubscribers from './components/SearchSubscribers';
import DeleteSubscribers from './components/DeleteSubscribers';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/'element={<Home/>}/>
        <Route path='/add'element={<AddSubscribers/>}/>
        <Route path='/view'element={<ViewSubscribers/>}/>
        <Route path='/search'element={<SearchSubscribers/>}/>
        <Route path='/delete'element={<DeleteSubscribers/>}/>
      </Routes>
      </BrowserRouter>


    </div>
  );
}

export default App;
