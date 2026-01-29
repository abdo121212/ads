import image2 from "../assets/Partners/download__10_-removebg-preview.WebP";
import image4 from "../assets/Partners/download__12_-removebg-preview.WebP";
import image7 from "../assets/Partners/download__16_-removebg-preview.WebP";
import image8 from "../assets/Partners/download__17_-removebg-preview.WebP";
import image9 from "../assets/Partners/download__19_-removebg-preview.WebP";
import image10 from "../assets/Partners/download__20_-removebg-preview.WebP";
import image11 from "../assets/Partners/pelco-logo-png_seeklogo-107217-removebg-preview.WebP";
import image14 from "../assets/Partners/download__3_-removebg-preview.WebP";
import image15 from "../assets/Partners/download__4_-removebg-preview.WebP";
import image16 from "../assets/Partners/download__5_-removebg-preview.WebP";
import image18 from "../assets/Partners/download__7_-removebg-preview.WebP";
import image21 from "../assets/Partners/download__21_-removebg-preview.WebP";

import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const Partners = () => {
  const partners = [
    { id: 10, image: image10, name: "Partner 10" },
    { id: 11, image: image11, name: "Pelco" },
    { id: 14, image: image14, name: "Partner 14" },
    { id: 16, image: image16, name: "Partner 16" },
    { id: 18, image: image18, name: "Partner 18" },
    { id: 21, image: image21, name: "Partner 21" },
    { id: 2, image: image2, name: "Partner 2" },
    { id: 4, image: image4, name: "Partner 4" },
    { id: 7, image: image7, name: "Partner 7" },
    { id: 8, image: image8, name: "Partner 8" },
    { id: 15, image: image15, name: "Partner 15" },

    { id: 9, image: image9, name: "Partner 9" },
  ];

  return (
    <section className="dark:text-white dark:bg-black container  my-20 duration-300">
      <h1
        className="text-3xl sm:text-4xl text-center font-bold text-[#223760] dark:text-white mb-12 pb-10"
        data-aos="fade-up"
      >
        شركاء النجاح
      </h1>

      <div data-aos="fade-up" data-aos-delay="400" className="slider-container">
        <Swiper
          slidesPerView={2}
          spaceBetween={20}
          loop={true}
          modules={[Autoplay]}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: false,
          }}
          speed={1000}
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 5 },
          }}
          className="z-10"
          dir="ltr"
        >
          {partners.map(({ id, image, name }) => (
            <SwiperSlide key={id}>
              <div className="flex items-center justify-center">
                <img
                  src={image}
                  alt={`Logo of ${name}`}
                  className="object-cover h-30 w-40 rounded-2xl "
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Partners;
