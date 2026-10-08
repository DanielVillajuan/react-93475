import { useContext } from "react"
import { AuthContext } from "../Context/AuthContext"

export const Profile = () => {
    const { user } = useContext(AuthContext) 
    return <h1>Saludos {user.email}</h1>
}