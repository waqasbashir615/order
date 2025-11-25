// components/application-form.tsx
"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface ApplicationFormProps {
  title?: string;
  description?: string;
}

export const ApplicationForm = ({ 
  title = "Get Started with MXDrive", 
  description = "Join thousands of successful businesses" 
}: ApplicationFormProps) => {
  const [formData, setFormData] = useState({
    businessName: "",
    businessAddress: "",
    businessType: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });

  const businessTypes = ["Restaurant", "Grocery Store", "Convenience Store", "Cafe", "Bakery", "Other"];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add your form submission logic here
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-[#E3B24A] mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>

      <div className="space-y-4">
        <div className="space-y-3">
          <Label htmlFor="businessName" className="font-semibold text-gray-900">
            Business Information
          </Label>
          <Input
            id="businessName"
            placeholder="Business name"
            value={formData.businessName}
            onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
            className="focus:border-[#E3B24A] focus:ring-[#E3B24A]"
            required
          />
          <Input
            id="businessAddress"
            placeholder="Business address"
            value={formData.businessAddress}
            onChange={(e) => setFormData({ ...formData, businessAddress: e.target.value })}
            className="focus:border-[#E3B24A] focus:ring-[#E3B24A]"
            required
          />
          <Select value={formData.businessType} onValueChange={(value) => setFormData({ ...formData, businessType: value })}>
            <SelectTrigger className="focus:border-[#E3B24A] focus:ring-[#E3B24A]">
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
              id="firstName"
              placeholder="First name"
              value={formData.firstName}
              onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
              className="focus:border-[#E3B24A] focus:ring-[#E3B24A]"
              required
            />
            <Input
              id="lastName"
              placeholder="Last name"
              value={formData.lastName}
              onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
              className="focus:border-[#E3B24A] focus:ring-[#E3B24A]"
              required
            />
          </div>
          <Input
            id="email"
            type="email"
            placeholder="Email address"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="focus:border-[#E3B24A] focus:ring-[#E3B24A]"
            required
          />
          <Input
            id="phone"
            type="tel"
            placeholder="Phone number"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="focus:border-[#E3B24A] focus:ring-[#E3B24A]"
            required
          />
        </div>
      </div>

      <Button 
        type="submit" 
        className="w-full bg-[#E3B24A] hover:bg-[#d4a53f] text-white h-12 text-lg font-semibold shadow-lg transition-all duration-300"
      >
        Submit your Application <ArrowRight className="ml-2 h-5 w-5" />
      </Button>
    </form>
  );
};