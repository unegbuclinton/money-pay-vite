import React from "react";
// import { useNavigate } from "react-router-dom";
import Dashboardlayout from "../components/Dashboardlayout";
import profile from "../assets/images/profile.png";
import cellPhone from "../assets/images/cellphone.png";
import emailIcon from "../assets/images/email.png";
import shuffle from "../assets/images/shuffle.png";
import contactCard from "../assets/images/contact-card.png";
import userIcon from "../assets/images/userIcon.png";
import { useSelector } from "react-redux";
const Checkout = () => {
  // const navigate = useNavigate();
  const { userData } = useSelector((state) => state.dashboard);
  const { name, email } = userData;
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
            <span className="text-light-green">R$</span> 12,500
          </h2>
        </div>
        <h3 className="text-sm mb-3">Select your pix key type</h3>
        <div className="flex gap-5 mb-7">
          <div className="flex flex-col justify-center items-center rounded-full w-16 h-16 border-2 border-grey">
            <img src={contactCard} alt="" className="w-[25px]" />
            <p className="text-[0.65rem]">CPF/CNPJ</p>
          </div>
          <div className="flex flex-col justify-center items-center rounded-full w-16 h-16 border-2 border-grey">
            <img src={cellPhone} alt="" className="w-[25px]" />
            <p className="text-[0.65rem]">Telephone</p>
          </div>
          <div className="flex flex-col justify-center items-center rounded-full w-16 h-16 border-2 border-grey">
            <img src={emailIcon} alt="" className="w-[25px]" />
            <p className="text-[0.65rem]">Email</p>
          </div>
          <div className="flex flex-col justify-center items-center rounded-full w-16 h-16 border-2 border-grey">
            <img src={shuffle} alt="" className="w-[25px]" />
            <p className="text-[0.55rem]">Random</p>
          </div>
        </div>
        <div className=" flex items-center py-3 px-3 text-white text-sm gap-3 bg-black rounded mb-3">
          <img src={userIcon} alt="" />
          <p>Select your pix key type</p>
        </div>
        <div className="relative">
          <span className="text-light-green absolute left-2 top-[0.3rem]">
            $R
          </span>
          <input
            type="number"
            className="pl-8 outline-none border border-black w-full rounded h-[2rem]"
          />
        </div>
        <div className="flex justify-center">
          <button className="bg-light-green py-2 px-7 mt-2 text-black font-bold rounded">
            Checkout
          </button>
        </div>
      </div>
    </Dashboardlayout>
  );
};

export default Checkout;
