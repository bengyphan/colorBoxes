import React, { useState } from 'react';
import BoxGrid from './BoxGrid';

const ColoredBoxes = props => {
	function choice(arr) {
		const randIdx = Math.floor(Math.random() * arr.length);
		return arr[randIdx];
	}
	const [boxes, setBoxes] = useState(
		Array.from({ length: props.numBoxes }, () => choice(props.colors))
	);
	const handleClick = evt => {
		let idx = Math.floor(Math.random * props.numBoxes);

		setBoxes(boxes => {
			let boxCopy = [...boxes];
			boxCopy[idx] = choice(props.colors);
			return boxCopy;
		});
	};
	return (
		<div>
			<BoxGrid boxes={boxes} />
			<button onClick={handleClick}>Change a Box</button>
		</div>
	);
};

ColoredBoxes.defaultProps = {
	numBoxes: 16,
	colors: [
		'green',
		'blue',
		'red',
		'turquoise',
		'purple',
		'yellow',
		'orange',
		'violet',
		'teal',
		'SteelBlue',
		'pink',
		'seagreen',
		'tan',
		'honeydew',
		'slateblue',
		'darkolivegreen',
	],
};

export default ColoredBoxes;
