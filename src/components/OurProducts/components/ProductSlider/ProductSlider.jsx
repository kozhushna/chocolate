import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css/autoplay';
import 'swiper/css';
import { products } from 'utils/products';
import { ProductSwiper, Item } from './ProductSlider.styled';
import { ProductItem } from '../ProductItem/ProductItem';
import { useEffect, useState } from 'react';

export const ProductSlider = () => {
  const [slidesCount, setSlidersCount] = useState();

  useEffect(() => {
    window.addEventListener('resize', handleScreenWidth);
    return () => window.removeEventListener('resize', handleScreenWidth);
  }, [slidesCount]);

  const handleScreenWidth = () => {
    if (window.innerWidth >= 1200) {
      return setSlidersCount(4);
    }
    if ((window.innerWidth < 1200) & (window.innerWidth >= 768)) {
      return setSlidersCount(2.6);
    }
    if (window.innerWidth < 767) {
      return setSlidersCount(1);
    }
  };

  const initialSlidesCount = () => {
    if (slidesCount) {
      return slidesCount;
    }
    if (window.innerWidth >= 1200) {
      return 4;
    }
    if ((window.innerWidth < 1200) & (window.innerWidth >= 768)) {
      return 2.6;
    }
    if (window.innerWidth < 768) {
      return 1;
    }
  };
  return (
    <ProductSwiper
      modules={[Autoplay, Pagination]}
      spaceBetween={18}
      slidesPerView={initialSlidesCount()}
      pagination={{ el: '.pagination-container' }}
      autoplay={{ delay: 7000, disableOnInteraction: false }}
      loop={true}
      speed={1500}
    >
      <>
        {products.map(product => {
          return (
            <Item key={product.id}>
              <ProductItem product={product}></ProductItem>
            </Item>
          );
        })}
      </>
    </ProductSwiper>
  );
};
