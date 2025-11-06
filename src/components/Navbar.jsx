import logo from '../../public/images/logo.svg'
import { useState } from 'react'

const Navbar = () => {
  const[isHamClick, setIsHamClick] = useState(false);

  return (
    <div className="navbar  relative">
      <div className="flex-1">
        <img src={logo} alt="" />
      </div>
      <div className="flex-none ">
        <button className="cursor-pointer border-0" onClick={() => setIsHamClick(true)}>
          <i className="fa-solid fa-bars fa-2xl" style={{ color: 'hsl(257,7%,63%' }} ></i>
        </button>
      </div>


      <div className={`absolute text-white bg-purple-950 rounded-xl p-4 py-8 gap-4  text-center font-bold top-17 inset-x-0 mx-auto ${isHamClick ? 'grid' : 'hidden'} `} >
        <p>Features</p>
        <p>Pricing</p>
        <p className=''>Resources</p>
        <hr className='text-gray-400'/>
        <p>Login</p>
        <button className='bg-blue-400 w-full rounded-full cursor-pointer py-2   '>Sign Up</button>
      </div>
      
      
    </div>
  )
}
export default Navbar