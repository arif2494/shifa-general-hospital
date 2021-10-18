import React from 'react';
import notFound from '../../img/pageNotFound.jpg';
const PageNotFound = () => {
	return (
		<div>
			<img src={notFound} alt="!" className="w-full" />
		</div>
	);
};

export default PageNotFound;
