import react from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './routes/Home'
import Login from './routes/RPatientLogin'
import NewPractioner from './components/NewPractioner';
import PracLogin from './components/PracLogin';
import Register from './components/Register';
import PatientProfile from './components/PatientProfile';
import PracticeProfile from './components/PracticeProfile';
function App() {
  return (
    <>
      <Routes>
      <Route path='/' element={<Home/>}/>
      
      <Route path='/patient/signup' element={<Register/>}/>
      <Route path='/patient/login' element={<Login/>}/>
      <Route path='/patient/user' element={<PatientProfile/>}/>

      <Route path='/practice/signup' element={<NewPractioner/>}/>
      <Route path='/practice/login' element={<PracLogin/>}/>
      <Route path='/practice/user' element={<PracticeProfile />}/>
      </Routes>
    </>
  );
}

export default App;
