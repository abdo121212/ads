import {
  Cpu,
  Layout,
  Megaphone,
  Hammer,
  PenTool,
  Printer,
  Sparkles,
  Layers,
  ArrowUpRight,
} from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      title: "تقنية الفعاليات الذكية",
      desc: "شاشات تفاعلية، أنظمة مسرح متطورة، وحلول إضاءة وصوت تضيف بعداً بصرياً وسمعياً فريداً.",
      icon: <Cpu className="w-8 h-8" />,
      size: "lg:col-span-2",
      bg: "bg-slate-50",
    },
    {
      title: "تنظيم المعارض",
      desc: "إدارة الفعاليات من الألف إلى الياء بأسلوب يبرز قوة العلامة التجارية.",
      icon: <Layout className="w-8 h-8" />,
      size: "lg:col-span-1",
      bg: "bg-white",
    },
    {
      title: "الدعاية والإعلان",
      desc: "تصميم وتنفيذ اللوحات الخارجية والهدايا التذكارية المبتكرة.",
      icon: <Megaphone className="w-8 h-8" />,
      size: "lg:col-span-1",
      bg: "bg-white",
    },
    {
      title: "أعمال النجارة والديكور",
      desc: "من خلال مصنعنا الداخلي نقدم منصات خشبية وهياكل خاصة بجودة عالمية.",
      icon: <Hammer className="w-8 h-8" />,
      size: "lg:col-span-1",
      bg: "bg-slate-50",
    },
    {
      title: "الواقع الافتراضي (الخدمة المضافة)",
      desc: "إبهار الحضور بتقنيات VR/AR لتجربة فعاليات غامرة تفاعلية لا تُنسى.",
      icon: <Layers className="w-8 h-8" />,
      size: "lg:col-span-1",
      bg: "bg-white",
    },
    {
      title: "التصميم المرئي 3D/2D",
      desc: "موشن جرافيك وتصميم هويات بصرية بأسلوب معاصر وبصمة مميزة.",
      icon: <PenTool className="w-8 h-8" />,
      size: "lg:col-span-2",
      bg: "bg-slate-50",
    },
    {
      title: "خدمات الطباعة الرقمية",
      desc: "طباعة البنرات، الهدايا، والمطبوعات الورقية والكتالوجات بجودة احترافية.",
      icon: <Printer className="w-8 h-8" />,
      size: "lg:col-span-3", // كرت عريض جداً في النهاية لختم القسم
      bg: "bg-white",
    },
  ];

  return (
    <section className="py-24 bg-white text-slate-900 " dir="rtl">
      <div className="max-w-7xl mx-auto px-6 mt-10">
        {/* رأس القسم */}
        <div className="flex flex-col lg:flex-row items-end justify-between mb-20 gap-8">
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="max-w-2xl text-right"
          >
            <div className="flex items-center gap-2 text-[#f7aa3d] mb-4">
              <Sparkles className="w-5 h-5 fill-[#f7aa3d]" />
              <span className="font-bold tracking-widest uppercase text-sm">
                خدماتنا المتميزة
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black leading-tight text-slate-900">
              حلولنا الإبداعية <br />
              <span className="text-[#f7aa3d]">تحت سقف واحد</span>
            </h2>
          </motion.div>
          <p className="text-slate-500 text-lg max-w-sm text-right border-r-4 border-[#f7aa3d] pr-6">
            من الفكرة إلى التنفيذ، نضمن لك جودة تفوق التوقعات في كل تفاصيل
            فعاليتك.
          </p>
        </div>

        {/* شبكة Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`group relative p-10 rounded-[3rem] border border-slate-100 shadow-sm transition-all duration-500 hover:shadow-2xl hover:shadow-[#f7aa3d]/10 ${service.size} ${service.bg}`}
            >
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex justify-between items-start mb-10">
                  <div className="w-16 h-16 bg-white rounded-2xl shadow-md flex items-center justify-center text-[#f7aa3d] group-hover:bg-[#f7aa3d] group-hover:text-white transition-all duration-500 transform group-hover:rotate-6">
                    {service.icon}
                  </div>
                  <div className="bg-slate-100 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowUpRight className="w-5 h-5 text-[#f7aa3d]" />
                  </div>
                </div>

                <h3 className="text-2xl font-bold mb-4 text-slate-800">
                  {service.title}
                </h3>
                <p className="text-slate-500 leading-relaxed text-md mb-8">
                  {service.desc}
                </p>

                {/* خط التفاعل السفلي */}
                <div className="mt-auto pt-6">
                  <div className="w-12 h-1.5 bg-[#f7aa3d]/20 rounded-full overflow-hidden group-hover:w-full transition-all duration-700">
                    <div className="w-full h-full bg-[#f7aa3d] -translate-x-full group-hover:translate-x-0 transition-transform duration-700"></div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <Link
          to={"/contact"}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          {/* CTA بسيط وراقي */}
          <div className="mt-20 text-center ">
            <button className="group relative overflow-hidden bg-slate-900 text-white px-12 py-5 rounded-full font-bold text-xl shadow-xl transition-all hover:scale-105 active:scale-95">
              <span className="relative z-10 ">ابدأ رحلة الإبهار معنا</span>
              <div className="absolute inset-0 bg-[#f7aa3d] translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            </button>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default Services;
