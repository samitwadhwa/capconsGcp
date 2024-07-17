"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { OtpStyledInput } from "@/components/ui/input-otp";
import { useForm, SubmitHandler } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface FormValues {
  email: string;
  otp: string;
}

function ChangePass() {
  const {
    handleSubmit,
    register,
    watch,
    trigger,
    formState: { errors, isSubmitted },
    setValue,
  } = useForm<FormValues>({
    mode: "onChange",
  });
  const emailValue = watch("email");
  const router = useRouter();

  const [showCountryCodeInput, setShowCountryCodeInput] = useState(false);
  const [countryCode, setCountryCode] = useState("+91");

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

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    if (showCountryCodeInput) {
      data.email = countryCode + data.email;
    }
    console.log(data);
    if (data.otp && data.email) {
      router.push("/login");
    }
  };

  const handleSendOTP = () => {
    if (!emailValue) {
      trigger("email");
    }
  };

  const handleOtpChange = (otp: string) => {
    setValue("otp", otp, { shouldValidate: true });
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setValue("email", value, { shouldValidate: true });
  };

  const handleCountryCodeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCountryCode(e.target.value);
  };

  return (
    <div className="w-full lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px] mt-4 container mx-auto">
      <div className="flex items-center justify-center py-12 w-80">
        <div className="mx-auto grid w-[450px] gap-6">
          <div className="grid gap-2 text-left">
            <h1 className="text-2xl font-bold mt-8">Forget Password</h1>
            <div className="flex space-x-2">
              <p className="text-p font-p text-[#D6A7FF]">
                Trouble with logging in?
              </p>
            </div>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4">
            <div className="flex items-center gap-2">
              {showCountryCodeInput && (
                <select
                  id="countryCode"
                  className="shadow appearance-none py-2 px-3 rounded leading-tight bg-transparent focus:outline-none focus:shadow-outline border text-slight-grey border-custom-Border"
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
                placeholder="Email or Phone Number"
                className={`rounded-sm shadow appearance-none py-2 px-3 ${showCountryCodeInput ? 'w-15.6rem' : 'w-19.5rem'} leading-tight bg-transparent focus:outline-none focus:shadow-outline border text-slight-grey border-custom-Border`}
                {...register("email", {
                  required: "Email or Mobile is required!",
                  pattern: {
                    value: /^(?:\d{10}|\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*)$/,
                    message: "Please enter a valid Email or Mobile number!",
                  },
                })}
                onChange={handleEmailChange}
              />
            </div>
            {errors.email && (
              <span className="text-red-500 text-sm">{errors.email.message}</span>
            )}
            <Button
              type="button"
              className="w-full mt-4 border border-[#D6A7FF] !rounded bg-[#2F2D2D hover:bg-[#D6A7FF]"
              onClick={handleSendOTP}
            >
              Send OTP
            </Button>

            <div className="grid gap-2 text-left mt-4">
              <p className="text-balance text-foreground">
                Enter your 6 digit code sent to ********82
              </p>
            </div>
            <OtpStyledInput
              {...register("otp", {
                required: "OTP is required!",
              })}
              inputType="number"
              numInputs={6}
              className="rounded h-12 w-4 text-foreground"
              onChange={handleOtpChange}
            />

            {errors.otp && (
              <span className="text-red-500 text-sm">{errors.otp.message}</span>
            )}
            <div className="flex justify-start items-center mt-3">
              <h6 className="h6 text-sm mr-2 text-white">
                Didn&#39;t get a code?
              </h6>
              <h6 className="text-[#D6A7FF] text-sm h6 cursor-pointer underline">
                <a href="/signup">Resend</a>
              </h6>
            </div>
            <Button type="submit" className="mt-3 font-bold">
              Verify
            </Button>
          </form>

          <div className="flex items-center mt-5">
            <div className="flex-grow border-t border-[#A0A0A0]"></div>
            <span className="mx-2 text-[#A0A0A0] h6 text-sm">
              or continue with
            </span>
            <div className="flex-grow border-t  border-[#A0A0A0]"></div>
          </div>

          <div className="flex space-x-2">
            <p className="text-sm font-p text-[#D6A7FF] underline">
              <a href="/signup">Sign in with different account?</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChangePass;
