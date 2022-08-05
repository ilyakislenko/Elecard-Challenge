import { useEffect, useState } from "react";
import { CSSTransition } from "react-transition-group";
import "./style.css";
export const Card = ({ image, date, filesize, category, handleClick, id }) => {
	const [showCard, setShowCard] = useState(false);
	useEffect(() => setShowCard(true), []);
	const closeCard = (e) => {
		setShowCard(!showCard);
		handleClick(e);
	};
	useEffect(() => setShowCard(true), []);
	return (
		<CSSTransition in={showCard} timeout={300} classNames="alert" unmountOnExit>
			<div className="container__card">
				<div className="card">
					<button
						tabIndex="-1"
						className="card__button"
						id={id}
						onClick={closeCard}
						disabled={!showCard}
					>
						&#10006;
					</button>
					<p className="card__date">{date}</p>
					<img
						className="card__image"
						src={"http://contest.elecard.ru/frontend_data/" + image}
						alt={image}
					/>
					<p className="card__p">
						Card name: {image.substr(image.indexOf("/") + 1)} <br/>
						Card category: {category} <br/>
						Card size: {filesize}
					</p>
				</div>
			</div>
		</CSSTransition>
	);
};
