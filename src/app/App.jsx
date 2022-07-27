import React, { useEffect, useState } from "react";
import { getData } from "../api";
import { Footer } from "../features/Footer";
import { Header } from "../features/Header";
import { Loader } from "../features/Loader";
import { Main } from "../features/Main";
import { Tree } from "../features/Tree";
import { SortList } from "../processes/SortList";
import { useRemove } from "./model/remove";
import { useReset } from "./model/reset";
import { useSort } from "./model/sort";
import "./style.css";
function App() {
	const [data, setData] = useState(null);
	const [mode, SetMode] = useState(false);
	useEffect(() => {
		setTimeout(
			() =>
				getData().then((data) => {
					if (localStorage.getItem("cards")) {
						const cards = JSON.parse(localStorage.getItem("cards"));
						const filteredData = data.filter(
							(item) =>
								!cards.some((deleted) => item.timestamp === deleted.timestamp)
						);
						setData(filteredData);
					} else {
						setData(data);
					}
				}),
			1000
		);
	}, []);
	const toggleMode = (e) => {
		if (e.target.id) {
			e.target.id === "tree" ? SetMode(false) : SetMode(true);
		}
	};
	const sortData = (e) => {
		const newData = useSort(e, data);
		setData(newData);
	};
	const removeCard = (e) => {
		const newData = useRemove(e, data);
		setTimeout(() => {
			setData(newData);
		}, 300);
	};
	const resetCards = (e) => {
		const newData = useReset(e, data);
		setData(newData);
	};
	if (data) {
		if (!mode) {
			return (
				<div>
					<Header handleClick={resetCards} handleChange={toggleMode} />
					<div className="container__main">
						<Tree data={data} />
					</div>
					<Footer />
				</div>
			);
		} else {
			return (
				<div>
					<Header handleClick={resetCards} handleChange={toggleMode} />
					<div className="container__main">
						<SortList handleChange={sortData} />
						<Main handleClick={removeCard} data={data} />
					</div>
					<Footer />
				</div>
			);
		}
	} else {
		return <Loader />;
	}
}

export default App;
