import React, { useState } from 'react';
import ColorBoxGrid from './ColorBoxGrid';
import './ColorBoxGrid.css';

function choice(arr) {
	let randIdx = Math.floor(Math.random() * arr.length);
	return arr[randIdx];
}
const ColorBoxes = props => {
	const [boxes, setBoxes] = useState(
		Array.from({ length: props.numBoxes }, () => ({
			color: choice(props.colors),
			isSelected: false,
		}))
	);
	const handleClick = () => {
		let idx = Math.floor(Math.random() * props.numBoxes);
		setBoxes(boxes => {
			let boxCopy = [...boxes];
			boxCopy[idx].color = choice(props.colors);
			boxCopy.map(obj => (obj.isSelected = false));
			boxCopy[idx].isSelected = true;
			return boxCopy;
		});
	};
	return (
		<div className="ColorBoxes">
			<h1>Color Boxes</h1>
			<ColorBoxGrid boxes={boxes} />
			<button onClick={handleClick}>Change</button>
		</div>
	);
};

ColorBoxes.defaultProps = {
	numBoxes: 16,
	colors: [
		'Aqua',
		'Black',
		'BlanchedAlmond',
		'Blue',
		'Chocolate',
		'DodgerBlue',
		'Lavender',
		'LawnGreen',
		'Peru',
		'Plum',
		'SpringGreen',
		'SteelBlue',
		'Tan',
		'Teal',
		'Thistle',
		'Tomato',
		'Turquoise',
		'Violet',
		'Yellow',
		'YellowGreen',
	],
};

export default ColorBoxes;
