import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";
import {login, logout} from "../state-features/slices/loginSlice";

const Login = function () {
    const a = useSelector(state => state.user.value.name)
    const dispatch = useDispatch()
    const [username, setUsername] = useState('')
    return (
        <>
            <h1>Login Page {a}</h1>
            <br/>
            <input onChange={(e) => {
                setUsername(e.target.value)
            }
            }/>
            <button onClick={() => dispatch(login( { name: username } ))}>Login</button>
            <button onClick={() => dispatch(logout())}>Logout</button>
        </>
    )
}

export default Login