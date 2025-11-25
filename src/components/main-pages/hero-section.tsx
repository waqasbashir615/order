import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import IMAGES from "@/assets/images";
import { Button } from "../ui/button";
import { CheckCircle2, ArrowRight, Wallet } from "lucide-react";

const MXDriveRiderApplication = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-50px" });

  // Animation variants with proper TypeScript types
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        duration: 0.5
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut" as const
      }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const
      }
    }
  };

  const floatAnimation = {
    y: [-8, 8, -8],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut" as const
    }
  };

  const benefits = [
    "Earn up to £30/hour + 100% of tips",
    "Flexible Schedule - You are the boss",
    "Instant daily payouts available"
  ];

  return (
    <section 
      ref={sectionRef}
      className="relative py-12 lg:py-20 bg-[#F9FAFB] overflow-hidden mt-16 sm:mt-18"
    >
      {/* Background Blob */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#FFE5E6] to-transparent opacity-50 -z-10 blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-20 items-center"
        >
          
          {/* Left Content */}
          <div className="space-y-6 lg:space-y-8">
            <div className="space-y-4">
              <motion.span 
                variants={itemVariants}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#AA1F27]/10 text-[#AA1F27] text-sm font-bold tracking-wide uppercase"
              >
                <span className="w-2 h-2 rounded-full bg-[#AA1F27] animate-pulse" />
                Hiring Drivers Now
              </motion.span>
              
              <motion.h2 
                variants={itemVariants}
                className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 leading-tight"
              >
                Drive Your Way to <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#AA1F27] to-[#FDBA4C]">
                  Financial Freedom
                </span>
              </motion.h2>
              
              <motion.p 
                variants={itemVariants}
                className="text-base sm:text-lg text-gray-600 leading-relaxed"
              >
                Turn your vehicle into a money-making machine. Set your own schedule and get paid instantly.
              </motion.p>
            </div>

            {/* Benefits List */}
            <motion.ul className="space-y-3">
              {benefits.map((benefit, index) => (
                <motion.li 
                  key={index}
                  variants={itemVariants}
                  className="flex items-center gap-3 text-gray-700 font-medium"
                >
                  <CheckCircle2 className="w-5 h-5 text-[#AA1F27] flex-shrink-0" />
                  {benefit}
                </motion.li>
              ))}
            </motion.ul>

            {/* CTA Section */}
            <motion.div className="flex flex-col sm:flex-row gap-4 pt-2">
              <motion.div
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button className="h-12 px-8 bg-[#AA1F27] hover:bg-[#8a1920] text-white rounded-xl text-base font-bold shadow-lg shadow-red-900/20 transition-all duration-200">
                  Start Earning Today
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </motion.div>
              
              <motion.div 
                variants={itemVariants}
                className="flex items-center gap-4 px-2"
              >
                <div className="flex -space-x-3">
                  {[1, 2, 3].map((item) => (
                    <div 
                      key={item}
                      className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-white bg-gray-200 flex items-center justify-center text-xs font-bold text-gray-500 shadow-lg"
                    >
                      U{item}
                    </div>
                  ))}
                </div>
                <div className="text-sm font-semibold text-gray-900">
                  Join 5,000+ Riders
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Right Content - Image Section */}
          <motion.div 
            variants={imageVariants}
            className="relative mx-auto w-full max-w-md lg:max-w-lg"
          >
            {/* Main Image */}
            <motion.div 
              whileHover={{ scale: 1.01 }}
              transition={{ type: "spring", stiffness: 300, damping: 10 }}
              className="relative z-10"
            >
              <img
                src={IMAGES.DEL9}
                alt="MXDRIVE Rider earning money with delivery service"
                className="w-full h-auto object-contain drop-shadow-2xl"
              />
            </motion.div>

            {/* Floating Earnings Card */}
            <motion.div 
              animate={floatAnimation}
              className="absolute top-1/4 -left-4 sm:-left-6 lg:-left-8 z-20 bg-white/90 backdrop-blur-md p-3 sm:p-4 rounded-xl shadow-xl border border-white/50"
            >
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                  <Wallet className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-medium uppercase">Last Payout</p>
                  <p className="text-lg sm:text-xl font-black text-gray-900">£850.00</p>
                </div>
              </div>
            </motion.div>

            {/* Floating Rating Card */}
            <motion.div 
              animate={{
                y: [-5, 5, -5],
                transition: { 
                  duration: 2.5, 
                  repeat: Infinity, 
                  ease: "easeInOut" as const 
                }
              }}
              className="absolute bottom-8 sm:bottom-12 -right-2 sm:-right-4 z-20 bg-white p-3 rounded-lg shadow-lg border border-gray-100 flex items-center gap-2"
            >
              <span className="text-[#FDBA4C] text-lg">★★★★★</span>
              <span className="font-bold text-gray-800 text-sm">4.9/5</span>
            </motion.div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default MXDriveRiderApplication;