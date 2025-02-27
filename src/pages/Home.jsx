import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import Rick_and_Morty_logo from "../assets/img/Rick_and_Morty_logo.png"
import { Link } from "react-router-dom";


export const Home = () => {

  const {store, dispatch} =useGlobalReducer()

	return (
		<div className="text-center mt-5">
			<h1>Bienvenido a mi proyecto de</h1>
			<p>
				<img src={Rick_and_Morty_logo} />
			</p>
			<div className="container text-center">
  <div className="row align-items-start">
    <div className="col">
      <Link to="/Personajes"><h2>personajes</h2></Link>
    </div>
    <div className="col">
	<Link to="/Ubicaciones"><h2>ubicaciones</h2></Link>
    </div>
    <div className="col">
	<Link to="/Episodios"><h2>episodios</h2></Link>
    </div>
  </div>
</div>
		</div>
	);
}; 