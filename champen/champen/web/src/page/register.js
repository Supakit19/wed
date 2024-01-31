import { useState } from 'react';
import Swal from 'sweetalert2';
import config from '../config';
import axios from 'axios';
import NavBar from './NavBar';
import Footer from './Footer';
import { useNavigate } from "react-router-dom";


function Register() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const Navigate = useNavigate();
    
    const signin = async(e) => {
      e.preventDefault()
      if(username !== "" && password !== "") {
        try {
          const payload = {
            usr: username,
            pwd: password,
          }
          const res = await axios.post(config.apipath + '/api/user/login', payload);
          if (res.data.token !== undefined) {
            const token = res.data.token.access_token;
            localStorage.setItem("champen_token", token);
            Swal.fire({
              title: "Login",
              text: "เข้าสู่ระบบสำเร็จ",
              icon: "success",
              timer: "1000",  
              heightAuto: false,
            });
          } else {
            Swal.fire({
              title: "Login fail",
              text: res.data.message,
              icon: "info",
              timer: "2000",
              heightAuto: false,
              
            });
          }


        } catch (e) {
          Swal.fire({
            title: "error",
            text: e,
            icon: "error",
            timer: "2000",
            heightAuto: false,
            
          });
        }

      } else {
        Swal.fire({
          title: "กรุณากรอก ชื่อผู้ให้ หรือ รหัสผ่าน",
          icon: "error",
          heightAuto: false,
          timer: "2000",
        });
      }
    };

    const Login = () => {
      Navigate("/");
    }

    return (
      <>
        <NavBar/>
        <div className="bg-white h-4/5 ">
            <div className="bg-stone-100 h-full mx-auto max-w-2xl px-4 sm:px-6 sm:py-10 lg:max-w-7xl lg:px-8" >
              
        <div className="container rounded-6 shadow-40 bg-white border-radius-10 shadow-xl rounded-lg flex h-full flex-1 flex-col px-6 py-12 lg:px-8  flex h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 ">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          
            <h2 className="mt-3.5 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Create and account
            </h2>
          </div>
  
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" action="#" method="POST">
              <div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                  Username
                </label>
                <div className="mt-2">
                  <input
                    placeholder="Username"
                    onChange={(e) => setUsername(e.target.value)}
                    required
                    className=" block w-full rounded-md border border-violet-700 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 "
                  />
                </div>
              </div>
  
              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                    Password
                  </label>
                </div>

                <div className="mt-2">
                  <input
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
                <div className="flex items-center justify-between mt-2">
                  <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  Confirm password
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    placeholder="Confirm password"
                    onChange={(e) => setPassword(e.target.value)}
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 "
                  />
                </div>
              </div>
  
              <div>
                <button
                  onClick={signin}
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Create an account
                </button>
              </div>
            </form>
  
            <p className="mt-10 text-center text-sm text-gray-500">
            Already have an account?{' '}
              <a  onClick={Login} className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
              <button>Login here</button>
              </a>
            </p>
           
          </div>
        </div>
       </div>
      </div>
        <Footer/>
      </>
    )
}

export default Register;