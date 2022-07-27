import "./style.css";
export const SortList = ({handleChange}) => {
	return (
		<div className="sortlist" onChange={handleChange}>
			<input
				type="radio"
				id="category"
				name="choice"
				value="category"
			/>
			<label htmlFor="category">by category</label>
			<input type="radio" id="timestamp" name="choice" value="timestamp" />
			<label htmlFor="timestamp">by date</label>
			<input type="radio" id="image" name="choice" value="image" />
			<label htmlFor="image">by name</label>
            <input type="radio" id="filesize" name="choice" value="filesize" />
			<label htmlFor="filesize">by size</label>
		</div>
	);
};
