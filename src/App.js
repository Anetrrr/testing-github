import react from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './routes/Home'
import Signup from './routes/Signup';
function App() {
  return (
    <>
      <Routes>
      <Route path='/' element={<Home/>}/>
      
      <Route path='/signup' element={<Signup/>}/>
      </Routes>
    </>
  );
}

export default App;
