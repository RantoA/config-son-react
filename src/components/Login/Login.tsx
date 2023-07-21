import { Button, Form, FormGroup, Input } from "reactstrap"
import { useState } from "react";
import Navigations from "../Navigations/Navigations";
import {LoginSuccess} from "../Service/Services";





interface LoginProps {
    onLogin: (login: string, password: string) => void;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (login.trim() === "" || password.trim() === "") {
            setError("Veuillez saisir un nom d'utilisateur et un mot de passe.");
            alert(error)
        } else {
            setError("ok"); // Réinitialiser l'erreur s'il n'y en a pas
            onLogin(login, password);
            alert(error)

        }
    };


    return (
        <>
            <div className="justify-content-center">
                <Navigations />
            </div>
            <div className="App min-vh-100 d-flex justify-content-center align-items-center">
                <div className="card shadow border-info mb-3">
                    <div className="card-header">
                        <center>
                            <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
                                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                                <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
                            </svg>
                        </center>
                    </div>
                    <div className="card-body">
                        <center>
                            <h5 className="card-title">Connexion</h5>
                        </center>
                        <p className="card-text">
                            <Form onSubmit={handleSubmit}>
                                <FormGroup>
                                    <Input
                                        type="text"
                                        id="login"
                                        name="login"
                                        value={login}
                                        placeholder="Login"
                                        onChange={(e) => setLogin(e.target.value)}
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <Input
                                        type="password"
                                        id="password"
                                        name="password"
                                        value={password}
                                        placeholder="Password"
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </FormGroup>
                                <Button color="info">
                                    connexion
                                </Button>
                            </Form>
                        </p>
                    </div>
                </div>

            </div >
        </>
    );
};

export default Login;
