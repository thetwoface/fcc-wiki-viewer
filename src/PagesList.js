import React from 'react';
import PageItem from './PageItem';

export default function PageList(props) {
	const pages = props.pages;
	const pageItems = pages.map((page) => {
		return <PageItem page={page} key={page.id}/>
	});

	return (
		<div className="list-group">
			{pageItems}
		</div>
	);
}
