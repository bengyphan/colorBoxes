import React from 'react';
import './Box.css';

const Box = ({ color, isSelected }) => {
	return (
		<div
			className="Box"
			style={{ backgroundColor: color, width: '15%', height: '100px' }}
		>
			{isSelected ? 'clicked' : null}
		</div>
	);
};

export default Box;
