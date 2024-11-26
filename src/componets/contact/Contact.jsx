import React, { useEffect, useState } from 'react'
export default function Contact() {

const [input, setinput] = useState('')

useEffect(() => {
  if(input!=""){
    console.log("change")
    console.log(input)

  }
},[input])

function change(){
  setinput("5")
}
  return (
<>
<section className='forContact h-screen flex  '>
  <div className=' container mx-auto'>
    <div className='text-center mt-3 mb-5'>
      <h2 className=' font-bold text-maincolor uppercase'>conatct section</h2>
      <div className=" my-3 relative w-[fit-content] m-auto">
      <div className="star after:bg-maincolor  custom-after  before:bg-maincolor custom-before ">
<i  className="fa-solid relative fa-star text-maincolor "></i>
      </div>
    </div>
    </div>
    <form action="" className='w-full lg:w-1/2 mx-auto mt-5 p-5'>
      <label  htmlFor="userName" className=' text-secondcolor' ></label>
      <input type="text" id='userName' placeholder='userName'  className='w-full text-black outline-none border-b-2 p-4 mt-4' />


      <label className=' text-secondcolor' htmlFor="userAge" ></label>
      <input type="text" id='userAge' placeholder='userAge' className='w-full text-black outline-none border-b-2 p-4 mt-4' />

      <label className=' text-secondcolor' htmlFor="userEmail" ></label>
      <input type="email" id='userEmail'  placeholder='userEmail' className='w-full text-black outline-none border-b-2 p-4 mt-4' />

      <label className=' text-secondcolor' htmlFor="userPassword" ></label>
      <input type="Password" id='userPassword' placeholder='userPassword' className='w-full text-black outline-none border-b-2 p-4 mt-4' />
      <button onClick={change} type='button'  className='mt-4 bg-[#1abc9c] px-3 py-2 rounded-md text-white'>send massage</button>
    </form>
  </div>
</section>

































</>

  )
}
