import { useContext } from "react"
import { Navigate } from "react-router"
import { AuthContext } from "../Context/AuthContext"

export const ProtectedRoute = ({ Component }) => {
    const { user, loading } = useContext(AuthContext)

    if(loading) return <h2>Cargando autenticacion...</h2>

    if(!user) {
        return <Navigate to="/login" replace />
    }

    return <Component />
}