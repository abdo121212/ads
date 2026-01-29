import React, { useState, useEffect, useRef } from "react";
import {
  FaUsers,
  FaHandshake,
  FaBullseye,
  FaUserFriends,
} from "react-icons/fa";

const stats = [
  {
    id: 1,
    target: 200,
    prefix: "+",
    label: "عملاء نشطون",
    icon: <FaUserFriends />,
    gradient: "from-blue-600 to-indigo-500",
  },
  {
    id: 2,
    target: 570,
    prefix: "+",
    label: "مشروعات مكتملة",
    icon: <FaHandshake />,
    gradient: "from-purple-600 to-fuchsia-500",
  },
  {
    id: 3,
    target: 98,
    suffix: "%",
    label: "نسبة النجاح",
    icon: <FaBullseye />,
    gradient: "from-rose-600 to-orange-500",
  },
  {
    id: 4,
    target: 3000,
    prefix: "+",
    label: "مستخدم سعيد",
    icon: <FaUsers />,
    gradient: "from-emerald-600 to-teal-500",
  },
];

const Counter = ({ target, duration = 2500, prefix = "", suffix = "" }) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      // استخدام Ease Out function لجعل الحركة أبطأ في النهاية (أكثر واقعية)
      const easeOut = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(easeOut * target));
      if (progress < 1) window.requestAnimationFrame(step);
    };
    window.requestAnimationFrame(step);
  }, [target, duration]);
  return (
    <>
      {prefix}
      {count.toLocaleString()}
      {suffix}
    </>
  );
};

const StatsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-24 bg-[#f8fafc] relative overflow-hidden"
      dir="rtl"
    >
      {/* عناصر خلفية جمالية */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] right-[-5%] w-[400px] h-[400px] bg-blue-50 rounded-full blur-[120px] opacity-60"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-purple-50 rounded-full blur-[120px] opacity-60"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* عنوان اختياري للقسم لزيادة الاحترافية */}
        <div className="text-center mb-16">
          <h2 className="text-2xl font-bold tracking-[0.2em]  text-blue-600 uppercase mb-3">
            أرقامنا تتحدث
          </h2>
          <div className="h-1 w-20 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="relative group bg-white p-10 rounded-[2rem] shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] transition-all duration-500 hover:-translate-y-3"
            >
              <div className="flex flex-col items-center">
                {/* حاوية الأيقونة مع تأثير النبض خفيف */}
                <div
                  className={`w-20 h-20 mb-6 rounded-2xl bg-gradient-to-br ${stat.gradient} flex items-center justify-center text-white text-3xl shadow-lg shadow-inherit/30 transform group-hover:scale-110 group-hover:rotate-[10deg] transition-all duration-500`}
                >
                  {stat.icon}
                </div>

                <div className="text-center">
                  <div className="text-5xl font-black text-slate-900 mb-2 tabular-nums">
                    {isVisible ? (
                      <Counter
                        target={stat.target}
                        prefix={stat.prefix}
                        suffix={stat.suffix}
                      />
                    ) : (
                      "0"
                    )}
                  </div>
                  <div className="text-slate-500 font-semibold text-lg">
                    {stat.label}
                  </div>
                </div>
              </div>

              {/* لمسة فنية: نقطة مضيئة في الزاوية تظهر عند الـ Hover */}
              <div
                className={`absolute top-4 right-4 w-2 h-2 rounded-full bg-gradient-to-r ${stat.gradient} opacity-0 group-hover:opacity-100 transition-opacity`}
              ></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
