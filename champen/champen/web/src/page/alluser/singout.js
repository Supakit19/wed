import Footer from "../Footer";
import NavBar from "../NavBar";
import { Typography } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";


function Singout() {

  const Navigate = useNavigate();
  const changpass = () => {
    Navigate("/prof1");
 }

 const Hisory = () => {
  Navigate("/prof2");
}

const Inbox = () => {
  Navigate("/prof3");
}

const Singout = () => {
  Navigate("/");
}

const Userdata = () => {
  Navigate("/prof5");
}


  const SettingAdmin = () => {
    Navigate('/SettingAdmin');
  }

    return (
      <>
        <NavBar/>
        <div className="bg-white h-4/5 overflow-y-scroll ">
            <div className="bg-stone-100 mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
              <h2 className="text-2xl font-bold tracking-tight text-gray-900">User</h2>
                <div className="grid grid-cols-2 gap-x-2 gap-y-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                  {/* กรอบUSER  สีสะท้อน shadow-sky-700 */}
                  <div className="shadow-2xl shadow-sky-700 sm:col-span-1 lg:col-span-1 xl:col-span-1 h-96 m-2 text-white  hover:bg-sky-50 focus:ring-4 focus:outline-none focus:ring-blue-100 font-medium rounded-lg text-sm px-10 py-5 text-center text-sky-900 dark:bg-sky-50 dark:hover:bg-sky-50 dark:focus:ring-sky-50 left-0">
                    
                    <div onClick={Userdata} className='rounded-lg bg-slate-500 mr-2 ml-2 p-2 mt-5 hover:bg-blue-300 font-sans-serif font-bold'>ข้อมูลบัญชีผู้ใช้
                    </div>
                    <div onClick={Inbox} className='rounded-lg bg-slate-500 mr-2 ml-2 p-2 mt-5 hover:bg-blue-300 font-sans-serif font-bold'>กล่องจดหมาย
                    </div>
                    <div onClick={Hisory} className='rounded-lg bg-slate-500 mr-2 ml-2 p-2 mt-5 hover:bg-blue-300 font-sans-serif font-bold'>ประวัติการเติมเงิน
                    </div>
                    <div onClick={changpass} className='rounded-lg bg-slate-500 mr-2 ml-2 p-2 mt-5 hover:bg-blue-300 font-Fira Sans font-bold'>เปลี่ยนรหัสผ่าน
                    </div>
                    <div onClick={Singout} className='rounded-lg bg-slate-500 mr-2 ml-2 p-2 mt-5 hover:bg-blue-300 font-Fira Sans font-bold'>ออกจากระบบ
                    </div>
                  </div>
                  <div className="shadow-2xl shadow-sky-700 sm:col-span-1 lg:col-span-2 xl:col-span-3 m-2 bg-sky-50 rounded-full hover:bg-sky-100 focus:ring-4 focus:outline-none focus:ring-blue-100 font-medium rounded-lg text-sm px-10 py-5 text-center text-sky-900 dark:bg-sky-50 dark:hover:bg-sky-50 dark:focus:ring-sky-50 left-0">
                    
                    <div className="grid grid-cols-2 gap-x-2 gap-y-2 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-8"></div>
                  </div>
                </div>

            </div>
        </div>
      
        <Footer/>
      </>
    )
}

export default Singout;