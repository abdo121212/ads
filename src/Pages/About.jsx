import React, { useState } from "react";
import {
  X,
  Eye,
  Layout,
  Palette,
  Megaphone,
  Monitor,
  Camera,
  Calendar,
  ExternalLink,
  Smartphone,
} from "lucide-react";

const Portfolio = () => {
  const [filter, setFilter] = useState("الكل");
  const [selectedProject, setSelectedProject] = useState(null);

  // التصنيفات الخاصة بوكالة خطوط فردية
  const categories = [
    "الكل",
    "دعاية وإعلان",
    "تنظيم فعاليات",
    "تقنية الفعاليات",
    "هوية بصرية",
  ];

  const portfolioItems = [
    {
      id: 1,
      category: "دعاية وإعلان",
      title: "حملة إعلانية طرقية",
      image:
        "https://images.unsplash.com/photo-1541746972996-4e0b0f43e01a?q=80&w=800",
      description:
        "تصميم وتنفيذ لوحات إعلانية خارجية (Billboards) لتعزيز الوعي بالعلامة التجارية باستخدام أحدث تقنيات الطباعة.",
    },
    {
      id: 2,
      category: "تقنية الفعاليات",
      title: "شاشات تفاعلية LED",
      image:
        "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=800",
      description:
        "تزويد الفعاليات بشاشات عرض ذكية وأنظمة تفاعلية لإبهار الحضور وتقديم محتوى رقمي متميز.",
    },
    {
      id: 3,
      category: "هوية بصرية",
      title: "براندينج وكالة خطوط",
      image:
        "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=800",
      description:
        "بناء هوية بصرية كاملة تشمل الشعار، الألوان، والخطوط التي تعكس قوة وتميز الوكالة.",
    },
    {
      id: 4,
      category: "تنظيم فعاليات",
      title: "معرض الأعمال الدولي",
      image:
        "https://images.unsplash.com/photo-1475721027187-402ec75d2460?q=80&w=800",
      description:
        "تخطيط وتنفيذ كامل للمعرض من تصميم المنصات (Stands) إلى إدارة حركة الزوار.",
    },
    {
      id: 5,
      category: "تقنية الفعاليات",
      title: "أنظمة الصوت والإضاءة",
      image:
        "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=800",
      description:
        "إدارة الجوانب التقنية للصوت والإضاءة المسرحية لضمان تجربة بصرية وسمعية مذهلة.",
    },
    {
      id: 6,
      category: "دعاية وإعلان",
      title: "إنتاج فيديو ترويجي",
      image:
        "https://images.unsplash.com/photo-1536243298747-ea8874136d64?q=80&w=800",
      description:
        "تصوير وإنتاج فيديو إعلاني عالي الجودة لعرض خدمات العملاء بشكل إبداعي وجذاب.",
    },
  ];

  const getIcon = (cat) => {
    switch (cat) {
      case "دعاية وإعلان":
        return <Megaphone size={18} />;
      case "تنظيم فعاليات":
        return <Calendar size={18} />;
      case "تقنية الفعاليات":
        return <Monitor size={18} />;
      case "هوية بصرية":
        return <Palette size={18} />;
      default:
        return <ExternalLink size={18} />;
    }
  };

  const filteredItems =
    filter === "الكل"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === filter);

  return (
    <section className="py-24 bg-white" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* العناوين */}
        <div className="text-center mb-12">
          <h2 className="text-sm font-bold text-[#ec6434] tracking-widest uppercase mb-2">
            وكالة خطوط فردية
          </h2>
          <h3 className="text-4xl md:text-5xl font-black text-gray-900">
            أعمالنا <span className="text-[#ec6434]">الإبداعية</span>
          </h3>
          <div className="w-20 h-1.5 bg-[#ec6434] mx-auto mt-4 rounded-full"></div>
        </div>

        {/* أزرار التصفية */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full font-bold transition-all duration-300 ${
                filter === cat
                  ? "bg-[#ec6434] text-white shadow-lg shadow-orange-200"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* شبكة الأعمال */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedProject(item)}
              className="group relative cursor-pointer overflow-hidden rounded-3xl shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              <div className="aspect-[4/5] w-full">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-8">
                <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="flex items-center gap-2 text-[#ec6434] text-sm font-bold mb-2">
                    {getIcon(item.category)}
                    {item.category}
                  </span>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {item.title}
                  </h3>
                  <button className="bg-white text-black px-5 py-2 rounded-full text-sm font-bold flex items-center gap-2">
                    عرض المشروع <Eye size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* مودال التفاصيل */}
      {selectedProject && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md">
          <div className="bg-white rounded-[2rem] overflow-hidden max-w-4xl w-full relative animate-in zoom-in duration-300">
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-5 left-5 p-2 bg-gray-100 hover:bg-[#ec6434] hover:text-white rounded-full transition-colors z-10"
            >
              <X size={24} />
            </button>

            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/2 h-[300px] md:h-auto">
                <img
                  src={selectedProject.image}
                  className="w-full h-full object-cover"
                  alt=""
                />
              </div>
              <div className="md:w-1/2 p-10 text-right flex flex-col justify-center">
                <span className="text-[#ec6434] font-bold text-sm mb-2">
                  {selectedProject.category}
                </span>
                <h3 className="text-3xl font-black text-gray-900 mb-4">
                  {selectedProject.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-lg mb-8">
                  {selectedProject.description}
                </p>
                <button className="bg-[#ec6434] text-white py-4 rounded-2xl font-bold text-lg shadow-lg hover:bg-[#d4562b] transition-all">
                  طلب استشارة لهذا المشروع
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;
