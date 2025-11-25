import IMAGES from "@/assets/images";

const RiderSteps = () => {
  const steps = [
    { num: "01", title: "Sign Up Online", text: "Complete our quick online form with your personal details and valid ID. It's fast and secure.", icon: "user-plus" }, // Added icon for visual enhancement
    { num: "02", title: "Get Approved", text: "Our team reviews your documents – approval typically happens within 24 hours.", icon: "check-circle" },
    { num: "03", title: "Receive Your Kit", text: "Order your premium MXDRIVE delivery gear, including helmet, bag, and apparel for a professional look.", icon: "package" },
    { num: "04", title: "Start Earning", text: "Download the MXDRIVE app, go online, and begin accepting rides to earn competitive rates.", icon: "dollar-sign" },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-0">
        {/* Header Section - Enhanced with better typography and animation */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-extrabold text-[#484848] mb-4 tracking-tight">
            Start Riding With <span className="text-[#AA1F27]">MXDRIVE</span>
          </h2>
          <p className="text-lg text-[#484848]/70 max-w-2xl mx-auto">
            Join the MXDRIVE family in just 4 easy steps and turn your time on the road into real earnings.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Section - Improved with better overlay and responsiveness */}
          <div className="relative overflow-hidden rounded-[3rem] min-h-[400px] lg:min-h-[500px] flex items-center justify-center order-2 lg:order-1 shadow-xl">
            <div className="absolute inset-0 bg-gradient-to-br from-[#FECB79] to-[#F66610] opacity-85"></div>
            <img 
              src={IMAGES.DEL10} 
              alt="MXDRIVE rider onboarding process" 
              className="z-10 relative max-w-full h-auto object-cover transform hover:scale-105 transition-transform duration-300" 
            />
          </div>

          {/* Steps Section - Enhanced with icons, connecting lines, and hover effects */}
          <div className="order-1 lg:order-2 relative">
            <div className="space-y-12 relative before:absolute before:left-6 before:top-0 before:bottom-0 before:w-0.5 before:bg-[#AA1F27]/20 before:hidden md:before:block"> {/* Vertical connecting line */}
              {steps.map((step, i) => (
                <div key={i} className="flex gap-6 group relative animate-slide-up" style={{ animationDelay: `${i * 0.2}s` }}>
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-white border-2 border-[#AA1F27] flex items-center justify-center text-[#AA1F27] font-bold text-lg group-hover:bg-[#AA1F27] group-hover:text-white transition-all duration-300 z-10 shadow-md">
                    {step.num}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <i className={`fas fa-${step.icon} text-[#AA1F27] text-xl`}></i> {/* Assuming Font Awesome icons are imported */}
                      <h4 className="text-xl font-bold text-[#484848]">{step.title}</h4>
                    </div>
                    <p className="text-gray-600 leading-relaxed">{step.text}</p>
                  </div>
                </div>
              ))}
            </div>
            {/* Call-to-Action Button */}
            <div className="mt-12 text-center lg:text-left">
              <a 
                href="/sign-up" 
                className="inline-block px-8 py-4 bg-[#AA1F27] text-white font-semibold rounded-full hover:bg-[#8A1A20] transition-colors shadow-lg"
              >
                Get Started Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RiderSteps;