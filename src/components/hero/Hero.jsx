import React, { useEffect, useState } from 'react';
import './hero.scss';
import Hello from '../../svg/Hello';
import { motion } from 'framer-motion';
import {
	animation,
	arrowVariants,
	containerVariants,
	fadeDown,
	fadeLeft,
} from '../../configs/framerVariants';
import { BsArrowDown } from 'react-icons/bs';
import { Link } from 'react-scroll';
import variables from '../../scss/abstracts/_variables.scss';
const Hero = () => {
	const [showImage, setShowImage] = useState(true);
	useEffect(() => {
		if (window.matchMedia(`(max-width: ${variables.tabletWidth})`).matches) {
			setShowImage(false);
		} else {
			setShowImage(true);
		}
	}, []);

	return (
		<div id='home' className='hero'>
			<motion.div
				variants={containerVariants}
				animate='visible'
				initial='hidden'
				className='container hero-container'
			>
				<div className='hero__about'>
					<motion.div className='hero__about__name' variants={fadeLeft}>
						Adem Ghorbel
					</motion.div>
					<div className='hero__about__lines'>
						<motion.div variants={fadeDown} className='line'>
							Hello, I am
						</motion.div>
						<motion.div variants={fadeDown} className='line'>
							<span className='text-primary'>Adem Ghorbel</span>.
						</motion.div>
						<motion.div variants={fadeDown} className='line'>
							I'm a Software
						</motion.div>
						<motion.div variants={fadeDown} className='line'>
							Engineer
						</motion.div>
					</div>
					{/* <p>
						I'm Freelancer, Front end Developer, I enjoy making websites and I'm
						a content creator
					</p> */}
				</div>
				{showImage && (
					<motion.div
						variants={animation}
						animate='bouncing'
						className='hero__image'
					>
						<Hello />
					</motion.div>
				)}
				<Link to='about' smooth={true} duration={500} offset={-80}>
					<motion.div
						variants={arrowVariants}
						whileHover={{ scale: 1.2 }}
						whileTap={{ scale: 0.8 }}
						className='hero__scrolldown'
					>
						<BsArrowDown />
					</motion.div>
				</Link>
			</motion.div>
		</div>
	);
};

export default Hero;
