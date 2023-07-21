import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import PubEtAccueil from "./components/Traitement-son/AcceuilEtPub";
import Accueil from "./components/Accueil/Accueil";
import Login from "./components/Login/Login";
import { useState } from "react";


const App: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (username: string, password: string) => {
    if (username==="RantoA" && password==="test") {
      setIsLoggedIn(true);
      
    }
    // Ici, vous pouvez gérer la logique de connexion (envoyer les informations de connexion au serveur, etc.)
    // Pour cette démonstration, nous considérons que la connexion réussie mettra simplement isLoggedIn à true.
  };

  const handleLogout = () => {
    // Implémentez la logique de déconnexion ici si nécessaire
    setIsLoggedIn(false);
  };
  return (
    <BrowserRouter>
      <Routes>
        <Route  path="/" element={<Login onLogin={handleLogin} />} />
        {/* <Route path="/" >
          {isLoggedIn ? <Navigate to="/accueil" /> : <Login onLogin={handleLogin} />}
        </Route>
        <Route path="/accueil">
            {isLoggedIn ? <Accueil /> : <Navigate to="/" />}
        </Route> */}
        {/* <Route  path="/" element={isLoggedIn ? <Accueil /> : <Login onLogin={handleLogin} />} />
        <Route path="/accueil" element={<Accueil />} />
        {/* <Route path="/accueil" element={<Accueil />} /> */}
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route path="/gestionson" element={<PubEtAccueil />} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
