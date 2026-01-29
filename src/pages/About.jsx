import React from "react";

const About = () => {
  return (
    <div className="w-full bg-white text-gray-800">

      {/* HERO SECTION */}
      <section className="relative bg-pink-50 py-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-pink-600 mb-4">
              About FNP
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              FNP (Flowers N Petals) is India’s most loved gifting brand,
              spreading smiles across miles with flowers, cakes, plants,
              personalized gifts, and more.
            </p>
          </div>

          <div className="flex justify-center">
            <img
              src="https://images.unsplash.com/photo-1526045612212-70caf35c14df"
              alt="Flowers"
              className="rounded-2xl shadow-lg w-full max-w-md"
            />
          </div>

        </div>
      </section>

      {/* OUR STORY */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-6">Our Story</h2>
          <p className="text-gray-600 leading-relaxed max-w-4xl mx-auto">
            Founded with a passion for making moments special, FNP started as
            a small flower shop and has grown into a global gifting destination.
            We believe every celebration deserves a personal touch, whether
            it’s a birthday, anniversary, festival, or just a reason to smile.
          </p>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          
          <div>
            <h3 className="text-3xl font-bold text-pink-600">25+</h3>
            <p className="text-gray-600">Years of Experience</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-pink-600">400+</h3>
            <p className="text-gray-600">Cities Served</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-pink-600">10M+</h3>
            <p className="text-gray-600">Happy Customers</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-pink-600">1000+</h3>
            <p className="text-gray-600">Gift Options</p>
          </div>

        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-12">
            Why Choose FNP?
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            
            <div className="bg-white shadow-md rounded-xl p-6 text-center hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-3">Fresh & Premium</h3>
              <p className="text-gray-600">
                Handpicked flowers and premium gifts curated with care.
              </p>
            </div>

            <div className="bg-white shadow-md rounded-xl p-6 text-center hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-3">Same Day Delivery</h3>
              <p className="text-gray-600">
                Reliable same-day and midnight delivery across major cities.
              </p>
            </div>

            <div className="bg-white shadow-md rounded-xl p-6 text-center hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-3">Trusted Brand</h3>
              <p className="text-gray-600">
                Millions of happy customers trust us for their special moments.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-pink-600 py-14 px-6 text-center text-white">
        <h2 className="text-3xl font-semibold mb-4">
          Make Every Moment Special
        </h2>
        <p className="mb-6">
          Celebrate love, joy, and togetherness with FNP.
        </p>
        <button className="bg-white text-pink-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition">
          Explore Gifts
        </button>
      </section>

    </div>
  );
};

export default About;
