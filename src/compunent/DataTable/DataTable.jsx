import React, { useState } from "react";
import "./dataTable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { UserCol, UserRows } from "../../DataTableSource";
import { Link } from "react-router-dom";

const DataTable = () => {
  const [data, setDate] = useState(UserRows);

  const deleteHandeler = (id) => {
    setDate(
      data.filter((el) => {
        return el.id !== id;
      })
    );
  };

  const actionCol = [
    {
      field: `action `,
      headerName: `Action`,
      width: 200,
      renderCell: (params) => {
        return (
          <div className="action">
            <Link to="/users/test " style={{ textDecoration: "none" }}>
              <div className="viewButton">View </div>
            </Link>
            <div
              className="deleteButton"
              onClick={() => {
                deleteHandeler(params.row.id);
              }}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];

  return (
    <div className="dataTable">
      <div className="dataTableTitle">
        Add new user
        <Link
          to="/users/new"
          className="link"
          style={{ textDecoration: "none" }}
        >
          Add user
        </Link>
      </div>
      <DataGrid
        className="dataGrid"
        rows={data}
        columns={UserCol.concat(actionCol)}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
};

export default DataTable;
