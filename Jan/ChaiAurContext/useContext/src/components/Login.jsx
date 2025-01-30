import { useContext, useState } from "react";
import {UserContext} from "./context/userContext";

const Login = ()=>{

    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const {setUser} = useContext(UserContext)

    const handleSubmit = (e)=>{
        e.preventDefault()
        setUser({name, password})
    }

    return(
        <>
        <div>
            <div>
                <p>Enter your name</p>
                <input
                value={name}
                type="text"
                onChange={(e)=>setName(e.target.value)}
                />
            </div>
            <div>
                <p>Enter your password</p>
                <input
                value={password}
                type="text"
                onChange={(e)=>setPassword(e.target.value)}
                />
            </div>
            <div>
            <button
            type="submit"
            onClick={(e)=>handleSubmit(e)}
            >Submit</button>
            </div>
        </div>
        </>
    )
}

export default Login