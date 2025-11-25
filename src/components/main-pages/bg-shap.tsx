import IMAGES from "@/assets/images";

const BgShap = () => {
    return (
        <section className="relative min-h-screen flex items-center">
            <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
                    {/* Content Section - Stacked on mobile, side-by-side on desktop */}
                    <div className="w-full lg:w-1/2 space-y-6 sm:space-y-8 order-2 lg:order-1">
                        <div className="space-y-4 sm:space-y-6 text-center lg:text-left">
                            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-tight">
                                Drive Your Way to 
                                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#AA1F27] to-[#FDBA4C]">
                                    Success
                                </span>
                            </h1>
                            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                                Join MXDrive and start earning on your own terms. Flexible schedules, competitive pay, and a supportive community await.
                            </p>
                        </div>
                        
                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <button className="bg-[#AA1F27] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold text-base sm:text-lg hover:bg-[#8a1920] transition-all duration-300 hover:scale-105">
                                Get Started Today
                            </button>
                            <button className="border-2 border-[#AA1F27] text-[#AA1F27] px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold text-base sm:text-lg hover:bg-[#AA1F27] hover:text-white transition-all duration-300">
                                Learn More
                            </button>
                        </div>
                    </div>

                    {/* Image Section - Different treatment for mobile vs desktop */}
                    <div className="w-full lg:w-1/2 order-1 lg:order-2">
                        {/* Mobile: Simple image display */}
                        <div className="lg:hidden flex justify-center">
                            <img 
                                src={IMAGES.DEL15} 
                                alt="MXDrive Delivery Partner" 
                                className="w-full max-w-sm sm:max-w-md object-contain"
                            />
                        </div>

                        {/* Desktop: Background shape with image overlay */}
                        <div className="hidden lg:block relative h-96 xl:h-screen">
                            <div
                                className="absolute inset-0 bg-gradient-to-br from-[#AA1F27] to-[#FDBA4C] opacity-15"
                                style={{ clipPath: "polygon(100% 0, 70% 100%, 0% 90%, 50% 0)" }}
                            />
                            <div className="absolute inset-0 flex items-center justify-start pl-8">
                                <img 
                                    src={IMAGES.DEL15} 
                                    alt="MXDrive Delivery Partner" 
                                    className="w-full max-w-lg object-contain transform hover:scale-105 transition-transform duration-300"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BgShap;