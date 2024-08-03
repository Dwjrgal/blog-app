import React from 'react'

const Links = () => {
  return (
    <div className='flex justify-between my-16 border-t-2 pt-6 border-zinc-300'>
      <img className="h-[45px] w-[80px]" src="./images/Logo.png" alt="" />
        <ul className='flex gap-5'>
            <li>Terms of Use</li>
            <li>Privacy Policy</li>
            <li>Cookie Policy</li>
        </ul>
    </div>
  )
}

export default Links