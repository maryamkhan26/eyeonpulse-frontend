import Services3 from "../assets/Services3.png";
import { ArrowRight, Circle, Users, Target } from "lucide-react";

const About = () => {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-gradient-to-br
from-gray-50to-green-50 py-12 px-4 sm:py-16 md:py-20 md:px-12
1g:px-20 flex flex-col lg:flex-row items-center justify-between"
    >
      <div
        className="flex-1 w-full lg:mr-8 xl:mr-12 relative order-2
1g:order-1 mt-10 lg:mt-0"
      >
        <div
          className="w-full max-w-md mx-auto lg:max-w-lg xl:max-w-xl
h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] xl:h-[500px]
overflow-hidden shadow-lg md:shadow-xl relative z-10 -rotate-2
rounded-[40%_60%_70%_30%/40%_50%_60%_60%] hover:rotate-0
transition-transform duration-700"
          data-aos="fade-right"
          data-aos-dealy="200"
        >
          <img
            src={Services3}
            alt="About"
            className="object-cover w-full h-full transform hover:scale-110
transition-transform duration-700"
          />
        </div>
        <div
          className="hidden md:block absolute border-2 border-pink-500 -bottom-4-right-4 w-16 h-16 md:w-20 md:h-20 lg:w-24 rounded-full z-0"
          data-aos="zoom-in"
          data-aos-delay="500"
        ></div>
        <div
          className="hidden md:block absolute border-2 border-green-500 -top-4-left-4 w-16 h-16 md:w-20 md:h-20 lg:w-24 rounded-full z-0"
          data-aos="zoom-in"
          data-aos-delay="600"
        ></div>
      </div>
      <div className="flex-1 w-full max-w-2x1 mx-auto lg:mx-0 space-y-6 md:space-y-8 relative z-20 order-1 lg:order-2">
        <div className="mb-6 md:mb-8" data-aos="fade-left">
          <h2 className="text-3xl sm:text-4xl md:text-5x1 text-gray-900 text-center lg:text-left">
            Agency {""}
            <span className="font-bold ☐ text-black block lg:inline">
              Overview<span className="text-green-500">.</span>
            </span>
          </h2>
          <div className="flex gap-3 mt-4 justify-center lg:justify-start">
            <Circle className="text-pink-500 w-5 h-5" />
            <Circle className="text-yellow-500 w-5 h-5" />
            <Circle className="text-green-500 w-5 h-5" />
          </div>
        </div>
        <p
          className="text-base sm:text-lg ☐ text-gray-700 leading-relaxed text-center lg:text-left"
          data-aos="fade-left"
          data-aos-delay="100"
        >
          EyeOnPulse is an AI-powered health and fitness platform designed to
          monitor real-time vital signs, track daily activities, and provide
          personalized insights. Our mission is to empower individuals and
          professionals with data-driven health decisions while ensuring privacy
          and security at every step.
        </p>
        <div
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 mt-8 md:mt-10"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div className="bg-white p-4 md:p-6 rounded-xl md: rounded-2x1 border border-gray-100 shadow-md md: shadow-lg transition-all hover: shadow-xl">
            <div className="w-10 h-10 md: w-12 md:h-12 flex items-center justify-center rounded-lg bg-pink-100 mb-3 md:mb-4">
              <Users className="text-pink-600 w-5 h-5 md:w-6 md:h-6" />
            </div>
            <h3 className="text-base md:text-lg font-semibold text-gray-800 mb-2">
              Expert Team
            </h3>
            <p className="text-gray-600 text-xs md:text-sm">
              A passionate team of developers, researchers, and health
              enthusiasts working together to innovate in digital health
              solutions.
            </p>
          </div>
          <div className="bg-white p-4 md:p-6 rounded-xl md: rounded-2x1 border border-gray-100 shadow-md md: shadow-lg transition-all hover: shadow-xl">
            <div className="w-10 h-10 md: w-12 md:h-12 flex items-center justify-center rounded-lg bg-yellow-100 mb-3 md:mb-4">
              <Target className="text-yellow-600 w-5 h-5 md:w-6 md:h-6" />
            </div>
            <h3 className="text-base md:text-lg font-semibold text-gray-800 mb-2">
              Our Mission
            </h3>
            <p className="text-gray-600 text-xs md:text-sm">
              To make advanced health monitoring accessible and user-friendly,
              helping people stay fit, detect risks early, and live healthier
              lives.
            </p>
          </div>
        </div>
        <div
          className="flex justify-center lg:justify-start mt-8 md:mt-10"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <button className="px-6 py-3 md:px-8 md:py-4 bg-pink-500 text-white rounded-full font-medium hover:bg-pink-600 transition-all shadow-md hover: shadow-lg flex items-center gap-2 text-sm md:text-base">
            Learn more About Us
            <ArrowRight className="h-4 w-4 md:h-5 md:w-5" />
          </button>
        </div>
      </div>
    </section>
  );
};
export default About;
