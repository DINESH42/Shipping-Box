import React, { useContext } from "react";
import "./formFields.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import DestinationContry from "./DestinationContry.json";
// import TableData from "../TableData/TableData";
import { AppContext } from "../../Context/AppContext";

const FormFields = () => {
  const { addedList, setAddedList } = useContext(AppContext);

  const [initialValues, setInitialValues] = React.useState({
    receiverName: "",
    weight: "",
    boxcolour: "#000000",
    destinationcountry: "",
  });

  const validationSchema = Yup.object({
    receiverName: Yup.string().required("Receiver name is required"),

    weight: Yup.number()
      .typeError("Weight must be a number")
      .required("Weight is required")
      .positive("Weight must be positive"),

    boxcolour: Yup.string().required("Box colour is required"),

    destinationcountry: Yup.string().required(
      "Destination country is required"
    ),
  });

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: (values) => {
      let countryCurrencyVal = DestinationContry.destinationCountry.find(
        (country) => country.label === values.destinationcountry
      )?.value;
      setAddedList((prev) => [
        ...prev,
        {
          ...values,
          countryCurrency: Number(countryCurrencyVal) * values.weight,
          currencyValue: countryCurrencyVal,
        },
      ]);
      console.log("Form data", {
        ...values,
        countryCurrency: countryCurrencyVal,
      });
      formik.resetForm();
    },
  });

  console.log("Added List", addedList);

  return (
    <div className="formFieldContainer">
      <div className="formFieldSubContainer">
        <form onSubmit={formik.handleSubmit}>
          <div className="fieldStyle">
            <label htmlFor="receiverName">Receiver name</label>
            <input
              id="receiverName"
              name="receiverName"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.receiverName}
            />
            {formik.errors.receiverName ? (
              <div className="error">{formik.errors.receiverName}</div>
            ) : null}
          </div>
          <div className="fieldStyle">
            <label htmlFor="weight">Weight ( in Kilograms )</label>
            <input
              id="weight"
              name="weight"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.weight}
            />
            {formik.errors.weight ? (
              <div className="error">{formik.errors.weight}</div>
            ) : null}
          </div>
          <div className="fieldStyle">
            <label htmlFor="boxcolour">Box colour</label>
            <input
              id="boxcolour"
              name="boxcolour"
              type="color"
              onChange={formik.handleChange}
              value={formik.values.boxcolour}
            />
            {formik.errors.boxcolour ? (
              <div className="error">{formik.errors.boxcolour}</div>
            ) : null}
          </div>
          <div className="fieldStyle">
            <label htmlFor="destinationcountry">Destination country</label>
            <select
              id="destinationcountry"
              name="destinationcountry"
              type="destinationcountry"
              onChange={formik.handleChange}
              value={formik.values.destinationcountry}
            >
              {DestinationContry?.destinationCountry?.map((country, index) => {
                return (
                  <option key={index} value={country?.label}>
                    {country?.label}{" "}
                    {country?.currency !== ""
                      ? "(" + country?.value + " " + country?.currency + ")"
                      : ""}
                  </option>
                );
              })}
            </select>
            {formik.errors.destinationcountry ? (
              <div className="error">{formik.errors.destinationcountry}</div>
            ) : null}
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default FormFields;
