"use client"
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaEye, FaRegEyeSlash } from 'react-icons/fa';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface FormValues {
  password: string;
  repassword: string;
}

function ResetPassword() {
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordRe, setShowPasswordRe] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormValues>({ mode: 'onChange' });

  const passwordValue = watch('password');

  const handleTogglePasswordVisibilityNew = () => {
    setShowPassword(prevState => !prevState);
  };

  const handleTogglePasswordVisibilityRe = () => {
    setShowPasswordRe(prevState => !prevState);
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
  

  const onSubmit = (data: FormValues) => {
    console.log(data);
    // Handle password reset logic
  };

  const getPasswordErrorMessages = (value: string) => {
    return passwordCriteria
      .filter(criteria => !criteria.regex.test(value))
      .map(criteria => criteria.message);
  };

  return (
    <div className="w-full lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px] mt-4 container mx-auto">
      <div className="flex items-center justify-center py-12 w-80">
        <div className="mx-auto grid w-[450px] gap-6">
          <div className="grid gap-2 text-left">
            <h1 className="text-2xl font-bold">Reset your Password</h1>
          </div>
          <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4">
            <div className="grid gap-2 relative">
              <Input
                id="password"
                type={showPassword ? 'text' : 'password'}
                placeholder="New Password"
                className="rounded-sm shadow appearance-none py-2 px-3 leading-tight bg-transparent w-19.5rem focus:outline-none focus:shadow-outline border text-slight-grey border-custom-Border"
                {...register('password', {
                  required: 'Password is required!',
                  validate: value => {
                    const errors = getPasswordErrorMessages(value || '');
                    return errors.length === 0 || errors.join(', ');
                  },
                })}
              />
              <button
                type="button"
                className="absolute inset-y-0 right-4 flex items-center"
                onClick={handleTogglePasswordVisibilityNew}
              >
                {showPassword ? (
                  <FaEye className="h-4 w-4 text-gray" />
                ) : (
                  <FaRegEyeSlash className="h-4 w-4 text-gray" />
                )}
              </button>
            </div>
            {errors.password && (
              <span className="text-red-500 text-sm">
                {typeof errors.password.message === 'string'
                  ? errors.password.message
                  : ''}
              </span>
            )}
            <div className="grid gap-2 relative">
              <Input
                id="repassword"
                type={showPasswordRe ? 'text' : 'password'}
                placeholder="Re-enter your new Password"
                className="rounded-sm shadow appearance-none py-2 px-3 leading-tight bg-transparent w-19.5rem focus:outline-none focus:shadow-outline border border-custom-Border"
                {...register('repassword', {
                  required: 'Please re-enter your new password!',
                  validate: value =>
                    value === passwordValue || 'Passwords do not match!',
                })}
              />
              <button
                type="button"
                className="absolute inset-y-0 right-4 flex items-center"
                onClick={handleTogglePasswordVisibilityRe}
              >
                {showPasswordRe ? (
                  <FaEye className="h-4 w-4 text-gray" />
                ) : (
                  <FaRegEyeSlash className="h-4 w-4 text-gray" />
                )}
              </button>
            </div>
            {errors.repassword && (
              <span className="text-red-500 text-sm">
                {errors.repassword.message}
              </span>
            )}
            <Button type="submit" className="w-full text-foreground">
              Reset
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ResetPassword;
