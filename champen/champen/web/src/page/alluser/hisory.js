import Footer from "../Footer";
import NavBar from "../NavBar";
import { Typography } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";


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

    return (
      <>
        <NavBar/>
        <div className="bg-white h-4/5 overflow-y-scroll ">
            <div className="bg-stone-100 mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
              <div className="bg-gray-50 dark:bg-gray-700 h-10 w-24 rounded-lg ml-2">
              <h2 className="text-2xl font-bold tracking-tight text-white ml-2">User</h2>
              </div>
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
                                  ชำระผ่าน
                                  </th>
                                  <th scope="col" class="px-6 py-3 bg-gray-50 dark:bg-gray-700">
                                  จำนวน
                                  </th>
                                  <th scope="col" class="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                                  ค่าธรรมเนียม
                                  </th>
                                  <th scope="col" class="px-5 py-2 bg-gray-50 dark:bg-gray-700">
                                  สถานะ
                                  </th>
                                  <th scope="col" class="px-5 py-2 bg-gray-50 dark:bg-gray-800">
                                  เวลา
                                  </th>
                              </tr>
                          </thead>
                          <tbody>

                              <tr class="border-b border-gray-200 dark:border-gray-700">
                                  <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                                  truemoneywallet
                                  </th>
                                  <td class="px-6 py-4">
                                    500.09
                                  </td>
                                  <td class="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                                      0.00%
                                  </td>
                                  <td class="px-6 py-4">
                                  <button type="button" class="px-4 py-2 rounded-full bg-red-500 text-white font-bold hover:bg-red-600" disabled>
                                  <svg aria-hidden="true" class="inline w-4 h-4 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                                      <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                                  </svg>     
                                  &nbsp;กำลังทรายการ...
                                  </button>
                                  </td>
                                  <td class="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                                    12.32
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