import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import IMAGES from "@/assets/images";
import { UserPlus, CheckCircle, Package, DollarSign } from "lucide-react";

const RiderSteps = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-50px" });

  const steps = [
    { 
      num: "01", 
      title: "Sign Up Online", 
      text: "Complete our quick online form with your personal details and valid ID. It's fast and secure.", 
      icon: UserPlus 
    },
    { 
      num: "02", 
      title: "Get Approved", 
      text: "Our team reviews your documents – approval typically happens within 24 hours.", 
      icon: CheckCircle 
    },
    { 
      num: "03", 
      title: "Receive Your Kit", 
      text: "Order your premium MXDRIVE delivery gear, including helmet, bag, and apparel for a professional look.", 
      icon: Package 
    },
    { 
      num: "04", 
      title: "Start Earning", 
      text: "Download the MXDRIVE app, go online, and begin accepting rides to earn competitive rates.", 
      icon: DollarSign 
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.6
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const
      }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut" as const
      }
    }
  };

  const floatAnimation = {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut" as const
    }
  };

  return (
    <section 
      ref={sectionRef}
      className="py-20 bg-gradient-to-b from-white to-gray-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-0">
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-extrabold text-[#484848] mb-4 tracking-tight">
            Start Riding With <span className="text-[#AA1F27]">MXDRIVE</span>
          </h2>
          <p className="text-lg text-[#484848]/70 max-w-2xl mx-auto">
            Join the MXDRIVE family in just 4 easy steps and turn your time on the road into real earnings.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <motion.div 
            variants={imageVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="relative overflow-hidden rounded-[3rem] min-h-[400px] lg:min-h-[500px] flex items-center justify-center order-2 lg:order-1 shadow-xl"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#FECB79] to-[#F66610] opacity-85 z-0"></div>
            <motion.img 
              src={IMAGES.DEL10} 
              alt="MXDRIVE rider onboarding process" 
              className="z-10 relative max-w-full h-auto object-cover"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300, damping: 10 }}
            />
            
            {/* Floating Elements */}
            <motion.div 
              animate={floatAnimation}
              className="absolute top-8 left-8 z-20 bg-white/90 backdrop-blur-sm p-3 rounded-2xl shadow-lg"
            >
              <div className="flex items-center gap-2">
                <UserPlus className="w-5 h-5 text-[#AA1F27]" />
                <span className="text-sm font-bold text-gray-800">Quick Signup</span>
              </div>
            </motion.div>

            <motion.div 
              animate={{
                y: [-5, 5, -5],
                transition: { duration: 2.5, repeat: Infinity, ease: "easeInOut" as const }
              }}
              className="absolute bottom-8 right-8 z-20 bg-white/90 backdrop-blur-sm p-3 rounded-2xl shadow-lg"
            >
              <div className="flex items-center gap-2">
                <DollarSign className="w-5 h-5 text-green-600" />
                <span className="text-sm font-bold text-gray-800">Start Earning</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Steps Section */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="order-1 lg:order-2 relative"
          >
            <div className="space-y-8 relative">
              {/* Vertical connecting line */}
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#AA1F27]/30 to-[#AA1F27]/10 hidden md:block" />
              
              {steps.map((step, index) => {
                const IconComponent = step.icon;
                return (
                  <motion.div 
                    key={index}
                    variants={itemVariants}
                    className="flex gap-6 group relative"
                    whileHover={{ x: 10 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    {/* Step Number Circle */}
                    <motion.div 
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="flex-shrink-0 w-12 h-12 rounded-full bg-white border-2 border-[#AA1F27] flex items-center justify-center text-[#AA1F27] font-bold text-lg group-hover:bg-[#AA1F27] group-hover:text-white transition-all duration-300 z-10 shadow-md"
                    >
                      {step.num}
                    </motion.div>
                    
                    {/* Step Content */}
                    <div className="flex-1 pb-8">
                      <div className="flex items-center gap-3 mb-3">
                        <motion.div
                          whileHover={{ scale: 1.2, rotate: 360 }}
                          transition={{ duration: 0.5 }}
                        >
                          <IconComponent className="w-6 h-6 text-[#AA1F27]" />
                        </motion.div>
                        <h4 className="text-xl font-bold text-[#484848] group-hover:text-[#AA1F27] transition-colors duration-300">
                          {step.title}
                        </h4>
                      </div>
                      <motion.p 
                        initial={{ opacity: 0.8 }}
                        whileHover={{ opacity: 1 }}
                        className="text-gray-600 leading-relaxed transition-opacity duration-300"
                      >
                        {step.text}
                      </motion.p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Call-to-Action Button */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mt-12 text-center lg:text-left"
            >
              <motion.a 
                href="/sign-up" 
                className="inline-block px-8 py-4 bg-[#AA1F27] text-white font-semibold rounded-full hover:bg-[#8A1A20] transition-colors shadow-lg"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 10px 25px -5px rgba(170, 31, 39, 0.4)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started Now
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default RiderSteps;