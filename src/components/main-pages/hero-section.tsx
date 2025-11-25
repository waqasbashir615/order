import { motion } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Play, Star, Shield, Zap } from "lucide-react";
import IMAGES from "@/assets/images";

const HeroSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  // Floating animation for circles
  const floatAnimation = {
    y: [0, -20, 0] as [number, number, number],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut" as const
    }
  };

  const pulseAnimation = {
    scale: [1, 1.1, 1] as [number, number, number],
    opacity: [0.3, 0.5, 0.3] as [number, number, number],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut" as const
    }
  };

  const features = [
    { icon: Zap, text: "Instant Payouts" },
    { icon: Shield, text: "Full Insurance" },
    { icon: Play, text: "Flexible Hours" }
  ];

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 via-white to-orange-50"
    >
      {/* Background Circles */}
      <div className="absolute inset-0">
        {/* Large Background Circles */}
        <motion.div
          animate={pulseAnimation}
          className="absolute top-1/4 -left-20 w-96 h-96 bg-[#AA1F27] opacity-10"
          style={{ clipPath: "circle(50% at 50% 50%)" }}
        />
        
        <motion.div
          animate={{
            ...floatAnimation,
            x: [0, 15, 0] as [number, number, number]
          }}
          className="absolute top-1/3 -right-16 w-80 h-80 bg-[#AA1F27] opacity-15"
          style={{ clipPath: "circle(50% at 50% 50%)" }}
        />

        <motion.div
          animate={{
            ...floatAnimation,
            y: [0, -30, 0] as [number, number, number],
            transition: { duration: 5, repeat: Infinity }
          }}
          className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-[#FDBA4C] opacity-20"
          style={{ clipPath: "circle(50% at 50% 50%)" }}
        />

        {/* Medium Circles */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1] as [number, number, number],
            rotate: [0, 180, 360] as [number, number, number],
            transition: { duration: 8, repeat: Infinity }
          }}
          className="absolute top-40 right-40 w-40 h-40 bg-[#AA1F27] opacity-10"
          style={{ clipPath: "circle(50% at 50% 50%)" }}
        />

        <motion.div
          animate={{
            ...floatAnimation,
            transition: { duration: 7, repeat: Infinity }
          }}
          className="absolute bottom-40 left-40 w-32 h-32 bg-[#FDBA4C] opacity-25"
          style={{ clipPath: "circle(50% at 50% 50%)" }}
        />

        {/* Small Circles */}
        <motion.div
          animate={{
            y: [0, -15, 0] as [number, number, number],
            x: [0, 10, 0] as [number, number, number],
            transition: { duration: 3, repeat: Infinity }
          }}
          className="absolute top-20 left-20 w-24 h-24 bg-[#AA1F27] opacity-20"
          style={{ clipPath: "circle(50% at 50% 50%)" }}
        />

        <motion.div
          animate={{
            scale: [1, 1.3, 1] as [number, number, number],
            transition: { duration: 4, repeat: Infinity }
          }}
          className="absolute bottom-20 right-20 w-20 h-20 bg-[#FDBA4C] opacity-30"
          style={{ clipPath: "circle(50% at 50% 50%)" }}
        />

        {/* Additional floating circles */}
        <motion.div
          animate={{
            y: [0, -25, 0] as [number, number, number],
            rotate: [0, 90, 180] as [number, number, number],
            transition: { duration: 6, repeat: Infinity }
          }}
          className="absolute top-1/2 left-1/3 w-16 h-16 bg-[#AA1F27] opacity-15"
          style={{ clipPath: "circle(50% at 50% 50%)" }}
        />

        <motion.div
          animate={{
            ...floatAnimation,
            transition: { duration: 5, repeat: Infinity, delay: 1 }
          }}
          className="absolute top-3/4 right-1/3 w-28 h-28 bg-[#FDBA4C] opacity-20"
          style={{ clipPath: "circle(50% at 50% 50%)" }}
        />
      </div>

      {/* Texture Overlay */}
      <div 
        className="absolute inset-0 opacity-40"
        style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` 
        }}
      />

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left space-y-8"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg border border-white/20"
            >
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#FDBA4C] text-[#FDBA4C]" />
                ))}
              </div>
              <span className="text-sm font-semibold text-gray-700">Rated 4.9/5 by 5,000+ Riders</span>
            </motion.div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-4xl font-black text-gray-900 leading-tight">
                Drive Your Way to
                <motion.span
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="block text-transparent bg-clip-text bg-gradient-to-r from-[#AA1F27] to-[#FDBA4C]"
                >
                  Financial Freedom
                </motion.span>
              </h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-lg sm:text-xl lg:text-2xl text-gray-600 max-w-2xl leading-relaxed"
              >
                Turn your vehicle into a money-making machine. Set your own schedule, earn up to <span className="font-semibold text-[#AA1F27]">£30/hour</span>, and get paid instantly.
              </motion.p>
            </div>

            {/* Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl"
            >
              {features.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <div key={index} className="flex items-center gap-3 bg-white/60 backdrop-blur-sm rounded-xl p-3 shadow-sm border border-white/20">
                    <IconComponent className="w-5 h-5 text-[#AA1F27]" />
                    <span className="text-sm font-medium text-gray-700">{item.text}</span>
                  </div>
                );
              })}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <button className="group bg-[#AA1F27] hover:bg-[#8a1920] text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-red-900/30 hover:-translate-y-1 flex items-center justify-center gap-3">
                Start Earning Today
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button className="group border-2 border-gray-300 hover:border-[#AA1F27] text-gray-700 hover:text-[#AA1F27] px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 hover:shadow-lg backdrop-blur-sm bg-white/50">
                Watch Demo
              </button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="flex items-center justify-center lg:justify-start gap-6 text-sm text-gray-600"
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-[#AA1F27]">5,000+</div>
                <div>Active Riders</div>
              </div>
              <div className="w-px h-8 bg-gray-300"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-[#AA1F27]">£850</div>
                <div>Avg. Weekly</div>
              </div>
              <div className="w-px h-8 bg-gray-300"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-[#AA1F27]">24/7</div>
                <div>Support</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="relative"
          >
            <div className="relative">
              <img
                src={IMAGES.DEL15}
                alt="MXDrive Rider Earning Money"
                className="w-full max-w-2xl mx-auto object-contain drop-shadow-2xl transform hover:scale-105 transition-transform duration-500"
              />
              
              {/* Floating Elements */}
              <motion.div
                animate={floatAnimation}
                className="absolute top-8 -left-4 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-white/50"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                    <Zap className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-medium">Last Payout</p>
                    <p className="text-xl font-black text-gray-900">£850.00</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{
                  y: [-10, 10, -10] as [number, number, number],
                  transition: { duration: 3, repeat: Infinity, ease: "easeInOut" as const }
                }}
                className="absolute bottom-8 -right-4 bg-white/90 backdrop-blur-md p-3 rounded-xl shadow-lg border border-white/50"
              >
                <div className="flex items-center gap-2">
                  <span className="text-[#FDBA4C] text-lg">★★★★★</span>
                  <span className="font-bold text-gray-800">4.9/5</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{
          y: [0, 10, 0] as [number, number, number],
          opacity: [0.5, 1, 0.5] as [number, number, number]
        }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;