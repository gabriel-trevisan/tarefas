import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";

class Tarefas extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [{ tarefa: "texto" }]
    };
    this.classes = makeStyles({
      root: {
        width: "100%",
        overflowX: "auto"
      },
      table: {
        minWidth: 650
      }
    });
  }

  handleClick = e => {
    e.preventDefault();
    const text = document.getElementById("inputTarefa").value;
    this.setState({ data: [...this.state.data, { tarefa: text }] });
    this.createData();
  };

  createData = () => {
    return this.state.data.map(row => (
      <TableRow key={row.tarefa}>
        <TableCell component="th" scope="row">
          {row.tarefa}
        </TableCell>
        <TableCell align="right">{row.tarefa}</TableCell>
        <TableCell align="right">{row.tarefa}</TableCell>
        <TableCell align="right">{row.tarefa}</TableCell>
      </TableRow>
    ));
  };

  render() {
    return (
      <div>
        <form noValidate autoComplete="off">
          <h1>Digite sua tarefa abaixo</h1>
          <Grid container spacing={4}>
            <Grid item xs={12} sm>
              <TextField
                fullWidth={true}
                id="inputTarefa"
                label="Tarefa"
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              xs={12}
              sm={4}
              container
              alignItems="flex-start"
              justify="flex-end"
              direction="row"
            >
              <Box mt={1}>
                <Button
                  onClick={this.handleClick}
                  variant="contained"
                  size="large"
                  color="primary"
                >
                  Adicionar
                </Button>
              </Box>
            </Grid>
          </Grid>
        </form>
        <br />
        <Paper className={this.classes.root}>
          <Table className={this.classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>#</TableCell>
                <TableCell align="right">Tarefa</TableCell>
                <TableCell align="right">Data</TableCell>
                <TableCell align="right">Hora</TableCell>
              </TableRow>
            </TableHead>
            <TableBody className="table-tarefas">{this.createData()}</TableBody>
          </Table>
        </Paper>
      </div>
    );
  }
}

export default Tarefas;
