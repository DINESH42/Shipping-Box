import React from "react";
import FormFields from "../FormFields/FormFields";
import Navbar from "../NavBar/Navbar";
import FormFieldsJson from "../FormFields/FormFields.json";

const ShippingBox = () => {
  return (
    <div>
      <Navbar />
      <FormFields FormFieldsJson={FormFieldsJson} />
    </div>
  );
};

export default ShippingBox;
