import { Link } from 'react-router-dom';
import { 
  Car, 
  Bike, 
  PoundSterling, 
  Clock, 
  Shield,
  MapPin,
  Calendar,
  Smartphone,
  CheckCircle,
  ArrowRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import FooterSection from '@/components/main-pages/footer-section';
import HeaderSection from '@/components/main-pages/header-navbar';

const RiderServicesPage = () => {
  const vehicleOptions = [
    {
      icon: Car,
      title: 'Car Delivery',
      earnings: '£15-25/hr',
      requirements: ['Valid UK license', 'Comprehensive insurance', '18+ years old'],
      bestFor: 'Larger orders and longer distances'
    },
    {
      icon: Bike,
      title: 'Scooter Delivery',
      earnings: '£13-22/hr',
      requirements: ['Valid CBT certificate', 'Helmet', '16+ years old'],
      bestFor: 'Urban areas and medium orders'
    },
    {
      icon: Bike,
      title: 'Bike Delivery',
      earnings: '£12-20/hr',
      requirements: ['Bike in good condition', 'Safety gear', '16+ years old'],
      bestFor: 'City centers and short distances'
    }
  ];

  const benefits = [
    { icon: Clock, text: 'Flexible Hours' },
    { icon: PoundSterling, text: 'Weekly Payments' },
    { icon: Shield, text: 'Free Insurance' },
    { icon: MapPin, text: 'Choose Your Area' },
    { icon: Calendar, text: 'Be Your Own Boss' },
    { icon: Smartphone, text: 'Easy App' }
  ];

  const requirements = [
    'Right to work in the UK',
    'Smartphone with internet',
    'Valid UK bank account',
    'Vehicle in good condition'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <HeaderSection />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-r from-[#E3B24A] to-[#D4A23F] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Deliver with MXDrive
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Earn great money on your schedule. Be your own boss and start delivering today.
          </p>
          <div className="mt-8 bg-white/10 backdrop-blur-sm rounded-2xl p-6 max-w-md mx-auto">
            <div className="flex items-center justify-center gap-2 text-2xl font-bold">
              <PoundSterling className="h-6 w-6" />
              <span>£15-25</span>
              <span className="text-lg">/hour average</span>
            </div>
          </div>
        </div>
      </section>

      {/* Vehicle Options */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Choose How You Deliver
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Deliver with your car, scooter, or bike - we have opportunities for everyone
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {vehicleOptions.map((vehicle, index) => {
              const IconComponent = vehicle.icon;
              return (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6">
                    <IconComponent className="h-12 w-12 text-[#E3B24A] mx-auto mb-4" />
                    <h3 className="font-bold text-xl text-center mb-2">{vehicle.title}</h3>
                    <div className="text-[#E3B24A] font-bold text-lg text-center mb-4">{vehicle.earnings}</div>
                    
                    <div className="mb-4">
                      <p className="text-sm text-gray-600 text-center mb-3">{vehicle.bestFor}</p>
                    </div>

                    <ul className="space-y-2 mb-6">
                      {vehicle.requirements.map((req, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          {req}
                        </li>
                      ))}
                    </ul>

                    <Button className="w-full bg-[#E3B24A] hover:bg-[#D4A23F] text-white">
                      Apply for {vehicle.title}
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Deliver With Us?
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 bg-[#E3B24A] rounded-xl flex items-center justify-center mx-auto mb-3">
                    <IconComponent className="h-6 w-6 text-white" />
                  </div>
                  <p className="font-semibold text-gray-900 text-sm">{benefit.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-16 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              What You'll Need
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-4">
            {requirements.map((requirement, index) => (
              <div key={index} className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                <CheckCircle className="h-5 w-5 text-[#E3B24A] flex-shrink-0" />
                <span className="text-gray-700 font-medium">{requirement}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-gray-900 to-black text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Start Earning?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of delivery partners making great money with MXDrive
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-[#E3B24A] hover:bg-[#D4A23F] text-white px-8 py-4 text-lg font-bold rounded-full"
              asChild
            >
              <Link to="/apply">
                Apply Now - It's Free
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-white text-white hover:bg-white/10 px-8 py-4 text-lg font-bold rounded-full"
            >
              Calculate Earnings
            </Button>
          </div>

          <p className="mt-6 text-gray-400 text-sm">
            No upfront costs • Free signup • Support available 7 days a week
          </p>
        </div>
      </section>

      <FooterSection />
    </div>
  );
};

export default RiderServicesPage;