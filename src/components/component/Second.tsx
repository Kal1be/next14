import React from 'react'

function Second() {
  return (
    <div className='md:mx-12 px-4'>
      <h3 className='font-extrabold md:text-5xl text-4xl text-blue-950'>Who will benefit</h3>
      <div className='md:flex gap-36 items-center mt-6'>
      <div> 
       <img src="/tv.png" alt="" className='w-28'/>
       <h3 className='text-xl text-blue-950 font-bold'>In-house SEO specialists <br />
working on large projects</h3>
      </div>
      <div>
        <img src="/user.png" alt="" className='w-28'/>
        <h3 className='text-xl text-blue-950 font-bold'>Licensed SEO experts and <br />
SEO enthusiasts</h3>
      </div>
      <div>
        <img src="/trace.png" alt="" className='w-24'/>
        <h3 className='text-xl text-blue-950 font-bold'>SEO geeks and  <br />
         research</h3>
      </div>
      </div>
    </div>
  )
}

export default Second
