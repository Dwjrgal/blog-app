import React from 'react'

const Contact = () => {
  return (
    <>
    <div className='flex justify-center my-20'>
    <section className='flex flex-col px-40'>
        <h1 className='font-bold text-xl'>Contact Us</h1>
        <p className='w-[643px] h-[143px] mt-2'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias nesciunt similique incidunt modi velit quo optio, aliquam magni ipsa, quam reiciendis non deserunt ullam eius dicta, minus soluta vel rerum!</p>
        <div className='flex gap-16'>
            <div  className='border border-slate-400 rounded-md sm:h-[120px] sm:w-[280px] p-5'>
            <h4 className='font-bold'>Address</h4>
            <p className='font-base text-gray-600 text-sm pt-1'>1328 Oak Ridge Drive,<br /> Saint Louis, Missouri</p>
            </div>
            <div  className='border border-slate-400 rounded-md sm:h-[120px] sm:w-[280px] p-5'>
            <h4 className='font-bold'>Contact</h4>
            <p className='font-base text-gray-600 text-sm p-1'>313-332-8662
           <br /> info@email.com</p>
            </div>
        </div>
        <div className='h-[400px] w-[643px] bg-[#F6F6F7] mt-10 flex flex-col gap-8 pl-10 py-6 rounded-md'>
            <h5 className='font-bold'>Leave a Message</h5>
            <div className='flex flex-col h-[300px] gap-4 w-[420px]'>
            <div className='flex gap-6'>
            <input type="text" placeholder="Your Name"className='border rounded text-sm pl-2 py-1 w-[250px]' />
            <input type="text" placeholder="Your Email"className='border rounded text-sm pl-2 py-1 w-[250px]' />
            </div>
            <input type="text" placeholder='Subject'className='border rounded text-sm pl-2 py-1' />
            <input type="text" placeholder="Write a message" className='border rounded h-[133px] w-[420px] pl-4'/>
            </div>
            <button className='bg-blue-700 text-white w-[130px] h-[40px] rounded-md'>Send Message</button>
        </div>
    </section>
    </div>

    </>
  )
}

export default Contact