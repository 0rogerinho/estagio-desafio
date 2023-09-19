import CardCarousel from './CardCarousel';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper/modules';
import Typography from '@mui/material/Typography';
import getProduct from '../../api/getProducts';

const Carousel = () => {
  const { products } = getProduct();
  return (
    <div style={{ margin: '100px 120px' }}>
      <Typography variant="h3" sx={{ marginBottom: '30px' }}>
        Recent announcements
      </Typography>
      <Swiper
        slidesPerView={4}
        centeredSlides={false}
        spaceBetween={30}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        {' '}
        {products.map(({ _id, name, img, price, stock }, index) => (
          <SwiperSlide style={{ overflow: 'none' }} key={_id}>
            <CardCarousel
              indexProduct={index}
              title={name}
              img={img}
              price={price}
              stock={stock}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;

/*{slides.map(({ content, img }, index) => (
  <CardCarousel key={index} content={content} img={img} />
))}*/
