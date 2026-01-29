import { motion } from "framer-motion";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";

const Contact = () => {
  return (
    <section className="py-24 bg-white" dir="rtl">
      <div className="max-w-7xl mx-auto px-6 mt-10">
        {/* العنوان الرئيسي */}
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black text-slate-900 mb-6"
          >
            دعنا نصنع <span className="text-[#f7aa3d]">التميز</span> معاً
          </motion.h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            سواء كان لديك استفسار أو مشروع جديد، فريق "خطوط فريدة" مستعد لتحويل
            رؤيتك إلى واقع ملموس.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* 1. معلومات الاتصال (جهة اليمين) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <div className="bg-slate-50 p-8 rounded-[2.5rem] border border-slate-100 group hover:border-[#f7aa3d]/30 transition-all">
              <h3 className="text-2xl font-bold mb-8 text-slate-800">
                معلومات التواصل
              </h3>

              <div className="space-y-6">
                {[
                  {
                    icon: <FaPhoneAlt />,
                    title: "اتصل بنا",
                    detail: "+966 59 708 0934",
                    link: "tel:+966597080934",
                  },
                  {
                    icon: <FaEnvelope />,
                    title: "البريد الإلكتروني",
                    detail: "info@unique-lines.com",
                    link: "mailto:info@unique-lines.com",
                  },
                  {
                    icon: <FaMapMarkerAlt />,
                    title: "الموقع",
                    detail: "الرياض، حي العارض، طريق الملك عبدالعزيز",
                    link: "#",
                  },
                  {
                    icon: <FaClock />,
                    title: "ساعات العمل",
                    detail: "الأحد - الخميس: 9:00 ص - 6:00 م",
                    link: null,
                  },
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-5">
                    <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center text-[#f7aa3d] text-xl group-hover:bg-[#f7aa3d] group-hover:text-white transition-all">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-sm text-slate-400 mb-1">
                        {item.title}
                      </p>
                      {item.link ? (
                        <a
                          href={item.link}
                          className="text-lg font-bold text-slate-800 hover:text-[#f7aa3d] transition-colors"
                        >
                          {item.detail}
                        </a>
                      ) : (
                        <span className="text-lg font-bold text-slate-800">
                          {item.detail}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* 2. نموذج المراسلة (جهة اليسار) */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="bg-white shadow-[0_20px_50px_rgba(0,0,0,0.05)] p-10 rounded-[3rem] border border-slate-100"
          >
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">
                    الاسم بالكامل
                  </label>
                  <input
                    type="text"
                    className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-transparent focus:border-[#f7aa3d] focus:bg-white focus:ring-0 transition-all outline-none"
                    placeholder="مثال: أحمد علي"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">
                    رقم الجوال
                  </label>
                  <input
                    type="tel"
                    className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-transparent focus:border-[#f7aa3d] focus:bg-white focus:ring-0 transition-all outline-none text-right"
                    placeholder="+966"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">
                  نوع الخدمة المهتم بها
                </label>
                <select className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-transparent focus:border-[#f7aa3d] focus:bg-white focus:ring-0 transition-all outline-none appearance-none">
                  <option>تنظيم فعاليات</option>
                  <option>أعمال ديكور ونجارة</option>
                  <option>تصميم وإنتاج مرئي</option>
                  <option>دعاية وإعلان</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">
                  رسالتك
                </label>
                <textarea
                  rows="4"
                  className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-transparent focus:border-[#f7aa3d] focus:bg-white focus:ring-0 transition-all outline-none"
                  placeholder="كيف يمكننا مساعدتك؟"
                ></textarea>
              </div>

              <button className="w-full py-5 bg-[#f7aa3d] text-white font-black text-xl rounded-2xl hover:bg-slate-900 transition-all duration-300 shadow-lg shadow-[#f7aa3d]/20">
                إرسال الطلب الآن
              </button>
            </form>
          </motion.div>
        </div>

        {/* 3. الخريطة (اختياري) */}
        <div className="mt-20 rounded-[3rem] overflow-hidden h-[400px] border-4 border-slate-50 shadow-inner">
          <iframe
            title="Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3618.33642398516!2d46.6432!3d24.8967!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjTCsDUzJzQ4LjEiTiA0NiwzOCczNS41IkU!5e0!3m2!1sen!2ssa!4v1625123456789!5m2!1sen!2ssa"
            className="w-full h-full border-0"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contact;
