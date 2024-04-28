import React, { useEffect, useState } from 'react'





function Github() {
    const [data, setdata] = useState([]);
    useEffect(()=>{
        fetch('https://api.github.com/users/deepanshuhyb').then(res => res.json()).then(data => setdata(data))
    })
  return (
    <div>Github followers: {data.followers}</div>
  )
}

export default Github