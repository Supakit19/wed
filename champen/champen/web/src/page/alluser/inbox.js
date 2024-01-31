import Footer from "../Footer";
import NavBar from "../NavBar";
import { Typography } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'

function Inbox() {

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


const direction1 = () => {
  Swal.fire("ID: ควยยย PASS: *****");
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
                  <div class="relative overflow-x-auto shadow-md sm:rounded-lg mt-2">
                      <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                          <thead class="text-xs text-gray-700 uppercase dark:text-gray-400">
                              <tr>
                                  <th scope="col" class="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                                  ชื่อสินค้า
                                  </th>
                                  <th scope="col" class="px-6 py-3 bg-gray-50 dark:bg-gray-700 text-center">
                                  สินค้าที่ได้รับ
                                  </th>
                                  <th scope="col" class="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                                  ราคา
                                  </th>
                                  <th scope="col" class="px-5 py-2 bg-gray-50 dark:bg-gray-700">
                                  วันที่-เวลา
                                  </th>
                              </tr>
                          </thead>
                          <tbody>

                              <tr class="border-b border-gray-200 dark:border-gray-700">
                                  <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                                  ROV
                                  </th>
                                  <td class="px-6 py-4 text-center">
                                      <button
                                        onClick={direction1} className="mx-auto flex w-36 justify-center rounded-md bg-gray-500 px-1 py-1 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#e11d48]">
                                        ดูรายละเอียด
                                      </button>
                                  </td>
                                  <td class="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                                      ...
                                  </td>
                        
                              </tr>
                             
                          </tbody>
                      </table>
                  </div>
                    <div className="grid grid-cols-2 gap-x-2 gap-y-2 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-8"></div>
                  </div>
                </div>
            </div>
        </div>
      
        <Footer/>
      </>
    )
}

export default Inbox;