import React from 'react';

const PageHeader = ({ children }) => {
	return (
		<div>
			<div className="page-header flex justify-center items-center text-5xl font-bold text-white">
				<h2>{children}</h2>
			</div>
		</div>
	);
};

export default PageHeader;
