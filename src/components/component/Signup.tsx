import React from 'react'
import program from "../../../public/program.png"
import flex from "../../../public/flex.png"
import Image from 'next/image'
function Signup() {
  return (
    <div className='md:flex bg-blue-950 md:px-6 px-3 py-12 gap-32 mt-20'>
       <Image src={program} alt='' width={150} height={200}/>
        <div className='my-6 md:my-0'>
            <h3 className='md:text-5xl text-3xl font-extrabold text-green-500'>Sign up for the course now</h3>
            <h2 className='md:text-2xl text-xl font-bold text-white py-4'>and get a PDF course report & certificate via E-mail</h2>
           <div className='flex justify-center'>
           <button className='bg-white py-3 px-8 rounded-full text-blue-900 font-bold my-4'>Register</button>
           </div>
        </div>
        <Image src={flex} alt='' width={200} height={300} className='w-64'/>
    </div>
  )
}

export default Signup
