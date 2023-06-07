import React from 'react';
import TodoList from "./components/TodoList";
import {Container, Header} from "./app.styled";
import CellContainer from "./components/CellContainer/CellContainer";
import {ThemeProvider} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import './custom.scss';
const App = () => {
    return (
        <div>
            <ThemeProvider>
                <Container>
                    <CellContainer/>
                </Container>

                <hr/>
                <TodoList/>
            </ThemeProvider>
        </div>
    );
};

export default App;
