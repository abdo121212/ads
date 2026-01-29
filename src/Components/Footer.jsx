import { FiTwitter } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { Link } from "react-router-dom";
import { FaInstagram, FaLinkedin, FaMobileAlt } from "react-icons/fa";
import logo from "../assets/Gemini_Generated_Image_jrtlbljrtlbljrtl.png";

const Footer = () => {
  const FooterLinks = [
    { id: 1, title: "الرئيسية", link: "/" },
    { id: 2, title: "أعمالنا", link: "/projects" },
    { id: 3, title: "خدماتنا", link: "/services" },
    { id: 4, title: "اتصل بنا", link: "/contact" },
  ];

  return (
    <footer className="bg-white border-t border-slate-100 pt-16" dir="rtl">
      <div className="container mx-auto px-6 pb-12">
        {/* شبكة الفوتر المتجاوبة */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-right">
          {/* 1. معلومات الشركة واللوجو */}
          <section className="flex flex-col items-start space-y-6 order-last lg:order-first">
            <Link to="/" onClick={() => window.scrollTo(0, 0)}>
              <img src={logo} alt="خطوط فريدة" className="w-40 h-auto" />
            </Link>
            <p className="text-slate-500 leading-relaxed font-medium">
              خطوط فريدة.. نصنع الإبداع، نبني الهوية، ونقودك للصدارة بفعاليات لا
              تُنسى.
            </p>
            {/* أيقونات التواصل الاجتماعي */}
            <div className="flex gap-4">
              {[
                { icon: <FiTwitter />, link: "#" },
                { icon: <FaInstagram />, link: "#" },
                { icon: <FaLinkedin />, link: "#" },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.link}
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-50 text-slate-600 hover:bg-[#f7aa3d] hover:text-white transition-all duration-300 shadow-sm"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </section>

          {/* 2. روابط سريعة */}
          <section>
            <h3 className="text-xl font-bold mb-6 text-slate-900 border-r-4 border-[#f7aa3d] pr-3">
              روابط سريعة
            </h3>
            <ul className="space-y-4 text-slate-600 font-medium">
              {FooterLinks.map((link) => (
                <li key={link.id}>
                  <Link
                    to={link.link}
                    onClick={() => window.scrollTo(0, 0)}
                    className="hover:text-[#f7aa3d] hover:pr-2 transition-all duration-300 inline-block"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          {/* 3. خدماتنا */}
          <section>
            <h3 className="text-xl font-bold mb-6 text-slate-900 border-r-4 border-[#f7aa3d] pr-3">
              خدماتنا
            </h3>
            <ul className="space-y-4 text-slate-600 font-medium">
              {[
                "أعمال النجارة والديكور",
                "التصميم المرئي والإبداعي",
                "الهوية البصرية",
                "طباعة البنرات الدعائية",
                "الهدايا الترويجية",
              ].map((service, i) => (
                <li
                  key={i}
                  className="hover:text-[#f7aa3d] cursor-pointer transition-colors"
                >
                  {service}
                </li>
              ))}
            </ul>
          </section>

          {/* 4. معلومات التواصل */}
          <section>
            <h3 className="text-xl font-bold mb-6 text-slate-900 border-r-4 border-[#f7aa3d] pr-3">
              تواصل معنا
            </h3>
            <div className="space-y-5 text-slate-600 font-medium">
              <div className="flex items-start gap-4">
                <HiOutlineLocationMarker className="text-[#f7aa3d] w-6 h-6 shrink-0" />
                <span className="text-sm">
                  المملكة العربية السعودية، الرياض، حي العارض، طريق الملك
                  عبدالعزيز
                </span>
              </div>
              <div className="flex items-center gap-4">
                <FaMobileAlt className="text-[#f7aa3d] w-5 h-5 shrink-0" />
                <a
                  href="tel:+966597080934"
                  dir="ltr"
                  className="hover:text-[#f7aa3d] transition-colors"
                >
                  +966 59 708 0934
                </a>
              </div>
              <div className="flex items-center gap-4">
                <MdOutlineEmail className="text-[#f7aa3d] w-5 h-5 shrink-0" />
                <a
                  href="mailto:info@unique-lines.com"
                  className="hover:text-[#f7aa3d] transition-colors"
                >
                  info@unique-lines.com
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* حقوق النشر */}
      <div className="border-t border-slate-100 bg-slate-50 py-6">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-sm font-medium">
          <p>
            © جميع الحقوق محفوظة لشركة خطوط فريدة {new Date().getFullYear()}
          </p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-[#f7aa3d]">
              سياسة الخصوصية
            </a>
            <a href="#" className="hover:text-[#f7aa3d]">
              الشروط والأحكام
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
