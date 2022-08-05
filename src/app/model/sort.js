export const useSort = (event, data) => {
	switch (event) {
		case "category":
			if (data !== null) {
				return [...data].sort(function (a, b) {
					if (a.category > b.category) {
						return 1;
					} else if (a.category === b.category) {
						return b.timestamp - a.timestamp;
					} else if (a.category < b.category) {
						return -1;
					}
				});
			}
		case "timestamp":
			if (data !== null) {
				return [...data].sort((a, b) => b.timestamp - a.timestamp);
			}
		case "image":
			if (data !== null) {
				return [...data].sort(function (a, b) {
					if (
						a.image.substr(a.image.indexOf("/") + 1) > b.image.substr(b.image.indexOf("/") + 1)
					) {
						return 1;
					} else if (
						a.image.substr(a.image.indexOf("/") + 1) === b.image.substr(b.image.indexOf("/") + 1)
					) {
						return b.timestamp - a.timestamp;
					} else if (
						a.image.substr(a.image.indexOf("/") + 1) < b.image.substr(b.image.indexOf("/") + 1)
					) {
						return -1;
					}
				});
			}
		case "filesize":
			if (data !== null) {
				return [...data].sort((a, b) => a.filesize - b.filesize);
			}
		default:
			return data;
	}
};