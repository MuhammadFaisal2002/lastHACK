import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faInstagram,
  faPinterest,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer className="bg-[#F8F9FA] py-12 px-8 lg:px-24 mt-[px]">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
        {/* Logo and Description */}
        <div>
          <div className="flex items-center gap-2 mb-6">
            <img src="/icon.png" alt="Comforty Logo" className="w-10 h-10" />
            <span className="text-[28px] font-semibold text-[#272343]">
              Comforty
            </span>
          </div>
          <p className="text-[#6B7280] text-[14px] leading-6 mb-4">
            Vivamus tristique odio sit amet velit semper, eu posuere turpis
            interdum. Cras egestas purus.
          </p>
          <div className="flex gap-3">
            <Link href="#">
              <FontAwesomeIcon
                icon={faTwitter}
                className="w-6 h-6 text-[#007580] hover:text-[#029FAE] transition-colors"
              />
            </Link>
            <Link href="#">
              <FontAwesomeIcon
                icon={faInstagram}
                className="w-6 h-6 text-[#007580] hover:text-[#029FAE] transition-colors"
              />
            </Link>
            <Link href="#">
              <FontAwesomeIcon
                icon={faPinterest}
                className="w-6 h-6 text-[#007580] hover:text-[#029FAE] transition-colors"
              />
            </Link>
            <Link href="#">
              <FontAwesomeIcon
                icon={faYoutube}
                className="w-6 h-6 text-[#007580] hover:text-[#029FAE] transition-colors"
              />
            </Link>
          </div>
        </div>

        {/* Category Section */}
        <div>
          <h3 className="text-[#272343] font-medium text-[16px] mb-4">
            CATEGORY
          </h3>
          <ul className="space-y-3">
            <li>
              <Link
                href="#"
                className="text-[#6B7280] text-[14px] hover:text-[#029FAE] transition-colors"
              >
                Sofa
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="text-[#6B7280] text-[14px] hover:text-[#029FAE] transition-colors"
              >
                Armchair
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="text-[#007580] text-[14px] font-medium hover:text-[#029FAE] transition-colors"
              >
                Wing Chair
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="text-[#6B7280] text-[14px] hover:text-[#029FAE] transition-colors"
              >
                Desk Chair
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="text-[#6B7280] text-[14px] hover:text-[#029FAE] transition-colors"
              >
                Wooden Chair
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="text-[#6B7280] text-[14px] hover:text-[#029FAE] transition-colors"
              >
                Park Bench
              </Link>
            </li>
          </ul>
        </div>

        {/* Support Section */}
        <div>
          <h3 className="text-[#272343] font-medium text-[16px] mb-4">
            SUPPORT
          </h3>
          <ul className="space-y-3">
            <li>
              <Link
                href="#"
                className="text-[#6B7280] text-[14px] hover:text-[#029FAE] transition-colors"
              >
                Help & Support
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="text-[#6B7280] text-[14px] hover:text-[#029FAE] transition-colors"
              >
                Terms & Conditions
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="text-[#6B7280] text-[14px] hover:text-[#029FAE] transition-colors"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="text-[#6B7280] text-[14px] hover:text-[#029FAE] transition-colors"
              >
                Help
              </Link>
            </li>
          </ul>
        </div>

        {/* Newsletter Section */}
        <div>
          <h3 className="text-[#272343] font-medium text-[16px] mb-4">
            NEWSLETTER
          </h3>
          <div className="flex flex-col space-y-3">
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="w-full border border-[#E5E7EB] rounded-lg p-3 text-sm text-[#6B7280] focus:outline-none focus:ring-2 focus:ring-[#007580]"
              />
              <button className="bg-[#029FAE] text-white rounded-lg px-4 ml-2 hover:bg-[#007580] transition">
                Subscribe
              </button>
            </div>
            <p className="text-[12px] text-[#6B7280] leading-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              tincidunt erat enim.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
