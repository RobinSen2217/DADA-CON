import React,{useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Users({data}) {

const navigate=useNavigate(data)

  // useEffect(async() => {
  //   // This will only run on initial render
  //   const response = await axios.get('/api/users');
  //   const users = await response.json();
  //   console.log(data);
  //   setNotices(data);
  //   setLoading(false);
  // }, []);

    const redirect=()=>{
        axios.post('https://dadacon.onrender.com/auth/logout/',{username:users}, {headers: {
          'Authorization': 'Bearer '+ data
      }}).then((res)=>{
        console.log(data);
          console.log(res.status)
          if(res.status===204){
            navigate('/chat')
          }
        })
       }
       const [loading,setLoading]=useState(true)

  return (
    <div className='text-white py-8'>
      <h1 className='text-center text-3xl min-[470px]:text-5xl font-semibold font-Spy mb-5'>Contact with Other Agents</h1>
            {/* {loading && <Spinner/>} */}
      <div className="flex flex-col w-1/3 mx-auto ">
<div className="grid grid-cols-1 gap-y-1">
<button onclick={redirect} className=" text-2xl p-5 shadow-gray-900/90 rounded-lg shadow-xl bg-gray-800 hover:cursor-pointer hover:bg-gray-600 min-[470px]:text-4xl font-semibold text-white mb-1 text-left ">Title</button>


</div>
    </div>
    </div>
  )
}

export default Users
