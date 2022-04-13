
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import About from './Pages/About/About';
import Header from './Pages/Shared/Header/Header';
import Footer from './Pages/Shared/Footer/Footer';
import Login from './Pages/Login/Login';
import Register from './Pages/images/Register/Register';
import RequireAuth from './RequireAuth/RequireAuth';

function App() {
  return (
    <div className="App">
      {/* <Header></Header> */}
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        {/* <Route path='/about' element={
          <RequireAuth>
            <About></About>
          </RequireAuth>

        }></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route> */}
      </Routes>
      {/* <Footer></Footer> */}
    </div>
  );
}

export default App;
