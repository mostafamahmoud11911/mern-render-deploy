import axios from "axios";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [user, setUser] = useState({ username: "", email: "", password: "" });

  const getUser = ({ target }) => {
    setUser({ ...user, [target.name]: target.value });
  };



  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const {data} = await axios.post(`https://backend-yrn3.onrender.com/api/auth/register`, user);
      console.log(data)
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const getData = async () => {
      try {
        const {data} = await axios.get('https://backend-yrn3.onrender.com/api/auth');
        console.log(data)
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);
  return (
    <>
      <div className="App">
        <form onSubmit={handleSubmit}>
          <label htmlFor="">username</label>
          <input type="text" name="username" onChange={getUser} />
          <label htmlFor="">email</label>
          <input type="text" name="email" onChange={getUser} />
          <label htmlFor="">password</label>
          <input type="password" name="password" onChange={getUser} />
          <button>Create</button>
        </form>
      </div>
    </>
  );
}

export default App;
