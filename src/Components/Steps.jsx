import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";
import {
  FaLightbulb,
  FaDraftingCompass,
  FaTools,
  FaRocket,
} from "react-icons/fa";

const Steps = () => {
  const containerRef = useRef(null);

  const steps = [
    {
      title: "التخطيط والدراسة",
      desc: "نحلل أفكارك بعمق، ندرس السوق، ونرسم الخطوط العريضة لضمان نجاح الفعالية من اللحظة الأولى.",
      icon: <FaLightbulb />,
      color: "from-blue-500 to-cyan-400",
    },
    {
      title: "التصميم والإخراج",
      desc: "نحول الأحلام إلى مخططات هندسية وتصاميم ثلاثية الأبعاد تتيح لك رؤية النتيجة قبل التنفيذ.",
      icon: <FaDraftingCompass />,
      color: "from-indigo-500 to-purple-500",
    },
    {
      title: "التصنيع والتنفيذ",
      desc: "في مصانعنا الخاصة، تتحول الأخشاب والمعادن والإضاءة إلى قطع فنية تحاكي التصميم بدقة.",
      icon: <FaTools />,
      color: "from-fuchsia-500 to-pink-500",
    },
    {
      title: "الإطلاق والإبهار",
      desc: "نحن خلف الكواليس وبجوارك على المسرح، لضمان إدارة كل تفصيلة بأعلى مستويات الاحترافية.",
      icon: <FaRocket />,
      color: "from-orange-500 to-amber-400",
    },
  ];

  return (
    <section
      ref={containerRef}
      className="py-24 bg-slate-50 relative overflow-hidden"
      dir="rtl"
    >
      {/* دوائر ضوئية في الخلفية */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-blue-50/50 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-purple-50/50 rounded-full blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto px-6 relative">
        {/* رأس القسم */}
        <div className="mb-20 text-center md:text-right">
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-blue-600 font-bold tracking-[0.3em] uppercase text-2xl block mb-4"
          >
            منهجية العمل
          </motion.span>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-black text-slate-900 leading-tight"
          >
            رحلة تحويل فكرتك <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-l from-blue-600 to-purple-600">
              إلى واقع ملموس
            </span>
          </motion.h3>
        </div>

        {/* شبكة الخطوات */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative">
          {/* الخط الواصل المتحرك (يظهر في الشاشات الكبيرة) */}
          <div className="hidden lg:block absolute top-[40px] left-0 right-0 h-[2px] bg-slate-200 -z-0">
            <motion.div
              initial={{ width: "0%" }}
              whileInView={{ width: "100%" }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="h-full bg-gradient-to-r from-blue-600 to-purple-600 shadow-[0_0_10px_rgba(37,99,235,0.5)]"
            />
          </div>

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              className="relative group flex flex-col items-center md:items-start"
            >
              {/* أيقونة الخطوة والرقم */}
              <div className="relative mb-8">
                <div
                  className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${step.color} shadow-xl flex items-center justify-center text-white text-3xl z-10 relative transform group-hover:rotate-[10deg] transition-transform duration-300`}
                >
                  {step.icon}
                </div>
                {/* الرقم الصغير المرتفع */}
                <div className="absolute -top-3 -right-3 w-8 h-8 bg-slate-900 text-white text-xs font-bold rounded-full flex items-center justify-center border-4 border-white z-20">
                  {index + 1}
                </div>
                {/* تأثير الهالة خلف الأيقونة */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${step.color} blur-xl opacity-20 group-hover:opacity-40 transition-opacity`}
                />
              </div>

              {/* محتوى النص */}
              <div className="text-center md:text-right">
                <h4 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">
                  {step.title}
                </h4>
                <p className="text-slate-500 leading-relaxed font-medium">
                  {step.desc}
                </p>
              </div>

              {/* لمسة "الربط" بين العناصر */}
              <div className="mt-6 w-12 h-1 bg-slate-100 rounded-full overflow-hidden">
                <motion.div
                  initial={{ x: "-100%" }}
                  whileInView={{ x: "0%" }}
                  transition={{ delay: 0.5 + index * 0.2, duration: 0.5 }}
                  className={`h-full bg-gradient-to-r ${step.color}`}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Steps;
