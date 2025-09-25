
import "./style.css"
import { FaAngleRight, FaBars, FaEllipsisV, FaHistory, FaMicrophone, FaPlus, FaPodcast, FaSearch, FaYoutube   } from "react-icons/fa";
import { IoIosHome, IoIosNotificationsOutline, IoMdMusicalNotes } from "react-icons/io";
import { CiHashtag, CiStopwatch } from "react-icons/ci";
import { MdDownload, MdOutlineOndemandVideo, MdOutlinePlaylistPlay, MdOutlineShoppingBag, MdOutlineSportsCricket, MdSubscriptions } from "react-icons/md";
import { GiAtSea } from "react-icons/gi";
import { AiOutlineLike } from "react-icons/ai";
import { PiFilmSlateLight } from "react-icons/pi";
import { CgMediaLive } from "react-icons/cg";
import { SiYoutubegaming } from "react-icons/si";
import { LuGraduationCap, LuNewspaper } from "react-icons/lu";





function Youtube() {
  return (
    <>
        <header className="w-full overflow-x:hidden">
                <nav className="bg-white  flex flex-wrap items-center justify-between  text-shadow-black p-4 sm:px-6 md:px-10  py-4 w-full fixed top-0 left-0 z-50  border-b border-gray-300">
                    <div className="flex flex-row items-center justify-between gap-4">
                        <FaBars className="text-2xl font-light" />
                        <div className="flex flex-row items-center">
                            <FaYoutube className="text-red-600 text-3xl cursor-pointer rounded-2xl" />
                            <span className="cursor-pointer text-2xl font-semibold ">YouTube</span>
                        </div>
                        <img src="/image/Logo (1).webp" alt="" />
                    </div>
                    <div className="flex flex-row items-center gap-3  ">
                        <div className="flex flex-row items-center gap-5 rounded-2xl border-2 border-slate-200 ">
                                <input type="text" placeholder="Search" className="rounded-l-2xl rounded-r-none border-2 border-slate-100 px-4" />
                                <FaSearch  className="pr-2 text-3xl rounded-2xl  "  />                        
                        </div>
                        <FaMicrophone className="text-4xl bg-slate-200 p-2 rounded-full m-1 cursor-pointer" />
                    
                    </div>
                    
                    <div className="flex flex-row items-center gap-5">
                        <div className="flex flex-row items-center gap-2 border px-4 py-1 rounded-3xl cursor-pointer">
                            <FaPlus />
                            <span>Create</span>
                        </div>
                         <IoIosNotificationsOutline className="text-3xl" />
                         <div className="rounded-full bg-green-700 text-white w-8 h-8 flex items-center justify-center cursor-pointer ">
                            <span>S</span>
                         </div>
                   </div>
                </nav>
        </header>

        {/*main section  */}
        <main className="w-full  bg-white flex flex-row items-start justify-between p-4 gap-6 ">
            <div className="fixed top-[100px] left-2 w-[18%] h-[calc(100vh-64px)] hidden lg:flex flex-col items-center justify-start gap-3  overflow-y-auto  ">
                <div className="rounded-xl hover:bg-gray-300 text-black w-full flex flex-row items-start justify-start cursor-pointer gap-3 mb-4 px-4 py-2">
                    <IoIosHome className="text-3xl flex items-center" />
                    <span className="text-2xl">Home</span>
                </div>
                <div className="rounded-xl hover:bg-gray-300 text-black w-full flex flex-row items-start justify-start cursor-pointer gap-3 mb-4 px-4 py-2">
                    <CiHashtag className="text-3xl flex items-center"/>
                    <span className="text-2xl">Shorts</span>
                </div>
                <div className="rounded-xl hover:bg-gray-300 text-black w-full flex flex-row items-start justify-start cursor-pointer gap-3 mb-4 px-4 py-2">
                    <MdSubscriptions className="text-2xl flex items-center" />
                    <span className="text-xl">Subscription</span>
                </div>
                <hr className="text-gray-400 w-full"/>
                <div className="flex flex-row items-center justify-start gap-3 p-2 w-full">
                    <span className="text-3xl flex items-start">You</span>
                    <FaAngleRight className="text-2xl text-center font-semibold" />
                </div>
                <div className="rounded-xl hover:bg-gray-300 text-black w-full flex flex-row items-start justify-start cursor-pointer gap-3 mb-4 px-4 py-2">
                    <FaHistory className="text-2xl flex items-center" />
                    <span className="text-2xl">History</span>
                </div>
                <div className="rounded-xl hover:bg-gray-300 text-black w-full flex flex-row items-start justify-start cursor-pointer gap-3 mb-4 px-4 py-2">
                    <MdOutlinePlaylistPlay className="text-3xl flex items-center" />
                    <span className="text-2xl">Playlist</span>
                </div>
                <div className="rounded-xl hover:bg-gray-300 text-black w-full flex flex-row items-start justify-start cursor-pointer gap-3 mb-4 px-4 py-2">
                    <MdOutlineOndemandVideo className="text-3xl flex items-center" />
                    <span className="text-2xl">Your Videos</span>
                </div>
                <div className="rounded-xl hover:bg-gray-300 text-black w-full flex flex-row items-start justify-start cursor-pointer gap-3 mb-4 px-4 py-2">
                    <CiStopwatch className="text-3xl flex items-center" />
                    <span className="text-2xl">Watch Later</span>
                </div>
                
                <div className="rounded-xl hover:bg-gray-300 text-black w-full flex flex-row items-start justify-start cursor-pointer gap-3 mb-4 px-4 py-2">
                    <AiOutlineLike className="text-3xl flex items-center" />
                    <span className="text-2xl">Liked Videos</span>
                </div>
                <div className="rounded-xl hover:bg-gray-300 text-black w-full flex flex-row items-start justify-start cursor-pointer gap-3 mb-4 px-4 py-2">
                    <MdDownload className="text-3xl flex items-center" />
                    <span className="text-2xl">Download</span>
                </div>
                <div className="rounded-xl hover:bg-gray-300 text-black w-full flex flex-col items-start justify-start cursor-pointer gap-3 mb-4 px-4 py-2">
                    <hr className="w-full text-gray-700"/>
                    <span className="text-black text-2xl font-semibold">Explore</span>
                </div>
                
                <div className="rounded-xl hover:bg-gray-300 text-black w-full flex flex-row items-start justify-start cursor-pointer gap-3 mb-4 px-4 py-2">
                    <MdOutlineShoppingBag className="text-3xl flex items-center" />
                    <span className="text-2xl">Shopping</span>
                </div>
                <div className="rounded-xl hover:bg-gray-300 text-black w-full flex flex-row items-start justify-start cursor-pointer gap-3 mb-4 px-4 py-2">
                    <IoMdMusicalNotes className="text-3xl flex items-center" />
                    <span className="text-2xl">Music</span>
                </div>
                <div className="rounded-xl hover:bg-gray-300 text-black w-full flex flex-row items-start justify-start cursor-pointer gap-3 mb-4 px-4 py-2">
                    <PiFilmSlateLight className="text-3xl flex items-center" />
                    <span className="text-2xl">Films</span>
                </div>
                <div className="rounded-xl hover:bg-gray-300 text-black w-full flex flex-row items-start justify-start cursor-pointer gap-3 mb-4 px-4 py-2">
                    <CgMediaLive className="text-3xl flex items-center" />
                    <span className="text-2xl">Live</span>
                </div>
                <div className="rounded-xl hover:bg-gray-300 text-black w-full flex flex-row items-start justify-start cursor-pointer gap-3 mb-4 px-4 py-2">
                    <SiYoutubegaming className="text-3xl flex items-center" />
                    <span className="text-2xl">Gaming</span>
                </div>
                <div className="rounded-xl hover:bg-gray-300 text-black w-full flex flex-row items-start justify-start cursor-pointer gap-3 mb-4 px-4 py-2">
                    <LuNewspaper className="text-3xl flex items-center" />
                    <span className="text-2xl">News</span>
                </div>
                <div className="rounded-xl hover:bg-gray-300 text-black w-full flex flex-row items-start justify-start cursor-pointer gap-3 mb-4 px-4 py-2">
                    <MdOutlineSportsCricket className="text-3xl flex items-center" />
                    <span className="text-2xl">Sport</span>
                </div>
                <div className="rounded-xl hover:bg-gray-300 text-black w-full flex flex-row items-start justify-start cursor-pointer gap-3 mb-4 px-4 py-2">
                    <LuGraduationCap className="text-3xl flex items-center" />
                    <span className="text-2xl">Courses</span>
                </div>
                <div className="rounded-xl hover:bg-gray-300 text-black w-full flex flex-row items-start justify-start cursor-pointer gap-3 mb-4 px-4 py-2">
                    <FaPodcast className="text-3xl flex items-center" />
                    <span className="text-2xl">Podcast</span>
                </div>
                <hr className="text-gray-400 w-full"/>
                
            </div>

            <div className="ml-0 lg:ml-[20%] w-full lg:w-[80%] mt-[64px]  flex flex-col items-center justify-center p-3 gap-6   ">
                <ul className="flex flex-row items-center gap-3 w-full overflow-x-auto whitespace-nowrap">
                      <li className="min-w-[10rem] h-12 p-2 rounded-2xl bg-gray-200 text-black hover:bg-black hover:text-white text-center cursor-pointer">All</li> 
                      <li className="min-w-[10rem] h-12 p-2 rounded-2xl bg-gray-200 text-black hover:bg-black hover:text-white text-center cursor-pointer">Live</li>
                      <li className="min-w-[10rem] h-12 p-2 rounded-2xl bg-gray-200 text-black hover:bg-black hover:text-white text-center cursor-pointer">News</li> 
                      <li className="min-w-[10rem] h-12 p-2 rounded-2xl bg-gray-200 text-black hover:bg-black hover:text-white text-center cursor-pointer">Music</li>
                      <li className="min-w-[10rem] h-12 p-2 rounded-2xl bg-gray-200 text-black hover:bg-black hover:text-white text-center cursor-pointer">Podcasts</li>
                      <li className="min-w-[10rem] h-12 p-2 rounded-2xl bg-gray-200 text-black hover:bg-black hover:text-white text-center cursor-pointer">Data Structures</li>
                      <li className="min-w-[10rem] h-12 p-2 rounded-2xl bg-gray-200 text-black hover:bg-black hover:text-white text-center cursor-pointer">Debates</li>
                      <li className="min-w-[10rem] h-12 p-2 rounded-2xl bg-gray-200 text-black hover:bg-black hover:text-white text-center cursor-pointer">E-commerce</li>
                      <li className="min-w-[10rem] h-12 p-2 rounded-2xl bg-gray-200 text-black hover:bg-black hover:text-white text-center cursor-pointer">Debates</li>                
                </ul>
                
                <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 items-center justify-between gap-6 w-full p-3">
                    <div className=" flex flex-col items-start justify-start gap-3 cursor-pointer rounded-2xl">
                        <img src="/image/pic49.jpg" alt="" className="rounded-xl" />
                        <div className="flex flex-row items-start justify-between gap-3 px-4 py-2"> 
                            <GiAtSea className="text-4xl font-bold"/>
                            <p className="flex flex-col items-start justify-start gap-1 ">
                                <span className="text-2xl ">Grocery Item</span>
                                <h1 className="text-xl">To make your day beautifull</h1>
                            </p>
                            <FaEllipsisV className="text-3xl font-bold" />
                        </div>
                    </div>
                    <div className="flex flex-col items-start justify-start gap-3 cursor-pointer rounded-2xl">
                        <img src="/image/pic49.jpg" alt="" className="rounded-xl" />
                        <div className="flex flex-row items-start justify-between gap-3 px-4 py-2"> 
                            <GiAtSea className="text-4xl font-bold"/>
                            <p className="flex flex-col items-start justify-start gap-1 ">
                                <span className="text-2xl ">Grocery Item</span>
                                <h1 className="text-xl">To make your day beautifull</h1>
                            </p>
                            <FaEllipsisV className="text-3xl font-bold" />
                        </div>
                    </div>
                    <div className=" flex flex-col items-start justify-start gap-3 cursor-pointer rounded-2xl">
                        <img src="/image/pic49.jpg" alt="" className="rounded-xl" />
                        <div className="flex flex-row items-start justify-between gap-3 px-4 py-2"> 
                            <GiAtSea className="text-4xl font-bold"/>
                            <p className="flex flex-col items-start justify-start gap-1 ">
                                <span className="text-2xl ">Grocery Item</span>
                                <h1 className="text-xl">To make your day beautifull</h1>
                            </p>
                            <FaEllipsisV className="text-3xl font-bold" />
                        </div>
                    </div>
                    <div className=" flex flex-col items-start justify-start gap-3 cursor-pointer rounded-2xl">
                        <img src="/image/pic49.jpg" alt="" className="rounded-xl" />
                        <div className="flex flex-row items-start justify-between gap-3 px-4 py-2"> 
                            <GiAtSea className="text-4xl font-bold"/>
                            <p className="flex flex-col items-start justify-start gap-1 ">
                                <span className="text-2xl ">Grocery Item</span>
                                <h1 className="text-xl">To make your day beautifull</h1>
                            </p>
                            <FaEllipsisV className="text-3xl font-bold" />
                        </div>
                    </div>
                    <div className=" flex flex-col items-start justify-start gap-3 cursor-pointer rounded-2xl">
                        <img src="/image/pic49.jpg" alt="" className="rounded-xl" />
                        <div className="flex flex-row items-start justify-between gap-3 px-4 py-2"> 
                            <GiAtSea className="text-4xl font-bold"/>
                            <p className="flex flex-col items-start justify-start gap-1 ">
                                <span className="text-2xl ">Grocery Item</span>
                                <h1 className="text-xl">To make your day beautifull</h1>
                            </p>
                            <FaEllipsisV className="text-3xl font-bold" />
                        </div>
                    </div>
                    <div className=" flex flex-col items-start justify-start gap-3 cursor-pointer rounded-2xl">
                        <img src="/image/pic49.jpg" alt="" className="rounded-xl" />
                        <div className="flex flex-row items-start justify-between gap-3 px-4 py-2"> 
                            <GiAtSea className="text-4xl font-bold"/>
                            <p className="flex flex-col items-start justify-start gap-1 ">
                                <span className="text-2xl ">Grocery Item</span>
                                <h1 className="text-xl">To make your day beautifull</h1>
                            </p>
                            <FaEllipsisV className="text-3xl font-bold" />
                        </div>
                    </div>
                    <div className=" flex flex-col items-start justify-start gap-3 cursor-pointer rounded-2xl">
                        <img src="/image/pic49.jpg" alt="" className="rounded-xl" />
                        <div className="flex flex-row items-start justify-between gap-3 px-4 py-2"> 
                            <GiAtSea className="text-4xl font-bold"/>
                            <p className="flex flex-col items-start justify-start gap-1 ">
                                <span className="text-2xl ">Grocery Item</span>
                                <h1 className="text-xl">To make your day beautifull</h1>
                            </p>
                            <FaEllipsisV className="text-3xl font-bold" />
                        </div>
                    </div>
                    <div className=" flex flex-col items-start justify-start gap-3 cursor-pointer rounded-2xl">
                        <img src="/image/pic49.jpg" alt="" className="rounded-xl" />
                        <div className="flex flex-row items-start justify-between gap-3 px-4 py-2"> 
                            <GiAtSea className="text-4xl font-bold"/>
                            <p className="flex flex-col items-start justify-start gap-1 ">
                                <span className="text-2xl ">Grocery Item</span>
                                <h1 className="text-xl">To make your day beautifull</h1>
                            </p>
                            <FaEllipsisV className="text-3xl font-bold" />
                        </div>
                    </div>
                    <div className=" flex flex-col items-start justify-start gap-3 cursor-pointer rounded-2xl">
                        <img src="/image/pic49.jpg" alt="" className="rounded-xl" />
                        <div className="flex flex-row items-start justify-between gap-3 px-4 py-2"> 
                            <GiAtSea className="text-4xl font-bold"/>
                            <p className="flex flex-col items-start justify-start gap-1 ">
                                <span className="text-2xl ">Grocery Item</span>
                                <h1 className="text-xl">To make your day beautifull</h1>
                            </p>
                            <FaEllipsisV className="text-3xl font-bold" />
                        </div>
                    </div>
                    <div className=" flex flex-col items-start justify-start gap-3 cursor-pointer rounded-2xl">
                        <img src="/image/pic49.jpg" alt="" className="rounded-xl" />
                        <div className="flex flex-row items-start justify-between gap-3 px-4 py-2"> 
                            <GiAtSea className="text-4xl font-bold"/>
                            <p className="flex flex-col items-start justify-start gap-1 ">
                                <span className="text-2xl ">Grocery Item</span>
                                <h1 className="text-xl">To make your day beautifull</h1>
                            </p>
                            <FaEllipsisV className="text-3xl font-bold" />
                        </div>
                    </div>
                    <div className=" flex flex-col items-start justify-start gap-3 cursor-pointer rounded-2xl">
                        <img src="/image/pic49.jpg" alt="" className="rounded-xl" />
                        <div className="flex flex-row items-start justify-between gap-3 px-4 py-2"> 
                            <GiAtSea className="text-4xl font-bold"/>
                            <p className="flex flex-col items-start justify-start gap-1 ">
                                <span className="text-2xl ">Grocery Item</span>
                                <h1 className="text-xl">To make your day beautifull</h1>
                            </p>
                            <FaEllipsisV className="text-3xl font-bold" />
                        </div>
                    </div>
                    <div className=" flex flex-col items-start justify-start gap-3 cursor-pointer rounded-2xl">
                        <img src="/image/pic49.jpg" alt="" className="rounded-xl" />
                        <div className="flex flex-row items-start justify-between gap-3 px-4 py-2"> 
                            <GiAtSea className="text-4xl font-bold"/>
                            <p className="flex flex-col items-start justify-start gap-1 ">
                                <span className="text-2xl ">Grocery Item</span>
                                <h1 className="text-xl">To make your day beautifull</h1>
                            </p>
                            <FaEllipsisV className="text-3xl font-bold" />
                        </div>
                    </div>
                    <div className=" flex flex-col items-start justify-start gap-3 cursor-pointer rounded-2xl">
                        <img src="/image/pic49.jpg" alt="" className="rounded-xl" />
                        <div className="flex flex-row items-start justify-between gap-3 px-4 py-2"> 
                            <GiAtSea className="text-4xl font-bold"/>
                            <p className="flex flex-col items-start justify-start gap-1 ">
                                <span className="text-2xl ">Grocery Item</span>
                                <h1 className="text-xl">To make your day beautifull</h1>
                            </p>
                            <FaEllipsisV className="text-3xl font-bold" />
                        </div>
                    </div>
                    <div className=" flex flex-col items-start justify-start gap-3 cursor-pointer rounded-2xl">
                        <img src="/image/pic49.jpg" alt="" className="rounded-xl" />
                        <div className="flex flex-row items-start justify-between gap-3 px-4 py-2"> 
                            <GiAtSea className="text-4xl font-bold"/>
                            <p className="flex flex-col items-start justify-start gap-1 ">
                                <span className="text-2xl ">Grocery Item</span>
                                <h1 className="text-xl">To make your day beautifull</h1>
                            </p>
                            <FaEllipsisV className="text-3xl font-bold" />
                        </div>
                    </div>
                    <div className=" flex flex-col items-start justify-start gap-3 cursor-pointer rounded-2xl">
                        <img src="/image/pic49.jpg" alt="" className="rounded-xl" />
                        <div className="flex flex-row items-start justify-between gap-3 px-4 py-2"> 
                            <GiAtSea className="text-4xl font-bold"/>
                            <p className="flex flex-col items-start justify-start gap-1 ">
                                <span className="text-2xl ">Grocery Item</span>
                                <h1 className="text-xl">To make your day beautifull</h1>
                            </p>
                            <FaEllipsisV className="text-3xl font-bold" />
                        </div>
                    </div>
                    <div className=" flex flex-col items-start justify-start gap-3 cursor-pointer rounded-2xl">
                        <img src="/image/pic49.jpg" alt="" className="rounded-xl" />
                        <div className="flex flex-row items-start justify-between gap-3 px-4 py-2"> 
                            <GiAtSea className="text-4xl font-bold"/>
                            <p className="flex flex-col items-start justify-start gap-1 ">
                                <span className="text-2xl ">Grocery Item</span>
                                <h1 className="text-xl">To make your day beautifull</h1>
                            </p>
                            <FaEllipsisV className="text-3xl font-bold" />
                        </div>
                    </div>
                    <div className=" flex flex-col items-start justify-start gap-3 cursor-pointer rounded-2xl">
                        <img src="/image/pic49.jpg" alt="" className="rounded-xl" />
                        <div className="flex flex-row items-start justify-between gap-3 px-4 py-2"> 
                            <GiAtSea className="text-4xl font-bold"/>
                            <p className="flex flex-col items-start justify-start gap-1 ">
                                <span className="text-2xl ">Grocery Item</span>
                                <h1 className="text-xl">To make your day beautifull</h1>
                            </p>
                            <FaEllipsisV className="text-3xl font-bold" />
                        </div>
                    </div>
                    <div className=" flex flex-col items-start justify-start gap-3 cursor-pointer rounded-2xl">
                        <img src="/image/pic49.jpg" alt="" className="rounded-xl" />
                        <div className="flex flex-row items-start justify-between gap-3 px-4 py-2"> 
                            <GiAtSea className="text-4xl font-bold"/>
                            <p className="flex flex-col items-start justify-start gap-1 ">
                                <span className="text-2xl ">Grocery Item</span>
                                <h1 className="text-xl">To make your day beautifull</h1>
                            </p>
                            <FaEllipsisV className="text-3xl font-bold" />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </>
  );
}

export default Youtube;