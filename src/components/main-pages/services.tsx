// components/Benefits.tsx
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { PoundSterling, Bike, Zap } from 'lucide-react';

const Benefits: React.FC = () => {
  const benefits = [
    {
      icon: PoundSterling,
      title: "Flexible Earnings",
      description: "Work when you want and earn competitive rates per delivery.",
      bgColor: "bg-[#C1DADE]",
      textColor: "text-[#484848]"
    },
    {
      icon: Bike,
      title: "Be Your Own Boss",
      description: "Choose your own hours and work as much or as little as you like.",
      bgColor: "bg-[#F6C243]",
      textColor: "text-[#484848]"
    },
    {
      icon: Zap,
      title: "Quick Payouts",
      description: "Get paid weekly with our reliable payment system.",
      bgColor: "bg-[#F2A6B0]",
      textColor: "text-[#484848]"
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-b from-white to-[#EFEFEF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-0">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#484848] mb-4">
            Why Ride With <span className="text-[#AA1F27]">MXDRIVE</span>?
          </h2>
          <p className="text-lg text-[#484848]/70 max-w-2xl mx-auto">
            Join thousands of riders who choose us for the best delivery experience
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <Card
                key={index}
                className={`${benefit.bgColor} ${benefit.textColor}
                  border-none shadow-lg hover:shadow-2xl transition-all duration-500 
                  hover:scale-105 hover:-translate-y-2 cursor-pointer group
                  backdrop-blur-sm overflow-hidden`}
              >
                <CardContent className="p-8 text-center relative">
                  {/* Shine effect on hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent 
                    -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[100%] 
                    transition-transform duration-1000" />
                  
                  <div className="w-20 h-20 bg-white/80 rounded-2xl flex items-center justify-center mx-auto mb-6 
                    transform group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-10 h-10 text-[#AA1F27]" />
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4 group-hover:translate-y-1 transition-transform duration-300">
                    {benefit.title}
                  </h3>
                  <p className={`leading-relaxed ${benefit.textColor}/80 group-hover:translate-y-1 transition-transform duration-300`}>
                    {benefit.description}
                  </p>
                  
                  {/* Hover arrow indicator */}
                  <div className="mt-6 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mx-auto">
                      <svg className="w-4 h-4 text-[#AA1F27]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <button className="bg-[#AA1F27] hover:bg-[#8a1920] text-white font-bold px-8 py-4 rounded-xl 
            transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
            Start Earning Today
          </button>
        </div>
      </div>
    </section>
  );
};

export default Benefits;