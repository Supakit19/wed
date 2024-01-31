import NavBar from './NavBar';
import Footer from './Footer';
import { useEffect, useState } from 'react'
import config from '../config'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import "./../App.css"




function Home() {
  
const Navigate = useNavigate();
const freefire= () => {
  Navigate("/freefire");
}

  return (
    <>
       <NavBar/>
       <div className="bg-white ">
            <div className="bg-stone-100 h-full mx-auto max-w-2xl px-4 sm:px-6 sm:py-10 lg:max-w-7xl lg:px-8">      
                {/* สไลค์โชว์ */}
                    <div class="slideshow-container relative ml-20">
                        <div class="slideshow-images">
                          <img src="https://cdn.discordapp.com/attachments/1195436273758912572/1200848556471353474/desktop-wallpaper-valorant-patch-4-contains-new-agent-neon-maps-and-weapons-game-news-24-valorant-neons.jpg?ex=65c7ac5e&is=65b5375e&hm=fd69bc7ed0f902d7009947eacdf81bb7a0ff16f1b4341424ceb5104210fe4b63&" class="slide"/>
                          <img src="https://cdn.discordapp.com/attachments/1195436273758912572/1200848563048042587/desktop-wallpaper-valorant-patch-4-contains-new-agent-neon-maps-and-weapons-game-news-24-valorant-neons1.jpg?ex=65c7ac60&is=65b53760&hm=4e5598cebb8965ed2e3ba1541bc54c574b1dd538a66289ab41e9de4513c308fb&" class="slide"/>
                          <img src="https://cdn.discordapp.com/attachments/1195436273758912572/1200848563421315172/desktop-wallpaper-valorant-patch-4-contains-new-agent-neon-maps-and-weapons-game-news-24-valorant-neons2.jpg?ex=65c7ac60&is=65b53760&hm=8341fb8c5365f2fb8e412a2582ecf39aa5d7dcedfe9213681a0c07dc4d641749&" class="slide"/>
                          <img src="https://cdn.discordapp.com/attachments/1195436273758912572/1200830884203470899/game1.jpg?ex=65c79be9&is=65b526e9&hm=9f8535c22e5ae4084e72019b5724a9c91b1149ee378d3cb49712b83647132ffd&" class="slide"/>
                        </div>
                      </div>
                {/* สไลค์โชว์ */}
                
                    <div className="container rounded-6 shadow-40 mt-10 bg-white border-radius-10 p-8 shadow-xl rounded-lg" data-aos="flip-down" data-aos-anchor="#example-anchor" data-aos-offset="500" data-aos-duration="1500">
                      <h2 className="card-title text-2xl font-bold mb-4">
                          <i className="fa fa-shopping-bag" aria-hidden="true"></i> รายการสั่งซื้อ
                            <span className="text-sm text-gray-500">(ล่าสุด)</span>
                              </h2>
                            <hr />
                        <marquee direction="left">
                          <div className="flex space-x-5">
                              <div className="bg-white text-sm p-3 rounded mt-3">
                                <img className="rounded img-fluid"style={{ margin: '0 auto', height: '50px' }} /> 
                                      <div className="">
                                          <p className="text-xs">
                                            <span className="rounded-pill bg-success px-2">
                                              <i className="fa fa-check-circle" aria-hidden="true"></i>
                                              <div className='w-20 h-10'>
                                              <img src='https://cdn.discordapp.com/attachments/1195436273758912572/1200859267108970587/truemoneywallet-sendgift-hongbao-20220125-icon-1.webp?ex=65c7b658&is=65b54158&hm=510ca4e44904c99f4b4957cfd64cf2d0ffd9437599a07858210c0c1860dff693&'/>
                                              <img src='https://cdn.discordapp.com/attachments/1195436273758912572/1200867068522790952/AIf8zZTOkv3KFph0tX6R77XevfjC39MU_ONz-kDAd9Kas900-c-k-c0x00ffffff-no-rj.png?ex=65c7bd9c&is=65b5489c&hm=591b5e8ccd742b18ebc14414f822571fa68f2c5ff3cdf7efb2f2924e6000bca5&'/>
                                              </div>
                                            </span>
                                          </p>
                                        </div>
                                      </div>
                                      <></> 
                                  </div>
                                </marquee>
                              </div>
                    <div className='container rounded-6 shadow-40 mt-10 bg-white border-radius-10 h-auto shadow-xl rounded-lg '>
                        <br/>
                      <div className="card-title text-2xl font-bold ml-7 mb-4">
                        <i className="fa fa-cart-arrow-down"></i> Champen - Shop
                          <span className="text-sm text-gray-500">(ร้านค้า & รายการสินค้า)</span></div>
                          <hr />
                           <div className='grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 m-4'>
                            <div className=''>
                              <img onClick={freefire} className="rounded-lg hover:scale-110 hover:bg-indigo-500 duration-300"src='https://cdn.discordapp.com/attachments/1195436273758912572/1197806683662073918/ZbakjKnaLD-Z71cLtKIYTvYo0HKmfsogBOObgxv1QN5zDFXpUtleSDaFkA5HTtEkZFdTMgv9mQs900-c-k-c0x00ffffff-no-rj.png?ex=65c5d5e7&is=65b360e7&hm=3c30114570478bcafa2aa6e75ffd2033d3b5b752ec8534e594e6b86c40a1fa99&' style={{ margin: '50px', height: '200px' }}/>
                              {/* <h2 className="card-title text-2xl font-bold mb-4 text-center">
                                FreeFire
                              </h2> */}
                            </div>
                          <img className="rounded-lg hover:scale-110 hover:bg-indigo-500 duration-300"src='https://cdn.discordapp.com/attachments/1195436273758912572/1197806617916354630/icon.png?ex=65c5d5d7&is=65b360d7&hm=c66c514b38edd7e0fc64a6685569e824c3612f86edd0268df9349829ee817cde&' style={{ margin: '50px', height: '200px' }}/>
                          <img className="rounded-lg hover:scale-110 hover:bg-indigo-500 duration-300"src='https://cdn.discordapp.com/attachments/1195436273758912572/1197835251788021791/XgtuOsS.png?ex=65c5f082&is=65b37b82&hm=6353afa54b2423363cf9d86c107b722231d815956ed9d9c1e1d8d05dbcac2750&' style={{ margin: '50px', height: '200px' }}/>
                          <img className="rounded-lg hover:scale-110 hover:bg-indigo-500 duration-300"src='https://cdn.discordapp.com/attachments/1195436273758912572/1197835251788021791/XgtuOsS.png?ex=65c5f082&is=65b37b82&hm=6353afa54b2423363cf9d86c107b722231d815956ed9d9c1e1d8d05dbcac2750&' style={{ margin: '50px', height: '200px' }}/>
                          <img className="rounded-lg hover:scale-110 hover:bg-indigo-500 duration-300"src='https://cdn.discordapp.com/attachments/1195436273758912572/1197835251788021791/XgtuOsS.png?ex=65c5f082&is=65b37b82&hm=6353afa54b2423363cf9d86c107b722231d815956ed9d9c1e1d8d05dbcac2750&' style={{ margin: '50px', height: '200px' }}/>
                          <img className="rounded-lg hover:scale-110 hover:bg-indigo-500 duration-300"src='https://cdn.discordapp.com/attachments/1195436273758912572/1197835251788021791/XgtuOsS.png?ex=65c5f082&is=65b37b82&hm=6353afa54b2423363cf9d86c107b722231d815956ed9d9c1e1d8d05dbcac2750&' style={{ margin: '50px', height: '200px' }}/>
                          </div>
                      </div>    
               
             </div>
          </div>  
          

                    
          <Footer/>
    </>
  )

}



    
export default Home;

