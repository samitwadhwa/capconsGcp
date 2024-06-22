"use client"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { FaEye, FaRegEyeSlash } from 'react-icons/fa';

function Login() {
    const [showPassword, setShowPassword] = useState(false);
    const handleTogglePasswordVisibility = () => {
        setShowPassword(prevState => !prevState);
      };
  return (
    <div className="w-full lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px] container mx-auto">
      <div className="flex items-center justify-center py-12 w-80">
        <div className="mx-auto grid w-[450px] gap-6">
          <div className="grid gap-2 text-left">
            <h1 className="text-2xl font-bold">Reset your Password</h1>
          </div>
          <div className="grid gap-4">
            <div className="grid gap-2 relative">
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="New Password"
                className='rounded-sm shadow appearance-none py-2 px-3 leading-tight bg-transparent w-19.5rem focus:outline-none focus:shadow-outline border text-slight-grey border-custom-Border'
                required
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
            <div className="grid gap-2 relative">
              <Input 
              id="repassword"
              type={showPassword ? "text" : "password"}
              placeholder="Re-enter your new Password"
              className='rounded-sm shadow appearance-none py-2 px-3 leading-tight bg-transparent w-19.5rem focus:outline-none focus:shadow-outline border text-slight-grey border-custom-Border'
              required
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
            
            <Button type="submit" className="w-full">
              Reset
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
