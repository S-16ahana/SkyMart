import React from "react";
import {
  ArrowRight,
  Package,
  Star,
  Tag,
  ShoppingBag,
  ShieldCheck,
  Truck,
} from "lucide-react";
import Navbar from "../components/Navbar";

const categories = [
  {
    name: "Electronics",
    icon: "💻",
    count: "17 Products",
  },
  {
    name: "Clothing",
    icon: "👕",
    count: "12 Products",
  },
  {
    name: "Furniture",
    icon: "🪑",
    count: "8 Products",
  },
  {
    name: "Home",
    icon: "🏠",
    count: "14 Products",
  },
];

const features = [
  {
    title: "Fast Delivery",
    desc: "Same-day delivery",
    icon: <Truck className="text-[#C8F400]" size={28} />,
  },
  {
    title: "Secure Payments",
    desc: "100% encrypted checkout",
    icon: <ShieldCheck className="text-blue-400" size={28} />,
  },
  {
    title: "Best Prices",
    desc: "Price match guarantee",
    icon: <Tag className="text-green-400" size={28} />,
  },
];

const Home = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="bg-[#0D0D0D] min-h-screen text-white">
      <Navbar />

      <div className="max-w-7xl mx-auto px-8 py-10">
        {/* Hero */}
        <section className="rounded-3xl border border-[#2A2A2A] bg-gradient-to-br from-[#181818] to-[#0D0D0D] p-12">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-10">
            <div>
              <p className="uppercase tracking-widest text-[#C8F400] text-sm">
                Good Evening 👋
              </p>

              <h1 className="text-6xl font-bold mt-4 leading-tight">
                Welcome Back,
                <br />
                <span className="text-[#C8F400]">
                  {user?.fullName || "Guest"}!
                </span>
              </h1>

              <p className="text-[#6C6C6B] text-lg mt-6 max-w-xl">
                Discover today's best deals with premium products across
                electronics, fashion, furniture and much more.
              </p>

              <div className="flex gap-5 mt-10">
                <button className="bg-[#C8F400] text-black px-8 py-4 rounded-2xl font-bold flex items-center gap-2 hover:scale-105 transition">
                  Shop Now
                  <ArrowRight size={18} />
                </button>

                <button className="border border-[#2A2A2A] px-8 py-4 rounded-2xl hover:border-[#C8F400] transition">
                  Explore
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-5 w-72">
              <div className="bg-[#202A00] border border-[#3C4F00] rounded-3xl p-8 text-center">
                <h2 className="text-5xl font-bold text-[#C8F400]">20+</h2>
                <p className="text-[#6C6C6B] mt-2">Products Available</p>
              </div>

              <div className="bg-[#151515] border border-[#2A2A2A] rounded-3xl p-8 text-center">
                <h2 className="text-5xl font-bold">Free</h2>
                <p className="text-[#6C6C6B] mt-2">Delivery Above ₹999</p>
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
          {[
            {
              title: "Cart Items",
              value: "0",
              desc: "Products in cart",
              icon: <ShoppingBag size={24} className="text-[#C8F400]" />,
            },
            {
              title: "Cart Value",
              value: "$0",
              desc: "Ready to checkout",
              icon: <Package size={24} className="text-blue-400" />,
            },
            {
              title: "Top Products",
              value: "20",
              desc: "Highly rated",
              icon: <Star size={24} className="text-yellow-400" />,
            },
            {
              title: "Categories",
              value: "4",
              desc: "Available",
              icon: <Tag size={24} className="text-purple-400" />,
            },
          ].map((item) => (
            <div
              key={item.title}
              className="bg-[#151515] border border-[#2A2A2A] rounded-3xl p-6 hover:border-[#C8F400] hover:-translate-y-1 transition-all"
            >
              <div className="flex justify-between items-start">
                {/* Left Content */}
                <div>
                  <h2 className="text-4xl font-bold text-white">
                    {item.value}
                  </h2>

                  <p className="mt-2 text-lg font-semibold">{item.title}</p>

                  <p className="text-sm text-[#6C6C6B] mt-1">{item.desc}</p>
                </div>

                {/* Right Icon */}
                <div className="w-14 h-14 rounded-2xl bg-[#202020] flex items-center justify-center">
                  {item.icon}
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* Categories */}
        <section className="mt-16">
          <div className="flex justify-between items-center">
            <h2 className="text-4xl font-bold">Shop by Category</h2>

            <button className="text-[#C8F400] flex items-center gap-2">
              View All <ArrowRight size={18} />
            </button>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
            {categories.map((cat) => (
              <div
                key={cat.name}
                className="bg-[#151515] border border-[#2A2A2A] rounded-3xl p-6 hover:border-[#C8F400] hover:-translate-y-1 transition-all duration-300 cursor-pointer"
              >
                <div className="flex justify-between items-start">
                  {/* Left Content */}
                  <div>
                    <h3 className="text-2xl font-semibold text-white">
                      {cat.name}
                    </h3>

                    <p className="mt-2 text-[#6C6C6B]">{cat.count}</p>
                  </div>

                  {/* Right Icon */}
                  <div className="w-14 h-14 rounded-2xl bg-[#202020] flex items-center justify-center text-3xl">
                    {cat.icon}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Features */}
        <section className="grid lg:grid-cols-3 gap-6 mt-16">
          {features.map((item) => (
            <div
              key={item.title}
              className="bg-[#151515] border border-[#2A2A2A] rounded-3xl p-8 flex items-center gap-5 hover:border-[#C8F400] transition"
            >
              {item.icon}

              <div>
                <h3 className="text-xl font-semibold">{item.title}</h3>

                <p className="text-[#6C6C6B]">{item.desc}</p>
              </div>
            </div>
          ))}
        </section>

        {/* Footer */}
        <footer className="border-t border-[#2A2A2A] mt-20 py-10 text-center">
          <h2 className="text-4xl font-bold">
            Sky<span className="text-[#C8F400]">Mart</span>
          </h2>

          <p className="text-[#6C6C6B] mt-4">
            © 2025 SkyMart. Built with React & Tailwind CSS.
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Home;
