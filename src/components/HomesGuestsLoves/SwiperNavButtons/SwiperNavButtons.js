import React from 'react';
import { useSwiper } from 'swiper/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faCircleChevronRight,
	faCircleChevronLeft
} from '@fortawesome/free-solid-svg-icons';

import './SwiperNavButtons.css';

const SwiperNavButtons = () => {
	const nextBtn = (
		<FontAwesomeIcon
			icon={faCircleChevronRight}
			size='2xl'
			style={{ color: '#f3f3f4' }}
		/>
	);
	const prevBtn = (
		<FontAwesomeIcon
			icon={faCircleChevronLeft}
			size='2xl'
			style={{ color: '#f3f3f4' }}
		/>
	);
	const swiper = useSwiper();
	return (
		<div className={'swiper-nav-btn'}>
			<button className={'prev-btn'} onClick={() => swiper.slidePrev()}>
				{prevBtn}
			</button>
			<button className={'next-btn'} onClick={() => swiper.slideNext()}>
				{nextBtn}
			</button>
		</div>
	);
};

export default SwiperNavButtons;
