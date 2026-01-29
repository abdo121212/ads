import { Hammer, Palette, Printer, Globe, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const Features = () => {
  const features = [
    {
      title: "المصنع الداخلي",
      desc: "تنفيذ ديكورات المعارض والمنصات الخشبية بجودة عالية ودقة متناهية بأيدي خبراء التنفيذ.",
      icon: <Hammer className="w-8 h-8" />,
      color: "blue",
      gradient: "from-blue-500 to-cyan-400",
      lightBg: "bg-blue-50/50",
    },
    {
      title: "التصميم والإبداع",
      desc: "موشن جرافيك وتصميم هويات بصرية (2D/3D) تمنح علامتك بصمة مميزة لا تُنسى.",
      icon: <Palette className="w-8 h-8" />,
      color: "purple",
      gradient: "from-purple-500 to-indigo-500",
      lightBg: "bg-purple-50/50",
    },
    {
      title: "حلول الطباعة",
      desc: "طباعة بنرات، مطبوعات ورقية، وهدايا ترويجية بأحدث التقنيات الرقمية لضمان أبهى صورة.",
      icon: <Printer className="w-8 h-8" />,
      color: "emerald",
      gradient: "from-emerald-500 to-teal-400",
      lightBg: "bg-emerald-50/50",
    },
    {
      title: "التوسع الإقليمي",
      desc: "نخدم عملائنا داخل المملكة وخارجها بمعايير عالمية وسرعة استجابة لا تضاهى.",
      icon: <Globe className="w-8 h-8" />,
      color: "orange",
      gradient: "from-orange-500 to-yellow-500",
      lightBg: "bg-orange-50/50",
    },
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden" dir="rtl">
      {/* لمسة خلفية فنية */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-slate-50 rounded-full blur-3xl -z-10 opacity-50" />

      <div className="max-w-7xl mx-auto px-6 relative">
        {/* عنوان القسم */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="inline-block px-4 py-1.5 mb-6 text-sm font-bold tracking-wider text-[#ec6434] uppercase bg-[#ec6534] rounded-full"
          >
            قدراتنا وإمكانياتنا
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 leading-tight">
            لماذا تختار <span className="text-[#ec6434]">خطوط فريدة</span>
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed">
            "حلول متكاملة تحت سقف واحد، من التصميم إلى التنفيذ والطباعة"
          </p>
        </div>

        {/* شبكة المميزات */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`group relative p-8 rounded-[2.5rem] cursor-pointer ${item.lightBg} border border-transparent hover:border-white hover:bg-white transition-all duration-500 hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)]`}
            >
              {/* أيقونة بتأثير Glow */}
              <div className="relative w-16 h-16 mb-8">
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${item.gradient} blur-xl opacity-20 group-hover:opacity-40 transition-opacity`}
                />
                <div
                  className={`relative bg-white w-full h-full rounded-2xl flex items-center justify-center shadow-sm text-slate-800 group-hover:text-white group-hover:bg-gradient-to-br ${item.gradient} transition-all duration-500`}
                >
                  {item.icon}
                </div>
              </div>

              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                {item.title}
              </h3>
              <p className="text-slate-500 leading-relaxed mb-6 group-hover:text-slate-600">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
