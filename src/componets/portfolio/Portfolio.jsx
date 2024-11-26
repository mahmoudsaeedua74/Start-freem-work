import React, { useState } from 'react';
import logoone from "../../assets/poert1.png";
import logotwo from "../../assets/port2.png";
import logothree from "../../assets/port3.png";

export default function Portfolio() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);

  // فتح الصورة
  const openImage = (image) => {
    setCurrentImage(image);
    setIsOpen(true);
  };

  // غلق الصورة
  const closeImage = () => {
    setIsOpen(false);
    setCurrentImage(null);
  };

  return (
    <>
      <section className='protfolio mx-6'>
        <div className='text-center mt-3'>
          <h2 className='font-bold text-maincolor uppercase'>portfolio component</h2>
          <div className="my-3 relative w-[fit-content] m-auto">
            <div className="star after:bg-maincolor custom-after before:bg-maincolor custom-before">
              <i className="fa-solid relative fa-star text-maincolor"></i>
            </div>
          </div>
        </div>

        <div className='container flex mx-auto flex-wrap mb-8'>
          <div className='w-full cursor-pointer md:w-1/2 lg:w-1/3 p-2'>
            <div className=' overflow-hidden relative rounded-lg'>
            <img src={logoone} alt="portfolio item" className='w-full ' />
              <div className=' duration-500 hover:bg-secondcolor/90 w-full h-full top-0 bottom-0 start-0 end-0 absolute text-center flex items-center justify-center group '>
                <i onClick={() => openImage(logoone)}  className="duration-500 fa-solid fa-plus text-white text-[5rem]  opacity-0  group-hover:opacity-100 "  ></i>
              </div>
            </div>
          </div>
          <div className='w-full cursor-pointer md:w-1/2 lg:w-1/3 p-2'>
            <div className=' overflow-hidden relative rounded-lg'>
            <img src={logotwo} alt="portfolio item" className='w-full ' />
              <div className=' duration-500 hover:bg-secondcolor/90 w-full h-full top-0 bottom-0 start-0 end-0 absolute text-center flex items-center justify-center group '>
                <i onClick={() => openImage(logotwo)}  className="duration-500 fa-solid fa-plus text-white text-[5rem]  opacity-0  group-hover:opacity-100 "  ></i>
              </div>
            </div>
          </div>
          <div className='w-full cursor-pointer md:w-1/2 lg:w-1/3 p-2'>
            <div className=' overflow-hidden relative rounded-lg'>
            <img src={logothree} alt="portfolio item" className='w-full ' />
              <div className=' duration-500 hover:bg-secondcolor/90 w-full h-full top-0 bottom-0 start-0 end-0 absolute text-center flex items-center justify-center group '>
                <i onClick={() => openImage(logothree)}  className="duration-500 fa-solid fa-plus text-white text-[5rem]  opacity-0  group-hover:opacity-100 "  ></i>
              </div>
            </div>
          </div>
          <div className='w-full cursor-pointer md:w-1/2 lg:w-1/3 p-2'>
            <div className=' overflow-hidden relative rounded-lg'>
            <img src={logoone} alt="portfolio item" className='w-full ' />
              <div className=' duration-500 hover:bg-secondcolor/90 w-full h-full top-0 bottom-0 start-0 end-0 absolute text-center flex items-center justify-center group '>
                <i onClick={() => openImage(logoone)}  className="duration-500 fa-solid fa-plus text-white text-[5rem]  opacity-0  group-hover:opacity-100 "  ></i>
              </div>
            </div>
          </div>
          <div className='w-full cursor-pointer md:w-1/2 lg:w-1/3 p-2'>
            <div className=' overflow-hidden relative rounded-lg'>
            <img src={logotwo} alt="portfolio item" className='w-full ' />
              <div className=' duration-500 hover:bg-secondcolor/90 w-full h-full top-0 bottom-0 start-0 end-0 absolute text-center flex items-center justify-center group '>
                <i onClick={() => openImage(logotwo)}  className="duration-500 fa-solid fa-plus text-white text-[5rem]  opacity-0  group-hover:opacity-100 "  ></i>
              </div>
            </div>
          </div>
          <div className='w-full cursor-pointer md:w-1/2 lg:w-1/3 p-2'>
            <div className=' overflow-hidden relative rounded-lg'>
            <img src={logothree} alt="portfolio item" className='w-full ' />
              <div className=' duration-500 hover:bg-secondcolor/90 w-full h-full top-0 bottom-0 start-0 end-0 absolute text-center flex items-center justify-center group '>
                <i onClick={() => openImage(logothree)}  className="duration-500 fa-solid fa-plus text-white text-[5rem]  opacity-0  group-hover:opacity-100 "  ></i>
              </div>
            </div>
          </div>

       
        </div>

        {isOpen && (
          <div
            className='fixed top-0 left-0 right-0 bottom-0 bg-[#0d6efd]/10 bg-opacity-70 flex items-center justify-center  z-50'
            onClick={closeImage}
          >
            <div
              className='relative'
              onClick={(e) => e.stopPropagation()} 
            >
              <img src={currentImage} alt="Full Screen" className="max-w-full max-h-screen" />
              <button
                onClick={closeImage}
                className="absolute top-4 right-4 text-white text-3xl"
              >
                ×
              </button>
            </div>
          </div>
        )}
      </section>
    </>
  );
}

