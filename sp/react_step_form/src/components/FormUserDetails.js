import React, { Component } from "react";
import Dialog from "@material-ui/core/Dialog";
import AppBar from "@material-ui/core/AppBar";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

export class FormUserDetails extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const {
      values: { firstName, lastName, email },
      handleChange,
    } = this.props;
    return (
      <MuiThemeProvider>
        <>
          <AppBar position="static">用戶信息表</AppBar>
          <Dialog open fullWidth maxWidth="sm">
          <AppBar title="請輸入用戶信息"  position="static">用戶信息</AppBar>

            <TextField
              placeholder="輸入姓"
              label="姓"
              onChange={handleChange("firstName")}
              defaultValue={firstName}
              margin="normal"
              fullWidth
            />
            <br />
            <TextField
              placeholder="輸入名"
              label="名"
              onChange={handleChange("lastName")}
              defaultValue={lastName}
              margin="normal"
              fullWidth
            />
            <br />
            <TextField
              placeholder="輸入郵箱"
              label="郵箱"
              onChange={handleChange("email")}
              defaultValue={email}
              margin="normal"
              fullWidth
            />
            <br />
            <Button color="primary" variant="contained" onClick={this.continue}>
              下一步
            </Button>
          </Dialog>
        </>
      </MuiThemeProvider>
    );
  }
}

export default FormUserDetails;
