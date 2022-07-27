export const useReset = (e, data) => {
	if (
		e.target.id === "reset" &&
		data !== null &&
		localStorage.getItem("cards") !== null
	) {
		const newData = JSON.parse(localStorage.getItem("cards")).concat(data);
		localStorage.removeItem("cards");
		return newData;
	} else {
		return data;
	}
};
