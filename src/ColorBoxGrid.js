import React from 'react';
import Box from './Box.js';
import './ColorBoxGrid.css';

const ColorBoxGrid = ({ boxes }) => {
	return (
		<div className="ColorBoxGrid">
			{boxes.map((box, i) => (
				<Box color={box.color} isSelected={box.isSelected} key={i} />
			))}
		</div>
	);
};

export default ColorBoxGrid;
