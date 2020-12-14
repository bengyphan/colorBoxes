import React from 'react';
import Box from './Box';
import './BoxGrid.css';

const BoxGrid = props => {
	const boxComponents = props.boxes.map((color, i) => (
		<Box key={i} color={color} />
	));
	return <div className="BoxGrid">{boxComponents}</div>;
};

export default BoxGrid;
