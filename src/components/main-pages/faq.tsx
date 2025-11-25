import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const RiderFAQ = () => {
  const [openIndex, setOpenIndex] = useState<string | null>(null);

  const toggleFAQ = (id: string) => {
    setOpenIndex(openIndex === id ? null : id);
  };

  const faqs = [
    { 
      id: "documents",
      q: "What documents do I need?", 
      a: "You'll need a valid driving license (if using a vehicle), proof of right to work, and proof of address." 
    },
    { 
      id: "earnings",
      q: "How much can I earn?", 
      a: "Earnings vary by city and demand, but our riders earn competitive rates plus 100% of tips." 
    },
    { 
      id: "vehicle",
      q: "Do I need my own vehicle?", 
      a: "You can use a bicycle, scooter, or car. We also have rental partners if you don't have your own." 
    },
    { 
      id: "payments",
      q: "When do I get paid?", 
      a: "We process payments weekly. You can also use our 'Cash Out' feature for instant access to earnings." 
    },
    { 
      id: "app",
      q: "How does the app work?", 
      a: "The MX Rider app provides turn-by-turn navigation, real-time demand insights, and 24/7 support to help you maximize your earnings." 
    },
    { 
      id: "training",
      q: "Is there training provided?", 
      a: "Yes, we offer comprehensive onboarding and ongoing training resources to ensure you're successful as an MX Rider." 
    },
  ];

  const variants = {
    closed: { height: 0, opacity: 0 },
    open: { height: "auto", opacity: 1 },
  };

  return (
    <section className="py-12 sm:py-20 bg-[#EFEFEF]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-black text-[#484848] text-center mb-8 sm:mb-12">
          Frequently Asked Questions
        </h2>
        
        <div className="space-y-4">
          {faqs.map((faq) => (
            <div 
              key={faq.id} 
              className="bg-white rounded-xl overflow-hidden shadow-sm"
            >
              <button
                className="w-full p-4 sm:p-6 flex items-center justify-between text-left focus:outline-none focus:ring-2 focus:ring-[#AA1F27]"
                onClick={() => toggleFAQ(faq.id)}
                aria-expanded={openIndex === faq.id}
                aria-controls={`faq-content-${faq.id}`}
              >
                <h3 className={`font-bold text-base sm:text-lg ${openIndex === faq.id ? 'text-[#AA1F27]' : 'text-[#484848]'}`}>
                  {faq.q}
                </h3>
                {openIndex === faq.id ? 
                  <Minus className="text-[#AA1F27] w-5 h-5" /> : 
                  <Plus className="text-gray-400 w-5 h-5" />
                }
              </button>
              <AnimatePresence>
                {openIndex === faq.id && (
                  <motion.div
                    id={`faq-content-${faq.id}`}
                    variants={variants}
                    initial="closed"
                    animate="open"
                    exit="closed"
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-4 sm:px-6 pb-4 sm:pb-6 text-gray-600 text-sm sm:text-base">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RiderFAQ;