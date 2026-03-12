import { motion } from 'framer-motion';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import portfolio from '../../configs/portfolio';
import MainHeading from '../main-heading/MainHeading';
import './portfolio.scss';
import { Pagination, Navigation } from 'swiper';
import { AiFillGithub } from 'react-icons/ai';
import { BsCodeSlash } from 'react-icons/bs';
import { fadeDown } from '../../configs/framerVariants';

const getScreenshotUrl = (demoURL, fallbackImg) => {
	if (!demoURL) return fallbackImg;

	const params = new URLSearchParams({
		url: demoURL,
		screenshot: true,
		meta: false,
		embed: 'screenshot.url',
		colorScheme: 'dark',
		waitForTimeout: 3000,
		waitUntil: 'networkidle0',
		width: 1920,
		height: 1080,
		orientation: 'landscape',
	});

	return `https://api.microlink.io/?${params.toString()}`;
};

const Portfolio = () => {
	return (
		<motion.div
			initial='hidden'
			whileInView='visible'
			id='portfolio'
			className='portfolio'
			variants={{
				visible: {
					transition: {
						staggerChildren: 0.2,
					},
				},
			}}
			viewport={{ once: true, amount: 0.25 }}
		>
			<div className='container section'>
				<MainHeading className='main-heading'>Portfolio</MainHeading>
				<div className='portfolio__content'>
					<Swiper
						modules={[Navigation, Pagination]}
						pagination={{
							clickable: true,
						}}
						loop={true}
						slidesPerView={1}
						spaceBetween={20}
						breakpoints={{
							576: {
								slidesPerView: 1.5,
								spaceBetween: 20,
							},
							768: {
								slidesPerView: 2,
								spaceBetween: 20,
							},
							992: {
								slidesPerView: 2.5,
								spaceBetween: 20,
							},
							1400: {
								slidesPerView: 3,
								spaceBetween: 20,
							},
						}}
						navigation={true}
					>
						{portfolio.map((project, index) => (
							<SwiperSlide key={index}>
								<motion.div
									variants={fadeDown}
									className='portfolio__content--card'
								>
									<div className='portfolio__content--card--img'>
										<img
											src={getScreenshotUrl(project.demoURL, project.img)}
											alt={project.title}
										/>
									</div>
									<h3>{project.title}</h3>
									<div className='focus-content'>
										<ul className='technologies'>
											{project.description.map((tech, index) => (
												<li key={index}>{tech}</li>
											))}
										</ul>
										<div className='links'>
											{project.repoURL && (
												<a
													className='link'
													href={project.repoURL}
													target='_blank'
													rel='noreferrer'
												>
													<AiFillGithub />
													<span>Git</span>
												</a>
											)}
											{project.demoURL && (
												<a
													className='link'
													href={project.demoURL}
													target='_blank'
													rel='noreferrer'
												>
													<BsCodeSlash /> <span>Demo</span>
												</a>
											)}
										</div>
									</div>
								</motion.div>
							</SwiperSlide>
						))}
					</Swiper>
				</div>
			</div>
		</motion.div>
	);
};

export default Portfolio;
