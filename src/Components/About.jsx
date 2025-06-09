import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from "./Navbar";
import Footer from "./Footer";
import imga from "../assets/about.webp";
import bg3 from "../assets/abg.jpg";
const AboutUsContent = () => {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <div className="bg-gradient-to-b from-white to-blue-50 text-gray-800" >
               <Navbar/>
      {/* Hero Section */}
      <section className="relative bg-blue-900 text-white py-20 mt-22 px-4 md:px-20 overflow-hidden"
       style={{
  backgroundImage: `linear-gradient( rgba(14, 12, 12, 0.85), rgba(36, 33, 33, 0.85)), url(${bg3})`,
  backgroundSize: "cover",
  backgroundRepeat: "repeat",
  backgroundPosition: "center mid 20px",
}}
>
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold" data-aos="fade-down">
            About <span className="text-orange-400">Us</span>
          </h1>
          <p className="mt-4 text-lg max-w-2xl mx-auto" data-aos="fade-up">
            We empower researchers by providing a platform to publish impactful and innovative research across disciplines.
          </p>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-16 px-4 md:px-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <img
            src={imga} 
            alt="Research Team"
            className="w-full max-w-md mx-auto"
            data-aos="fade-right"
          />
          <div data-aos="fade-left">
            <h2 className="text-2xl font-bold mb-4 text-blue-800">Who We Are</h2>
            <p className="mb-3">
              Our platform is a peer-reviewed open access journal dedicated to promoting innovative, high-quality research in science, engineering, healthcare, agriculture, and more.
            </p>
            <p>
              Backed by an experienced editorial board, we maintain a rigorous peer-review process and strive for global scientific excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Vision and Mission */}
      <section className="py-16 bg-white px-4 md:px-20">
        <div className="text-center mb-12" data-aos="zoom-in">
          <h2 className="text-3xl font-bold text-blue-800">Vision & Mission</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-6 bg-blue-100 rounded-lg shadow-md" data-aos="fade-up-right">
            <h3 className="text-xl font-semibold mb-2 text-blue-900">Our Vision</h3>
            <p>
              To become a global hub for transparent, accessible, and cutting-edge academic publishing, shaping the future of science and innovation.
            </p>
          </div>
          <div className="p-6 bg-orange-100 rounded-lg shadow-md" data-aos="fade-up-left">
            <h3 className="text-xl font-semibold mb-2 text-orange-900">Our Mission</h3>
            <p>
              To foster academic collaboration and provide a publishing platform where authors can share their research with a global audience while upholding the highest ethical and editorial standards.
            </p>
          </div>
        </div>
      </section>

      {/* Why Publish With Us */}
      <section className="py-16 px-4 md:px-20 bg-blue-50">
        <div className="text-center mb-12" data-aos="fade-down">
          <h2 className="text-3xl font-bold text-blue-800">Why Publish With Us</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: 'Fast & Fair Peer Review',
              desc: 'Our reviewers ensure quality with rapid yet thorough evaluations.',
              icon: '🕒',
            },
            {
              title: 'Open Access Visibility',
              desc: 'Reach a global audience instantly without barriers.',
              icon: '🌍',
            },
            {
              title: 'Experienced Editorial Board',
              desc: 'Experts from across the globe guide your paper through its journey.',
              icon: '👨‍⚖️',
            },
          ].map((item, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-lg shadow hover:shadow-xl transition"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-bold mb-2 text-blue-900">{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Ethics */}
      <section className="py-16 px-4 md:px-20 bg-white">
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-3xl font-bold text-blue-800">Ethics & Guidelines</h2>
          <p className="mt-2 text-gray-600 max-w-2xl mx-auto">
            We strictly follow COPE publishing guidelines. Every paper is verified for originality, authorship conflicts, and ethical approval, ensuring the highest publication integrity.
          </p>
        </div>
      </section>
      <Footer/>
    </div>
  );
};

export default AboutUsContent;
