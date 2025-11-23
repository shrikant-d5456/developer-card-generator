'use client';

import React from 'react';
import { Step } from 'nextstepjs';

interface CustomCardProps {
  step: Step;
  currentStep: number;
  totalSteps: number;
  nextStep: () => void;
  prevStep: () => void;
  skipTour?: () => void;
  arrow: React.ReactNode;
}

const CustomCard = ({
  step,
  currentStep,
  totalSteps,
  nextStep,
  prevStep,
  skipTour,
  arrow,
}: CustomCardProps) => {
  return (
    <div className="custom-card max-w-md shadow-2xl">

      {/* Glow Blob */}
      <span className="custom-card-blob"></span>

      {/* Inner Content */}
      <div className="custom-card-inner">

        {/* Header */}
        <div className="flex items-center gap-4 mb-5">
          {step.icon && (
            <div className="text-xl p-2 rounded-xl bg-white/10 shadow-inner">
              {step.icon}
            </div>
          )}
          <h3 className="text-xl font-semibold">{step.title}</h3>
        </div>

        {/* Content */}
        <div className="mb-6 text-gray-300 leading-relaxed">
          {step.content}
        </div>

        {arrow && <div className="mb-4">{arrow}</div>}

        {/* Footer */}
        <div className="flex justify-between items-center mt-6 lg:w-full w-[300px] ">
          <div className="flex gap-3 items-center z-20 ">
            {currentStep > 0 && (
              <button
                onClick={prevStep}
                className="px-4 py-2 text-sm  bg-gray-700 hover:bg-gray-600 rounded-lg"
              >
                Previous
              </button>
            )}
            {step.showSkip && (
              <button
                onClick={skipTour}
                className=" text-gray-400 hover:text-gray-200 text-sm px-4 py-2 border rounded-xl "
              >
                Skip
              </button>
            )}
            <button
              onClick={nextStep}
              className="px-4 py-2 text-sm  bg-blue-600 hover:bg-blue-500 rounded-lg"
            >
              {currentStep === totalSteps - 1 ? 'Finish' : 'Next'}
            </button>

          </div>

        </div>
        <div className="text-sm text-center mt-4 text-gray-400">
          Step <span className="text-blue-400">{currentStep + 1}</span> of {totalSteps}
        </div>

      </div>
    </div>
  );
};

export default CustomCard;
