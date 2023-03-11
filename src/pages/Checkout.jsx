import React from 'react';
import { useNavigate } from 'react-router-dom';
import Dashboardlayout from '../components/Dashboardlayout';

const Checkout = () => {
  const navigate = useNavigate();
  return (
    <Dashboardlayout>
      <div className="h-screen bg-hero-pattern flex flex-col justify-center items-center">
        <p className="text-3xl font-bold text-white "> This is coming soon</p>
        <div>
          <p
            onClick={() => navigate('/dashboard')}
            className="text-xl cursor-pointer hover:text-white"
          >
            Back to home
          </p>
        </div>
      </div>
    </Dashboardlayout>
  );
};

export default Checkout;
