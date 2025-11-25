import IMAGES from "@/assets/images";
import { Button } from "../ui/button";
import { CheckCircle2, ArrowRight, Wallet } from "lucide-react";

const MXDriveRiderApplication = () => {
  return (
    <section className="relative py-12 lg:py-20 bg-[#F9FAFB] overflow-hidden mt-16 sm:mt-18">
      {/* Decorative Background Blob */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#FFE5E6] to-transparent opacity-50 -z-10 blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-0">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* --- Left Content: The Pitch --- */}
          <div className="space-y-8">
            <div className="space-y-4">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#AA1F27]/10 text-[#AA1F27] text-sm font-bold tracking-wide uppercase">
                <span className="w-2 h-2 rounded-full bg-[#AA1F27] animate-pulse" />
                Hiring Drivers Now
              </span>
              
              <h2 className="text-4xl lg:text-5xl font-black text-gray-900 leading-[1.1]">
                Drive Your Way to <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#AA1F27] to-[#FDBA4C]">
                  Financial Freedom
                </span>
              </h2>
              
              <p className="text-lg text-gray-600 max-w-md leading-relaxed">
                Turn your vehicle into a money-making machine. Set your own schedule and get paid instantly.
              </p>
            </div>

            {/* Quick Benefits Checklist (Faster to read than a grid) */}
            <ul className="space-y-3">
              {[
                "Earn up to £30/hour + 100% of tips",
                "Flexible Schedule - You are the boss",
                "Instant daily payouts available"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-700 font-medium">
                  <CheckCircle2 className="w-5 h-5 text-[#AA1F27] flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            {/* Action Area */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Button className="h-12 px-8 bg-[#AA1F27] hover:bg-[#8a1920] text-white rounded-xl text-base font-bold shadow-lg shadow-red-900/20 transition-transform hover:-translate-y-1">
                Start Earning Today
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <div className="flex items-center gap-4 px-4">
                <div className="flex -space-x-3">
                  {[1,2,3].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gray-200 flex items-center justify-center text-xs font-bold text-gray-500">
                      {/* Placeholder for user avatars */}
                      U{i}
                    </div>
                  ))}
                </div>
                <div className="text-sm font-semibold text-gray-900">
                  Join 5,000+ Riders
                </div>
              </div>
            </div>
          </div>

          {/* --- Right Content: Visual Impact --- */}
          <div className="relative mx-auto lg:ml-auto w-full max-w-[500px]">
            {/* Main Image */}
            <div className="relative z-10">
              <img
                src={IMAGES.DEL9}
                alt="MXDRIVE Rider"
                className="w-full h-auto object-contain drop-shadow-2xl hover:scale-[1.02] transition-transform duration-500"
              />
            </div>

            {/* Floating Card: Earnings Visualizer */}
            <div className="absolute top-1/4 -left-4 lg:-left-12 z-20 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-white/50 animate-bounce-slow">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                  <Wallet className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-medium uppercase">Last Payout</p>
                  <p className="text-xl font-black text-gray-900">£850.00</p>
                </div>
              </div>
            </div>

             {/* Floating Card: Rating */}
             <div className="absolute bottom-10 -right-4 z-20 bg-white p-3 rounded-xl shadow-lg border border-gray-100 flex items-center gap-2">
                <span className="text-[#FDBA4C] text-xl">★★★★★</span>
                <span className="font-bold text-gray-800">4.9/5</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default MXDriveRiderApplication;