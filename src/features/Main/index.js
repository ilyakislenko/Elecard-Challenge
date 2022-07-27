import "./style.css";
import { Card } from "../../processes/Card";
import { formatDate } from "../../app/model/date";
import { useState } from "react";
import { PaginatedList } from "../../processes/PaginatedList";
export const Main = ({ data, handleClick }) => {
	const [currentPage, setCurrentPage] = useState(1);
	const usersPerPage = 6;
	const count = Math.ceil(data.length / usersPerPage);
	const paginate = (number) => {
		if(number === 'First'){
			setCurrentPage(1);
		}else if(number === 'Last'){
			setCurrentPage(count);
		}else{
			setCurrentPage(number);
		}
		
	};
	return (
		<div className="main">
			{data.map((item, index) => {
				if (index + 1 <= 6 * currentPage && index + 1 > (currentPage - 1) * 6) {
					return (
						<Card
							key={item.timestamp}
							id={item.timestamp}
							handleClick={handleClick}
							date={formatDate(item.timestamp)}
							image={item.image}
							filesize={item.filesize}
							category={item.category}
						/>
					);
				}
			})}
			<PaginatedList
				cards={data}
				currentPage={currentPage}
				paginate={paginate}
			/>
		</div>
	);
};
