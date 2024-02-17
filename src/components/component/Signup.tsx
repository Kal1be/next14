import React from 'react'

function Signup() {
  return (
    <div className='md:flex bg-blue-950 px-6 py-12 gap-32 mt-20'>
        <img src="/program.png" alt="" />
        <div className='my-6 md:my-0'>
            <h3 className='text-5xl font-extrabold text-green-500'>Sign up for the course now</h3>
            <h2 className='text-2xl font-bold text-white py-4'>and get a PDF course report & certificate via E-mail</h2>
           <div className='flex justify-center'>
           <button className='bg-white py-3 px-8 rounded-full text-blue-900 font-bold my-4'>Register</button>
           </div>
        </div>
      <img src="/flex.png" alt=""  className='w-64'/>
    </div>
  )
}

export default Signup
