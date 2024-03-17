import React from 'react';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { data } from './homes-data';

import Title from '../Title/Title';
import HomesSlide from './SwiperSlide/HomesSlide';
import SwiperNavButtons from './SwiperNavButtons/SwiperNavButtons';

import 'swiper/css';
import 'swiper/css/navigation';
import './HomesGuestsLoves.css';
import Container from '../Container/Container';

const HomesGuestsLoves = () => (
	<section className={'homes-guest-loves'}>
		<Container>
			<Title>Homes guests loves</Title>
			<Swiper modules={[Navigation]} spaceBetween={16} slidesPerView={4}>
				{data.map(({ id, name, city, country, imageUrl }) => (
					<SwiperSlide key={id}>
						<HomesSlide
							name={name}
							city={city}
							country={country}
							imageUrl={imageUrl}
						/>
					</SwiperSlide>
				))}
				<SwiperNavButtons />
			</Swiper>
		</Container>
	</section>
);

export default HomesGuestsLoves;
