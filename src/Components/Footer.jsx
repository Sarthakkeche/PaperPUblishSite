// import React from "react";
// import {
//   Mail,
//   MapPin,
//   Facebook,
//   Twitter,
//   Instagram,
//   Linkedin
// } from "lucide-react";

// const Footer = () => {
//   return (
//     <footer
//       className="text-white"
//       style={{
//         backgroundImage: "url('/footer-map-bg.png')",
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//         backgroundRepeat: "no-repeat",
//         backgroundColor: "#050505"
//       }}
//     >
//       <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-12 relative z-10">

//         {/* Logo + Contact */}
//         <div>
//           <img
//             src="/logo.png"
//             alt="Journal Logo"
//             className="h-24 mb-6"
//           />
//           <div className="flex items-start mb-4">
//             <Mail className="text-blue-400 mr-3 mt-1" />
//             <div>
//               <h4 className="font-semibold">Email Address:</h4>
//               <p className="text-sm text-gray-300">editor@ijpsjournal.com</p>
//             </div>
//           </div>
//           <div className="flex items-start">
//             <MapPin className="text-blue-400 mr-3 mt-1" />
//             <div>
//               <h4 className="font-semibold">Location:</h4>
//               <p className="text-sm text-gray-300">India</p>
//             </div>
//           </div>
//         </div>

//         {/* Quick Links */}
//         <div>
//           <h3 className="text-lg font-bold text-blue-400 mb-4">Quick Links</h3>
//           <ul className="space-y-2 text-sm text-gray-300">
//             <li>Home</li>
//             <li>Pay Fees</li>
//             <li>Contact</li>
//             <li>Check Paper Status</li>
//             <li>Author Guidelines</li>
//             <li>Peer Review Process</li>
//           </ul>
//         </div>

//         {/* Policies */}
//         <div>
//           <h3 className="text-lg font-bold text-blue-400 mb-4">Policies</h3>
//           <ul className="space-y-2 text-sm text-gray-300">
//             <li>Plagiarism Policy</li>
//             <li>Open Access Policy</li>
//             <li>Editorial Policy</li>
//             <li>Terms and Conditions</li>
//             <li>Cancellation and Refund Policy</li>
//             <li>Privacy Policy</li>
//           </ul>
//         </div>

//         {/* Newsletter */}
//         <div>
//           <h3 className="text-lg font-bold text-blue-400 mb-4">Subscribe Our Newsletter</h3>
//           <form className="flex flex-col space-y-4">
//             <input
//               type="email"
//               placeholder="Enter your email"
//               className="p-2 rounded bg-white text-black"
//             />
//             <button
//               type="submit"
//               className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded"
//             >
//               Subscribe
//             </button>
//           </form>
//         </div>
//       </div>

//       <div className="border-t border-gray-700 text-center py-4 text-sm bg-black bg-opacity-50">
//         <p>&copy; {new Date().getFullYear()} International Journal. All rights reserved.</p>
//         <div className="flex justify-center space-x-4 mt-2">
//           <Facebook className="h-4 w-4 hover:text-blue-500 cursor-pointer" />
//           <Twitter className="h-4 w-4 hover:text-blue-400 cursor-pointer" />
//           <Instagram className="h-4 w-4 hover:text-pink-500 cursor-pointer" />
//           <Linkedin className="h-4 w-4 hover:text-blue-600 cursor-pointer" />
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
import React from "react";
import {
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Phone
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 px-6 py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Company Info */}
        <div>
          <img src="/logo.png" alt="Logo" className="h-14 mb-4" />
          <p className="text-sm mb-4">
            Empowering Research. Elevating Innovation. Join our global
            community of scholars and researchers.
          </p>
          <div className="flex space-x-4 mt-2">
            <Facebook className="w-5 h-5 hover:text-orange-500 cursor-pointer" />
            <Twitter className="w-5 h-5 hover:text-orange-500 cursor-pointer" />
            <Instagram className="w-5 h-5 hover:text-orange-500 cursor-pointer" />
            <Linkedin className="w-5 h-5 hover:text-orange-500 cursor-pointer" />
          </div>
        </div>

        {/* Explore */}
        <div>
          <h4 className="text-orange-500 font-semibold text-sm mb-4">Explore</h4>
          <ul className="space-y-2 text-sm">
            <li>Home</li>
            <li>About Us</li>
            <li>Journals</li>
            <li>Editorial Board</li>
            <li>FAQs</li>
          </ul>
        </div>

        {/* Author & Policy */}
        <div>
          <h4 className="text-orange-500 font-semibold text-sm mb-4">For Authors</h4>
          <ul className="space-y-2 text-sm">
            <li>Submit Manuscript</li>
            <li>Author Guidelines</li>
            <li>Publication Ethics</li>
            <li>Review Process</li>
            <li>Processing Charges</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-orange-500 font-semibold text-sm mb-4">Contact Us</h4>
          <p className="flex items-center space-x-2 text-sm mb-2">
            <Mail className="w-4 h-4 text-orange-400" />
            <span>editor@ijpsjournal.com</span>
          </p>
          <p className="flex items-center space-x-2 text-sm mb-2">
            <Phone className="w-4 h-4 text-orange-400" />
            <span>+91-9876543210</span>
          </p>
          <p className="flex items-center space-x-2 text-sm">
            <MapPin className="w-4 h-4 text-orange-400" />
            <span>India</span>
          </p>
          <div className="mt-4">
            <h5 className="text-sm mb-2">Newsletter</h5>
            <div className="flex items-center border border-gray-600 rounded overflow-hidden">
              <input
                type="email"
                placeholder="Your email"
                className="bg-black px-3 py-2 text-sm text-white outline-none w-full"
              />
              <button className="bg-orange-500 px-4 text-sm hover:bg-orange-600">
                →
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-800 mt-12 pt-4 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} IJPS Journal. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

