import NavBar from './NavBar';
import Footer from './Footer';
import { FaAddressBook } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Myprofile() {

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
  Navigate("/prof4");
}

const Userdata = () => {
  Navigate("/prof5");
}


  return (
    <>
       <NavBar/>
      

       <div className="bg-white  ">
                <div className='bg-orange-50  h-dvh mx-auto max-w-2xl px-4 sm:px-6 sm:py-10 lg:max-w-7xl lg:px-8'>
        
          <div className='rounded-lg bg-zinc-200 h-12'>
          
          </div>
              <div class="grid grid-cols-10 gap-4">
                <div className='rounded-lg col-span-2 bg-orange-100 h-64 mt-10'>
                   <div class="grid grid-cols-1 gap-1">
                    <div onClick={changpass} className='rounded-lg bg-slate-50 mr-2 ml-2 p-2 mt-5 hover:bg-blue-200 font-sans-serif font-bold'>ข้อมูลบัญชีผู้ใช้
                    </div>
                    <div onClick={Hisory} className='rounded-lg bg-slate-50 mr-2 ml-2 p-2 hover:bg-blue-200 font-sans-serif font-bold'>กล่องจดหมาย
                    </div>
                    <div onClick={Inbox} className='rounded-lg bg-slate-50 mr-2 ml-2 p-2 hover:bg-blue-200 font-sans-serif font-bold'>ประวัติการเติมเงิน
                    </div>
                    <div onClick={Singout} className='rounded-lg bg-slate-50 mr-2 ml-2 p-2 hover:bg-blue-200 font-Fira Sans font-bold'>เปลี่ยนรหัสผ่าน
                    </div>
                    <div onClick={Userdata} className='rounded-lg bg-slate-50 mr-2 ml-2 p-2 hover:bg-blue-100 font-Fira Sans font-bold'>ออกจากระบบ
                    </div>
                  </div>
                
          

                
                </div>
                <div className='rounded-lg col-span-8 bg-zinc-200 ml-5 h-96 mr-0 mt-10'>
                  <div className='font-mono text-2xl font-bold text-center'>Personal Information
                      <div className='rounded-lg grid grid-cols-4 gap-4 bg-zinc-200 mt-5'>
                        <div className='rounded-lg bg-slate-50 mr-2 ml-2 p-2  hover:bg-blue-200 font-sans-serif font-bold'>1</div>
                        <div className='rounded-lg bg-slate-50 mr-2 ml-2 p-2 hover:bg-blue-200 font-sans-serif font-bold'>2</div>
                        <div className='rounded-lg bg-slate-50 mr-2 ml-2 p-2 hover:bg-blue-200 font-sans-serif font-bold'>3</div>
                        <div className='rounded-lg bg-slate-50 mr-2 ml-2 p-2 hover:bg-blue-200 font-Fira Sans font-bold'>4</div>
                        <div className='rounded-lg bg-slate-50 mr-2 ml-2 p-2 hover:bg-blue-100 font-Fira Sans font-bold'>5</div> 
                        
                     </div>
                   </div>
                
                  
                  
               
                </div>
                
              </div>
          </div>
       </div>
       <Footer/>
    </>
    )
  }
export default Myprofile;
