import React from "react";
import axios from "axios";
import "./App.css";
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import UserList from "./components/Users.js";
import ProjectList from "./components/Projects.js";
import NoteList from "./components/Notes.js";
import Project from "./components/Project.js";
import { BrowserRouter, Route } from "react-router-dom";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            projects: [],
            notes: [],
        };
    }

    componentDidMount() {
        axios
            .get("http://127.0.0.1:8000/api/users/")
            .then((response) => {
                const users = response.data.results;
                this.setState({
                    users: users,
                });
            })
            .catch((error) => console.log(error));
        axios
            .get("http://127.0.0.1:8000/api/projects/")
            .then((response) => {
                const projects = response.data.results;
                this.setState({
                    projects: projects,
                });
            })
            .catch((error) => console.log(error));
        axios
            .get("http://127.0.0.1:8000/api/notes/")
            .then((response) => {
                const notes = response.data.results;
                this.setState({
                    notes: notes,
                });
            })
            .catch((error) => console.log(error));
    }

    render() {
        return (
            <div className="App">
                <BrowserRouter>
                    <Header />
                    <Route exact path="/">
                        <UserList users={this.state.users} />
                    </Route>
                    <Route exact path="/projects">
                        <ProjectList projects={this.state.projects} users={this.state.users} />
                    </Route>
                    <Route exact path="/notes">
                        <NoteList notes={this.state.notes} />
                    </Route>
                    <Route path="/project/:id">
                        <Project projects={this.state.projects} users={this.state.users} notes={this.state.notes} />
                    </Route>
                    <Footer />
                </BrowserRouter>
            </div>
        );
    }
}

export default App;
