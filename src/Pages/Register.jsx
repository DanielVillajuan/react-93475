import { useContext, useState } from "react"
import { AuthContext } from "../Context/AuthContext"
import { useNavigate } from "react-router";

export const Register = () => {
    const { register } = useContext(AuthContext);
    const navigate = useNavigate()
    const [state,setState] = useState({ email: "", password: "" , passwordValidated: "" })

    const registerUser = () => {
        if(state.password !== state.passwordValidated){
            console.log("error los campos no son iguales")
        }else {
            register(state.email, state.password)
            navigate("/login")
        }
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
            <input onChange={hadleChange} type="password" name="passwordValidated" placeholder="password again" />
            <button onClick={registerUser}>Registrar</button>
        </div>
    )
}