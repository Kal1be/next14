import Link from 'next/link'
import React from 'react'

function Body() {
  return (
    <div className='mt-24'>
        <h3 className='text-center font-extrabold md:text-6xl text-4xl text-blue-950'>About the course</h3>
      <div className='md:flex my-8 md:px-16 px-4 gap-16 justify-between'>
        <div className='md:w-[400px] text-xl text-green-400'>
            <h2>24 hours of practice and immersion in data science for SEO specialists Level: <strong>INTERMEDIATE</strong></h2>
        </div>
        <div className='md:w-[800px] text-lg font-medium'>
            <h2 className='opacity-65 '>Every day, Google Analytics, Google Search Console and your web server
             collect millions of data rows, and SEO experts often only look at summary graphs and rejoice
              when they increase and get upset when they decrease. It is time to understand the causes and
               consequences and take the first step in Data Science - dig into this data with your head and find answers to all your questions.
<br /><br />
There's no need to invent Google's conspiracy theories if you can find out how data 
science works and test its main techniques in SEO. Book your seat to get instant access to the course.</h2>
<button className='bg-green-400 py-3 px-4 font-bold text-blue-950 rounded-full my-6'><Link href="/book">Book a place</Link></button>
        </div>
      </div>
    </div>
  )
}

export default Body
