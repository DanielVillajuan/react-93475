import { Route, Routes } from 'react-router'
import { Home } from './Pages/Home'
import { ProductoDetalle } from './Componentes/ProductoDetalle'
import { Navbar } from './Componentes/Navbar'
import { Login } from './Pages/Login'
import { Register } from './Pages/Register'
import { Profile } from './Pages/Profile'
import { ProtectedRoute } from './Componentes/ProtectedRoute'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/profile' element={<ProtectedRoute Component={Profile} />} />
        <Route path='/:idProducto/detalle' element={<ProductoDetalle />} />
        <Route path="*" element={<h1>Not found 404</h1>} />
      </Routes>
    </>
  )
}

export default App
