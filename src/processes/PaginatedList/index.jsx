import { usePaginate } from "../../app/model/pagination";
import "./style.css";
export const PaginatedList = ({ cards, currentPage, paginate }) => {
	const usersPerPage = 6;
    const count = Math.ceil(cards.length / usersPerPage);
	let pageNumbers = [];
	const makeButtons = () => {
		pageNumbers = [...usePaginate(cards,currentPage)]
	};
	makeButtons();
	if (cards.length !== 0) {
		return (
			<nav className="list">
				<ul className="list__ul">
					<li
						className="list__ul__leftLi"
						onClick={(event) => {
							event?.preventDefault();
							if (currentPage !== 1) {
								paginate(currentPage - 1);
							}
						}}
					>
						←
					</li>
					{pageNumbers.map((number) => {
						if (number === currentPage) {
							return (
								<li
									className="list__ul__currentLi"
									key={`card-${number}`}
									onClick={(event) => {
										event?.preventDefault();
										paginate(number);
									}}
								>
									<a
										className="list__ul__li__a"
										href="#"
										onClick={(event) => {
											event.preventDefault();
										}}
									>
										{number}
									</a>
								</li>
							);
						} else {
							return (
								<li
									className="list__ul__li"
									key={`card-${number}`}
									onClick={(event) => {
										event?.preventDefault();
										paginate(number);
									}}
								>
									<a
										className="list__ul__li__a"
										href="#"
										onClick={(event) => {
											event.preventDefault();
										}}
									>
										{number}
									</a>
								</li>
							);
						}
					})}
					<li
						className="list__ul__rightLi"
						onClick={(event) => {
							event?.preventDefault();
							if (currentPage !== count) {
								paginate(currentPage + 1);
							}
						}}
					>
						→
					</li>
				</ul>
			</nav>
		);
	} else {
		return <></>;
	}
};
