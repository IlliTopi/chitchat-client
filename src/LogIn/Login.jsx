import {useState} from 'react'
import "./login.css"

const LoginPage = () => {
    const [mode, setMode] = useState("login")
    const changeMode = () => {
        if(mode == "login") {
            setMode("register")
        }
        else {
            setMode("login")
        }
    }

  return (
    <div className='page-login'>
        <h1>ChitChat</h1>
        <div className="login-island">
            {mode == "login" && <Loginform changeMode={changeMode}/>}
            {mode == "register" && <Registerform changeMode={changeMode} />}
        </div>
    </div>
  )
}

const Loginform = ({changeMode}) => {
    return(
    <>
        <div className="login-input-wrapper">
            <label>Email</label>
            <input type="text" />
        </div>
        <div className="login-input-wrapper">
            <label>Password</label>
            <input type="password" />
        </div>
        <a onClick={changeMode}>Create account</a>
        <button className="login-button"> Log In </button>
    </>)
}

const Registerform = ({changeMode}) => {
    return(<>
        <div className="login-input-wrapper">
            <label>Email</label>
            <input type="text" />
        </div>
        <div className="login-input-wrapper">
            <label>Password</label>
            <input type="password" />
        </div>
        <div className="login-input-wrapper">
            <label>Password second time</label>
            <input type="password" />
        </div>
        <a onClick={changeMode}>Already have an account?</a>
        <button className="register-button"> Create </button>
    </>)
}


export default LoginPage