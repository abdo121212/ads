import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import img1 from "../assets/Partners/1636873884225.jfif";
import img2 from "../assets/Partners/download.png";
import img3 from "../assets/Partners/download.png";

const Partners = () => {
  const partners = [
    { id: 1, image: img3, name: "Partner 10" },
    { id: 2, image: img1, name: "Pelco" },

    { id: 3, image: img2, name: "Partner 2" },
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
