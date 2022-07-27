export const useRemove = (e, data) => {
	console.log(e.target.id);
	if (e.target.id) {
		if (
			localStorage.getItem("cards") !== "" && localStorage.getItem("cards") !== null
		) {
			const list = JSON.parse(localStorage.getItem("cards"));
			console.log(list);
			list.push(data.find((item) => item.timestamp == e.target.id));
			console.log(list);
			localStorage.setItem("cards", JSON.stringify(list));
		} else {
			const list = [data.find((item) => item.timestamp == e.target.id)];
			localStorage.setItem("cards", JSON.stringify(list));
		}
		return [...data].filter((item) => item.timestamp != e.target.id);
	} else return data;
};
