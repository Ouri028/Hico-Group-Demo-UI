import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";

export default function DataGridComponent(props) {
  const columns = [
    { field: "employeeCode", headerName: "Employee #", width: 200 },
    {
      field: "firstName",
      headerName: "First Name(s)",
      width: 250,
      editable: false,
    },
    {
      field: "lastName",
      headerName: "Last Name",
      width: 150,
      editable: false,
    },
    {
      field: "salutation",
      headerName: "Salutation",
      width: 110,
      editable: false,
    },
    {
      field: "profileColor",
      headerName: "Profile Color",
      width: 110,
      editable: false,
    },
  ];

  return (
    <Box sx={{ height: 600, width: "100%" }}>
      <DataGrid
        rows={props.employeeList}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[10]}
        disableSelectionOnClick
        onRowClick={(data) => {
          props.selectedEmployee(data.row);
          props.formOpen(true);
        }}
      />
    </Box>
  );
}
