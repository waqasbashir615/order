// src/components/FlexibleEarning.tsx
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Clock, TrendingUp, Navigation } from 'lucide-react';

const features = [
  {
    icon: Clock,
    title: 'Set your own schedule',
    description: 'You\'re the boss. Drive with the MX Rider app day or night.',
  },
  {
    icon: TrendingUp,
    title: 'Make money on your terms',
    description: 'The more you drive, the more you can make with surge pricing.',
  },
  {
    icon: Navigation,
    title: 'Let the app lead the way',
    description: 'Turn-by-turn directions and 24/7 support.',
  }
];

const FlexibleEarning: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-[#393939] mb-4">
            Make money <span className="text-[#E3B24A]">when you want</span>
          </h1>
          <p className="text-lg text-[#393939CC] max-w-2xl mx-auto">
            Take control of your earnings with complete flexibility
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card key={index} className="border border-[#3939391A] rounded-xl">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-[#E3B24A]/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="h-6 w-6 text-[#E3B24A]" />
                  </div>
                  <h3 className="font-bold text-[#393939] text-lg mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-[#393939CC] text-sm">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="bg-[#E3B24A] rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">
            Ready to start earning?
          </h3>
          <p className="text-white/90 mb-6">
            Download the MX Rider app today
          </p>
          <button className="bg-white text-[#393939] px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors">
            Download App
          </button>
        </div>

      </div>
    </section>
  );
};

export default FlexibleEarning; 