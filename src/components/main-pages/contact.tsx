// src/components/FAQSection.tsx
import React, { useState } from 'react';
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { 
  Search, 
  Plus, 
  Minus, 
  MessageCircle, 
  Phone, 
  Mail,
  Clock,
  Shield,
  TrendingUp,
  MapPin
} from 'lucide-react';

const faqData = [
  {
    category: "Getting Started",
    icon: TrendingUp,
    questions: [
      {
        question: "How do I sign up as an MX Rider?",
        answer: "Download the MX Rider app from your app store, complete the simple registration form, upload required documents, and start accepting delivery requests within 24 hours of approval."
      },
      {
        question: "What are the requirements to become a rider?",
        answer: "You need a valid driver's license, vehicle registration, insurance, smartphone, and must be 18+ years old. Specific vehicle requirements vary by city."
      },
      {
        question: "How long does the approval process take?",
        answer: "Most applications are reviewed and approved within 24-48 hours. You'll receive email and app notifications throughout the process."
      }
    ]
  },
  {
    category: "Earnings & Payments",
    icon: TrendingUp,
    questions: [
      {
        question: "What is the average earning potential?",
        answer: "Our riders typically earn £15-25 per hour during regular hours and £25-35 during peak times. Your earnings depend on location, time, and delivery volume."
      },
      {
        question: "How and when do I get paid?",
        answer: "We process weekly payments every Monday. Use Instant Cashout for immediate transfers. All payments are securely processed through our payment system."
      },
      {
        question: "Are there any hidden fees or charges?",
        answer: "No hidden fees. MX Rider charges a transparent service fee per delivery to maintain our platform, support, and safety features."
      }
    ]
  },
  {
    category: "Delivery Process",
    icon: MapPin,
    questions: [
      {
        question: "How does the delivery request system work?",
        answer: "When you're online, the app shows nearby delivery opportunities with pickup/dropoff details and estimated earnings. Accept requests that fit your schedule."
      },
      {
        question: "Can I choose my delivery areas?",
        answer: "Yes, set your preferred delivery zones in the app. You'll only receive requests within your selected areas, helping you work efficiently."
      },
      {
        question: "What support is available during deliveries?",
        answer: "24/7 in-app support, direct customer messaging, and emergency assistance. Our team is always here to help with any delivery issues."
      }
    ]
  },
  {
    category: "Safety & Support",
    icon: Shield,
    questions: [
      {
        question: "What safety features does MX Rider provide?",
        answer: "We offer real-time tracking, emergency assistance button, trip sharing with trusted contacts, and 24/7 safety monitoring to ensure rider security."
      },
      {
        question: "How can I contact rider support?",
        answer: "Access support through in-app chat, our dedicated helpline, email support, or visit our local rider hubs for in-person assistance."
      },
      {
        question: "What happens in case of emergencies?",
        answer: "Use the emergency button in the app for immediate assistance. Our safety team is trained to handle emergencies and coordinate with local authorities."
      }
    ]
  }
];

const supportChannels = [
  {
    icon: MessageCircle,
    title: "In-App Chat",
    description: "Instant messaging support",
    responseTime: "Typically replies in 2 minutes",
    action: "Start Chat"
  },
  {
    icon: Phone,
    title: "Phone Support",
    description: "Direct conversation",
    responseTime: "24/7 availability",
    action: "Call Now"
  },
  {
    icon: Mail,
    title: "Email Support",
    description: "Detailed assistance",
    responseTime: "Within 4 hours",
    action: "Send Email"
  }
];

