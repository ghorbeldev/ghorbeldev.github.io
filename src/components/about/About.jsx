import { motion } from 'framer-motion';
import MainHeading from '../main-heading/MainHeading';
import Programming from '../../svg/Programming';
import { fadeDown, letter, sentence } from '../../configs/framerVariants';
import './about.scss';
const aboutText =
	"Software Engineer based in Tunisia. Driven by clean code, efficient systems, and modern technology.";
const About = () => {
	return (
		<motion.div
			id='about'
			className='about'
			initial='hidden'
			whileInView='visible'
			variants={{
				visible: {
					transition: {
						delay: 0.2,
						staggerChildren: 0.8,
					},
				},
			}}
			viewport={{ once: true, amount: 0.25 }}
		>
			<div className='container section'>
				<MainHeading className='main-heading'>About Me</MainHeading>
				<div className='about__content'>
					<motion.div className='about__paragraph' variants={sentence}>
						{aboutText.split(' ').map((char, index) => (
							<motion.span
								className={
									['programmer', 'developer'].includes(char.toLowerCase())
										? 'text-primary'
										: null
								}
								variants={letter}
								key={char + '-' + index}
							>
								{char}&nbsp;
							</motion.span>
						))}
					</motion.div>
					<motion.div
						variants={fadeDown}
						transition={{ delay: 2.85 }}
						className='about__image'
					>
						<Programming />
					</motion.div>
				</div>
			</div>
		</motion.div>
	);
};

export default About;
