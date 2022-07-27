import "./style.css";
export const PaginatedList = ({ cards, currentPage, paginate }) => {
	console.log("render");
	const usersPerPage = 6;
	const count = Math.ceil(cards.length / usersPerPage);
	let pageNumbers = [];
	const makeButtons = () => {
		let counter = 1;
		if (currentPage < 3) {
			while (counter <= 3) {
				pageNumbers.push(counter);
				counter++;
			}
		} else if (currentPage > 2) {
			while (counter < currentPage + 2) {
				if (counter <= count) {
					pageNumbers.push(counter);
					counter++;
				} else {
					counter++;
				}
			}
			pageNumbers = pageNumbers.slice(currentPage - 2);
		}
		if (!pageNumbers.includes(count)) {
			pageNumbers.push("Last");
		}
		if (!pageNumbers.includes(1) && currentPage > 2) {
			pageNumbers.unshift("First");
		}
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
