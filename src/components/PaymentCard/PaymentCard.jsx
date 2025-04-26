import React from "react";
import ShowcaseCard from "../Card/ShowcaseCard";
import { Button } from "../ui/button";

const PaymentCard = ({ items = [], subtotal, processingFee, total }) => {
  return (
    <ShowcaseCard title="Your order" className="w-full sm:w-[280px] md:w-[320px] lg:w-[350px]">
      <div className="flex justify-between font-medium text-gray-700 py-2">
        <span>Product</span>
        <span>Subtotal</span>
      </div>
      <hr className="border-t border-gray-300 my-2" />

      {items.map((item, index) => (
        <div key={index} className="flex justify-between text-gray-600 items-center gap-x-4 py-2">
          <p className="text-sm font-medium flex-1">
            {item.title} × {item.quantity}
          </p>
          <p className="font-semibold text-right min-w-[120px] ml-4">
            ${item.price.toFixed(2)}
          </p>
        </div>
      ))}

      <div className="flex justify-between font-medium text-gray-700 py-2">
        <span>Subtotal</span>
        <span>${subtotal.toFixed(2)}</span>
      </div>
      <hr className="border-t border-gray-300 my-2" />

      <div className="flex justify-between text-gray-600 mt-2 py-2">
        <span>Processing fee</span>
        <span>${processingFee.toFixed(2)}</span>
      </div>

      <hr className="border-t border-gray-300 my-3" />
      <div className="flex justify-between font-semibold text-gray-800 py-2">
        <span>Total</span>
        <span>${total.toFixed(2)}</span>
      </div>
      <hr className="border-t border-gray-300 my-2" />

      <h3 className="text-sm font-medium mt-5 py-2">Card Payment</h3>
      <p className="text-xs text-gray-500 mb-2">
        Secured by <span className="font-semibold text-black">Paystack</span>
      </p>

      <div className="bg-gray-100 p-3 rounded-lg flex justify-center space-x-4">
        <img src="/mastercard.svg" alt="Mastercard" className="h-6" />
        <img src="/visa.svg" alt="Visa" className="h-6" />
        <img src="/verve.svg" alt="Verve" className="h-6" />
      </div>

      <p className="text-xs text-gray-500 mt-2 text-center">
        Make payment using your debit and credit cards
      </p>

      <Button className="mt-4 w-full text-white font-semibold py-2 rounded-lg transition">
        Place order
      </Button>
    </ShowcaseCard>
  );
};

export default PaymentCard;
