
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/HomePage'; //En home se hace la app, solo que antes te redirige al login y Register si hace falta
import Login from './pages/LoginPage';
import Register from './pages/SignupPage';

//npm run dev -> Iniciar projecto
//json-server --watch usersBD.json -> Iniciar conexion y login con json

//Nuevos:
//npm install react-router-dom @types/react-router-dom
//npm install -g json-server (json-server --watch documento json de usuarios), si no se indica puerto, esta en el 3000

        
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/register' element={<Register />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

