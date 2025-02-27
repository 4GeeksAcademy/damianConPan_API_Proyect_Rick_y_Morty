
import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
} from "react-router-dom";
import { Layout } from "./pages/Layout";
import { Home } from "./pages/Home";
import { Ubicaciones } from "./pages/Ubicaciones";
import { Personajes } from "./pages/Personajes";
import { Episodios } from "./pages/Episodios";
import { Favoritos } from "./pages/Favoritos";

export const router = createBrowserRouter(
    createRoutesFromElements(

      <Route path="/" element={<Layout />} errorElement={<h1>Not found!</h1>} >

        <Route path= "/" element={<Home />} />
        <Route path="/Ubicaciones/" element={ <Ubicaciones />} />
        <Route path="/Personajes" element={<Personajes />} />
        <Route path="/Episodios" element={<Episodios />} />
        <Route path="/Favoritos" element={<Favoritos />} />


        
      </Route>
    )
);