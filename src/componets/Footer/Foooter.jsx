import React from 'react'

export default function Foooter() {
  return (
   <>
   <footer className='flex flex-col '>
    <div className="footer bg-maincolor h-[200]    p-20 text-white">
    <div className="itemGroup container mx-auto flex justify-between items-center  text-center flex-col md:flex-row">
            <div className="item w-full  md:w-1/3 mb-4">
                <div className='p-3'>
                <h3 className=''>LOCATION</h3>
                <p>2215 John Daniel Drive</p>
                <p>Clark, MO 65243</p>
                </div>
            </div>
            <div className="item w-full  md:w-1/3 mb-4">
               <div className="p-3">
               <h3 className=''>AROUND THE WEB</h3>
                <div className="icons flex gap-2 text-center items-center justify-center mt-3  text-[1.3rem] ">
                <a href=" https://www.facebook.com/" target='_blank' className="text-white size-9 rounded-full border-solid border-[.1rem] hover:border-secondcolor hover:text-secondcolor transition-all duration-300 "> <i className="fa-brands  fa-facebook-f"></i></a>
              <a href=" https://www.facebook.com/" target='_blank' className="text-white size-9 rounded-full border-solid border-[.1rem] hover:border-secondcolor hover:text-secondcolor transition-all duration-300 "> <i className="fa-brands  fa-twitch"></i></a>
              <a href=" https://www.facebook.com/" target='_blank' className="text-white size-9 rounded-full border-solid border-[.1rem] hover:border-secondcolor hover:text-secondcolor transition-all duration-300 "> <i className="fa-brands  fa-twitter"></i></a>
              <a href=" https://www.facebook.com/" target='_blank'  className="text-white size-9 rounded-full border-solid border-[.1rem] hover:border-secondcolor hover:text-secondcolor transition-all duration-300 "> <i className="fa-brands  fa-linkedin"></i> </a>      
                
                </div>
               </div>
            </div>
            <div className="item w-full  md:w-1/3 mb-4">
               <div className='p-3'>
               <h3 className=''>ABOUT FREELANCER</h3>
               <p> Freelance is a free to use, licensed Bootstrap theme created by Route </p>
               </div>
            </div>
        </div>
    </div>
    <div className="copyRite text-center bg-[#1a252f] text-white pt-4 pb-6">
        <p>Copyright © Your Website 2021</p>
    </div>

   </footer>
   </>
  )
}
