import React from 'react'
import img1 from '../assets/cardimg/content1.png'
import img2 from '../assets/cardimg/content2.png'
import img3 from '../assets/cardimg/content3.png'
function Content1() {
  return (
    <div className='container mx-auto justify-items-center '>
        <h1 className='font-bold text-3xl'>Month of March</h1>
        <p className='font-semibold text-orange-500'>UPCOMING EVENTS</p>
        <p>----   *   -----</p>

        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10'>

      <div className='border border-gray-200 rounded-xl w-[310px] md:w-[350px] '>
      <img className='rounded-xl' src={img1} alt="" />
      <div className='px-6 py-4'>
        <h1 className='text-xl text-black'>Chicken Roll</h1>
      <p className='text-sm  text-gray-400 py-3'>20 Mar 2025</p>
       <p className='md:w-80 text-sm'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, 
         by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to 
         be sure there isn't anything embarrassing hidden in the middle of text.</p></div>
      </div>
          
      <div className='border border-gray-200 rounded-xl w-[310px] md:w-[350px]'>
      <img className='rounded-xl' src={img2} alt="" />
      <div className='px-6 py-4'>
        <h1 className='text-xl text-black'>Bread Omelette</h1>
      <p className='text-sm  text-gray-400 py-3'>20 Mar 2025</p>
       <p className=' md:w-80 text-sm'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, 
         by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to 
         be sure there isn't anything embarrassing hidden in the middle of text.</p></div>
      </div>
     
      <div className='border border-gray-200 rounded-xl w-[310px] md:w-[350px]'>
      <img className='rounded-xl' src={img3} alt="" />
      <div className='px-6 py-4'>
        <h1 className='text-xl text-black'>Chicken sandwich</h1>
      <p className='text-sm  text-gray-400 py-3'>20 Mar 2025</p>
       <p className='md:w-80 text-sm '>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, 
         by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to 
         be sure there isn't anything embarrassing hidden in the middle of text.</p></div>
      </div>
   
    

      </div>
    </div>
  )
}

export default Content1
