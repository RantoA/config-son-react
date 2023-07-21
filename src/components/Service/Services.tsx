import { Button, UncontrolledPopover } from "reactstrap";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "bootstrap/dist/css/bootstrap.css";

export function LoginSuccess() {

    return (
        <div className="toast align-items-center text-white bg-primary border-0" role="alert" aria-live="assertive" aria-atomic="true">
            <div className="d-flex">
                <div className="toast-body">
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check-circle" viewBox="0 0 16 16">
                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                            <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z" />
                        </svg>
                        Connexion réussie,
                    </span>
                </div>
                <button type="button" className="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
            </div>
        </div>
    );

};


export function LoginFailed() {

    return (

        <div className="toast align-items-center text-white bg-primary border-0" role="alert" aria-live="assertive" aria-atomic="true">
            <div className="d-flex">
                <div className="toast-body">
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-circle" viewBox="0 0 16 16">
                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                        </svg>
                        Connexion refusée
                    </span>
                </div>
                <button type="button" className="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
            </div>
        </div>

    );
};


export function Editeson() {

    return (
        <>
            <div className="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" >
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-body">
                            <div className="float-end">
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div><br />
                            <center>
                                <h2><b>Ajouter un son</b></h2>
                                <h6><b>Ajouter un son</b></h6><br />
                                <p>Sur quel(s) numéro(s) voulez-vous ajouter un son?</p>
                                <div className="float-start">
                                    <button className="btn m-5 btn-secondary" data-bs-target="#unNumero" data-bs-toggle="modal">
                                        Seulement <br /> sur ce numéro
                                    </button>
                                </div>
                                <div className="float-end">
                                    <button className="btn m-5 btn-secondary" data-bs-target="#multiNum" data-bs-toggle="modal">
                                        Selectionner <br /> des numéros
                                    </button>
                                </div>
                            </center>

                        </div>
                    </div>
                </div>
            </div>
            <div className="modal fade" id="unNumero" aria-hidden="true" aria-labelledby="exampleModalToggleLabel2">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-body">
                            <div className="float-end">
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div><br />
                            <center>
                                <h2><b>Ajouter un son</b></h2>
                                <h6 className="mb-5"><b>Sur accueil</b></h6><br />

                                <div className="input-group" style={{width:"50%"}}>
                                    <div className="float-end">
                                    <label htmlFor="imageUpload" className="btn btn-light">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-upload" viewBox="0 0 16 16">
                                            <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
                                            <path d="M7.646 1.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 2.707V11.5a.5.5 0 0 1-1 0V2.707L5.354 4.854a.5.5 0 1 1-.708-.708l3-3z" />
                                        </svg>&nbsp; Selectionner un fichier
                                    </label>
                                    <br />
                                    <input type="file" id="imageUpload" accept="image/*" style={{display: "none"}} />
                                    </div>
                                </div><br />
                                <div className="f">
                                    <button className="btn btn-secondary" data-bs-target="" data-bs-toggle="modal">
                                        Envoyer
                                    </button>
                                </div>
                            </center>

                        </div>
                    </div>
                </div>
            </div>
            <div className="modal fade" id="multiNum" aria-hidden="true" aria-labelledby="exampleModalToggleLabel2">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-body">
                            <div className="float-end">
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div><br />
                            <center>
                                <h2><b>Ajouter un son</b></h2>
                                <h6><b>Ajouter un son</b></h6><br />
                                <p>Sur quel(s) numéro(s) voulez-vous ajouter un son?</p>
                                <div className="float-start">
                                    <button className="btn m-5 btn-secondary" data-bs-target="#unNumero" data-bs-toggle="modal">
                                        Seulement <br /> sur ce numéro
                                    </button>
                                </div>
                                <div className="float-end">
                                    <button className="btn m-5 btn-secondary" data-bs-target="#multiNum" data-bs-toggle="modal">
                                        Selectionner <br /> des numéros
                                    </button>
                                </div>
                            </center>
                        </div>
                        <div className="modal-footer">
                            <button className="btn btn-primary" data-bs-target="#exampleModalToggle" data-bs-toggle="modal">Back to first</button>
                        </div>
                    </div>
                </div>
            </div>
            <button className="btn btn-outline-info" data-bs-target="#exampleModalToggle" data-bs-toggle="modal">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
                    <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                    <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
                </svg>
            </button>
        </>
    );
};

