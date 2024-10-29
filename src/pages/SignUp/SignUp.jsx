import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from 'react-router-dom';


const SignUp = () => {
  const [first_name, setfirst_name] = useState("");
  const [last_name, setlast_name] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm_password, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const [msgError, setmsgError] = useState("")
  const [valid, setvalid] = useState(true)
  const [msgErrorr, setmsgErrorr] = useState("")



  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!first_name) {
      setmsgError( 'First Name field cannot be empty.');
      setvalid(false)
    } else if (!last_name) {
      setmsgError( 'Last Name field cannot be empty.');
      setvalid(false)
    }else if (!email) {
      setmsgError( 'Email field cannot be empty.');
      setvalid(false)
  }  else if (!/\S+@\S+\.\S+/.test(email)) {
    setmsgError('Please enter a valid email address.')
    setvalid(false)
}else if (!password) {
  setmsgError( 'Password field cannot be empty.');
  setvalid(false)
} else if (password.length < 8) {
  setmsgError('Password must be at least 8 characters long.');
  setvalid(false)
} else if (password !== confirm_password) {
      setmsgError("Passwords do not match");
      setvalid(false)
    } 
 
    
    else  {
      setmsgError('')
      setvalid(true)
     
  }

    if(valid){try {
      const response = await axios.post("http://127.0.0.1:8000/api/register/", {
        first_name: first_name,
        last_name: last_name,
        email: email,
        password: password,
      });

      console.log(response.data);
      localStorage.setItem("token", response.data.access_token);
      alert("User created successfully.")
        navigate('/');
   
    } catch (error) {
      console.error(error);
      setmsgErrorr("This email has already been used")
    }}
  };

  return (
    <div className="flex bg-[#FFFFFF]">
      <div className="left_section flex justify-center items-start   basis-1/2 max-lg:basis-full	 h-[100vh]">
        <div className=" w-[80%] max-w-lg  text-center ">
          <img className="w-[140px] mx-auto" src="/logo.png" alt="" />
          <div className=" w-[80%] mx-auto rounded-[20px] shadow-2xl ">
            <form
              className="flex flex-col rounded-[20px] bg-[#F6F6F6]"
              onSubmit={handleSubmit}
            >
              <h1 className="text-[#5B7483] text-2xl p-3 font-righteous">
                Sign Up
              </h1>
              <input
                className="my-3 p-2 rounded-xl	  w-[80%] mx-auto bg-[#FFFFFF] "
                type="text"
                placeholder="First Name"
                value={first_name}
                onChange={(e) => setfirst_name(e.target.value)}
              />
              <input
                className="my-3 p-2 rounded-xl	  w-[80%] mx-auto bg-[#FFFFFF] "
                type="text"
                placeholder="Last Name"
                value={last_name}
                onChange={(e) => setlast_name(e.target.value)}
              />
              <input
                className="my-3 p-2 rounded-xl	  w-[80%] mx-auto bg-[#FFFFFF] "
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                className="my-3 p-2 rounded-xl	  w-[80%] mx-auto bg-[#FFFFFF] "
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <input
                className="my-3 p-2 rounded-xl	  w-[80%] mx-auto bg-[#FFFFFF] "
                type="password"
                placeholder="Confirm Password"
                value={confirm_password}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <button
                className="bg-[#1B1A32] text-white my-3 w-[80%] mx-auto rounded-2xl p-2"
                type="submit"
              >
                Sign Up
              </button>
              {valid?(<p className="text-red-500 text-sm">{msgErrorr}</p>):(<p className="text-red-500 text-sm">{msgError}</p>)}
              <p className="my-2">
                Have an Account{" "}
                <Link className="text-[#44B89D] font-bold	" to="/login">
                  Login Here
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
      <div className="right_section  basis-1/2 max-lg:hidden max-lg:basis-0">
        <img className="h-[100vh] w-full" src="./SignUp.jpg" alt="" />
      </div>
    </div>
  );
};

export default SignUp;
