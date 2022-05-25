import React from "react";
import { Table } from "antd";

function TableComponent({ dataSource, columns, toggleHandler }) {
  return (
    <div>
      <Table className="p-2 m-2" dataSource={dataSource} columns={columns} />
      <center>
        <button
          type="button"
          onClick={toggleHandler}
          className="btn btn-primary btn-lg"
        >
          Change Data
        </button>
      </center>
    </div>
  );
}

export default TableComponent;
