import React from 'react'
import Double from '../assets/double.png'
import Triple from '../assets/triple.png'
import Single from '../assets/single.png'

const NewCard = () => {
  return (
    <div className='w-full py-[10rem] px-4 bg-white'>
    <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
        {/* CARD 1  */}
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg duration-300 hover:scale-105">
            <img src={Single} className='w-20 mx-auto mt-[-3rem] bg-white' alt="" />
            <h2 className='text-2xl font-bold text-center py-8'>Single User</h2>
            <p className='text-center text-4xl font-bold'>$149</p>
            <div className='text-center font-medium'>
                <p className='py-2 border-b mx-8 mt-8'>500 GB Storage</p>
                <p className='py-2 border-b mx-8'>1 Granted User</p>
                <p className='py-2 border-b mx-8'>Send up to 2 GB</p>
            </div>
            <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 px-6 text-black'>Start Trial</button>
        </div>

        {/* CARD 2  */}
        <div className="w-full bg-gray-100 shadow-xl flex flex-col p-4 md:my-0 my-8 rounded-lg duration-300 hover:scale-105">
            <img src={Double} className='w-20 mx-auto mt-[-3rem] bg-transparent' alt="" />
            <h2 className='text-2xl font-bold text-center py-8'>Partnership</h2>
            <p className='text-center text-4xl font-bold'>$199</p>
            <div className='text-center font-medium'>
                <p className='py-2 border-b mx-8 mt-8'>1 TB Storage</p>
                <p className='py-2 border-b mx-8'>3 Users Allowed</p>
                <p className='py-2 border-b mx-8'>Send up to 10 GB</p>
            </div>
            <button className='bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 px-6 '>Start Trial</button>
        </div>

        {/* CARD 3  */}
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg duration-300 hover:scale-105">
            <img src={Triple} className='w-20 mx-auto mt-[-3rem] bg-white' alt="" />
            <h2 className='text-2xl font-bold text-center py-8'>Group Account</h2>
            <p className='text-center text-4xl font-bold'>$149</p>
            <div className='text-center font-medium'>
                <p className='py-2 border-b mx-8 mt-8'>5 TB Storage</p>
                <p className='py-2 border-b mx-8'>10 Users Allowed</p>
                <p className='py-2 border-b mx-8'>Send up to 20 GB</p>
            </div>
            <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 px-6 text-black'>Start Trial</button>
        </div>
    </div>
    </div>
      
    
  )
}

export default NewCard
