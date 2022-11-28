import {Route, Routes} from 'react-router-dom'
import HomeView from './views/homeview';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import LoginView from './views/login';
import MakePayment from './views/MakePayment'
import NavBar from './components/NavBar';

function App() {
  console.log("hello")

  return (
    <>
    <NavBar/>
    <Routes>
      <Route path="/homeview" element={<HomeView/>}/>
      <Route path="/login" element={<LoginView/>}/>
      <Route path="/payment" element={<MakePayment/>}/>
    </Routes>
    </>
  );
}

export default App;
