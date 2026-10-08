import { useContext } from "react"
import { Link, useLocation } from "react-router"
import { AuthContext } from "../Context/AuthContext"

export const Navbar = () => {
    const { user, logout } = useContext(AuthContext);
    const { pathname } = useLocation()

    return <div>
        {!user && (
            <>
                {pathname === "/register" && <Link to="/login">Iniciar sesion</Link>}
                {pathname === "/login" && <Link to="/register">Registrarse</Link>}
            </>
        )}
        {user && (
            <>
                {pathname !== "/profile" &&<Link to="/profile">Mi perfil</Link>}
                <button onClick={logout}>Cerrar sesion</button>
            </>
        )}
        <hr />
    </div>
}

// Si logueados -> Mi perfil y Cerrar Sesion
// No log -> Iniciar sesion y Registrarse