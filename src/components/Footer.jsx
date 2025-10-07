import {
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Phone,
  Mail,
  MapPin,
  Heart,
} from "lucide-react";
import React from "react";
const Footer = () => {
  const socialLinks = [
    { icon: Facebook, href: "#", color: "hover:bg-pink-600" },
    { icon: Twitter, href: "#", color: "hover:bg-blue-500" },
    { icon: Instagram, href: "#", color: "hover:bg-pink-500" },
    { icon: Linkedin, href: "#", color: "hover:bg-blue-600" },
  ];

  const quickLinks = [
    { label: "Home", href: "#" },
    { label: "About Us", href: "#" },
    { label: "Company", href: "#" },
    { label: "Services", href: "#" },
    { label: "Contact", href: "#" },
  ];
  const services = [
    { label: "Predictive Maintenance Analytics", href: "#" },
    { label: "IoT-Powered Monitoring", href: "#" },
    { label: "Optimization & Reporting", href: "#" },
    { label: "Smart Alerts & Notifications", href: "#" },
    { label: "Integration & Scalability", href: "#" },
  ];
  const contactInfo = [
    { icon: Phone, text: "0333-0738699", color: "text-pink-500" },
    { icon: Mail, text: "maryamkhan26@gmail.com", color: "text-yellow-500" },
    {
      icon: MapPin,
      text: "FAST-NUCES CFD Campus",
      color: "text-green-500",
      multiline: true,
    },
  ];
  const decorativeDots = [
    { color: "text-pink-500" },
    { color: "text-yellow-500" },
    { color: "text-green-500" },
  ];
  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800 text-white py-12 px-4 sm:py-16 md:py-20 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-12">
          <div className="space-y-6">
            <div className="flex items-center text-2xl font-bold">
              <div className="w-10 h-10 flex items-center justify-center rounded-full border-4 border-pink-600 text-pink-600 mr-2">
                P
              </div>
              <span>
                ro<span className="text-yellow-500">Service</span>
              </span>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Cutting-edge predictive maintenance platform that leverages AI and
              real-time analytics to detect potential failures before they
              happen. By reducing downtime, optimizing performance, and
              extending asset lifespan, we empower businesses to stay ahead with
              smarter maintenance decisions.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  className={`w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center transition-colors ${social.color}`}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
          <div className="space-y-6">
            <h3 className="text-xl font-semibold border-b-2 border-pink-600 pb-2 inline-block">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover: text-pink-500 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-6">
            <h3 className="text-xl font-semibold border-b-2 border-yellow-600 pb-2 inline-block">
              Our Services
            </h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a
                    href={service.href}
                    className="text-gray-300 hover: text-pink-500 transition-colors"
                  >
                    {service.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-6">
            <h3 className="text-xl font-semibold border-b-2 border-green-600 pb-2 inline-block">
              Contact Info
            </h3>
            <ul className="space-y-4">
              {contactInfo.map((contact, idx) => (
                <div
                  key={idx}
                  className={`flex items-center gap-3 ${
                    contact.multiline ? "items-start" : ""
                  }`}
                >
                  <div className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center flex-shrink-0">
                    <contact.icon className={`w-5 h-5 ${contact.color}`} />
                  </div>
                  <div>
                    <p className="text-gray-300 whitespace-pre-line">
                      {contact.text}
                    </p>
                  </div>
                </div>
              ))}
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-8 text-center">
          <p className="text-gray-400 flex items-center justify-center gap-1">
            @2024 Lorem ipsum dolor sit amet
            <Heart className="w-4 h-4 text-pink-500 fill-current" />
          </p>
        </div>
      </div>
      <div className="absolute border-2 border-pink-500 bottom-20 left-10 w-16 h-16 rounded-full opacity-20"></div>
      <div className="absolute border-2 border-yellow-500 top-20 right-10 w-20 h-20 rounded-full opacity-20"></div>
    </footer>
  );
};
export default Footer;
