import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import {
  Clock,
  MapPin,
  PoundSterling,
  Users,
  Heart,
  Shield,
  TrendingUp,
  ArrowRight
} from 'lucide-react';
import { Button } from '../ui/button';

const benefits = [
  {
    icon: Clock,
    title: 'Flexible Schedule',
    description: 'Choose your own hours - work full-time, part-time, or whenever suits you best'
  },
  {
    icon: PoundSterling,
    title: 'Competitive Earnings',
    description: 'Earn competitive rates with weekly payments straight to your bank account'
  },
  {
    icon: MapPin,
    title: 'Local Delivery Areas',
    description: 'Work in familiar neighborhoods with optimized delivery zones'
  },
  {
    icon: Users,
    title: 'Dedicated Support',
    description: '24/7 rider support team and community managers to help you succeed'
  },
  {
    icon: Shield,
    title: 'Rider Protection',
    description: 'Insurance coverage and safety resources for peace of mind'
  },
  {
    icon: TrendingUp,
    title: 'Growth Opportunities',
    description: 'Performance bonuses and opportunities to increase your earnings'
  }
];

const stats = [
  { number: '10,000+', label: 'Active Partners', suffix: '' },
  { number: '£15-25', label: 'Avg. Hourly Rate', suffix: '/hr' },
  { number: '24/7', label: 'Partner Support', suffix: '' },
  { number: '99.9%', label: 'On-Time Rate', suffix: '' }
];

const VisualRequirements: React.FC = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-50px" });

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        duration: 0.6
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut" as const
      }
    }
  };

  const statVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut" as const
      }
    }
  };

  const floatAnimation = {
    y: [0, -8, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut" as const
    }
  };

  return (
    <section 
      ref={sectionRef}
      className="py-20 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-0">
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-custom-red/10 rounded-full mb-6"
          >
            <motion.div
              animate={isInView ? { rotate: [0, 10, 0] } : { rotate: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <Heart className="h-4 w-4 text-custom-red" />
            </motion.div>
            <span className="text-sm font-medium text-custom-red">Why Join Us</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-4xl md:text-5xl font-bold text-[#484848] mb-6"
          >
            Deliver with Confidence
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            Join thousands of riders who choose FoodDelivery for flexible work,
            reliable earnings, and comprehensive support.
          </motion.p>
        </motion.div>

        {/* Benefits Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
        >
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ 
                  y: -8,
                  transition: { type: "spring", stiffness: 300, damping: 10 }
                }}
              >
                <Card className="bg-white border border-gray-200/60 rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-300 group overflow-hidden h-full">
                  <CardContent className="p-6 h-full">
                    <div className="flex flex-col space-y-4 h-full">
                      <div className="flex items-center justify-between">
                        <motion.div 
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          className="p-3 bg-[#E3B24A]/10 rounded-xl group-hover:bg-[#E3B24A]/20 transition-colors duration-300"
                        >
                          <IconComponent className="h-6 w-6 text-[#E3B24A]" />
                        </motion.div>
                        <motion.div 
                          initial={{ opacity: 0.3 }}
                          whileHover={{ opacity: 1 }}
                          className="text-3xl font-bold text-gray-100 group-hover:text-gray-200 transition-colors duration-300"
                        >
                          {String(index + 1).padStart(2, '0')}
                        </motion.div>
                      </div>
                      <div className="space-y-3 flex-1">
                        <h3 className="font-bold text-gray-900 text-lg leading-tight group-hover:text-[#E3B24A] transition-colors duration-300">
                          {benefit.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed text-sm">
                          {benefit.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Stats Section */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="bg-[#454545] rounded-3xl p-8 lg:p-12 text-white overflow-hidden relative"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#E3B24A] rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-[#E3B24A] rounded-full blur-2xl"></div>
          </div>
          
          <div className="text-center mb-8 relative z-10">
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-2xl lg:text-3xl font-bold mb-3"
            >
              Join Our Growing Community
            </motion.h3>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="text-gray-300 text-sm lg:text-base max-w-2xl mx-auto"
            >
              Trusted by delivery partners who value flexibility and reliability
            </motion.p>
          </div>
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-8 relative z-10"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={statVariants}
                whileHover={{ 
                  scale: 1.05,
                  y: -5,
                  transition: { type: "spring", stiffness: 400, damping: 10 }
                }}
                className="text-center p-4 lg:p-6 bg-white/5 rounded-xl border border-[#E3B24A]/30 transition-all duration-300 hover:bg-[#E3B24A]/10 hover:border-[#E3B24A] backdrop-blur-sm"
              >
                <motion.div 
                  animate={floatAnimation}
                  className="text-xl lg:text-2xl font-bold mb-1 flex items-center justify-center gap-1"
                >
                  {stat.number}
                  {stat.suffix && <span className="text-sm text-[#E3B24A]">{stat.suffix}</span>}
                </motion.div>
                <div className="text-gray-300 text-xs font-medium uppercase tracking-wide">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Button */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="text-center relative z-10"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button className="bg-[#E3B24A] hover:bg-[#D4A23F] text-black px-8 py-4 rounded-full font-bold text-base transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-[#E3B24A]/25">
                Start Delivering Today
                <motion.div
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  <ArrowRight className="ml-2 w-4 h-4" />
                </motion.div>
              </Button>
            </motion.div>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.6, delay: 1.1 }}
              className="text-gray-300 mt-3 text-sm"
            >
              No commitment • Sign up in minutes
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default VisualRequirements;