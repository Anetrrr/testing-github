import react from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './routes/Home'
import Login from './routes/RPatientLogin'
import NewPractioner from './components/NewPractioner';
import PracLogin from './components/PracLogin';
import Register from './components/Register';
import PatientProfile from './components/PatientProfile';
import PracticeProfile from './components/PracticeProfile';
import PatientorDoc from './components/PatientorDoc';
import SignupAsk from './components/SignupAsk';

function App() {
  return (
    <>
        <Routes>
          <Route path='/' element={<Home/>}/>
          
          <Route path='/patient/signup' element={<Register/>}/>
          <Route path='/patient/login' element={<Login/>}/>
          <Route path='/patient/user' element={<PatientProfile/>}/>
          <Route path='/login/ask' element={<PatientorDoc/>}/>
          <Route path='/signup/ask' element={<SignupAsk/>}/>
         



          <Route path='/practice/signup' element={<NewPractioner/>}/>
          <Route path='/practice/login' element={<PracLogin/>}/>
          <Route path='/practice/user' element={<PracticeProfile />}/>
        </Routes>
    </>
  );
}

export default App;
