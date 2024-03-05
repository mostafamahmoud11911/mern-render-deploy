import axios from "axios";
import "./App.css";
import { useEffect } from "react";

function App() {

  const handleSubmit =async (e)=>{
    e.preventDefault();
    try {
      const {data} = await axios.post(`http://localhost:5500/api/auth/register`);
      console.log(data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(()=>{
    const getData =async () =>{
      try {
        const {data} = await axios.get('http://localhost:5500/api/auth');
        console.log(data)
      } catch (error) {
        console.log(error)
      }

    }
    getData()
  },[])
  return (
    <>
      <div className="App">
        <form onSubmit={handleSubmit}>
          <label htmlFor="">username</label>
          <input type="text" name="username"/>
          <label htmlFor="">email</label>
          <input type="text" name="email"/>
          <label htmlFor="">password</label>
          <input type="password" name="password"/>
          <button>Create</button>
        </form>
      </div>
    </>
  );
}

export default App;
