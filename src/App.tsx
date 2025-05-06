 
import { HashRouter as Router, Routes, Route } from "react-router-dom";
// Remplacez BrowserRouter par HashRouter pour une meilleure compatibilité avec GitHub Pages
import { Home } from './screens/home/Home'
import {Connexion} from "./screens/connexion/Connexion"
import { ConnexionUser } from "./screens/connexionUser";
import { ForgotPassword } from "./screens/forgotPassword";
import { ChangePassword }  from "./screens/changePassword";
import { DeliveryOne } from "./screens/connexion";
import { DeliveryTwo } from "./screens/connexion";
import { CodeSms } from "./screens/connexion";
import { HommePage } from "./screens/homePage/HomePage";
import { HommeArticle } from "./screens/homeArticle/sections";
import { Explore } from "./screens/explorePage/section";
import { Mailles } from "./screens/mailles";
import { Journal } from "./screens/journal";
export const App = (): JSX.Element => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Connexion />} />
        <Route path="/guest-login" element={<ConnexionUser />} />
        <Route path="/forgotPassword" element={<ForgotPassword />} />
        <Route path="/changePassword" element={<ChangePassword />} />
        <Route path="/delivery1" element={<DeliveryOne />} />
        <Route path="/delivery2" element={<DeliveryTwo />} />
        <Route path="/smsCode" element={<CodeSms />} />
        <Route path="/hommePage" element={<HommePage />} />
        <Route path="/hommeArticles" element={<HommeArticle />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/maille" element={<Mailles />} />
        <Route path="/journal" element={<Journal />} />
      </Routes>
    </Router>
  );
};