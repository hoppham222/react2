import logo from './logo.svg';
import './App.scss';
import Mycomponent from './Example/Mycomponent';
import Listtodo from './Todos/Listtodo';
import Nav from './Nav/Nav';
import Home from './Example/Home';
import ListUser from './Users/ListUser';
import DetailUser from './Users/DetailUser';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
// const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Nav/>
          <img src={logo} className="App-logo" alt="logo" />

          <Routes>
            <Route path='/' element={<Home/>} />
              
            <Route path='/todo' element={<Listtodo/>}/>
              
            <Route path='/about' element={<Mycomponent />} />
            
            <Route path='/user' element={<ListUser />} />
            
            <Route path='/user/:id' element={<DetailUser/>} />
              
          </Routes>
          
          
          {/* <Mycomponent /> */}
          {/* <Mycomponent></Mycomponent> */}
          {/* <Listtodo /> */}
          
          
        </header>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          />
        <ToastContainer />
        </div>
      </BrowserRouter>
  );
}

export default App;
