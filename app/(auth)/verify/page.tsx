"use client"
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormField,
  FormItem,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { OtpStyledInput } from "@/components/ui/input-otp";
import { useForm } from "react-hook-form";
import { toast } from "sonner";


function Verify() {

  const form = useForm({
    defaultValues: {
      otp: "",
    },
  });
 
  const onSubmit = (data: any) => {
    console.log(data);
    toast.success(`Success , Your Otp code is : ${data.otp}`);
  };

  return (
    <div className="w-full lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px] container mx-auto">
      <div className="flex items-center justify-center py-12 w-80">
        <div className="mx-auto grid w-[450px] gap-6">
          <div className="grid gap-2 text-left">
            <h1 className="text-3xl font-bold">OTP Verification</h1>
            <p className="text-balance text-[#A0A0A0]">
              Enter your 6 digit code sent to ********82
            </p>
            <p className="text-balance text-[#D6A7FF] underline">
              Edit your number
            </p>
          </div>
          <Form {...form}>
          <form className="grid gap-2" onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
              control={form.control}
              name="otp"
              render={({ field }) => (
                <FormControl>
                  <>
                    <FormItem>
                      <OtpStyledInput
                        numInputs={6}
                        inputType="number"
                        {...field}
                        value={field.value}
                        onChange={field.onChange}
                      />
                    </FormItem>
                    <FormMessage />
                  </>
                </FormControl>
              )}
            />
              <div className='flex justify-start items-center mt-3'>
          <h6 className='h6 text-sm mr-2 text-white'>Didn&#39;t get a code?</h6>
          <h6 className='text-[#D6A7FF] text-sm h6 cursor-pointer underline'><a href="/signup">Resend</a></h6>
        </div>
            <Button type="submit" className="mt-3 font-bold">Verify</Button>
          </form>
        </Form>
        </div>
      </div>
    </div>
  );
}

export default Verify;
