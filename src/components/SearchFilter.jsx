import React from "react";
import { Search, ChevronDown } from "lucide-react";

const SearchFilter = ({
  search,
  setSearch,
  category,
  setCategory,
  sort,
  setSort,
}) => {
  return (
    <div className="mt-10 border border-[#D9D9D9] rounded-3xl p-5 flex flex-col lg:flex-row gap-4">
      {/* Search */}
      <div className="flex-1 relative">
        <Search
          size={22}
          className="absolute left-5 top-1/2 -translate-y-1/2 text-[#6C6C6B]"
        />

        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full bg-[#1A1A1A] border border-[#2A2A2A] rounded-2xl pl-14 pr-5 py-4 text-lg text-white placeholder:text-[#6C6C6B] outline-none focus:border-[#C8F400] transition"
        />
      </div>

      {/* Category */}
      <div className="relative">
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="appearance-none bg-[#1A1A1A] border border-[#2A2A2A] rounded-2xl px-6 py-4 pr-12 text-white text-lg focus:border-[#C8F400] outline-none transition cursor-pointer"
        >
          <option value="all">All Categories</option>
          <option value="beauty">Beauty</option>
          <option value="fragrances">Fragrances</option>
          <option value="furniture">Furniture</option>
          <option value="groceries">Groceries</option>
        </select>

        <ChevronDown
          size={20}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-[#6C6C6B] pointer-events-none"
        />
      </div>

      {/* Sort */}
      <div className="relative">
        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          className="appearance-none bg-[#1A1A1A] border border-[#2A2A2A] rounded-2xl px-6 py-4 pr-12 text-white text-lg focus:border-[#C8F400] outline-none transition cursor-pointer"
        >
          <option value="featured">Featured</option>
          <option value="low-high">Price: Low → High</option>
          <option value="high-low">Price: High → Low</option>
          <option value="rating">Top Rated</option>
        </select>

        <ChevronDown
          size={20}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-[#6C6C6B] pointer-events-none"
        />
      </div>
    </div>
  );
};

export default SearchFilter;
