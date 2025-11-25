import React, { useContext } from "react";
import "./tableData.css";
import { formatCurrency } from "../../Utils/CurrencyFormat";
import { AppContext } from "../../Context/AppContext";

const TableData = () => {
  const { addedList } = useContext(AppContext);
  return (
    <>
      {addedList?.length > 0 ? (
        <table className="table" border="1">
          <thead>
            <tr>
              <th>Receiver Name</th>
              <th>Weight ( in Kilograms )</th>
              <th>Box Colour</th>
              <th>Destination Country</th>
              <th>Currency Value (in INR)</th>
              <th>Shipping cost  (in INR)</th>
            </tr>
          </thead>

          <tbody>
            {addedList?.map((data, index) => {
              return (
                <tr key={index.toString()}>
                  <td>{data?.receiverName}</td>
                  <td>{data?.weight}</td>
                  <td>
                    <div
                      style={{
                        width: "20px",
                        height: "20px",
                        background: data?.boxcolour,
                      }}
                    />
                  </td>
                  <td>{data?.destinationcountry}</td>
                  <td>{formatCurrency(data?.currencyValue)}</td>
                  <td>{formatCurrency(data?.countryCurrency)}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      ) : (
        <div>No Data Available</div>
      )}
    </>
  );
};

export default TableData;
