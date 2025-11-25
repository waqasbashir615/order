import IMAGES from "@/assets/images";
import { Shield, Phone, Headphones, Heart } from "lucide-react";

const Features = () => {
  const supportFeatures = [
    {
      icon: Phone,
      title: "24/7 Support",
      description: "Live help anytime you need it"
    },
    {
      icon: Shield,
      title: "Free Insurance",
      description: "Covered from your first delivery"
    },
    {
      icon: Headphones,
      title: "Instant Help",
      description: "In-app messaging and calls"
    },
    {
      icon: Heart,
      title: "Safety First",
      description: "Your wellbeing is our priority"
    }
  ];

  return (
    <section id="features" className="py-12 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-0">
        <div className="grid lg:grid-cols-2 gap-8  lg:gap-16 items-center">
          {/* Content Section */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                Rider Support & <span className="text-[#AA1F27]">Safety</span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                At MXDRIVE, we prioritize your safety and provide comprehensive support
                to ensure you can focus on earning with peace of mind.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {supportFeatures.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                    <div className="w-12 h-12 bg-[#AA1F27] rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">{feature.title}</h3>
                      <p className="text-gray-600 text-sm">{feature.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Image Section */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              <img
                src={IMAGES.DEL1REM}
                alt="MXDRIVE rider support and safety features"
                className="rounded-2xl w-full h-auto object-cover "
              />
              {/* Floating Badge */}
              <div className="absolute -bottom-4 -right-4 bg-[#AA1F27] text-white rounded-xl px-5 py-3 shadow-xl">
                <div className="text-center">
                  <div className="font-bold text-lg">24/7</div>
                  <div className="text-sm">Rider Support</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;