import React from 'react'

const Slider = () => {
  return (
    <section className='flex justify-center items-center relative'>
        <img className='w-[600px] h-[300px] rounded-sm md:w-[1000px] md:h-[500px] mt-10' src="./images/Image (1).png" alt="" />
        <div className='h-[120px] w-[300px] bg-slate-50 rounded-lg flex flex-col md:gap-6 absolute bottom-2 left-16 justify-center md:pl-8  pl-4 gap-3 md:w-[450px] md:h-[200px]'>
            <h4 className='h-[25px] w-[97px] text-center bg-blue-700 rounded-md text-white'>Technology</h4>
            <p className='font-bold md:text-2xl'>Grid system for better <br /> Design User Interface</p>
            <span className='md:text-sm text-sm text-gray-600'>August 20, 2022</span>
        </div>
    </section>
  )
}

export default Slider;