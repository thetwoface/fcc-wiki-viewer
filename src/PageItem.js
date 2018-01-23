import React from 'react';

export default function PageItem(props) {
	const page = props.page;
	const pageLink = 'https://en.wikipedia.org/?curid=' + page.id;

	return (
		<a href={pageLink} className="list-group-item list-group-item-action flex-column align-items-start" target='_blank' rel="noopener noreferrer">
			<h5 className="mb-1">{page.title}</h5>
			<p className="mb-1">{page.extract}</p>
		</a>
	);
}
