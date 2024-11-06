import Link from 'next/link';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-gray-100 dark:bg-black py-6 rounded-xl shadow-md">
      <div className="container mx-auto text-center border-t border-gray-300 dark:border-gray-700 pt-4">
        <p className="text-sm text-gray-700 dark:text-gray-300">
          © {currentYear} DNYX Blog | Powered by <Link href="https://web.dnyx.in"><span className="font-semibold text-gray-900 dark:text-white">DNYX</span></Link>
        </p>
        <div className="flex justify-center space-x-6 mt-4">
          <a 
            href="https://facebook.com/dnyx.in" 
            className="text-gray-600 dark:text-gray-300 hover:text-yellow-500 transition-colors duration-300"
            aria-label="Facebook"
          >
            <FaFacebook size={24} />
          </a>
          <a 
            href="https://twitter.com/dnyxofficial" 
            className="text-gray-600 dark:text-gray-300 hover:text-yellow-500 transition-colors duration-300"
            aria-label="Twitter"
          >
            <FaTwitter size={24} />
          </a>
          <a 
            href="https://instagram.com/dnyx.in" 
            className="text-gray-600 dark:text-gray-300 hover:text-yellow-500 transition-colors duration-300"
            aria-label="Instagram"
          >
            <FaInstagram size={24} />
          </a>
          <a 
            href="https://linkedin.com/company/dnyx" 
            className="text-gray-600 dark:text-gray-300 hover:text-yellow-500 transition-colors duration-300"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
