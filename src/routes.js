import { BrowserRouter, Routes, Route, Outlet, Navigate } from 'react-router-dom';
import NavBar from './components/NavBar';
import Services from './containers/ServiceStatus';

let NotImplemented = () => {
    return <h1>Esta pagina aún no esta lista</h1>
  }
  
  let UsuariosOutlet = () =>{
    return (
      <>
        <p>Hola desde usuarios</p>
        <Outlet />
      </>
    )
  }

const Router = () => {
    const isAuth = false;
    return (
      <>
        <BrowserRouter>
          <NavBar />
          <Routes>
              <Route path="/" element={<NotImplemented />}/>
              <Route path="/usuarios" element={ isAuth ? <Navigate to="/" /> : <UsuariosOutlet />} >
              <Route path="/registro" element={<NotImplemented />} />
              <Route path="/ingresar" element={<NotImplemented />} />
              <Route path="/servicios" element={<Services/>} />
            </Route>
          </Routes>
      </BrowserRouter>
      </>
    )
}

export default Router;