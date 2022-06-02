import "antd/dist/antd.css";
import Header from "./Components/HeaderComponent";
import "bootstrap/dist/css/bootstrap.min.css";

import Counter from "./Components/CounterComponent";
import { Table } from "antd";
import TableContainer from "./Containers/TableContainer";
import BodyContainer from "./Containers/BodyContainer";
function App() {
  return (
    <div className="App">
      <Header />
      <BodyContainer />
    </div>
  );
}

export default App;
