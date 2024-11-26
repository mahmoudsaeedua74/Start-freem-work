import React from 'react'

export default function About() {
  return (
   <>
   <section className='bg-secondcolor h-screen text-white flex justify-center items-center ' >
    <div className="about text-center   container w-[80%] ">
    <div><h2 className='text-[27.8167px] sm:text-[2.5rem] font-bold  uppercase'>about component</h2></div>
    <div className=" my-3 relative w-[fit-content] m-auto">
      <div className="star after:bg-white  custom-after  before:bg-white custom-before ">

    <i  className="fa-solid relative fa-star "></i>
      </div>
    </div>
    <div className='flex justify-center items-center text-start flex-col lg:flex-row'>
      <div className='    p-4'>      <p> Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization. </p>
      </div>
      <div  className='   p-4'>      <p> Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization. </p>
      </div>
    </div>
    </div>
   </section>
   
   </>
  )
}
