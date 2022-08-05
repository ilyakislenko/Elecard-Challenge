
export const usePaginate = (cards,currentPage) => {
    const usersPerPage = 12;
    const count = Math.ceil(cards.length / usersPerPage);
    let pageNumbers = [];
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
        return pageNumbers
}