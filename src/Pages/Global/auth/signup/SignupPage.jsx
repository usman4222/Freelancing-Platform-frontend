import React, { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { SquareUser, BriefcaseBusiness, Eye, EyeOff } from 'lucide-react'


import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { cn } from "@/lib/utils"
import { Link } from "react-router-dom"
import { URLS } from "@/config/config"


// Define the schema for both forms
const freelancerSchema = z
  .object({
    email: z.string().email({
      message: "Please enter a valid email address.",
    }),
    password: z.string().min(6, {
      message: "Password must be at least 6 characters long.",
    }),
    confirmPassword: z.string().min(6, {
      message: "Confirm password must be at least 6 characters long.",
    }),
    fullName: z.string().min(2, {
      message: "Full name must be at least 2 characters long.",
    }),
    type: z.string().nonempty({ message: "Type is required." }),
    terms: z.boolean().refine((val) => val === true, {
      message: "You must accept the Terms and Conditions.",
    }),
 
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords must match.",
    path: ["confirmPassword"],
  })

const employerSchema = z
  .object({
    email: z.string().email({
      message: "Please enter a valid email address.",
    }),
    password: z.string().min(6, {
      message: "Password must be at least 6 characters long.",
    }),
    confirmPassword: z.string().min(6, {
      message: "Confirm password must be at least 6 characters long.",
    }),
    terms: z.boolean().refine((val) => val === true, {
      message: "You must accept the Terms and Conditions.",
    }),

  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords must match.",
    path: ["confirmPassword"],
  })

const SignupPage = () => {
  const [activeTab, setActiveTab] = useState("freelancer")
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)


  const freelancerForm = useForm({
    resolver: zodResolver(freelancerSchema),
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
      fullName: "",
      type: "freelancer",
      terms: false,
      // recaptcha: "",
    },
  })

  const employerForm = useForm({
    resolver: zodResolver(employerSchema),
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
      terms: false,
      // recaptcha: "",
    },
  })

  const onFreelancerSubmit = (data) => {
    console.log("Freelancer form submitted:", data)
  }

  const onEmployerSubmit = (data) => {
    console.log("Employer form submitted:", data)
  }

  const handleTabChange = (tab) => {
    setActiveTab(tab)
  }

  const currentForm = activeTab === "freelancer" ? freelancerForm : employerForm
  const onSubmit = activeTab === "freelancer" ? onFreelancerSubmit : onEmployerSubmit

  return (
    <div className="bg-[#FFEDE8] flex flex-col justify-center py-10 ">
      <div>
        <div className="text-center pb-10">
          <h1 className="font-semibold text-3xl pb-3">Register</h1>
          <p>Join now and change the dynamics of remote jobs.</p>
        </div>

        <div className="bg-white w-[90%] md:w-[40%] mx-auto rounded-lg p-6 md:p-10 shadow-sm">
          <div className="flex gap-2 items-center justify-center pb-8">
            <button
              onClick={() => handleTabChange("freelancer")}
              className={cn(
                "flex items-center gap-2 py-2 px-6 rounded-full transition-all duration-200",
                activeTab === "freelancer"
                  ? "bg-primary-custom text-white"
                  : "text-gray-600 hover:bg-gray-100"
              )}
            >
              <SquareUser size={20} /> Freelancer
            </button>
            <button
              onClick={() => handleTabChange("employer")}
              className={cn(
                "flex items-center gap-2 py-2 px-6 rounded-full transition-all duration-200",
                activeTab === "employer"
                  ? "bg-primary-custom text-white"
                  : "text-gray-600 hover:bg-gray-100"
              )}
            >
              <BriefcaseBusiness size={20} /> Employer
            </button>
          </div>
          <Form {...currentForm}>
            <form onSubmit={currentForm.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={currentForm.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Email <span className="text-red-500">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="Email" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={currentForm.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Password <span className="text-red-500">*</span>
                    </FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Input
                          type={showPassword ? "text" : "password"}
                          placeholder="Password"
                          {...field}
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                        >
                          {showPassword ? (
                            <EyeOff className="h-4 w-4" />
                          ) : (
                            <Eye className="h-4 w-4" />
                          )}
                        </button>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={currentForm.control}
                name="confirmPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Confirm Password <span className="text-red-500">*</span>
                    </FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Input
                          type={showConfirmPassword ? "text" : "password"}
                          placeholder="Confirm Password"
                          {...field}
                        />
                        <button
                          type="button"
                          onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                        >
                          {showConfirmPassword ? (
                            <EyeOff className="h-4 w-4" />
                          ) : (
                            <Eye className="h-4 w-4" />
                          )}
                        </button>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {activeTab === "freelancer" && (
                <FormField
                  control={currentForm.control}
                  name="fullName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        Full Name <span className="text-red-500">*</span>
                      </FormLabel>
                      <FormControl>
                        <Input placeholder="Full Name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              )}

              <FormField
                control={currentForm.control}
                name="recaptcha"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      {/* <ReCAPTCHA
                        sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || "your-recaptcha-site-key"}
                        onChange={(value) => field.onChange(value)}
                      /> */}
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={currentForm.control}
                name="terms"
                render={({ field }) => (
                  <FormItem>
                    <div className="flex items-start space-x-2">
                      <Checkbox
                        id="terms"
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                      <label
                        htmlFor="terms"
                        className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        You accept our{" "}
                        <Link to={URLS.TERMANDCONDITION} className="text-primary-custom hover:underline">
                          Terms and Conditions
                        </Link>{" "}
                        and{" "}
                        <a href="#" className="text-primary hover:underline">
                          Privacy Policy
                        </a>
                      </label>
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button
                className="w-full bg-primary-custom hover:bg-green-600 text-white py-6 rounded-md flex items-center justify-center gap-2"
                type="submit"
              >
                Register now
                
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  )
}

export default SignupPage

