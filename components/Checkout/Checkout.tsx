'use client'
import { InputHTMLAttributes, useState } from "react";
import Input from "../ui/Input";


type SelectProps = InputHTMLAttributes<HTMLSelectElement> & {
  label: string
  id: string
  className?: string
}

import React from "react";
import Link from "next/link";

const countries = [
  { value: "usa", label: "United States" },
  { value: "canada", label: "Canada" },
  { value: "mexico", label: "Mexico" },
  { value: "japan", label: "Japan" },
  { value: "china", label: "China" },
  { value: "russia", label: "Russia" },
  { value: "india", label: "India" },
  { value: "france", label: "France" },
  { value: "germany", label: "Germany" },
  { value: "spain", label: "Spain" },
  { value: "morocco", label: "Morocco" },
];

export function Select() {

  return (
    <div className="w-full flex flex-col gap-4">

      <div className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
        <select
          className="border w-full border-gray-light-500  rounded-md outline-none pl-2 py-4"
        >
          {countries.map((country) => (
            <option key={country.value} value={country.value}>
              {country.label}
            </option>
          ))}
        </select>
      </div>

    </div>
  );
}


function ProductCheckout() {

  const flex = "flex justify-between items-center"


  return (
    <div className="space-y-5 text-sm">
      <div className={flex}>
        <span className="text-xl font-medium">Product</span>
        <span className="text-xl font-medium">Subtotal</span>
      </div>
      <div className={flex}>
        <span className="text-gray-dark-500">Asgaard sofa <span className="text-black-900">x 1</span> </span>
        <span className="text-sm text-gray-dark-500 font-light">Rs. 250,000.00</span>
      </div>


      <div className={flex}>
        <span className="text-black-500">Subtotal</span>
        <span className="text-sm text-gray-dark-500 font-light">Rs. 250,000.00</span>
      </div>
      <div className={flex}>
        <span className="text-black-500">Total</span>
        <span className="text-green-dark-500 text-3xl">Rs. 250,000.00</span>
      </div>
    </div>
  )

}

import { motion } from "framer-motion";
import { set } from "lodash";

export default function Checkout() {

  const [directTransfer, setDirectTransfer] = useState({
    isVisible: false,
    isChecked: false
  });


  const [delivery, setDelivery] = useState({
    isVisible: false,
    isChecked: false
  });


  const handleClick = (e: any) => {


    if (directTransfer.isChecked) {
      
      setDirectTransfer({
        isVisible: !directTransfer.isVisible,
        isChecked: true
      });
      return;
    }

    setDirectTransfer({
      isVisible: !directTransfer.isVisible,
      isChecked: !directTransfer.isChecked
    });

    setDelivery({
      isVisible: false,
      isChecked: false
    });

  };

  const handleClickCash = (e: any) => {

    if (delivery.isChecked) {
      setDelivery({
        isVisible: !delivery.isVisible,
        isChecked: true
      });
      return;
    }

    setDelivery({
      isVisible: !delivery.isVisible,
      isChecked: !delivery.isChecked
    });

    setDirectTransfer({
      isVisible: false,
      isChecked: false
    });

  };

  return (
    <div className="flex flex-col md:flex-row w-[90%] md:w-full justify-center gap-8 lg:gap-32 max-w-7xl m-auto my-28">
      <div className="flex-[.4] space-y-6">
        <h2 className="text-4xl font-medium">Billing details</h2>
        <div className="flex gap-2">
          <Input id="first_name" label="First name" type="text" />
          <Input id="last_name" label="Last name" type="text" />
        </div>


        <Input id="company_name" label="Company Name (Optional)" type="text" />
        {/* <Select id="country" label="Country / Region" /> */}
        <Select />
        <Input id="street_address" label="House number and street name" type="text" />
        <Input id="town_city" label="Town / City" type="text" />
        <Input id="zip_code" label="ZIP code" type="text" />
        <Input id="phone" label="Phone" type="text" />
        <Input id="email_address" label="Email address" type="text" />

        <div>
          <label htmlFor="Additional_information" className="hidden"></label>
          <input
            id="Additional_information"
            className='border block font-light outline-none pl-2 py-4 rounded-md border-gray-light-500 w-full'
            placeholder="Additional information (Optional)"
          />
        </div>
      </div>
      <div className="flex-[.4]">
        <ProductCheckout />
        <hr className="text-gray-light-500 mt-8 mb-6" />

        <form className="space-y-6">
          <div>
            <label className={`block space-x-3 cursor-pointer ${ !directTransfer.isChecked ? 'text-gray-light-500' : null}`} onClick={handleClick}>
              <input type="radio" name="paye" id="" className="accent-black-500" />
              <span onClick={(e) => e.stopPropagation()} className="select-none">Direct Bank Transfer</span>
            </label>
            <motion.p
              className="text-gray-dark-500 text-sm font-light overflow-hidden mt-2"
              animate={{ opacity: directTransfer.isVisible ? 1 : 0, height: directTransfer.isVisible ? 'auto' : 0, }}
              transition={{ duration: 0.3 }}
            >
              Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.
            </motion.p>
          </div>

          <div>
            <label className={`block space-x-3 cursor-pointer ${ !delivery.isChecked ? 'text-gray-light-500' : null}`} onClick={handleClickCash}>
              <input type="radio" name="paye" id="" className="accent-black-500" />
              <span onClick={(e) => e.stopPropagation()} className="select-none">Cash On Delivery</span>
            </label>
            <motion.p
              className="text-gray-dark-500 text-sm font-light overflow-hidden"
              animate={{ opacity: delivery.isVisible ? 1 : 0, height: delivery.isVisible ? 'auto' : 0, }}
              transition={{ duration: 0.3 }}
            >
              Pay with cash upon delivery.
            </motion.p>
          </div>


          <p className="text-sm font-light">
            Your personal data will be used to support your experience throughout this website, to manage access to your account,
            and for other purposes described in our <Link href="/" className="font-semibold">privacy policy.</Link>
          </p>
          <div>
            <button className='border py-4 px-20 mx-auto block  rounded-xl font-normal text-xl mt-10'>Place order</button>
          </div>
        </form>


      </div>
    </div>
  )
}
