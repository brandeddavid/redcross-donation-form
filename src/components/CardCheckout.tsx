import React from "react";

type Props ={
  handleClick : ()=> void;

}

function CardCheckout({handleClick}: Props) {

  return (
      <div className="flex items-center p-4 border border-gray-200 rounded" onClick={handleClick}>
        <input
          id="bordered-radio-1"
          type="radio"
          value=""
          name="bordered-radio"
          className="w-4 h-4 text-primary bg-gray-100 border-gray-300 focus:ring-red-500  focus:ring-2 "
        />
        <label
          htmlFor="bordered-radio-1"
          className="w-full py-4 ms-2 text-sm font-medium text-gray-900"
        >
          Click to initiate card payment
        </label>
      </div>

  );
}

export default CardCheckout;
