import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Banner = () => {
  return (
    <div style={{ marginTop: '100px', padding: '0px 120px' }}>
      <Swiper
        pagination={{
          type: 'fraction',
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
        autoplay={{ delay: 4000, disableOnInteraction: false }}
      >
        <SwiperSlide>
          <img src="/banner.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          {' '}
          <img src="/banner2.png" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
