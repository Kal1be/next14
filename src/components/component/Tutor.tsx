import React from 'react'

function Tutor() {
  return (
    <div>
        <div className='md:flex gap-36 justify-around mt-24'>
            <h3 className='text-6xl text-blue-950 font-extrabold'>Tutor</h3>
            <div className='md:flex gap-8'>
              <div>  <img src="/team1.jpg" alt="" />
              <h3 className='text-4xl font-bold text-green-400 my-4'>John <br />
Williams</h3>
<p className='font-medium text-lg opacity-65'>John is the leading SEO specialist at iStep Ltd <br />
    with 10+ years of professional experience.</p>
</div>
<div>
    <img src="/team2.jpg" alt="" />
    <h3 className='text-4xl font-bold text-green-400 my-4'>Peter <br /> Smith</h3>
    <p className='font-medium text-lg opacity-65'>Founder and owner of SEOPro, an <br />award-winning SEO & marketing agency.
</p>
</div>
            </div>
        </div>
{/* the second one ++++++++++++++++++++++++++++++++++++++++++++++++++++ */}

        <div className='mt-20'>
<h3 className='text-center text-5xl font-extrabold text-blue-950'>Course program</h3>
<p className='font-medium text-lg opacity-65 text-center my-3'>Learn more about the program of our upcoming data science course in details.</p>

<div className='container border h-[50vh] mx-10 my-6'>

</div>

{/* the part of the meeting people ++++++++++++++++++++++++++++++++++++++++++++++++++++++_____________ */}
<div className='mt-20 px-12 flex gap-24'>
    <img src="/meeting.jpg" alt="" />
    <div>
        <h2 className='text-6xl text-blue-950 font-extrabold'>Venue</h2>
        <p className='font-medium text-lg opacity-65 my-8'>Our course will take place at one of the biggest modern educational facilities, the Lintense Education Hub. It can host up to 150 participants and guests.

</p>
<p className='text-xl font-bold text-green-400 m'>178 West 27th Street, Suite 527,<br />
New York NY 10012</p>
    </div>
</div>
        </div>
      
    </div>
  )
}

export default Tutor
