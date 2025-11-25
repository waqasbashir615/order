// src/components/DriverExtras.tsx
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Headphones,
  MapPin,
  Shield,
} from 'lucide-react';

const extras = [
  {
    icon: Headphones,
    title: 'Get support',
    description: 'Let\'s make every Uber trip hassle-free. Our support pages can help you set up your account, get started with the app, adjust fares, and much more.',
    cta: 'Get help'
  },
  {
    icon: MapPin,
    title: 'Contact us',
    description: 'Got questions? Get answers. Enjoy personal support at an Uber Greenlight Hub in Lahore, Karachi, Islamabad, and other cities.',
    cta: 'Contact us'
  },
  {
    icon: Shield,
    title: 'Drive safely',
    description: 'The Uber app is full of features that help you stay safe and confident before, during, and after every trip. And if you need help, Uber gives you 24/7 support.',
    cta: 'Read more about safety'
  }
];

const DriverExtras: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-0">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#393939] mb-4">
            Driver extras
          </h2>
          <p className="text-lg text-[#393939CC] max-w-2xl mx-auto">
            What we do for you in UK
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {extras.map((extra, index) => {
            const IconComponent = extra.icon;
            return (
              <Card 
                key={index}
                className="bg-gradient-to-br from-white to-[#3939390A] border-0 shadow-md hover:shadow-xl transition-all duration-300 group hover:-translate-y-1"
              >
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-[#E3B24A]/10 rounded-lg group-hover:bg-[#E3B24A]/20 transition-colors">
                      <IconComponent className="h-6 w-6 text-[#E3B24A]" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-[#393939] text-lg mb-2">
                        {extra.title}
                      </h3>
                      <p className="text-[#393939CC] text-sm leading-relaxed">
                        {extra.description}
                      </p>
                      <button className="mt-4 text-[#E3B24A] font-semibold text-sm hover:underline">
                        {extra.cta}
                      </button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="mt-16 bg-[#3939390A] rounded-2xl p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: '10K+', label: 'Active Drivers' },
              { number: '24/7', label: 'Support' },
              { number: '15+', label: 'Cities' },
              { number: '99%', label: 'Satisfaction' }
            ].map((stat, index) => (
              <div key={index}>
                <div className="text-2xl md:text-3xl font-bold text-[#E3B24A] mb-2">
                  {stat.number}
                </div>
                <div className="text-[#393939CC] font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DriverExtras;