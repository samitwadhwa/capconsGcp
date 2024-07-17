"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import googleIcon from "@/public/images/googleIcon.png";
import appleIcon from '@/public/images/appleIcon.png';
import { FaEye, FaRegEyeSlash } from 'react-icons/fa';
import { useState, useEffect } from "react";
import { useForm, SubmitHandler } from 'react-hook-form';
import { useRouter } from 'next/navigation';

interface FormValues {
  name: string;
  email: string;
  password: string;
}

function Signup() {
  const { register, handleSubmit, watch, formState: { errors, isSubmitted }, setValue, trigger } = useForm<FormValues>({
    mode: "onChange",
  });
  const emailValue = watch("email");
  const passwordValue = watch("password");
  const router = useRouter();

  const [showPassword, setShowPassword] = useState(false);
  const handleTogglePasswordVisibility = () => {
    setShowPassword(prevState => !prevState);
  };
  const [showCountryCodeInput, setShowCountryCodeInput] = useState(false);
  const [countryCode, setCountryCode] = useState('+91');

  useEffect(() => {
    const isNumeric = /^\d+$/.test(emailValue);
    setShowCountryCodeInput(isNumeric);
    if (!isNumeric) {
      setCountryCode("");
    }
    if (isSubmitted) {
      trigger("email");
    }
  }, [emailValue, trigger, isSubmitted]);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setValue("email", value, { shouldValidate: true });
  };

  const handleCountryCodeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCountryCode(e.target.value);
  };

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    if (showCountryCodeInput) {
      data.email = countryCode + data.email;
    }
    console.log(data);
    router.push('/login');
  };

  const passwordCriteria = [
    {
      regex: /(?=.*[a-z])/,
      message: "At least one lowercase letter",
    },
    {
      regex: /(?=.*[A-Z])/,
      message: "At least one uppercase letter",
    },
    {
      regex: /(?=.*\d)/,
      message: "At least one number",
    },
    {
      regex: /(?=.*[@$!%*?&])/,
      message: "At least one special character",
    },
    {
      regex: /.{8,}/,
      message: "At least 8 characters long",
    },
  ];

  const getPasswordErrorMessages = () => {
    if (!passwordValue) return [];
    return passwordCriteria
      .filter(criteria => !criteria.regex.test(passwordValue))
      .map(criteria => criteria.message);
  };

  return (
    <div className="w-full lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px] mt-4 container mx-auto">
      <div className="flex items-center justify-center py-12 w-80">
        <div className="mx-auto grid w-[450px] gap-6">
          <div className="grid gap-2 text-left">
            <h1 className="text-2xl font-bold mt-8">Sign Up</h1>
            <div className="flex space-x-2">
              <p>Not a Member?</p>
              <p className='text-p font-p text-[#D6A7FF]'> Start a 14 day free trial</p>
            </div>
          </div>
          <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4">
            <div className="grid gap-2">
              <Input
                id="name"
                type="text"
                placeholder="Name"
                className='rounded-sm shadow appearance-none py-2 px-3 leading-tight bg-transparent focus:outline-none focus:shadow-outline border text-slight-grey border-custom-Border'
                {...register("name", {
                  required: "Name is required!",
                })}
              />
              {errors.name && (
                <span className="text-red-500 text-sm">{errors.name.message}</span>
              )}
            </div>
            <div className="flex items-center gap-2">
              {showCountryCodeInput && (
                <select
                  id="countryCode"
                  className="shadow appearance-none py-2 px-3 leading-tight bg-transparent focus:outline-none focus:shadow-outline border text-slight-grey border-custom-Border"
                  value={countryCode}
                  onChange={handleCountryCodeChange}
                >
                  <option value="+91">+91</option>
                  <option value="+1">+1</option>
                  <option value="+44">+44</option>
                </select>
              )}
              <Input
                id="email"
                type="text"
                placeholder="Email or Phone"
                value={emailValue}
                className={`rounded-sm shadow appearance-none py-2 px-3 ${showCountryCodeInput ? 'w-15.6rem' : 'w-19.5rem'} leading-tight bg-transparent focus:outline-none focus:shadow-outline border text-slight-grey border-custom-Border`}
                {...register("email", {
                  required: "Email or Mobile is required!",
                  pattern: {
                    value: /^(?:\d{10}|\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*)$/,
                    message: "Please enter a valid Email or Mobile number!"
                  }
                })}
                onChange={handleEmailChange}
              />
            </div>
            {errors.email && (
              <span className="text-red-500 text-sm">{errors.email.message}</span>
            )}
            <div className="grid gap-2 relative">
              <Input 
                id="password" 
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className='rounded-sm shadow appearance-none py-2 px-3 leading-tight bg-transparent w-19.5rem focus:outline-none focus:shadow-outline border text-slight-grey border-custom-Border'
                {...register("password", {
                  required: "Password is required!",
                  validate: () => {
                    const errors = getPasswordErrorMessages();
                    if (errors.length) {
                      return errors.join(", ");
                    }
                    return true;
                  }
                })}
              />
              <button
                type="button"
                className="absolute inset-y-0 right-4 flex items-center"
                onClick={handleTogglePasswordVisibility}
              >
                {showPassword ? (
                  <FaEye className="h-4 w-4 text-gray" />
                ) : (
                  <FaRegEyeSlash className="h-4 w-4 text-gray" />
                )}
              </button>
            </div>
            {errors.password && (
              <span className="text-red-500 text-sm">{errors.password.message}</span>
            )}
            <div className='flex justify-between items-center mb-5'>
              <h6 className='h6 text-xs dark:text-[#F4F4F4]'>By signing up, you agree to our <a href="/terms" className='underline text-[#D6A7FF]'>Terms</a>, <a href="/policy" className='underline text-[#D6A7FF]'>Privacy Policy</a> and <a href="/cookie-policy" className='underline text-[#D6A7FF]'>Cookies Policy.</a></h6>
            </div>
            <Button type="submit" className="w-full">
              Sign up
            </Button>
          </form>
          <div className="text-sm">
            Already have an account?{" "}
            <Link href="/login" className="hover:underline text-[#D6A7FF]">
              Login here
            </Link>
          </div>

          <div className='flex items-center mt-5'>
            <div className='flex-grow border-t border-[#A0A0A0]'></div>
            <span className='mx-2 text-[#A0A0A0] h6 text-h6'>or continue with</span>
            <div className='flex-grow border-t border-[#A0A0A0]'></div>
          </div>
          <div className="flex justify-center space-x-6 mt-2">
            <Button variant="ghost" size="icon" className="flex items-center rounded hover:bg-transparent w-10 h-10">
              <img src="https://storage.googleapis.com/capcons-analytics/Capcons-dev-images/GoogleIcon.webp" alt="" className="w-10 h-10"/>
            </Button>
            <Button size="icon" className="flex items-center rounded-full w-10 h-10">
              <img src="https://storage.googleapis.com/capcons-analytics/Capcons-dev-images/AppleLogo.webp" alt=""  className="w-10 h-10 rounded-full"/>
            </Button>
          </div>
          <div className='flex justify-center items-center mt-4'>
            <h6 className='text-h6 h6 text-[#A0A0A0]'>Terms and conditions</h6>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
