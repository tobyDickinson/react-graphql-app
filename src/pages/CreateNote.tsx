import SaveIcon from "@mui/icons-material/Save";
import LoadingButton from "@mui/lab/LoadingButton";
import TextField from "@mui/material/TextField";
import React from "react";
import { saveNote } from "../repository/note-repository";

export default class CreateNotePage extends React.Component<
  {},
  { loading: boolean; noteContent: string }
> {
  constructor(props: any) {
    super(props);
    this.state = { loading: false, noteContent: "" };

    this.handleClick = this.handleClick.bind(this);
    this.handleTextFieldChange = this.handleTextFieldChange.bind(this);
  }

  async handleClick() {
    this.setState({ loading: true });
    await saveNote(this.state.noteContent);
    this.setState({ loading: false });
  }

  handleTextFieldChange(e: any) {
    console.log(typeof e);
    this.setState({
      noteContent: e.target.value,
    });
  }

  render() {
    return (
      <div>
        <TextField
          id="outlined-multiline-static"
          label="New note"
          multiline
          rows={4}
          onChange={this.handleTextFieldChange}
        />

        <LoadingButton
          size="small"
          color="secondary"
          onClick={this.handleClick}
          loading={this.state.loading}
          loadingPosition="start"
          startIcon={<SaveIcon />}
          variant="contained"
        >
          <span>Save</span>
        </LoadingButton>
      </div>
    );
  }
}
