import React from 'react'
import { Link } from 'react-router-dom'
import { FaSearch } from 'react-icons/fa';

export default function Header() {
  return (
    <header className='shadow-md bg-slate-200'>
    <div className='flex flex-1 p-4 justify-between items-center'>
    <Link to='/'>
    <h3 className='text-bold flex flex-wrap text-sm sm:text-xl'> 
    <span className='text-slate-500'>JAMAL</span>
    <span className='text-slate-700'>-ESTATE</span></h3>
    </Link>
   
    <form className='bg-slate-100 p-3 rounded-lg flex items-center'>
    <input 
      className="bg-transparent focus:outline-none w-24 sm:w-64"
      type='text'
      placeholder='Search...'
    />
    <button>
    <FaSearch className='text-slate-600'/>
    </button>
    </form>
    <ul className='flex justify-between items-center gap-4'>
    <li className='hidden sm:inline hover:underline'>
    <Link to='/'>Home</Link>
    </li>
    <li className='hidden sm:inline hover:underline'>
    <Link to='/about'>About</Link>
    </li>
    <li>
    <Link to='/signin' className='hover:underline'>Sign in</Link>
    </li>
    </ul>
    </div>

    </header>
  )
}
