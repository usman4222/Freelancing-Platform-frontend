import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { Checkbox } from "@/components/ui/checkbox";
import { fetchRequest } from "@/api/axios/fetch";
import { API_ENDPOINTS } from "@/config/api-endpoints";
import { saveToken } from "@/api/axios/token";
import { ArrowUpRight } from "lucide-react";

// Define the schema for the form
const formSchema = z.object({
  oldpassword: z.string().email({
    message: "Password must be at least 6 characters.",
  }),
  newpassword: z.string().min(6, {
    message: "Password must be at least 6 characters.",
  }),
  retypepassword: z.string().min(6, {
    message: "Password must be at least 6 characters.",
  }),
});

const PasswordChanging = () => {
  // Initialize the form using useForm
  const form = useForm({
    resolver: zodResolver(formSchema), // Use Zod schema for validation
    defaultValues: {
      oldpassword: "", // Default value for the username field
      newpassword: "",
      retypepassword: "",
    },
  });

  // Define the form submission handler
  const onSubmit = (data) => {
    fetchRequest({
      url: API_ENDPOINTS.AUTH.LOGIN,
      type: "post",
      body: {
        email: data.username,
        password: data.password,
      },
    }).then((data) => {
      saveToken(data.token);
    });
  };

  return (
    <div className="bg-[#F0EFEC] h-[100vh]  ">
      <div className=" max-w-5xl mx-auto">
        <h2 className="sm:text-3xl text-2xl font-medium sm:px-10 px-4 py-10">
          Change Password
        </h2>
        <div className=" ">
          <div className="bg-white sm:mx-10 mx-4 rounded-lg p-10 lg:w-[70%]">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6"
              >
                <FormField
                  control={form.control}
                  name="oldpassword"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Old password</FormLabel>
                      <FormControl>
                        <Input className="py-6" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="newpassword"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>New password</FormLabel>
                      <FormControl>
                        <Input className="py-6" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="retypepassword"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Retype password</FormLabel>
                      <FormControl>
                        <Input className="py-6" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button
                  className=" py-7 px-7"
                  type="submit"
                >
                  Change Password <ArrowUpRight />
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PasswordChanging;
