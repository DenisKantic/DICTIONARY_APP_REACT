import {React,useEffect,useState} from 'react'

const Dictionary = () => {

    const [display,setDisplay] = useState(false);


  return (
    <div className='w-[45%] h-min-[300px] bg-gray-500 rounded-xl mx-auto'>
        <div className='p-10 mt-10 mb-10'>
            <div className='flex justify-between'>
                <input type="text" placeholder='Enter here' className='w-[85%] p-3 outline-none bg-transparent border-b-4 text-xl' />
                <button className='p-3 w-[100px] bg-[#F87575] bg-none rounded-lg text-xl' onClick={()=>setDisplay(!display)}>Search</button>
            </div>
            
            <div className={ display ?  'mt-10 flex flex-col' : 'hidden'}>
                <h1>Word</h1>
                <h2>adj</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, corrupti?</p>
                    <div className='border-l-4'>
                    <p className='ml-4'>Example</p>
                    </div>
            </div>
        </div>
    </div>
  )
}

export default Dictionary