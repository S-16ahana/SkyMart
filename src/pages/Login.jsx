import React from "react";
import { Zap, Mail, Lock, Eye } from "lucide-react";
import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";

const Login = () => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const onSubmit = (data) => {
    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (!storedUser) {
      toast.error("User not found. Please register first.");
      return;
    }

    if (
      storedUser.email === data.email &&
      storedUser.password === data.password
    ) {
      toast.success("Login Successful");
      reset();
      // navigate("/");
    } else {
      toast.error("Invalid email or password");
    }
  };
  const password = watch("password", "");

  const strength =
    (password.length >= 8 ? 1 : 0) +
    (/[A-Z]/.test(password) ? 1 : 0) +
    (/[0-9]/.test(password) ? 1 : 0) +
    (/[@$!%*?&]/.test(password) ? 1 : 0);
  return (
    <div className="min-h-screen bg-[#0D0D0D] flex">
      {/* Left Section */}
      <div className="hidden lg:flex w-1/2 border-r border-[#2A2A2A] flex-col px-14 py-12 relative overflow-hidden">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-[#C8F400] flex items-center justify-center">
            <Zap className="w-6 h-6 text-black fill-black" />
          </div>

          <h1 className="text-3xl font-bold">
            <span className="text-white">Sky</span>
            <span className="text-[#C8F400]">Mart</span>
          </h1>
        </div>

        {/* Hero Content */}
        <div className="mt-28">
          <p className="text-[#C8F400] font-semibold tracking-widest text-sm">
            WELCOME BACK
          </p>

          <h2 className="mt-8 text-6xl font-bold leading-tight text-white">
            Shop the future.
            <br />
            <span className="text-[#C8F400]">Today.</span>
          </h2>

          <p className="mt-8 text-lg text-[#6C6C6B] max-w-md leading-relaxed">
            Thousands of products, lightning-fast delivery, and prices that make
            your wallet happy.
          </p>

          {/* Stats */}
          <div className="flex gap-5 mt-16">
            <div className="w-52 h-24 border border-[#444] rounded-2xl flex flex-col items-center justify-center">
              <h3 className="text-[#C8F400] text-2xl font-bold">20K+</h3>
              <p className="text-[#6C6C6B] text-sm">Products</p>
            </div>

            <div className="w-52 h-24 border border-[#444] rounded-2xl flex flex-col items-center justify-center">
              <h3 className="text-[#C8F400] text-2xl font-bold">50K+</h3>
              <p className="text-[#6C6C6B] text-sm">Users</p>
            </div>

            <div className="w-52 h-24 border border-[#444] rounded-2xl flex flex-col items-center justify-center">
              <h3 className="text-[#C8F400] text-2xl font-bold">4.9★</h3>
              <p className="text-[#6C6C6B] text-sm">Rating</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full lg:w-1/2 flex items-center justify-center">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="w-[430px] rounded-[30px] border border-[#2A2A2A] bg-[#111111] px-10 py-10 shadow-xl">
            <h2 className="text-3xl font-bold text-white">Sign in</h2>

            <p className="mt-2 text-[#6C6C6B]">
              Enter your credentials to continue
            </p>

            {/* Email */}
            <div className="mt-10 relative">
              <Mail className="absolute left-5 top-4 text-[#666]" size={20} />

              <input
                type="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Enter valid email address",
                  },
                })}
                placeholder="Email address"
                className="
              w-full h-14 rounded-2xl
              bg-[#1F1F1F]
              border border-[#303030]
              pl-14 pr-5
              text-white
              placeholder:text-[#666]
              outline-none
              focus:border-[#C8F400]
              "
              />
              {errors.email && (
                <p className="mt-1 ml-1 text-xs text-red-500">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Password */}
            <div className="mt-5 relative">
              <Lock className="absolute left-5 top-4 text-[#666]" size={20} />

              <input
                type="password"
                {...register("password", {
                  required: "Password is required",
                  pattern: {
                    value:
                      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/,
                    message:
                      "Use 8+ chars with uppercase, lowercase, number & special character",
                  },
                })}
                placeholder="Password"
                className="
    w-full h-14 rounded-2xl
    bg-[#1F1F1F]
    border border-[#303030]
    pl-14 pr-12
    text-white
    placeholder:text-[#666]
    outline-none
    focus:border-[#C8F400]
  "
              />

              <Eye
                className="absolute right-5 top-4 text-[#666] cursor-pointer"
                size={20}
              />

              {errors.password && (
                <p className="mt-1 ml-1 text-xs text-red-500">
                  {errors.password.message}
                </p>
              )}
            </div>

            {/* Button */}
            <button
              className="
            mt-8
            w-full
            h-14
            rounded-2xl
            bg-[#C8F400]
            text-black
            font-bold
            text-lg
            hover:brightness-95
            "
            >
              Sign in →
            </button>

            {/* Register Link */}
            <p className="mt-8 text-center text-[#666]">
              Don't have an account?
              <span
                onClick={() => navigate("/register")}
                className="ml-2 text-[#C8F400] font-semibold cursor-pointer"
              >
                Create one
              </span>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
