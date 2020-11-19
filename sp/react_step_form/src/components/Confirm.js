import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import { List, ListItem, ListItemText } from '@material-ui/core/';
import Button from '@material-ui/core/Button';

export class Confirm extends Component {
  continue = e => {
    e.preventDefault();
    // PROCESS FORM //
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const {
      values: { firstName, lastName, email, occupation, city, bio }
    } = this.props;
    return (
      <MuiThemeProvider>
        <>
        <AppBar position="static">確認信息表</AppBar>
          <Dialog
            open
            fullWidth
            maxWidth='sm'
          >
          <AppBar title="請輸入用戶信息"  position="static">確認信息</AppBar>
            <AppBar title="Confirm User Data" />
            <List>
              <ListItem>
                <ListItemText primary="姓" secondary={firstName} />
              </ListItem>
              <ListItem>
                <ListItemText primary="名" secondary={lastName} />
              </ListItem>
              <ListItem>
                <ListItemText primary="郵件" secondary={email} />
              </ListItem>
              <ListItem>
                <ListItemText primary="職業" secondary={occupation} />
              </ListItem>
              <ListItem>
                <ListItemText primary="城市" secondary={city} />
              </ListItem>
              <ListItem>
                <ListItemText primary="個人簡介" secondary={bio} />
              </ListItem>
            </List>
            <br />

            <Button
              color="secondary"
              variant="contained"
              onClick={this.back}
            >上一步</Button>

            <Button
              color="primary"
              variant="contained"
              onClick={this.continue}
            >確認 & 下一步</Button>
          </Dialog>
        </>
      </MuiThemeProvider>
    );
  }
}

export default Confirm;
