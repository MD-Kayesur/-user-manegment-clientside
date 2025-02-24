 
import { useEffect, useState } from 'react'
import './App.css'

function App() {

const [users,setUser]=useState([])

useEffect(()=>{
 fetch('http://localhost:5000/users')
 .then(res => res.json())
 .then(data =>  setUser(data))
},[])

console.log(users);
const handlerSubmit =(e)=>{
e.preventDefault()
const form = e.target
const name = form.name.value 
const email = form.email.value 
const password = form.password.value 

const user = { name,email,password}
console.log(user);

fetch('http://localhost:5000/users',{
  method:'POST',
  headers:{
    'content-type' :'application/json'
  },
  body:JSON.stringify(user)
})
.then(res => res.json())
.then (data=> {
  console.log('imside post responsed',data);
  const newusers = [...users,data]
  setUser(newusers)

  form.reset()
})


}
 
  return (
    <>
      

<form className=' '  onSubmit={handlerSubmit} action="">
 <input type="text" name="name"  placeholder='name' /> <br />
 <input type="text" name="email"  placeholder='email' /> <br />
 <input type="text" name="password"  placeholder='password' /> <br />
 <button  className='btn'>submit</button>


  

</form>


      <h1> User Manegment</h1>

      {
        users.map(user => <p key={user.id}> {user.name}</p>)
      }
       
    </>
  )
}

export default App
