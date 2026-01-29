import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import { motion } from "framer-motion"; // لإضافة أنيميشن احترافي
import img2 from "../assets/Silder/Gemini_Generated_Image_bw833fbw833fbw83.jpeg";
import img1 from "../assets/Silder/Gemini_Generated_Image_w9ztrzw9ztrzw9zt.jpeg";
import img3 from "../assets/Silder/Gemini_Generated_Image_wfyoahwfyoahwfyo.jpeg";

// ستايلات Swiper
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

const HeroServices = () => {
  const services = [
    {
      id: "01",
      title: "تقنية الفعاليات",
      description:
        "نوفر أحدث الحلول التقنية بدءًا من الشاشات التفاعلية الذكية، وأنظمة المسرح المتطورة، وتقنيات الصوت والإضاءة عالية الجودة التي تضيف بعدًا بصريا وسمعيًا فريدا لكل فعالية.",
      image: img1,
    },
    {
      id: "02",
      title: "تنظيم الفعاليات والمعارض",
      description:
        "ندير الفعاليات من الألف إلى الياء: التخطيط، التسجيل، الإخراج، إدارة المسرح، وتنفيذ المعارض بأسلوب يبرز قوة العلامة التجارية ويترك انطباعًا عميقا لدى الحضور.",
      image: img2,
    },
    {
      id: "03",
      title: "الدعاية والإعلان",
      description:
        "تصميم وتنفيذ المواد الترويجية بمختلف أشكالها: اللوحات الخارجية، المطبوعات، الهدايا التذكارية، والعناصر الدعائية المبتكرة.",
      image: img3,
    },
  ];

  return (
    <div
      className="relative h-screen w-full bg-slate-900 overflow-hidden "
      dir="rtl"
    >
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect={"fade"}
        speed={1200}
        autoplay={{ delay: 6000, disableOnInteraction: false }}
        loop={true}
        pagination={{ clickable: true }}
        navigation={true}
        className="h-full w-full"
      >
        {services.map((service, index) => (
          <SwiperSlide
            key={index}
            className="relative w-full h-full  select-none"
          >
            {/* الخلفية مع زووم خفيف */}
            <div className="absolute inset-0 overflow-hidden">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover  bg-fixed transition-transform duration-[6000ms] scale-110 hover:scale-100"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>
            </div>

            {/* المحتوى */}
            <div className="relative z-10 flex h-full items-center px-6 md:px-20 lg:px-32">
              <div className="max-w-3xl text-right">
                {/* رقم الخدمة في الخلفية */}
                <span className="absolute -top-10 right-10 text-[12rem] font-black text-white/5 select-none md:block hidden">
                  {service.id}
                </span>

                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <h2 className="text-[#ec6434] text-xl md:text-2xl font-bold mb-2 flex items-center gap-3">
                    <span className="w-10 h-[2px] bg-[#ec6434] inline-block"></span>
                    خدماتنا المميزة
                  </h2>

                  <h1 className="text-white text-4xl md:text-6xl font-black mb-6 leading-tight">
                    {service.title}
                  </h1>

                  <p className="text-gray-200 text-lg md:text-2xl mb-8 leading-relaxed max-w-2xl border-r-4 border-[#ec6434] pr-4">
                    {service.description}
                  </p>

                  <div className="flex gap-4">
                    <button className="px-10 py-4 bg-[#ec6434] cursor-pointer hover:bg-[#ec6434]/50 text-white rounded-md font-bold transition-all shadow-xl hover:-translate-y-1">
                      طلب الخدمة
                    </button>
                    <button className="px-10 py-4 border border-white/30 text-white  cursor-pointer hover:text-[#ec6434] rounded-md font-bold transition-all">
                      رؤية المزيد
                    </button>
                  </div>
                </motion.div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroServices;
