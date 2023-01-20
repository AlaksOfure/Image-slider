import React, { useState } from 'react';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';

function App() {
  const slides = [
    {
      url: 'https://images.unsplash.com/photo-1503206557829-9a9979ad1227?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHRvcm9udG98ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60'
    },
    {
      url: 'https://images.unsplash.com/photo-1517090504586-fde19ea6066f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHRvcm9udG98ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60'
    },
    {
      url: 'https://images.unsplash.com/photo-1490623970972-ae8bb3da443e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHRvcm9udG98ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60'
    },
    {
      url: 'https://images.unsplash.com/photo-1446846365537-255ea07833ec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDR8fHRvcm9udG98ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60'
    },
    {
      url: 'https://images.unsplash.com/photo-1578010908802-cd7e5cd853c9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzZ8fHRvcm9udG98ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60'
    },
  ];

  const [currentId, setCurrentId] = useState(0);

  const prevSlide = () => {
    const isfirstSlide = currentId === 0;
    const newId = isfirstSlide ? slides.length - 1 : currentId - 1;
    setCurrentId(newId);
  }

  const nextSlide = () => {
    const isLastSlide = currentId === slides.length - 1;
    const newId = isLastSlide ? 0 : currentId + 1;
    setCurrentId(newId);
  }


  return (
    <div className='max-w-[1400px] h-[780px] w-full m-auto py-16 px-4 relative group'>
      <h1>Image Slider</h1>

      <div style={{ backgroundImage: `url(${slides[currentId].url})` }} className='w-full h-full rounded-2xl bg-center bg-cover duration-500'></div>
      {/* Arrows  */}
      {/* left */}
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer' >
        <BsChevronLeft onClick={prevSlide} size={30} />
      </div>

      {/* right */}
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer' >
        <BsChevronRight onClick={nextSlide} size={30} />
      </div>

      {/* Dots */}
      <div className='flex top-4 justify-center py-2'>
        {slides.map((slide, index) => (
          <div key={index} className='mx-1.5 text-2xl text-white cursor-pointer' onClick={() => setCurrentId(index)}>
            <RxDotFilled className={currentId === index ? 'text-blue-500' : 'text-gray-400'} />
          </div>
        ))}
      </div>


    </div>
  );
}

export default App;
