// src/components/DriverExtras.tsx
import React, { useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Headphones,
  MapPin,
  Shield,
  Sparkles,
  TrendingUp,
  Users,
  Star
} from 'lucide-react';
import { useInView } from 'framer-motion';

const extras = [
  {
    icon: Headphones,
    title: 'Get support',
    description: 'Let\'s make every MXDrive trip hassle-free. Our support pages can help you set up your account, get started with the app, adjust fares, and much more.',
    cta: 'Get help',
    gradient: 'from-blue-500/10 to-purple-500/10',
    hoverGradient: 'from-blue-500/20 to-purple-500/20'
  },
  {
    icon: MapPin,
    title: 'Contact us',
    description: 'Got questions? Get answers. Enjoy personal support at MXDrive Hubs in London, Manchester, Birmingham, and other major cities across the UK.',
    cta: 'Contact us',
    gradient: 'from-green-500/10 to-emerald-500/10',
    hoverGradient: 'from-green-500/20 to-emerald-500/20'
  },
  {
    icon: Shield,
    title: 'Drive safely',
    description: 'The MXDrive app is full of features that help you stay safe and confident before, during, and after every trip. 24/7 support when you need it.',
    cta: 'Read more about safety',
    gradient: 'from-orange-500/10 to-red-500/10',
    hoverGradient: 'from-orange-500/20 to-red-500/20'
  }
];

const AnimatedCard = ({ children, index }: { children: React.ReactNode; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <div
      ref={ref}
      className="transform transition-all duration-1000 ease-out"
      style={{
        transform: isInView ? 'none' : 'translateY(100px)',
        opacity: isInView ? 1 : 0,
        transitionDelay: `${index * 200}ms`
      }}
    >
      {children}
    </div>
  );
};

const AnimatedStat = ({ children, index }: { children: React.ReactNode; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <div
      ref={ref}
      className="transform transition-all duration-1000 ease-out"
      style={{
        transform: isInView ? 'none' : 'scale(0.8) translateY(50px)',
        opacity: isInView ? 1 : 0,
        transitionDelay: `${index * 150}ms`
      }}
    >
      {children}
    </div>
  );
};

const DriverExtras: React.FC = () => {
  const titleRef = useRef(null);
  const isTitleInView = useInView(titleRef, { once: true, margin: '-100px' });

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50/50 overflow-hidden">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-0">
        {/* Animated Header */}
        <div 
          ref={titleRef}
          className="text-center mb-16 transform transition-all duration-1000 ease-out"
          style={{
            transform: isTitleInView ? 'none' : 'translateY(-50px)',
            opacity: isTitleInView ? 1 : 0
          }}
        >
          <div className="inline-flex items-center gap-2 bg-[#E3B24A]/10 px-4 py-2 rounded-full mb-4">
            <Sparkles className="h-4 w-4 text-[#E3B24A]" />
            <span className="text-sm font-medium text-[#E3B24A]">Driver Benefits</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#393939] mb-4">
            Driver <span className="text-[#E3B24A]">Extras</span>
          </h2>
          <p className="text-lg text-[#393939CC] max-w-2xl mx-auto">
            Everything you need to succeed with MXDrive in the UK
          </p>
        </div>

        {/* Animated Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {extras.map((extra, index) => {
            const IconComponent = extra.icon;
            return (
              <AnimatedCard key={index} index={index}>
                <Card 
                  className={`bg-gradient-to-br ${extra.gradient} to-white border-0 shadow-lg hover:shadow-2xl transition-all duration-500 group hover:scale-105 relative overflow-hidden`}
                >
                  {/* Animated Background Effect */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${extra.hoverGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  
                  {/* Floating Particles */}
                  <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="flex gap-1">
                      {[1, 2, 3].map((dot) => (
                        <div
                          key={dot}
                          className="w-1 h-1 bg-[#E3B24A] rounded-full animate-pulse"
                          style={{ animationDelay: `${dot * 200}ms` }}
                        />
                      ))}
                    </div>
                  </div>

                  <CardContent className="p-6 relative z-10">
                    <div className="flex items-start space-x-4">
                      <div className="p-3 bg-white rounded-xl shadow-md group-hover:shadow-lg group-hover:scale-110 transition-all duration-300">
                        <IconComponent className="h-6 w-6 text-[#E3B24A]" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-[#393939] text-lg mb-2 group-hover:text-[#E3B24A] transition-colors duration-300">
                          {extra.title}
                        </h3>
                        <p className="text-[#393939CC] text-sm leading-relaxed mb-4">
                          {extra.description}
                        </p>
                        <button className="inline-flex items-center text-[#E3B24A] font-semibold text-sm hover:gap-3 transition-all duration-300 group/btn">
                          {extra.cta}
                          <span className="ml-1 group-hover/btn:translate-x-1 transition-transform duration-300">→</span>
                        </button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedCard>
            );
          })}
        </div>

        {/* Animated Stats Section */}
        <AnimatedCard index={3}>
          <div className="bg-gradient-to-r from-[#3939390A] via-white to-[#3939390A] rounded-3xl p-8 relative overflow-hidden border border-gray-200/50">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-0 left-0 w-32 h-32 bg-[#E3B24A] rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-[#E3B24A] rounded-full blur-3xl"></div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center relative z-10">
              {[
                { number: '10K+', label: 'Active Drivers', icon: Users, color: 'text-blue-500' },
                { number: '24/7', label: 'Support', icon: Headphones, color: 'text-green-500' },
                { number: '15+', label: 'Cities', icon: MapPin, color: 'text-purple-500' },
                { number: '4.9★', label: 'Satisfaction', icon: Star, color: 'text-[#E3B24A]' }
              ].map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <AnimatedStat key={index} index={index}>
                    <div className="group">
                      <div className="flex justify-center mb-3">
                        <div className="p-3 bg-white rounded-xl shadow-md group-hover:shadow-lg group-hover:scale-110 transition-all duration-300">
                          <IconComponent className={`h-6 w-6 ${stat.color}`} />
                        </div>
                      </div>
                      <div className="text-2xl md:text-3xl font-bold text-[#393939] mb-2 group-hover:scale-110 transition-transform duration-300">
                        {stat.number}
                      </div>
                      <div className="text-[#393939CC] font-medium text-sm">
                        {stat.label}
                      </div>
                    </div>
                  </AnimatedStat>
                );
              })}
            </div>

            {/* Progress Bar Animation */}
            <div className="mt-8 pt-6 border-t border-gray-200/50">
              <div className="flex items-center justify-between text-sm text-[#393939CC] mb-2">
                <span>Driver satisfaction rate</span>
                <span className="font-semibold text-[#E3B24A]">95%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-gradient-to-r from-[#E3B24A] to-[#D4A23F] h-2 rounded-full transition-all duration-2000 ease-out"
                  style={{ 
                    width: '95%',
                    animation: 'pulse 2s ease-in-out infinite'
                  }}
                />
              </div>
            </div>
          </div>
        </AnimatedCard>

        {/* Floating CTA */}
        <div className="text-center mt-12">
          <button className="inline-flex items-center gap-2 bg-[#E3B24A] hover:bg-[#D4A23F] text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 animate-bounce hover:animate-none">
            <TrendingUp className="h-5 w-5" />
            Start Driving Today
            <Sparkles className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Add CSS for animations */}
      <style >{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.8; }
        }
      `}</style>
    </section>
  );
};

export default DriverExtras;