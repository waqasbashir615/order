  import { useState } from 'react';
  import { Search, ArrowRight, MessageCircle, Phone, Mail, Clock, Car, Users, Building, CreditCard } from 'lucide-react';
  import { Input } from '@/components/ui/input';
  import { Button } from '@/components/ui/button';
  import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
  import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import HeaderSection from '@/components/main-pages/header-navbar';

  const MXDriveHelpCenter = () => {
    const [searchQuery, setSearchQuery] = useState('');

    const helpCategories = [
      {
        icon: Users,
        title: "I'm a new or existing driver",
        description: "Get help with driver applications, account setup, and managing your driver profile",
        link: "Driver Help"
      },
      {
        icon: Building,
        title: "I'm managing deliveries for my business",
        description: "Information for businesses using MXDrive for their delivery services",
        link: "Business Help"
      },
      {
        icon: Car,
        title: "I'm tracking my delivery",
        description: "Real-time delivery tracking and order status updates",
        link: "Track Delivery"
      },
      {
        icon: CreditCard,
        title: "MXDrive Payments",
        description: "Billing, payments, and financial information",
        link: "Payment Help"
      }
    ];

    const faqs = [
      {
        question: "How do I invite colleagues to register as drivers for my business?",
        answer: "You can invite colleagues through your business dashboard. Go to Team Management and send invitation links via email."
      },
      {
        question: "How do I add another vehicle to my driver account?",
        answer: "Navigate to your profile settings, select 'Vehicles', and click 'Add New Vehicle' to register additional vehicles."
      },
      {
        question: "How much do you charge for delivery services?",
        answer: "Delivery fees vary based on distance, time, and vehicle type. You can see exact pricing in the app before confirming any delivery."
      },
      {
        question: "What's your free delivery offer for businesses?",
        answer: "We offer free delivery for business accounts on orders over $50. Check your business plan for specific terms."
      },
      {
        question: "What communication should I expect about my delivery?",
        answer: "You'll receive SMS updates for order confirmation, driver assignment, pickup, and delivery completion."
      },
      {
        question: "Where's my order?",
        answer: "Track your order in real-time through the MXDrive app. You can see your driver's location and estimated delivery time."
      },
      {
        question: "I haven't received my payment. What should I do?",
        answer: "Payments are processed weekly. If you haven't received payment within 7 business days, contact our support team."
      },
      {
        question: "How do I view my earnings statement?",
        answer: "Access your earnings statements in the driver app under 'Earnings' or through the web portal."
      },
      {
        question: "What happens if I miss a delivery window?",
        answer: "Contact support immediately. We'll help reschedule or find an alternative solution for your delivery."
      },
      {
        question: "Why is a delivery slot showing as 'Unavailable'?",
        answer: "Delivery slots may be unavailable due to high demand, weather conditions, or vehicle limitations in your area."
      },
      {
        question: "What does 'Peak Hours' pricing mean?",
        answer: "During high-demand periods, delivery rates may increase to ensure timely service and driver availability."
      },
      {
        question: "What are MXDrive business accounts, and how do I set one up?",
        answer: "Business accounts provide volume discounts and dedicated support. Contact our sales team to set up a business account."
      }
    ];

    const supportChannels = [
      {
        icon: MessageCircle,
        title: "Submit a request",
        description: "Fill out our contact form for detailed assistance",
        action: "Submit Request"
      },
      {
        icon: Phone,
        title: "Call Support",
        description: "07:00-19:00 Monday-Friday",
        action: "Call Now"
      },
      {
        icon: Mail,
        title: "Email Support",
        description: "Send us an email anytime",
        action: "Send Email"
      }
    ];

    const filteredFAQs = searchQuery
      ? faqs.filter(faq => 
          faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
          faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
        )
      : faqs;

    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        {/* Header */}
         <HeaderSection />

        {/* Hero Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 mt-18 ">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-[#393939] mb-6">
              How can we help?
            </h1>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                type="text"
                placeholder="Search for help articles, FAQs, and guides..."
                className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#E3B24A] focus:border-transparent"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          {/* Help Categories */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {helpCategories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer border border-gray-200">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-[#E3B24A]/10 rounded-lg flex items-center justify-center mb-4">
                      <IconComponent className="h-6 w-6 text-[#E3B24A]" />
                    </div>
                    <h3 className="font-semibold text-[#393939] text-lg mb-2">
                      {category.title}
                    </h3>
                    <p className="text-[#393939CC] text-sm mb-4">
                      {category.description}
                    </p>
                    <Button variant="link" className="p-0 h-auto text-[#E3B24A] hover:text-[#D4A23F] font-semibold">
                      {category.link}
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* FAQ Section */}
          <Card className="mb-12 border border-gray-200">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-[#393939]">
                Frequently asked questions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="space-y-4">
                {filteredFAQs.map((faq, index) => (
                  <AccordionItem key={index} value={`faq-${index}`} className="border-b border-gray-100 last:border-b-0">
                    <AccordionTrigger className="text-left font-semibold text-[#393939] hover:no-underline py-4">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-[#393939CC] pb-4">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>

              {filteredFAQs.length === 0 && (
                <div className="text-center py-8">
                  <p className="text-gray-500">No results found. Try a different search term.</p>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Contact Section */}
          <Card className="bg-gradient-to-r from-[#E3B24A] to-[#D4A23F] border-0">
            <CardContent className="p-8 text-white">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-4">
                  Still can't find what you're looking for?
                </h2>
                <p className="text-white/90 text-lg">
                  Our Customer Care Team is here to help <strong>07:00-19:00 Monday-Friday</strong>
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                {supportChannels.map((channel, index) => {
                  const IconComponent = channel.icon;
                  return (
                    <div key={index} className="bg-white/10 rounded-lg p-6 text-center backdrop-blur-sm">
                      <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <IconComponent className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="font-semibold text-lg mb-2">
                        {channel.title}
                      </h3>
                      <p className="text-white/80 text-sm mb-4">
                        {channel.description}
                      </p>
                      <Button className="w-full bg-white text-[#E3B24A] hover:bg-gray-100">
                        {channel.action}
                      </Button>
                    </div>
                  );
                })}
              </div>

              {/* Support Hours */}
              <div className="text-center mt-8 pt-6 border-t border-white/20">
                <div className="flex items-center justify-center space-x-2 text-white/80">
                  <Clock className="h-4 w-4" />
                  <span>Customer Care available 07:00-19:00 Monday-Friday</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Footer Links */}
          <div className="flex flex-col sm:flex-row justify-between items-center mt-8 text-sm text-[#393939CC] space-y-2 sm:space-y-0">
            <div className="flex items-center space-x-4">
              <Button variant="link" className="p-0 h-auto text-[#393939CC] hover:text-[#393939]">
                Return to the main site
              </Button>
              <span className="text-gray-300">|</span>
              <Button variant="link" className="p-0 h-auto text-[#393939CC] hover:text-[#393939]">
                Support sign in
              </Button>
            </div>
            <div>
              <span className="text-[#393939CC]">© 2024 MXDrive. All rights reserved.</span>
            </div>
          </div>
        </div>
      </div>
    );
  };

  export default MXDriveHelpCenter;