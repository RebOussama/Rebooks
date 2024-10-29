import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from 'react-router-dom';


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msgError, setmsgError] = useState("")
  const [valid, setvalid] = useState(true)
  const [Error, setError] = useState(false);
  
  const navigate = useNavigate();


  const handleSubmit = async (e) => {
    e.preventDefault();

     if(!password && !email){setmsgError( 'Email and Password field cannot be empty.')   
          setvalid(false)
     } else if (!email) {
      setmsgError( 'Email field cannot be empty.');
      setvalid(false)
  } 
   else if (!password) {
    setmsgError( 'Password field cannot be empty.');
    setvalid(false)
  }  else {
      setmsgError('')
      setvalid(true)
     
  }



    if(valid){try {
      const response = await axios.post("http://127.0.0.1:8000/api/login/", {
        email: email,
        password: password,
      });

      console.log(response.data);
      localStorage.setItem("token", response.data.access);
      alert("Login is Successfully!")
      navigate('/');


    } catch (error) {
      setError(true);
      console.log(Error)

    }
}
    
  };

  return (
    <div className="flex bg-[#FFFFFF]">
      <div className="left_section  basis-1/2 max-lg:hidden max-lg:basis-0">
        <img className="h-[100vh] w-full" src="./Login.jpg" alt="" />
      </div>
      <div className="right_section flex justify-center items-start   basis-1/2 max-lg:basis-full	 h-[100vh]">
        <div className=" w-[80%] max-w-lg  text-center ">
          <img className="w-[140px] mx-auto" src="/logo.png" alt="" />
          <div className=" w-[80%] mx-auto rounded-[20px] shadow-2xl ">
            <form
              className="flex flex-col rounded-[20px] bg-[#F6F6F6]"
              onSubmit={handleSubmit}
            >
              <h1 className="text-[#5B7483] text-2xl p-4 font-righteous">
                Login
              </h1>
              <input
                className={Error?"my-3 p-2 rounded-xl	  w-[80%] mx-auto bg-[#FFFFFF] placeholder:text-red-500 border border-red-500 " : "my-3 p-2 rounded-xl	  w-[80%] mx-auto bg-[#FFFFFF] "}
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                className={Error?"my-3 p-2 rounded-xl	  w-[80%] mx-auto bg-[#FFFFFF] placeholder:text-red-500 border border-red-500 ":"my-3 p-2 rounded-xl	  w-[80%] mx-auto bg-[#FFFFFF] "}
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                className="bg-[#1B1A32] text-white my-3 w-[80%] mx-auto rounded-2xl p-2"
                type="submit"
              >
                Login
              </button>
              {Error?<p className="text-red-500 text-sm ">{valid?"Your email or password is not correct.":msgError} </p>:""}
              <a className="my-2" href="">
                Forgot your password?
              </a>
              <Link to="/signup">
                <button className="bg-[#44B89D] text-white my-5 w-[60%] mx-auto rounded-2xl p-2">
                  Sign Up
                </button>
              </Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
