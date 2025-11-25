// src/components/VisualRequirements.tsx
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import {
  Clock,
  MapPin,
  PoundSterling,
  Users,
  Heart,
  Shield,
  TrendingUp
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

const VisualRequirements: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-0">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-custom-red/10 rounded-full mb-6">
            <Heart className="h-4 w-4 text-custom-red" />
            <span className="text-sm font-medium text-custom-red">Why Join Us</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#484848] mb-6">
            Deliver with Confidence
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Join thousands of riders who choose FoodDelivery for flexible work,
            reliable earnings, and comprehensive support.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <Card
                key={index}
                className="bg-white border border-gray-200/60 rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-500 group hover:-translate-y-2 overflow-hidden"
              >
                <CardContent className="p-8">
                  <div className="flex flex-col space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="p-3 bg-[#E3B24A] rounded-xl group-hover:from-custom-red/15 group-hover:to-custom-red/10 transition-colors">
                        <IconComponent className="h-7 w-7 text-custom-red" />
                      </div>
                      <div className="text-4xl font-bold text-gray-100 group-hover:text-gray-200 transition-colors">
                        {String(index + 1).padStart(2, '0')}
                      </div>
                    </div>
                    <div className="space-y-3">
                      <h3 className="font-bold text-gray-900 text-xl leading-tight">
                        {benefit.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

      {/* Stats Section */}
<div className="bg-[#454545] rounded-3xl p-8 lg:p-12 text-white">
  <div className="text-center mb-8">
    <h3 className="text-2xl lg:text-3xl font-bold mb-3">Join Our Growing Community</h3>
    <p className="text-gray-300 text-sm lg:text-base max-w-2xl mx-auto">
      Trusted by delivery partners who value flexibility and reliability
    </p>
  </div>
  
  <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-8">
    {[
      { number: '10,000+', label: 'Active Partners', suffix: '' },
      { number: '£15-25', label: 'Avg. Hourly Rate', suffix: '/hr' },
      { number: '24/7', label: 'Partner Support', suffix: '' },
      { number: '99.9%', label: 'On-Time Rate', suffix: '' }
    ].map((stat, index) => (
      <div
        key={index}
        className="text-center p-4 lg:p-6 bg-white/5 rounded-xl border border-[#E3B24A]/30 transition-all duration-300 hover:bg-[#E3B24A]/10 hover:border-[#E3B24A] hover:scale-105"
      >
        <div className="text-xl lg:text-2xl font-bold mb-1 flex items-center justify-center gap-1">
          {stat.number}
          {stat.suffix && <span className="text-sm text-[#E3B24A]">{stat.suffix}</span>}
        </div>
        <div className="text-gray-300 text-xs font-medium uppercase tracking-wide">
          {stat.label}
        </div>
      </div>
    ))}
  </div>

  {/* CTA Button */}
  <div className="text-center">
    <Button className="bg-[#E3B24A] hover:bg-[#D4A23F] text-black px-8 py-4 rounded-full font-bold text-base hover:scale-105 transition-all duration-300 shadow-lg">
      Start Delivering Today
    </Button>
    <p className="text-gray-300 mt-3 text-sm">
      No commitment • Sign up in minutes
    </p>
  </div>
</div>
      </div>
    </section>
  );
};

export default VisualRequirements;