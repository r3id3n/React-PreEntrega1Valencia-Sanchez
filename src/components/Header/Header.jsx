import { Routes, Route, Link } from 'react-router-dom';
import Navbar from '../NavBar/NavBar';

function Header() {
  return (
    <header className='bg-cyan-700 p-4 text-white shadow-md'>
        <div className='container flex justify-between mx-auto'>
            <Link to="/">
                <h1 id='titulo' className='text-white text-3xl'>
                    Solo Proce
                </h1>
            </Link>
            <Navbar />
        </div>
    </header>
  )
}

export default Header