const FAQSection: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const filteredFaqs = faqData.map(category => ({
    ...category,
    questions: category.questions.filter(q =>
      q.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      q.answer.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(category => category.questions.length > 0);

  const popularQuestions = [
    "How much can I earn?",
    "What are the requirements?",
    "How do I get paid?",
    "Is there emergency support?"
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#E3B24A]/10 rounded-full mb-6">
            <MessageCircle className="h-4 w-4 text-[#E3B24A]" />
            <span className="text-sm font-medium text-[#E3B24A]">Support Center</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            How can we help you?
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get answers to frequently asked questions about delivering with MX Rider
          </p>
        </div>

        {/* Search Section */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Search for answers... (e.g., payments, requirements, support)"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#E3B24A] focus:border-transparent bg-white shadow-sm text-lg"
            />
          </div>
          
          {/* Popular Questions */}
          <div className="flex flex-wrap gap-3 justify-center mt-4">
            {popularQuestions.map((question, index) => (
              <button
                key={index}
                onClick={() => setSearchTerm(question.replace('?', ''))}
                className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm text-gray-600 hover:border-[#E3B24A] hover:text-[#E3B24A] transition-colors"
              >
                {question}
              </button>
            ))}
          </div>
        </div>

        {/* FAQ Content */}
        <div className="grid lg:grid-cols-4 gap-8">
          
          {/* Categories Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-2">
              <h3 className="font-semibold text-gray-900 mb-4">Categories</h3>
              {faqData.map((category, index) => (
                <button
                  key={index}
                  onClick={() => setActiveCategory(activeCategory === category.category ? null : category.category)}
                  className={`w-full text-left px-4 py-3 rounded-xl transition-all ${
                    activeCategory === category.category
                      ? 'bg-[#E3B24A] text-white shadow-lg'
                      : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <category.icon className="h-4 w-4" />
                    <span className="font-medium">{category.category}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* FAQ Accordions */}
          <div className="lg:col-span-3">
            <div className="space-y-6">
              {filteredFaqs.map((category, categoryIndex) => (
                <div 
                  key={categoryIndex} 
                  className={`bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden transition-all ${
                    activeCategory && activeCategory !== category.category ? 'opacity-50' : ''
                  }`}
                >
                  
                  {/* Category Header */}
                  <div className="bg-gradient-to-r from-[#E3B24A]/5 to-[#E3B24A]/10 px-6 py-5 border-b border-gray-100">
                    <div className="flex items-center gap-3">
                      <category.icon className="h-5 w-5 text-[#E3B24A]" />
                      <h3 className="text-xl font-semibold text-gray-900">
                        {category.category}
                      </h3>
                      <span className="bg-[#E3B24A] text-white text-sm px-2 py-1 rounded-full">
                        {category.questions.length}
                      </span>
                    </div>
                  </div>

                  {/* Questions */}
                  <Accordion type="single" collapsible className="divide-y divide-gray-100">
                    {category.questions.map((item, itemIndex) => (
                      <AccordionItem key={itemIndex} value={`${categoryIndex}-${itemIndex}`} className="border-0">
                        <AccordionTrigger className="flex items-center justify-between w-full px-6 py-5 text-left hover:bg-gray-50/50 transition-colors group">
                          <span className="font-semibold text-gray-900 pr-8 text-lg group-hover:text-[#E3B24A] transition-colors">
                            {item.question}
                          </span>
                          <div className="flex-shrink-0 w-8 h-8 bg-[#E3B24A]/10 rounded-full flex items-center justify-center group-hover:bg-[#E3B24A]/20 transition-colors">
                            <Plus className="h-4 w-4 text-[#E3B24A] accordion-open:hidden" />
                            <Minus className="h-4 w-4 text-[#E3B24A] accordion-open:block hidden" />
                          </div>
                        </AccordionTrigger>
                        <AccordionContent className="px-6 pb-5 pt-2">
                          <p className="text-gray-600 leading-relaxed text-lg">
                            {item.answer}
                          </p>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              ))}
            </div>

            {/* No Results */}
            {filteredFaqs.length === 0 && (
              <div className="text-center py-16 bg-white rounded-2xl border border-gray-200">
                <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Search className="h-8 w-8 text-gray-400" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-600 mb-3">
                  No results found
                </h3>
                <p className="text-gray-500 mb-6">
                  Try searching with different keywords or browse the categories
                </p>
                <button 
                  onClick={() => setSearchTerm('')}
                  className="px-6 py-3 bg-[#E3B24A] text-white rounded-full font-semibold hover:bg-[#D4A23F] transition-colors"
                >
                  View All Questions
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Support Channels */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Still need help?
            </h2>
            <p className="text-gray-600 text-lg">
              Our support team is ready to assist you
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {supportChannels.map((channel, index) => {
              const IconComponent = channel.icon;
              return (
                <div key={index} className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-[#E3B24A] transition-colors group">
                  <div className="w-12 h-12 bg-[#E3B24A]/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#E3B24A]/20 transition-colors">
                    <IconComponent className="h-6 w-6 text-[#E3B24A]" />
                  </div>
                  <h3 className="font-semibold text-gray-900 text-lg mb-2">
                    {channel.title}
                  </h3>
                  <p className="text-gray-600 mb-3">
                    {channel.description}
                  </p>
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                    <Clock className="h-4 w-4" />
                    {channel.responseTime}
                  </div>
                  <button className="w-full bg-[#E3B24A] text-white py-3 rounded-xl font-semibold hover:bg-[#D4A23F] transition-colors">
                    {channel.action}
                  </button>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

export default FAQSection;