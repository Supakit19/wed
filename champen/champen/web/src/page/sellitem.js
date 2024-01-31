import NavBar from './NavBar';
import Footer from './Footer';
import { useEffect, useState } from 'react'
import config from '../config'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import "./../App.css"
import Swal from 'sweetalert2'




function Sellitem() {

    const description = () => {
        Swal.fire({
            title: "รายละเอียด",
            text: "✔️ ไอดีไทย 100% ✔️ หากเข้าไม่ได้กรุณาติดต่อแอดมินภายใน 3 ชม ✔️ เปลี่ยนข้อมูลได้หมด ✔️ WED www.ควยครับ.com ❌ ไม่รับประกันหากลูกค้าไม่มีคลิปก่อนสั่งซื้อ ❌",
            imageUrl: "https://cdn.discordapp.com/attachments/1195436273758912572/1201605002368655601/566000005161301.png?ex=65ca6cdd&is=65b7f7dd&hm=33980d510ffece23cd1b6e9424928fcf7fbd39713a29eeda97685c2707d7a66b&",
            imageWidth: 400,
            imageHeight: 200,
            imageAlt: "Custom image",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "ยืนยัน [99.99]!"
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire({
                title: "ชำระเงินเสร็จสิ้น",
                text: "ID จะส่งไปยังกล่องจดหมายของผู้ใช้ กรุณาตรวจสอบกล่องจดหมาย",
                icon: "success"
              });
            }
          });
    }


    const Navigate = useNavigate();
    const backhome= () => {
    Navigate("/wedhome");
    }



    return (
        <>
           <NavBar/>
           <div className="bg-white ">
                <div className="bg-stone-100 h-auto mx-auto max-w-2xl px-4 sm:px-6 sm:py-10 lg:max-w-7xl lg:px-8">      
                    <div className='container rounded-6 shadow-40 mt-2 bg-white border-radius-10 h-auto shadow-xl rounded-lg'>
                          <br/>
                        <button onClick={backhome} type="button" class="mb-4 hover:scale-110 hover:bg-indigo-500 duration-300 text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 ml-5">BACK</button>
                            <br/>
                               <hr />
                              <div className='grid grid-cols-4 gap-2 m-auto'>
                                 <div>
                                        <div className="shadow-xl rounded-lg flex flex-col items-center p-10 bg-gray-200 size-64 my-5 mx-5">
                                        <img className='size-32' src='https://cdn.discordapp.com/attachments/1195436273758912572/1197806617916354630/icon.png?ex=65c5d5d7&is=65b360d7&hm=c66c514b38edd7e0fc64a6685569e824c3612f86edd0268df9349829ee817cde&'/>
                                        <h1 className="text-xl font-bold text-red text-center my-2">black clover M</h1>
                                        <button onClick={description} className="px-4 py-2 rounded-full bg-red-500 text-white font-bold hover:bg-red-600">สั่งซื้อ (99.99)</button>
                                            {/* <p className="text-red-300 text-center mt-4">
                                                กรุณาเข้าสู่ระบบก่อนทำรายการทุกครั้ง
                                            </p> */}
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



    
export default Sellitem;

