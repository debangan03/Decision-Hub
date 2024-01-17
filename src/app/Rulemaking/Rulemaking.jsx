"use client";
import React from "react";
import { useState } from "react";

function Rulemaking() {
  const [conditionlhs, setconditionlhs] = useState("");
  const [conditionop, setconditionop] = useState("");
  const [conditionrhs, setconditionrhs] = useState("");
  const [effectlhs, seteffectlhs] = useState("");
  const [effectop, seteffectop] = useState("");
  const [effectrhs, seteffectrhs] = useState("");

  const handleSubmit=()=>
  {
    console.log(conditionlhs,conditionop,conditionrhs,effectlhs,effectop,effectrhs)
  }

  return (
    <div>
      <form className="px-16 mt-10">
      <div className="grid md:grid-cols-2 md:gap-6 ">
        </div>
        <div className="grid md:grid-cols-2 md:gap-6 border-2 border-spacing-2 border-black px-2 py-2 rounded-lg">
          <h1 className="text-center">If condition</h1>
          <h1 className="text-center">Then</h1>
          <div className="grid md:grid-cols-3 md:gap-6 border-2 border-spacing-2 border-black px-2 py-2 rounded-lg">
            
          <div className="mb-5 ">
            <>
              <label
                htmlFor="countries"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Select a field
              </label>
              <select
                id="countries"
                value={conditionlhs}
                onChange={(e)=>{setconditionlhs(e.target.value)}}
                placeholder="Select a field"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-rose-500 focus:border-rose-500 block w-full p-2.5 "
              >
                <option >Select a field</option>
                <option value="income">Income</option>
                <option value="loan_term">Loan Term</option>
              </select>
            </>
          </div>
          <div className="mb-5 ">
            <div>
              <label
                htmlFor="countries"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Select an operator
              </label>
              <select
                id="countries"
                value={conditionop}
                onChange={(e)=>{setconditionop(e.target.value)}}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-rose-500 focus:border-rose-500 block w-full p-2.5"
              >
                <option >Select an operator</option>
                <option value="income">equal to</option>
                <option value="loan_term">greater than</option>
                <option value="loan_term">lesser than</option>
                <option value="loan_term">greater than equal to</option>
                <option value="loan_term">greater than equal to</option>
              </select>
            </div>
          </div>
          <div className="mb-5 ">
            <>
              
                <label
                  htmlFor="number-input"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Enter value
                </label>
                <input
                  value={conditionrhs}
                  onChange={(e)=>{setconditionrhs(e.target.value)}}
                  type="number"
                  id="number-input"
                  aria-describedby="helper-text-explanation"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-rose-500 focus:border-rose-500 block w-full p-2.5 "
                  placeholder={5}
                  required=""
                />
              

            </>
          </div>
          </div>
          <div className="grid md:grid-cols-3 md:gap-6 border-2 border-spacing-2 border-black px-2 py-2 rounded-lg">
          <div className="mb-5 ">
            <>
              <label
                htmlFor="countries"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Select a field
              </label>
              <select
                id="countries"
                value={effectlhs}
                onChange={(e)=>{seteffectlhs(e.target.value)}}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-rose-500 focus:border-rose-500 block w-full p-2.5"
              >
                <option >Select a field</option>
                <option value="income">Income</option>
                <option value="loan_term">Loan Term</option>
              </select>
            </>
          </div>
          <div className="mb-5 ">
            <div>
              <label
                htmlFor="countries"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Select an operator
              </label>
              <select
                id="countries"
                value={effectop}
                onChange={(e)=>{seteffectop(e.target.value)}}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-rose-500 focus:border-rose-500 block w-full p-2.5"
              >
                <option >Select an operator</option>
                <option value="income">equal to</option>
                <option value="loan_term">greater than</option>
                <option value="loan_term">lesser than</option>
                <option value="loan_term">greater than equal to</option>
                <option value="loan_term">greater than equal to</option>
              </select>
            </div>
          </div>
          <div className="mb-5 ">
            <>
              
                <label
                  htmlFor="number-input"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Enter value
                </label>
                <input
                  type="number"
                  id="number-input"
                  value={effectrhs}
                  onChange={(e)=>{seteffectrhs(e.target.value)}}
                  aria-describedby="helper-text-explanation"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-rose-500 focus:border-rose-500 block w-full p-2.5"
                  placeholder={5}
                  required=""
                />
              

            </>
          </div>
          </div>
          
        </div>
<div className="flex justify-center items-center mt-2">
        <button
            type="button"
            onClick={handleSubmit}
            className="text-white  bg-rose-700 hover:bg-rose-800 focus:ring-4 focus:outline-none focus:ring-rose-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center "
          >
            Submit
          </button></div>
      </form>
    </div>
  );
}

export default Rulemaking;