import React, { useState } from "react";
import TableComponent from "../Components/TableComponent";
function TableContainer() {
  const data1 = [
    {
      key: "1",
      name: "Mike",
      age: 32,
      address: "10 Downing Street",
    },
    {
      key: "2",
      name: "John",
      age: 42,
      address: "10 Downing Street",
    },
  ];
  const data2 = [
    {
      key: "1",
      name: "Satyam",
      age: 21,
      address: "NA",
    },
    {
      key: "2",
      name: "Shivanshu Tomar",
      age: 21,
      address: "GLA University",
    },
  ];
  const [data, setData] = useState(data1);
  const [countClick, setCountClick] = useState(0);
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
  ];
  const toggleHandler = (event) => {
    countClick % 2 == 0 ? setData(data2) : setData(data1);
    setCountClick(countClick + 1);
  };
  return (
    <>
      <TableComponent
        dataSource={data}
        columns={columns}
        toggleHandler={toggleHandler}
      />
    </>
  );
}

export default TableContainer;
