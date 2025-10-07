import { Award, Circle, Heart } from "lucide-react";
import hero from "../assets/Hero.png";

const Hero = () => {
  return (
    <section
      className="relative mt-6 overflow-hidden bg-gray-50 py-12 px-4 sm:px-6 md:px-8 lg:py-16 lg:px-20 flex 
      flex-col lg:flex-row items-center justify-between"
    >
      {/* 1. Removed lg:ml-28 to allow for horizontal centering on all screens.
        2. Added mx-auto to center the block horizontally.
        3. Kept max-w-xl to limit its size.
      */}
      <div className="flex-1 lg:ml-28 w-full max-w-xl space-y-6 relative z-20">
        <h2
          className="text-4xl sm:text-5xl ☐ text-gray-900 text-center lg:text-left"
          data-aos="fade-right"
        >
          Professionels{" "}
          <span className="font-bold text-black block lg:inline">
            Service<span className="text-green-500">.</span>
          </span>
        </h2>
        {/* The circles already had justify-center, which achieves the centering */}
        <div
          data-aos="fade-right"
          data-aos-delay="100"
          className="flex gap-3 mt-4 justify-center"
        >
          <Circle className="text-pink-500 w-5 h-5" />
          <Circle className="text-yellow-500 w-5 h-5" />
          <Circle className="text-green-500 w-5 h-5" />
        </div>

        {/* 4. CHANGED: Switched from a flex-col/lg:grid layout to a simple flex-col
             to stack the cards vertically.
          5. Added items-center to center the cards horizontally within this container.
          6. Reduced gap to a smaller size since they are stacked vertically.
        */}
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-6 lg:gap-48 items-center lg:items-start">
          {/* Card 1 */}
          <div
            data-aos="zoom-in"
            data-aos-delay="200"
            className="bg-white w-72 rounded-3xl p-6 border 
          border-gray-100 shadow-xl lg:shadow-2xl transition"
          >
            <div
              className="ml-4 w-10 h-10 flex items-center 
            justify-center rounded-lg bg-pink-100 mb-4"
            >
              <span className="text-pink-500 text-xl">
                <Heart className="text-pink-600 w-6 h-6" />
              </span>
            </div>
            <h3 className="ml-4 text-lg font-semibold text-gray-800">
              Real-time Monitoring
            </h3>
            <p className="ml-4 text-gray-500 text-sm mt-2">
              Track vital signs like heart rate, steps, and activity in
              real-time with smart visual dashboards.
            </p>
          </div>

          {/* Card 2 */}
          <div
            data-aos="zoom-in"
            data-aos-delay="300"
            className="bg-white w-72 rounded-3xl p-6 border 
          border-gray-100 shadow-xl lg:shadow-2xl transition"
          >
            <div
              className="ml-4 w-10 h-10 flex items-center 
            justify-center rounded-lg bg-yellow-100 mb-4"
            >
              <span className="text-yellow-500 text-xl">
                <Award className="text-yellow-600 w-6 h-6" />
              </span>
            </div>
            <h3 className="ml-4 text-lg font-semibold text-gray-800">
              Personalized Insights
            </h3>
            <p className="ml-4 text-gray-500 text-sm mt-2">
              AI-powered analysis to provide fitness recommendations and early
              alerts for potential health risks.
            </p>
          </div>
        </div>
      </div>
      <div
        data-aos="fade-left"
        data-aos-delay="400"
        className="flex-1 mt-12 lg:mt-0 lg:ml-12 relative w-full flex justify-center"
      >
        <div className="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[600px] lg:h-[500px] overflow-hidden border-8 border-white shadow-lg lg: shadow-lg rounded-[60%_40%_30%_60%/60%_30%_70%_30%] relative z-10">
          <img src={hero} alt="Hero" className="object-cover w-full h-full" />
        </div>
      </div>
    </section>
  );
};
export default Hero;
