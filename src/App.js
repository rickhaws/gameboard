import logo from './logo.svg';
import './App.css';
import * as Pieces from './Pieces'

function Square(color) {
	return (
		<div class={color + " square"}></div>
	);
}

function Row(rowNumber) {
	let rowType = rowNumber % 2;
	let elements = [];
	for (let i =0; i<8; i++) {
		let color = i % 2 !== rowType ? "light" : "dark";
		elements[i] = Square(color);
	}
	elements.push(<br/>);
	return elements;
}

function Board() {
	let rows = [];
	for (let i=0; i<8; i++) {
		rows.push(Row(i));
	}
	return rows;
}

class BitBoard {
	size = 7;
	constructor() {
		this.state = [
			[0,0,0,0,0,0,0],
			[0,0,0,0,0,0,0],
			[0,0,0,0,0,0,0],
			[0,0,0,0,0,0,0],
			[0,0,0,0,0,0,0],
			[0,0,0,0,0,0,0],
		];
	}
	set (row, column) {
		this.state[row][column] = 1;
	}
	clear (row, column) {
		this.state[row][column] = 0;
	}
	setAll() {
		for (let i=0; i<this.size; i++) {
			for (let j=0; j<this.size; j++) {
				this.set(i, j);
			}
		}
	}
}

function App() {
	let activeSquares = new BitBoard();
	for (let i = 0; i<3; i++) {
		for (let j = 3-i; j < 7; i++) {
			activeSquares.set(i,j);
		}
	}
	for (let i = 4; i<7; i++) {
		for (let j = 0; j < 7-i; j++) {
			activeSquares.set(i,j);
		}
	}
	
  return (
    <div id="Board">
		{Board()}
  	</div>
  );
}

export default App;

