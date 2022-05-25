import "antd/dist/antd.css";
import Header from "./Components/HeaderComponent";
import "bootstrap/dist/css/bootstrap.min.css";

import Counter from "./Components/CounterComponent";
import { Table } from "antd";
import TableContainer from "./Containers/TableContainer";
function App() {
  return (
    <div className="App">
      <Header />
      <TableContainer />
    </div>
  );
}

export default App;
