// components/mxdrive-signup.tsx
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Truck, Users, Zap, Shield, ArrowRight, Star, Menu, Store, ShoppingCart, Clock, TrendingUp } from "lucide-react";
import IMAGES from "@/assets/images";

export default function MXDriveSignup() {
  const [formData, setFormData] = useState({
    businessName: "",
    businessAddress: "",
    businessType: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const businessTypes = ["Restaurant", "Grocery Store", "Convenience Store", "Cafe", "Bakery", "Other"];

  const quickStats = [
    { icon: Users, value: "90K+", label: "Active Partners" },
    { icon: TrendingUp, value: "14%", label: "Avg. Commission" },
    { icon: Clock, value: "< 48h", label: "Setup Time" },
    { icon: Star, value: "4.8/5", label: "Partner Rating" }
  ];

  const valueProps = [
    {
      icon: Truck,
      title: "Flexible Delivery Options",
      description: "Choose between using your own delivery team or our extensive courier network. Full control, maximum flexibility."
    },
    {
      icon: Shield,
      title: "Zero Risk Onboarding",
      description: "No setup fees, no hidden costs. Start growing your business from day one with our risk-free partnership."
    },
    {
      icon: Zap,
      title: "Instant Customer Access",
      description: "Tap into our existing customer base of millions. Get discovered by hungry customers in your area immediately."
    }
  ];

  const successSteps = [
    {
      step: "01",
      title: "Quick Application",
      description: "Complete our simple 5-minute form with basic business details"
    },
    {
      step: "02",
      title: "Fast Verification",
      description: "Get approved within 48 hours with minimal documentation required"
    },
    {
      step: "03",
      title: "Go Live & Grow",
      description: "Start receiving orders and watch your business expand rapidly"
    }
  ];

  const ApplicationForm = () => (
    <div className="space-y-6">
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-[#E3B24A] mb-2">Start Your Journey</h3>
        <p className="text-gray-600">Join thousands of successful businesses</p>
      </div>

      <div className="space-y-4">
        <div className="space-y-3">
          <Label className="font-semibold text-gray-900">Business Information</Label>
          <Input
            placeholder="Business name"
            value={formData.businessName}
            onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
            className="focus:border-[#E3B24A]"
          />
          <Input
            placeholder="Business address"
            value={formData.businessAddress}
            onChange={(e) => setFormData({ ...formData, businessAddress: e.target.value })}
            className="focus:border-[#E3B24A]"
          />
          <Select value={formData.businessType} onValueChange={(value) => setFormData({ ...formData, businessType: value })}>
            <SelectTrigger className="focus:border-[#E3B24A]">
              <SelectValue placeholder="Business type" />
            </SelectTrigger>
            <SelectContent className="bg-white">
              {businessTypes.map((type) => (
                <SelectItem key={type} value={type}>{type}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-3">
          <Label className="font-semibold text-gray-900">Contact Details</Label>
          <div className="grid sm:grid-cols-2 gap-3">
            <Input
              placeholder="First name"
              value={formData.firstName}
              onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
              className="focus:border-[#E3B24A]"
            />
            <Input
              placeholder="Last name"
              value={formData.lastName}
              onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
              className="focus:border-[#E3B24A]"
            />
          </div>
          <Input
            type="email"
            placeholder="Email address"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="focus:border-[#E3B24A]"
          />
          <Input
            placeholder="Phone number"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="focus:border-[#E3B24A]"
          />
        </div>
      </div>

      <Button className="w-full bg-[#E3B24A] hover:bg-[#d4a53f] text-white h-12 text-lg font-semibold shadow-lg">
        Submit your Application <ArrowRight className="ml-2 h-5 w-5" />
      </Button>
    </div>
  );

  return (
    <div className="min-h-screen bg-white">
      {/* Modern Header */}
      <header className="border-b border-gray-100 bg-white/95 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-end gap-3">
              <div className="w-8 h-8  rounded-xl flex items-center justify-center">
                {/* <Rocket className="h-6 w-6 text-white" /> */}
                  <img src={IMAGES.LOGOBGWITHOUT} alt="" />
              </div>
              <div className="text-3xl item font-bold bg-gradient-to-r from-[#E3B24A] to-[#d4a53f] bg-clip-text text-transparent">
                MXDrive
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden sm:flex gap-3">
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="bg-gradient-to-r from-[#E3B24A] to-[#d4a53f] hover:from-[#d4a53f] hover:to-[#c69938] text-white shadow-lg hover:shadow-xl transition-all">
                    Start Now
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-md bg-white">
                  <DialogHeader>
                    <DialogTitle className="text-2xl text-center text-[#E3B24A]">
                      Get Started with MXDrive
                    </DialogTitle>
                  </DialogHeader>
                  <ApplicationForm />
                </DialogContent>
              </Dialog>
            </div>

            {/* Mobile Navigation */}
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="sm:hidden">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[85vw]">
                <div className="flex flex-col h-full pt-8">
                  <div className="flex-1 space-y-4">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button
                          className="w-full bg-gradient-to-r from-[#E3B24A] to-[#d4a53f] text-white"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          Start Now
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-[95vw] w-[95vw]">
                        <ApplicationForm />
                      </DialogContent>
                    </Dialog>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      {/* Hero Section - Modern Design */}
      <section className="relative bg-gradient-to-br from-gray-50 via-white to-orange-50 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-[#E3B24A]/10 text-[#E3B24A] rounded-full px-4 py-2 mb-8 border border-[#E3B24A]/20">
              <Star className="h-4 w-4" />
              <span className="text-sm font-medium">Trusted by 90,000+ Businesses</span>
            </div>

            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-[#E3B24A] to-[#d4a53f] bg-clip-text text-transparent">
                Deliver
              </span>
              <br />
              <span className="text-gray-900">More, Earn More</span>
            </h1>

            <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
              Transform your local business into a delivery powerhouse. Join MXDrive and unlock unlimited growth potential with our cutting-edge platform.
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {quickStats.map((stat, index) => (
                <div key={index} className="text-center p-4 bg-white rounded-2xl shadow-sm border border-gray-100">
                  <stat.icon className="h-8 w-8 text-[#E3B24A] mx-auto mb-3" />
                  <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>

            <Dialog>
              <DialogTrigger asChild>
                <Button className="bg-gradient-to-r from-[#E3B24A] to-[#d4a53f] hover:from-[#d4a53f] hover:to-[#c69938] text-white text-lg px-12 py-6 rounded-2xl shadow-2xl hover:shadow-3xl transition-all">
                  Start Your Success Story <ArrowRight className="ml-3 h-5 w-5" />
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-md bg-white">
                <ApplicationForm />
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose MXDrive?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We've built the most partner-friendly platform in the industry
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {valueProps.map((prop, index) => (
              <div key={index} className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-lg transition-all group">
                <div className="w-16 h-16 bg-gradient-to-br from-[#E3B24A] to-[#d4a53f] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <prop.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{prop.title}</h3>
                <p className="text-gray-600 leading-relaxed">{prop.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Steps */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Start Selling in 3 Simple Steps</h2>
            <p className="text-xl text-gray-600">Your journey to success begins here</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {successSteps.map((step, index) => (
              <div key={index} className="text-center relative">
                <div className="w-20 h-20 bg-gradient-to-br from-[#E3B24A] to-[#d4a53f] rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <span className="text-2xl font-bold text-white">{step.step}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Supported Businesses */}
      <section className="py-20 bg-gradient-to-br from-[#E3B24A]/5 to-orange-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Businesses We Support</h2>
            <p className="text-xl text-gray-600">Join diverse businesses already thriving with MXDrive</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Store,
                title: "Restaurants",
                description: "Serve more customers with our powerful delivery platform"
              },
              {
                icon: ShoppingCart,
                title: "Grocery Stores",
                description: "Expand your reach with convenient home delivery"
              },
              {
                icon: Users,
                title: "Convenience Stores",
                description: "Bring daily essentials to customers' doorsteps"
              },
              {
                icon: Truck,
                title: "Retail Stores",
                description: "Fast, reliable delivery for all your products"
              }
            ].map((business, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-center hover:shadow-md transition-all">
                <business.icon className="h-12 w-12 text-[#E3B24A] mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">{business.title}</h3>
                <p className="text-gray-600 text-sm">{business.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-[#E3B24A] to-[#d4a53f]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of successful partners who chose MXDrive for their delivery needs
          </p>

          <Dialog>
            <DialogTrigger asChild>
              <Button className="bg-white text-[#E3B24A] hover:bg-gray-100 text-lg px-12 py-6 rounded-2xl shadow-2xl font-semibold">
                Start Your Journey Today <ArrowRight className="ml-3 h-5 w-5" />
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-md bg-white">
              <ApplicationForm />
            </DialogContent>
          </Dialog>
        </div>
      </section>
    </div>
  );
}