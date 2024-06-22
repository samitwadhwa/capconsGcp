"use client"
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { useForm, SubmitHandler } from 'react-hook-form';
import { useRouter } from 'next/navigation';

interface FormValues {
  email: string;
  password: string;
}

function Login() {

  const { register, control, handleSubmit, formState, watch, setValue } = useForm<FormValues>({
    mode: "onChange",
  });
  const emailValue = watch("email");
  const router = useRouter();

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
    router.push('/verify');
  };

  return (
    <div className="w-full lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px] container mx-auto">
      <div className="flex items-center justify-center py-12 w-80">
        <div className="mx-auto grid w-[450px] gap-6">
          <div className="grid gap-2 text-left">
            <h1 className="text-3xl font-bold">Welcome back!</h1>
            <p className="text-balance text-[#D6A7FF]">
              Login with your account
            </p>
          </div>
          <div className="grid gap-4">
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
                  placeholder="Email or Phone Number"
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
            <div className="grid gap-2">
              <Input id="password" type="password" placeholder="Password" required />
            </div>
            <div className='flex justify-between items-center mb-5'>
          <div className='flex items-center'>
            <input
              type="checkbox"
              id="rememberMe"
              className="mr-2 bg-transparent"
            />
            <h6 className='text-h6 h6text-white'>Remember me</h6>
          </div>
          <h6 className='text-[#D6A7FF] cursor-pointer text-h6 h6 hover:underline'> <a href="/changepass">Forget password?</a> </h6>
        </div>
            <Button type="submit" className="w-full">
              Login
            </Button>
          </div>
          <div className="mt-4 text-center text-sm">
            Don&apos;t have an account?{" "}
            <Link href="/signup" className="underline text-[#D6A7FF]">
              Sign up here
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
