import React, { Component } from "react";
import ButtonAppBar from "./Components/ButtonAppBar";
import Container from "@material-ui/core/Container";
import Tarefas from "./Components/Tarefas";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <ButtonAppBar />
        <Container maxWidth="md">
          <Tarefas />
        </Container>
      </div>
    );
  }
}

export default App;
