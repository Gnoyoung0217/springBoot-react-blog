import React, { useEffect, useState } from 'react'
import axios from 'axios'
import '../../../css/common.css'
import { useNavigate } from 'react-router-dom';

export default function LandingPage() {
  const navigate = useNavigate();

  const [data, setData] = useState();
  useEffect(() => {
    axios.get('/api/hello')
    .then(resp => setData(resp.data))
  }, [])

  const onClickHandler = () => {
    axios.get('/api/users/logout')
    .then(resp => {
      if(resp.data.success) {
        navigate("/login")
      } else {
        alert('로그아웃에 실패했습니다.');
      }
    })
  }

  return (
    <div className="cmm_div">
        <h2>시작 페이지</h2>
        <p>{data}</p>
        <button onClick={onClickHandler}>로그아웃</button>
    </div>
  )
}
