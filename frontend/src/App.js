import React from "react";
import axios from "axios";
import "./App.css";
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import UserList from "./components/Users.js";
import ProjectList from "./components/Projects.js";
import NoteList from "./components/Notes.js";
import Project from "./components/Project.js";
import LoginForm from "./components/Auth.js";
import Cookies from "universal-cookie";
import { BrowserRouter, Route, Switch } from "react-router-dom";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

const NotFound404 = ({ location }) => {
    return (
        <div>
            <h1>Page with address '{location.pathname}' not found!</h1>
        </div>
    );
};

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            projects: [],
            notes: [],
            token: "",
            username: "",
        };
    }

    componentDidMount() {
        this.get_username_from_storage();
        this.get_token_from_storage();
    }

    get_headers() {
        let headers = {
            "Content-Type": "application/json",
        };
        if (this.is_authenticated()) {
            headers["Authorization"] = "Token " + this.state.token;
        }
        return headers;
    }

    load_data() {
        const headers = this.get_headers();
        axios
            .get(BACKEND_URL + "/api/users/", { headers })
            .then((response) => {
                const users = response.data.results;
                this.setState({
                    users: users,
                });
            })
            .catch((error) => {
                console.log(error);
                this.setState({ users: [] });
            });
        axios
            .get(BACKEND_URL + "/api/projects/", { headers })
            .then((response) => {
                const projects = response.data.results;
                this.setState({
                    projects: projects,
                });
            })
            .catch((error) => {
                console.log(error);
                this.setState({ projects: [] });
            });
        axios
            .get(BACKEND_URL + "/api/notes/", { headers })
            .then((response) => {
                const notes = response.data.results;
                this.setState({
                    notes: notes,
                });
            })
            .catch((error) => {
                console.log(error);
                this.setState({ notes: [] });
            });
    }

    set_token(token) {
        const cookies = new Cookies();
        cookies.set("token", token);
        this.setState({ token: token }, () => this.load_data());
    }

    is_authenticated() {
        return this.state.token != "" && this.state.token != undefined;
    }

    logout() {
        this.set_token("");
        this.set_username("");
    }

    get_token_from_storage() {
        const cookies = new Cookies();
        const token = cookies.get("token");
        this.setState({ token: token }, () => this.load_data());
    }

    get_username_from_storage() {
        const cookies = new Cookies();
        const username = cookies.get("username");
        this.setState({ username: username });
    }

    set_username(username) {
        const cookies = new Cookies();
        cookies.set("username", username);
        this.setState({ username: username });
    }

    get_token(username, password) {
        axios
            .post(BACKEND_URL + "/api/auth-token/", { username: username, password: password })
            .then((response) => {
                console.log(response.data);
                this.set_token(response.data["token"]);
                this.set_username(username);
            })
            .catch((error) => alert("Incorrect username or password"));
    }

    delete_project(event, id) {
        event.preventDefault();
        const headers = this.get_headers()
        axios.delete(`http://127.0.0.1:8000/api/projects/${id}`, { headers })
            .then(response => {
                this.setState({ projects: this.state.projects.filter((item) => item.id !== id) })
            }).catch(error => console.log(error))
    }

    render() {
        return (
            <div className="App">
                <BrowserRouter>
                    <Header
                        username={this.state.username}
                        is_authenticated={this.is_authenticated.bind(this)}
                        logout={this.logout.bind(this)}
                    />
                    <Switch>
                        <Route exact path="/">
                            <UserList users={this.state.users} />
                        </Route>
                        <Route exact path="/projects">
                            <ProjectList projects={this.state.projects} users={this.state.users} delete_project={(event, id)=>this.delete_project(event, id)} />
                        </Route>
                        <Route exact path="/notes">
                            <NoteList notes={this.state.notes} />
                        </Route>
                        <Route path="/project/:id">
                            <Project projects={this.state.projects} users={this.state.users} notes={this.state.notes} />
                        </Route>
                        <Route exact path="/login">
                            <LoginForm get_token={(username, password) => this.get_token(username, password)} />
                        </Route>
                        <Route component={NotFound404} />
                    </Switch>
                    <Footer />
                </BrowserRouter>
            </div>
        );
    }
}

export default App;
