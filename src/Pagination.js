import React from 'react';


function Pagination({ postPerPage, totalPost, paginate }) {
	const pageNumber = [];
	for (let i = 1; i <= Math.ceil(totalPost / postPerPage); i++) {
		pageNumber.push(i)
	}

	return (
		<nav>
			<ul>
				{pageNumber.map(number => (
					<li key={number}>
						<a onClick={() => paginate(number)} href='!#' >
							<button>{number}</button>
						</a>
					</li>
				))}
			</ul>
		</nav>
	);
}

export default Pagination;