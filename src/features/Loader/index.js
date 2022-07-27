import loader from "../../shared/icons/loader.gif"
import "./style.css";

export const Loader = () => {
	return (
		<div className="container">
			<img className="container__image" src={loader} />
		</div>
	);
};
