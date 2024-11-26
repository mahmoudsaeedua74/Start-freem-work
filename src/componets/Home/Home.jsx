import React from 'react'
import profile from '../../assets/avataaars.svg'
export default function Home() {
  return (
    <>
    <section className='Home bg-secondcolor  text-white'>
       <div className='flex justify-center items-center flex-col h-screen'>
       <div className="content text-center">
       <img src={profile} alt=""  className='w-3/4 mx-auto'/>
       <h2 className='  font-bold uppercase'>start Framework </h2>
       <div className=" my-3 relative w-[fit-content] m-auto">
      <div className="star after:bg-white  custom-after  before:bg-white custom-before ">

    <i  className="fa-solid relative fa-star "></i>
      </div>
    </div>
        <p>Graphic Artist - Web Designer - Illustrator</p>
       </div>
       </div>
    </section>
    
    </>
  )
}
