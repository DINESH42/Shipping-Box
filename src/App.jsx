import "./App.css";
import ShippingBox from "./Components/ShippingBox/ShippingBox";
import TableData from "./Components/TableData/TableData";

function App() {
  return (
    <>
      <div className="card">
        <ShippingBox />
        <div className="table-container">
          <TableData />
        </div>
      </div>
    </>
  );
}

export default App;
