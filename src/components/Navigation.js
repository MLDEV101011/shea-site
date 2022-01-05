import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBars} from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';
import { Link } from 'react-router-dom';


function Navigation() {
    const [showMenu, setShowMenu] = useState(false);

    let menu;

    if(showMenu) {
        menu = (
            <div className="fixed z-50 top-50 left-0 w-full p-5 bg-gray-500 ">
                <ul className='flex flex-col items-center justify-between'>
                    <li><Link to='/services' className='text-white font-bold text-xl'>Services</Link></li>
                    <li><Link to='/about' className='text-white font-bold text-xl '>About Shea</Link></li>
                    <li><Link to='/contact' className='text-white font-bold text-xl '>Contact Me</Link></li>
                    <li><Link to='/schedule' className='text-white font-bold text-xl'>Schedule an Appointment</Link></li>

                </ul>
            </div>
        )
    }

    return (
        <nav>
            <span className='border-b p-3 flex justify-between items-center'>
                <FontAwesomeIcon icon={faBars} onClick={() => setShowMenu(!showMenu)} />
            </span>
            {menu}
        </nav>
    )
}

export default Navigation
