import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FiArrowRight } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="w-full bg-[#f6f7f5] text-gray-700">
      {/* Top Trust Bar */}
      <div className="border-b">
        <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row justify-between gap-6">
          <div className="flex items-center gap-3">
            <img
              src="/src/assets/icons/worldwide.svg"
              alt=""
              className="w-8"
            />
            <div>
              <p className="font-semibold">Worldwide Delivery</p>
              <p className="text-sm text-gray-500">
                We deliver gifts to over 70 countries
              </p>
            </div>
          </div>

          <div className="hidden md:block w-px bg-gray-300"></div>

          <div className="flex items-center gap-3">
            <img
              src="/src/assets/icons/secure.svg"
              alt=""
              className="w-8"
            />
            <div>
              <p className="font-semibold">100% Safe & Secure Payments</p>
              <p className="text-sm text-gray-500">
                Pay using secure payment methods
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 text-sm">
        {/* Policy Info */}
        <div>
          <h4 className="font-semibold mb-4">Policy Info</h4>
          <ul className="space-y-2">
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
            <li>Terms of Use</li>
            <li>Disclaimer</li>
          </ul>
        </div>

        {/* About Company */}
        <div>
          <h4 className="font-semibold mb-4">About Company</h4>
          <ul className="space-y-2">
            <li>About Us</li>
            <li>FNP Team</li>
            <li>Careers</li>
            <li>Testimonials</li>
            <li>News Room</li>
            <li>Blog</li>
          </ul>
        </div>

        {/* FNP Business */}
        <div>
          <h4 className="font-semibold mb-4">FNP Business</h4>
          <ul className="space-y-2">
            <li>Decoration Services</li>
            <li>Corporate Service</li>
            <li>Affiliate Program</li>
            <li>Retails Stores</li>
            <li>Franchise</li>
          </ul>
        </div>

        {/* Need Help */}
        <div>
          <h4 className="font-semibold mb-4">Need Help ?</h4>
          <ul className="space-y-2">
            <li>Contact Us</li>
            <li>FAQs</li>
          </ul>
        </div>

        {/* International Presence */}
        <div>
          <h4 className="font-semibold mb-4">International Presence</h4>
          <ul className="space-y-2">
            <li>Dubai</li>
            <li>Qatar</li>
            <li>Saudi Arabia</li>
            <li>Singapore</li>
          </ul>
        </div>

        {/* Subscribe */}
        <div>
          <h4 className="font-semibold mb-4">Subscribe Now</h4>
          <p className="text-gray-500 mb-3">
            Get updates on promotions and offers coupons.
          </p>

          <div className="flex items-center bg-white border rounded-lg px-3 py-2">
            <MdEmail className="text-gray-400 text-xl" />
            <input
              type="email"
              placeholder="Enter email address"
              className="flex-1 outline-none px-2 text-sm"
            />
            <FiArrowRight className="text-xl cursor-pointer" />
          </div>
        </div>
      </div>

      {/* Company Legal */}
      <div className="border-t py-6 text-center text-sm px-4">
        <p>
          Company Name: FNP E Retail Private Limited | CIN:
          U52100HR2021PTC118882 | Regd. Office: Plot No. 75P,
          Sector-44, Gurugram, Haryana - 122003
        </p>
        <p className="mt-1">
          Telephone No.: +91-11-26802680 | Grievance Resolution
          Officer Name: Mr. Ankit Dhir | Contact No.: +91 9212422000
          / 9755-248-248
        </p>

        <p className="text-blue-600 mt-3 cursor-pointer">
          Corporate Social Responsibility (CSR) Policy
        </p>
      </div>

      {/* Bottom Bar */}
      <div className="border-t py-4 px-4 flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto">
        {/* Social Icons */}
        <div className="flex gap-4 mb-4 md:mb-0">
          <FaFacebookF />
          <FaXTwitter />
          <FaInstagram />
          <FaLinkedinIn />
        </div>

        <p className="text-sm text-gray-500">
          © 1994–2026 fnp.com. All rights reserved.
        </p>

        {/* Payment Icons */}
        <div className="flex gap-3 mt-4 md:mt-0">
          <img src="/src/assets/payments/visa.svg" className="h-6" />
          <img src="/src/assets/payments/mastercard.svg" className="h-6" />
          <img src="/src/assets/payments/rupay.svg" className="h-6" />
          <img src="/src/assets/payments/amex.svg" className="h-6" />
        </div>
      </div>
    </footer>
  );
}
