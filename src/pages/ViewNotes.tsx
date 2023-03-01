import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React from "react";
import { getNotes, Note } from "../repository/note-repository";

export default class ViewNotesPage extends React.Component<
  {},
  { notes: Note[] }
> {
  constructor(props: any) {
    super(props);

    this.state = { notes: [] };

    this.fetchData = this.fetchData.bind(this);
    this.fetchData();
  }

  async fetchData() {
    const notes = await getNotes();
    this.setState({ notes: notes });
  }

  render() {
    return (
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="right">ID</TableCell>
              <TableCell>Note content</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.state.notes.map((row) => (
              <TableRow
                key={row.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="right" component="th" scope="row">
                  {row.id}
                </TableCell>
                <TableCell component="th" scope="row">
                  {row.text}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }
}
