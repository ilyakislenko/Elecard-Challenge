import { useState } from "react";
import "./style.css";
export const Tree = ({ data,handleClick }) => {
	const categories = new Set();
	data.forEach(({ category }) => {
		categories.add(category);
	});
	categories.add("tree");
	const sortedCategories = Array.from(categories).sort();
	const initialState = sortedCategories.reduce(
		(reducer, value) => ({ ...reducer, [value]: false }),
		{}
	);
	const [state, setState] = useState(initialState);
	const toggle = (e) => {
		const val = e.target.id;
		if (state[val] === false) {
			setState({ ...state, [val]: true });
		} else {
			setState({ ...state, [val]: false });
		}
	};
	return (
		<ul className="treeline">
			<li>
				<div className="dropTree" id="tree" onClick={toggle}>
					{state.tree ? "-" : "+"}
				</div>
				Сatalog
				{state.tree && (
					<ul>
						{sortedCategories.map((category) => {
							if (category !== "tree")
								return (
									<li key={category}>
										<div className="drop" id={category} onClick={toggle}>
											{state[category] ? "-" : "+"}
										</div>
										{category}
										{state[category] && (
											<ul>
												{data.map((item) => {
													if (item.category == category) {
														return (
															<li key={item.timestamp} >
																<img className="thumbnail"
																	src={"http://contest.elecard.ru/frontend_data/" + item.image}
																	onClick={(e) => handleClick(e,item.image)}
																/>
															</li>
														);
													}
												})}
											</ul>
										)}
									</li>
								);
						})}
					</ul>
				)}
			</li>
		</ul>
	);
};
