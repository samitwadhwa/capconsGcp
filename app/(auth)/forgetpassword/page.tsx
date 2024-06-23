"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
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

function ForgetPassword() {
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
    <div className="w-full lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px] mt-4 container mx-auto">
      <div className="flex items-center justify-center py-12 w-80">
        <div className="mx-auto grid w-[450px] gap-6">
          <div className="grid gap-2 text-left">
            <h1 className="text-2xl font-bold mt-8">Forget Password</h1>
            <div className="flex space-x-2">
              <p className="text-p font-p text-[#D6A7FF]">
                {" "}
                Trouble with logging in?
              </p>
            </div>
          </div>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Input
                id="email"
                type="email"
                placeholder="Email or phone number"
                required
              />
            </div>

            <Button
              type="submit"
              className="w-full mt-4 border border-[#D6A7FF]  !rounded bg-[#2F2D2D hover:bg-[#D6A7FF]"
            >
              Send OTP
            </Button>
          </div>
          <div className="grid gap-2 text-left mt-4">
            <p className="text-balance text-[#A0A0A0]">
              Enter your 6 digit code sent to ********82
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
                          {...field}
                          inputType={"number"}
                          numInputs={6}
                          className="p-0"
                        />
                      </FormItem>
                      <FormMessage />
                    </>
                  </FormControl>
                )}
              />
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
          </Form>

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

export default ForgetPassword;
