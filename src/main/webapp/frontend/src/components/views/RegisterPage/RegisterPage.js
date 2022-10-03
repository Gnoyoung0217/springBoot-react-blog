import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import '../../../css/common.css'
import { registerUser } from '../../../_actions/user_action';
import { useNavigate } from 'react-router-dom';

export default function RegisterPage(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [Email, setEmail] = useState("")
  const [Name, setName] = useState("")
  const [Password, setPassword] = useState("")
  const [ConfirmPassword, setConfirmPassword] = useState("")

  const onEmailHandler = (e) => {
    setEmail(e.currentTarget.value)
  }

  const onNameHandler = (e) => {
    setName(e.currentTarget.value)
  }

  const onPasswordHandler = (e) => {
    setPassword(e.currentTarget.value)
  }

  const onConfirmPasswordHandler = (e) => {
    setConfirmPassword(e.currentTarget.value)
  }

  const onSubmitHandler = (e) => {
    e.preventDefault();

    if(Password !== ConfirmPassword) {
      return alert('비밀번호와 비밀번호 확인은 같아야 합니다.');
    }
    let body = {
      email: Email,
      name: Name,
      password: Password,
      confirmPassword: ConfirmPassword
    }

    dispatch(registerUser(body))
    .then(resp => {
      if(resp.payload.register) {
          navigate("/login")
      } else {
          alert("Failed to SignUp")
      }
    })

  }

  return (
    <div className="cmm_div">
      <form onSubmit={onSubmitHandler}>
        <label>Email</label>
        <input type="email" value={Email} onChange={onEmailHandler} />

        <label>Name</label>
        <input type="text" value={Name} onChange={onNameHandler} />

        <label>Password</label>
        <input type="password" value={Password} onChange={onPasswordHandler} />

        <label>Confirm Password</label>
        <input type="password" value={ConfirmPassword} onChange={onConfirmPasswordHandler} />
        <br />
        <button type="submit">회원 가입</button>
      </form>
    </div>
  )
}