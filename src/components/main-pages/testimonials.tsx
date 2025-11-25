const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "E-commerce Business Owner",
      content: "Experia Courier has transformed our delivery process. The real-time tracking keeps our customers informed and happy.",
      rating: 5
    },
    {
      name: "Mike Chen",
      role: "Logistics Manager",
      content: "Reliable, fast, and professional. Their international shipping service is exceptional with seamless customs clearance.",
      rating: 5
    },
    {
      name: "Emily Davis",
      role: "Small Business Owner",
      content: "The express delivery service saved us multiple times when we had urgent packages. Highly recommended!",
      rating: 5
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <span key={index} className="text-yellow-400">
        {index < rating ? '★' : '☆'}
      </span>
    ));
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#AA1F27] mb-4">Testimonial</h2>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it - hear from some of our satisfied customers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 p-8 rounded-xl border border-gray-200">
              <div className="flex mb-4">
                {renderStars(testimonial.rating)}
              </div>
              <p className="text-gray-700 mb-6 italic">"{testimonial.content}"</p>
              <div>
                <div className="font-semibold text-gray-900">{testimonial.name}</div>
                <div className="text-gray-600 text-sm">{testimonial.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;