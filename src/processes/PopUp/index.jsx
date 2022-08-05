import "./style.css";
export const PopUp = ({ image, handleClick }) => {
	return (
		<div className="container__popup">
			<button id="close" className="popup__button" onClick={handleClick}>
            &#10006;
			</button>
			<img
				className="popup__img"
				src={"http://contest.elecard.ru/frontend_data/" + image}
			/>
		</div>
	);
};
