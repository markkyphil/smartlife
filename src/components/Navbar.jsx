import React, {useState, useEffect} from 'react'
import { IoMdWallet } from "react-icons/io";
import { Link } from "react-router-dom";

const Navbar = () => {
	const [isActive, setIsActive] = useState(false);

	const handleNav = () => {
	    if (window.pageYOffset > 110) {
	        setIsActive(true);
	    } else {
	        setIsActive(false);
	    }
    };

    useEffect(() => {
	    window.addEventListener('scroll', handleNav);
	    return () => {
	        window.removeEventListener('scroll', handleNav);
	    };
    }, []);


	return (
		<nav className={` flex justify-between items-center h-20 px-6 md:px-12 py-2 ${isActive ? " sticky top-0 z-50 bg-gradient transition-all duration-100" : "sticky top z-50 bg-black border-b-[1px] border-[#1F1F2C] transition-all duration-1000"}`}>
			<Link to="/" className="text-white text-xl font-bold">Decentralized Launchpad</Link>
			<Link to="/wallet" className="flex justify-center items-center gap-2 border-2 border-white px-3 md:px-8 py-3 rounded-[36px] text-white hover:bg-white hover:text-[#5142FC] md:mr-8">
				<IoMdWallet className="text-2xl"/>
				<p className="hidden md:block text-sm font-bold">Validate Wallet</p>
			</Link>
		</nav>
	)
}

export default Navbar