import { Link } from 'react-router-dom';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin,
  ArrowRight,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import IMAGES from '@/assets/images';

const FooterSection = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { name: 'Express Delivery', href: '/services/express' },
      { name: 'Same Day Delivery', href: '/services/same-day' },
      { name: 'Scheduled Delivery', href: '/services/scheduled' },
      { name: 'Business Solutions', href: '/services/business' },
      { name: 'Pricing', href: '/pricing' }
    ],
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Careers', href: '/careers' },
      { name: 'Press Kit', href: '/press' },
      { name: 'Blog', href: '/blog' },
      { name: 'Contact', href: '/contact' }
    ],
    support: [
      { name: 'Help Center', href: '/help' },
      { name: 'Track Order', href: '/track' },
      { name: 'Driver Support', href: '/driver-support' },
      { name: 'Business Support', href: '/business-support' },
      { name: 'FAQ', href: '/faq' }
    ],
    legal: [
      { name: 'Terms of Service', href: '/terms' },
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Cookie Policy', href: '/cookies' },
      { name: 'Data Protection', href: '/data-protection' }
    ]
  };

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white">
      

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-0 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-6 gap-12">
          {/* Brand Section */}
          <div className="xl:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10  rounded-lg flex items-center justify-center">
                        <img src={IMAGES.MXDRIVERLOGO} alt="" />
                </div>
              <div>
                <h2 className="text-2xl font-bold text-white">MXDrive</h2>
                <p className="text-[#E3B24A] text-sm font-semibold">Fast Delivery Courier</p>
              </div>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Delivering excellence nationwide with speed, security, and reliability. 
              Your trusted partner for all delivery needs.
            </p>
            
            {/* Newsletter Subscription */}
            <div className="space-y-4">
              <h3 className="font-semibold text-white">Stay Updated</h3>
              <div className="flex space-x-2">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:border-[#E3B24A] flex-1"
                />
                <Button className="bg-[#E3B24A] hover:bg-[#D4A23F] text-white px-6">
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
              <p className="text-gray-400 text-xs">
                Subscribe to get updates on new features and offers
              </p>
            </div>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="font-bold text-lg mb-6 text-white relative inline-block">
              Services
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#E3B24A] transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
            </h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.href}
                    className="text-gray-400 hover:text-[#E3B24A] transition-colors duration-300 text-sm flex items-center group"
                  >
                    <ArrowRight className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-bold text-lg mb-6 text-white">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.href}
                    className="text-gray-400 hover:text-[#E3B24A] transition-colors duration-300 text-sm flex items-center group"
                  >
                    <ArrowRight className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="font-bold text-lg mb-6 text-white">Support</h3>
            <ul className="space-y-3">
              {footerLinks.support.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.href}
                    className="text-gray-400 hover:text-[#E3B24A] transition-colors duration-300 text-sm flex items-center group"
                  >
                    <ArrowRight className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-6 text-white">Contact</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-[#E3B24A] mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-white text-sm font-semibold">+44 (0) 207 503 7228</p>
                  <p className="text-gray-400 text-xs">Mon-Fri 7:00-19:00</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-[#E3B24A] mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-white text-sm font-semibold">info@mxdrive.com</p>
                  <p className="text-gray-400 text-xs">We reply within 2 hours</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-[#E3B24A] mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-white text-sm font-semibold">UK,London</p>
                  <p className="text-gray-400 text-xs">Camden Gateway, 349 Royal College Street NW1 9QS</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-6">
              <h4 className="font-semibold text-white mb-4">Follow Us</h4>
              <div className="flex space-x-3">
                {[
                  { icon: Facebook, href: 'https://facebook.com/mxdrive', label: 'Facebook' },
                  { icon: Twitter, href: 'https://twitter.com/mxdrive', label: 'Twitter' },
                  { icon: Instagram, href: 'https://instagram.com/mxdrive', label: 'Instagram' },
                  { icon: Linkedin, href: 'https://linkedin.com/company/mxdrive', label: 'LinkedIn' }
                ].map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-gray-800 hover:bg-[#E3B24A] rounded-lg flex items-center justify-center transition-all duration-300 group hover:scale-110"
                      aria-label={social.label}
                    >
                      <IconComponent className="h-5 w-5 text-gray-400 group-hover:text-white" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-0 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-gray-400 text-sm">
              © {currentYear} MXDrive. All rights reserved.
            </div>

            {/* Legal Links */}
            <div className="flex flex-wrap justify-center space-x-6">
              {footerLinks.legal.map((link, index) => (
                <Link
                  key={index}
                  to={link.href}
                  className="text-gray-400 hover:text-[#E3B24A] transition-colors duration-300 text-sm"
                >
                  {link.name}
                </Link>
              ))}
            </div>

          
          </div>
        </div>
      </div>

     
    </footer>
  );
};

export default FooterSection;