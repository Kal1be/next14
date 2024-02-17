"use client"
import Image from 'next/image';
import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import meeting from "../../../public/meeting.jpg"
import team1 from "../../../public/team1.jpg"
import team2 from "../../../public/team2.jpg"


const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };

function Tutor() {
  return (
    <div>
        <div className='md:flex gap-36 justify-around mt-24 px-4'>
            <h3 className='text-6xl text-blue-950 font-extrabold my-10 md:my-0'>Tutor</h3>
            <div className='md:flex gap-8'>
              <div>  <Image src={team1} alt=""  width={400} height={400}/>
              <h3 className='text-4xl font-bold text-green-400 my-4'>John <br />
Williams</h3>
<p className='font-medium text-lg opacity-65'>John is the leading SEO specialist at iStep Ltd <br />
    with 10+ years of professional experience.</p>
</div>
<div className='my-4 md:my-0'>
    <Image src={team2} alt="" width={400} height={400} />
    <h3 className='text-4xl font-bold text-green-400 my-4'>Peter <br /> Smith</h3>
    <p className='font-medium text-lg opacity-65'>Founder and owner of SEOPro, an <br />award-winning SEO & marketing agency.
</p>
</div>
            </div>
        </div>
{/* the second one ++++++++++++++++++++++++++++++++++++++++++++++++++++ */}

        <div className='mt-20 z-10'>
<h3 className='text-center text-5xl font-extrabold text-blue-950'>Course program</h3>
<p className='font-medium text-lg opacity-65 text-center my-3'>Learn more about the program of our upcoming data science course in details.</p>
<Carousel
  swipeable={false}
  draggable={false}
  showDots={true}
  responsive={responsive}
  ssr={true} // means to render carousel on server-side.
  infinite={true}
//   autoPlay={this.props.deviceType !== "mobile" ? true : false}
  autoPlaySpeed={1000}
  keyBoardControl={true}
//   customTransition="all .5"
//   transitionDuration={500}
  containerClass="carousel-container"
  removeArrowOnDeviceType={["tablet", "mobile"]}
//   deviceType={this.props.deviceType}
  dotListClass="custom-dot-list-style"
  itemClass="carousel-item-padding-40-px"
>
<div className='container border h-[50vh] md:mx-10 my-6'>
<h3>kalibe felix</h3>
</div>
<div className='container border h-[50vh] md:mx-10 my-6'>
<h2>yahoulbofelix@</h2>
</div>
<div className='container border h-[50vh] md:mx-10 my-6'>
<h3>gmail</h3>
</div>
<div className='container border h-[50vh] md:mx-10 my-6'>
<h3>dela dgfcgfcgsssssssssssssssssssssss</h3>
</div>
</Carousel>;


{/* the part of the meeting people ++++++++++++++++++++++++++++++++++++++++++++++++++++++_____________ */}
<div className='mt-20 md:px-12 px-4 md:flex gap-24'>
    <Image src={meeting} width={500} height={500} alt="" className='my-4 md:my-0'/>
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
