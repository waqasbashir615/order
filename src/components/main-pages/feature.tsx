import IMAGES from "@/assets/images";
import { Shield, Phone, Headphones, Heart } from "lucide-react";
import { motion } from "framer-motion";

const Features = () => {
  const supportFeatures = [
    {
      icon: Phone,
      title: "24/7 Support",
      description: "Live help anytime you need it"
    },
    {
      icon: Shield,
      title: "Free Insurance",
      description: "Covered from your first delivery"
    },
    {
      icon: Headphones,
      title: "Instant Help",
      description: "In-app messaging and calls"
    },
    {
      icon: Heart,
      title: "Safety First",
      description: "Your wellbeing is our priority"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.5
      }
    }
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const sectionVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 }
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <section id="features" className="py-12 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-0">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Content Section */}
          <motion.div 
            className="space-y-8"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="space-y-4">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                Rider Support & <span className="text-[#AA1F27]">Safety</span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                At MXDRIVE, we prioritize your safety and provide comprehensive support
                to ensure you can focus on earning with peace of mind.
              </p>
            </div>

            {/* Features Grid */}
            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {supportFeatures.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div 
                    key={index} 
                    className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
                    variants={childVariants}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="w-12 h-12 bg-[#AA1F27] rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">{feature.title}</h3>
                      <p className="text-gray-600 text-sm">{feature.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>

          {/* Image Section */}
          <motion.div 
            className="relative flex justify-center lg:justify-end"
            variants={imageVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative w-full max-w-md">
              <img
                src={IMAGES.DEL1REM}
                alt="MXDRIVE rider support and safety features"
                className="rounded-2xl w-full h-auto object-cover"
              />
              {/* Floating Badge */}
              <div className="absolute -bottom-4 -right-4 bg-[#AA1F27] text-white rounded-xl px-5 py-3 shadow-xl">
                <div className="text-center">
                  <div className="font-bold text-lg">24/7</div>
                  <div className="text-sm">Rider Support</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Features;