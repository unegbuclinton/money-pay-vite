import React from "react";
// import { useNavigate } from "react-router-dom";
import Dashboardlayout from "../components/Dashboardlayout";
import profile from "../assets/images/profile.png";
import userIcon from "../assets/images/userIcon.png";
import { useSelector } from "react-redux";
import Pixtype from "../components/Pixtype";
import { useState } from "react";
import { useEffect } from "react";
import { toast } from "react-hot-toast";
const Checkout = () => {
  // const navigate = useNavigate();
  const { userData } = useSelector((state) => state.dashboard);
  const { name, email, balance } = userData;
  const [checkoutValue, setCheckoutValue] = useState("");

  const bal = balance.toString();
  useEffect(() => {
    setCheckoutValue(bal);
  }, []);

  const handleChange = (e) => {
    setCheckoutValue(e.target.value);
  };
  return (
    <Dashboardlayout>
      <div className="bg-white py-3 px-4 mt-5 rounded-2xl">
        <div className="flex items-center gap-2 w-full mb-4">
          <img
            src={profile}
            alt=""
            className=" w-14 h-14 border-black border rounded-full"
          />
          <div>
            <h1 className="text-base font-bold">{name}</h1>
            <p className="text-sm">{email}</p>
          </div>
        </div>
        <div className="border-b-2 border-grey pb-4 mb-4">
          <p className="text-sm text-grey font-thin">Your Balance</p>
          <h2 className="font-bold text-xl">
            <span className="text-light-green">R$</span>
            {balance}
          </h2>
        </div>
        <h3 className="text-sm mb-3">Select your pix key type</h3>
        <Pixtype />
        <div className=" flex items-center py-3 px-3 text-white text-sm gap-3 bg-black rounded mb-3">
          <img src={userIcon} alt="" />
          <p>Select your pix key type</p>
        </div>
        <div className="relative">
          <span className="text-light-green absolute left-2 top-[0.25rem]">
            $R
          </span>
          <input
            type="number"
            min="0"
            name="balance"
            id="balance"
            value={checkoutValue}
            onChange={handleChange}
            className="pl-8 outline-none border border-black w-full rounded h-[2rem]"
          />
        </div>
        <div className="flex justify-center">
          <button
            onClick={() => toast.success(`Widthdrawing ${checkoutValue} now`)}
            disabled={checkoutValue.length === 0 || checkoutValue !== bal}
            className={`py-2 px-7 ${
              checkoutValue.length === 0 || checkoutValue > bal
                ? "bg-grey"
                : "bg-light-green"
            } mt-2 text-black font-bold rounded`}
          >
            Checkout
          </button>
        </div>
      </div>
    </Dashboardlayout>
  );
};

export default Checkout;
