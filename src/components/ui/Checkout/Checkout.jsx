import React from "react";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Card } from "@/components/ui/card";
import { Tag } from "lucide-react";
import { Link } from "react-router-dom";
import InputField from "@/components/InputField/Input";
import SelectField from "@/components/InputField/SelectFields";
import PaymentCard from "@/components/PaymentCard/PaymentCard";
import { Button } from "@/components/ui/button";
import { validationSchema } from "./schema";

const Checkout = () => {
  const methods = useForm({
    resolver: zodResolver(validationSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      country: "",
      state: "",
    },
  });

  const countries = ["United States", "Canada", "United Kingdom", "Australia"];
  const states = ["California", "New York", "Texas", "Florida"];

  const onSubmit = (data) => {
    console.log("Form Data:", data);
  };

  const orderItems = [
    { title: "WordPress Development", price: 1290, quantity: 1 },
    { title: "SEO Optimization", price: 300, quantity: 1 },
  ];

  const subtotal = orderItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const processingFee = 60;
  const total = subtotal + processingFee;

  return (
    <div className="container mx-auto py-10 px-6 bg-[#F0EFEC] min-h-screen">
      <h1 className="text-3xl font-semibold mb-8">Checkout</h1>
      <Card className="p-6">
        {/* Blue Line */}
        <hr className="border-t-2 border-blue-500" />

        {/* Coupon Box */}
        <div className="bg-gray-100 p-4 flex items-center">
          <Tag className="mr-2 text-gray-700" />
          <p className="text-gray-700">
            Have a Coupon?{" "}
            <Link to="#" className="text-blue-600 ml-1">
              Click here to enter your code
            </Link>
          </p>
        </div>

        {/* Billing Details Section */}
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)}>
            <div className="grid md:grid-cols-3 gap-8 mt-8">
              {/* Left Section: Billing Details (Takes More Space) */}
              <div className="md:col-span-2">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">
                  Billing Details
                </h3>

                <div className="grid grid-cols-2 gap-6">
                  <InputField name="firstName" label="First Name" required />
                  <InputField name="lastName" label="Last Name" required />
                </div>

                <div className="mt-6">
                  <InputField
                    name="companyName"
                    label="Company Name (Optional)"
                  />

                  <div className="mt-4">
                    <SelectField
                      control={methods.control}
                      name="country"
                      label="Country/Region"
                      placeholder="Select your country"
                      options={countries}
                      required
                    />
                  </div>

                  <div className="mt-4">
                    <InputField
                      name="streetAddress1"
                      label="Street Address"
                      placeholder="House number and street name"
                      required
                    />
                    <InputField
                      name="streetAddress2"
                      placeholder="Apartment, suite, unit etc (Optional)"
                    />
                  </div>

                  <div className="mt-4">
                    <InputField name="townCity" label="Town/City" required />
                  </div>

                  <div className="mt-4">
                    <SelectField
                      control={methods.control}
                      name="state"
                      label="State/City"
                      placeholder="Select your state"
                      options={states}
                      required
                    />
                  </div>

                  <div className="mt-4">
                    <InputField name="postcode" label="Postcode" required />
                  </div>

                  <div className="mt-4">
                    <InputField
                      name="phone"
                      label="Phone"
                      type="tel"
                      required
                    />
                  </div>

                  <div className="mt-4">
                    <InputField
                      name="email"
                      label="Email Address"
                      type="email"
                      required
                    />
                  </div>

                  {/* Order Notes */}
                  <div className="mt-4">
                    <h2 className="text-xl font-semibold mb-2">
                      Additional Information
                    </h2>
                    <label className="block text-sm font-medium text-gray-700">
                      Order Notes (Optional)
                    </label>
                    <textarea
                      {...methods.register("orderNotes")}
                      className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                      rows="4"
                    />
                  </div>
                </div>

                <Button
                  type="submit"
                  className="mt-6 text-white py-2 rounded-md"
                >
                  Submit
                </Button>
              </div>

              {/* Right Section: Order Summary (Takes Less Space) */}
              <div className="md:col-span-1">
                <PaymentCard
                  items={orderItems}
                  subtotal={subtotal}
                  processingFee={processingFee}
                  total={total}
                />
              </div>
            </div>
          </form>
        </FormProvider>
      </Card>
    </div>
  );
};

export default Checkout;
