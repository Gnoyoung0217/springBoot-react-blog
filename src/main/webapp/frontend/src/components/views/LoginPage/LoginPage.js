import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import '../../../css/common.css'
import { loginUser } from '../../../_actions/user_action';
import { useNavigate } from 'react-router-dom';


export default function LoginPage(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [Email, setEmail] = useState("")
  const [Password, setPassword] = useState("")

  const onEmailHandler = (e) => {
    setEmail(e.currentTarget.value)
  }

  const onPasswordHandler = (e) => {
    setPassword(e.currentTarget.value)
  }

  const onSubmitHandler = (e) => {
    e.preventDefault();

    let body = {
      email: Email,
      password: Password
    };

    dispatch(loginUser(body))
    .then(resp => {
      console.log(resp);
      if(resp.payload.loginSuccess) {
        navigate("/")
      } else {
        alert('Error')
      }
    })

  }

  return (
    <div className="cmm_div">
      <form onSubmit={onSubmitHandler}>
        <label>Email</label>
        <input type="email" value={Email} onChange={onEmailHandler} />
        <label>Password</label>
        <input type="password" value={Password} onChange={onPasswordHandler} />
        <br />
        <button>Login</button>
      </form>
    </div>
  )
}