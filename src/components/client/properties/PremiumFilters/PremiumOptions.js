import React from "react";

const PremiumOptions = ({ field, handlePremium }) => {
  return (
    <>
      <select
        name={field.inputName}
        onChange={(e) => handlePremium(e)}
        className="form-select mb-2"
      >
        <option value="" selected>
          {field.name}
        </option>
        
       {field.options.map((op, i) => <option key={i} value={op.value}>{op.opName}</option>)}
      </select>
    </>
  );
};

export default PremiumOptions;
