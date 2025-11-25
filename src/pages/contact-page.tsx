import { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MessageCircle, 
  MapPin,
  Clock,
  Send,
  CheckCircle
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import FooterSection from '@/components/main-pages/footer-section';
import HeaderSection from '@/components/main-pages/header-navbar';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const contactOptions = [
    {
      icon: Phone,
      title: 'Call Us',
      detail: '020 7123 4567',
      description: 'Mon-Fri 7AM-7PM',
      action: 'Call Now'
    },
    {
      icon: Mail,
      title: 'Email Us',
      detail: 'hello@mxdrive.com',
      description: 'We reply within 2 hours',
      action: 'Send Email'
    },
    {
      icon: MessageCircle,
      title: 'Live Chat',
      detail: 'Available 24/7',
      description: 'Instant support',
      action: 'Start Chat'
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <HeaderSection />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-r from-[#E3B24A] to-[#D4A23F] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Get in Touch
          </h1>
          <p className="text-xl text-white/90">
            We're here to help. Contact us anytime.
          </p>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {contactOptions.map((option, index) => {
              const IconComponent = option.icon;
              return (
                <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-[#E3B24A] rounded-xl flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="font-bold text-lg mb-2">{option.title}</h3>
                    <p className="text-gray-900 font-semibold text-lg mb-1">{option.detail}</p>
                    <p className="text-gray-600 text-sm mb-4">{option.description}</p>
                    <Button className="bg-gray-900 hover:bg-gray-800 text-white w-full">
                      {option.action}
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Contact Form */}
          <Card className="border-0 shadow-xl">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  Send us a Message
                </h2>
                <p className="text-gray-600">
                  Fill out the form and we'll get back to you quickly
                </p>
              </div>

              {isSubmitted ? (
                <div className="text-center py-8">
                  <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Message Sent!</h3>
                  <p className="text-gray-600 mb-6">We'll get back to you within 24 hours.</p>
                  <Button onClick={() => setIsSubmitted(false)} className="bg-[#E3B24A] hover:bg-[#D4A23F]">
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6 max-w-md mx-auto">
                  <div className="space-y-4">
                    <Input
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      required
                    />
                    <Input
                      type="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      required
                    />
                    <Textarea
                      placeholder="Your Message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full bg-[#E3B24A] hover:bg-[#D4A23F] text-white py-3">
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Quick Info */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-[#E3B24A] rounded-xl flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-bold text-lg mb-2">Our Office</h3>
              <p className="text-gray-600">
                123 Delivery Street<br />
                London, E1 6AN
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-[#E3B24A] rounded-xl flex items-center justify-center mx-auto mb-4">
                <Clock className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-bold text-lg mb-2">Support Hours</h3>
              <p className="text-gray-600">
                Mon-Fri: 7AM-7PM<br />
                Weekend: 8AM-6PM
              </p>
            </div>
          </div>
        </div>
      </section>

      <FooterSection />
    </div>
  );
};

export default ContactPage;