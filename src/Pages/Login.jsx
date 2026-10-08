import { useContext, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import { useNavigate } from "react-router";

export const Login = () => {
    const navigate = useNavigate()
    const { login } = useContext(AuthContext);
    const [state,setState] = useState({ email: "", password: "" })

    const loginUser = async () => {
        try {
            await login(state.email, state.password)
        } catch (e) {
            console.log(e)
            return;
        }
        navigate("/profile")
    }

    const hadleChange = ({ target }) => {
        const { name, value } = target
        setState((prevState) => {
                return {
                ...prevState,
                [name]: value
            }
        })
    }

    return (
        <div>
            <input onChange={hadleChange} type="email" name="email" placeholder="username" />
            <input onChange={hadleChange} type="password" name="password" placeholder="password" />
            <button onClick={loginUser}>Iniciar sesión</button>
        </div>
    )
}