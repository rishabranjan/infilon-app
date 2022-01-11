import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import { Pagination } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { pageChange } from "../actions";
import FormDialog from "./EditTable";

export default function BasicTable(props) {
  const dispatch = useDispatch();
  return (
    <div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Avatar</TableCell>
              <TableCell align="center">Email</TableCell>
              <TableCell align="center">First Name&nbsp;</TableCell>
              <TableCell align="center">Last Name&nbsp;</TableCell>
              <TableCell align="center">ID&nbsp;</TableCell>
              <TableCell align="center">&nbsp;</TableCell>
              <TableCell align="center">&nbsp;</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.data.data.map((data) => (
              <TableRow
                key={data.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  <Avatar alt="Avatar" src={data.avatar} />
                </TableCell>
                <TableCell align="center">{data.email}</TableCell>
                <TableCell align="center">{data.first_name}</TableCell>
                <TableCell align="center">{data.last_name}</TableCell>
                <TableCell align="center">{data.id}</TableCell>
                <TableCell align="center">
                  {/* <Button
                    onClick={() => props.handleEdit(data.id)}
                    variant="outlined"
                  >
                    Edit
                  </Button> */}
                  <FormDialog handleSubmit={props.handleEdit(data.id)} />
                </TableCell>
                <TableCell align="center">
                  <Button
                    onClick={() => props.handleDelete(data.id)}
                    variant="outlined"
                    color="error"
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <div style={{ float: "right", marginTop: "10px" }}>
        <Pagination
          count={props.data.total_pages}
          size="large"
          onChange={(event, value) => props.handlePageChange(value)}
        />
      </div>
    </div>
  );
}
