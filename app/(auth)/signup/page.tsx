"use client"
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import googleIcon from "@/public/images/googleIcon.png";
import appleIcon from '@/public/images/appleIcon.png';
import { FaEye, FaRegEyeSlash } from 'react-icons/fa';
import { useState } from "react";
import { useForm, SubmitHandler } from 'react-hook-form';
import { useRouter } from 'next/navigation';

interface FormValues {
  name: string;
  email: string;
  password: string;
}

function Signup() {

  const { register, control, handleSubmit, formState, watch, setValue } = useForm<FormValues>({
    mode: "onChange",
  });
  const { errors, isValid } = formState;
  const router = useRouter();
  const emailValue = watch("email");

  const [showPassword, setShowPassword] = useState(false);
  const handleTogglePasswordVisibility = () => {
    setShowPassword(prevState => !prevState);
  };
  const [showCountryCodeInput, setShowCountryCodeInput] = useState(false);
  const [countryCode, setCountryCode] = useState('+91');

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setValue("email", value, { shouldValidate: true }); // Trigger validation on change

    const isNumeric = /^\d+$/.test(value);
    setShowCountryCodeInput(isNumeric);
    if (!isNumeric) {
      setCountryCode('');
    }
  };

  const handleCountryCodeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCountryCode(e.target.value);
  };

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    if (countryCode) {
      data.email = countryCode + data.email;
    }
    console.log(data);
    router.push('/login');
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
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Input
                id="name"
                type="name"
                placeholder="varun"
                required
              />
            </div>
            <div className="flex items-center gap-2">
            {showCountryCodeInput && (
              <select
                id="countryCode"
                className={`shadow appearance-none py-2 px-3 leading-tight bg-transparent focus:outline-none focus:shadow-outline border text-slight-grey border-custom-Border`}
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
                type="email"
                placeholder="email or phone"
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
                required
              />
            </div>
            <div className="grid gap-2 relative">
              <Input 
              id="password" 
              type={showPassword ? "text" : "password"}
              placeholder="Password" 
              className='rounded-sm shadow appearance-none py-2 px-3 leading-tight bg-transparent w-19.5rem focus:outline-none focus:shadow-outline border text-slight-grey border-custom-Border'
              required />
              <button
              type="button"
              className="absolute inset-y-0 right-4 flex items-center"
              onClick={handleTogglePasswordVisibility}
            >
              {showPassword ? (
                <FaEye className="h-4 w-4 text-gray-400" />
              ) : (
                <FaRegEyeSlash className="h-4 w-4 text-gray-400" />
              )}
            </button>
            </div>
            <div className='flex justify-between items-center mb-5'>
              <h6 className='h6 text-xs text-[#F4F4F4]'>By signing up, you agree to our <a href="/terms" className='underline text-[#D6A7FF]'>Terms</a>, <a href="/policy" className='underline text-[#D6A7FF]'>Privacy Policy</a> and <a href="/cookie-policy" className='underline text-[#D6A7FF]'>Cookies Policy.</a></h6>
            </div>
            <Button type="submit" className="w-full">
              Sign up
            </Button>
          </div>
          <div className="text-sm">
            Already have an account?{" "}
            <Link href="/login" className="underline text-[#D6A7FF]">
              Login here
            </Link>
          </div>

          <div className='flex items-center mt-5'>
      <div className='flex-grow border-t border-[#A0A0A0]'></div>
      <span className='mx-2 text-[#A0A0A0] h6 text-h6'>or continue with</span>
      <div className='flex-grow border-t  border-[#A0A0A0]'></div>
      </div>
          <div className="flex justify-center space-x-6 mt-2">
            <Button variant="ghost" size="icon" className="flex items-center rounded hover:bg-transparent w-14 h-10">
              <img src={googleIcon.src} alt="" className="w-14 h-14"/>
            </Button>
            <Button size="icon" className="flex items-center rounded-full w-10 h-10">
             <img src={appleIcon.src} alt=""  className="w-10 h-10 rounded-full"/>
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
