import logo from './logo.svg';
import './App.css';
import * as Pieces from './Pieces'
import { act } from 'react-dom/cjs/react-dom-test-utils.production.min';

function Square(props) {
	return (
		<div class={props.color + " square"}></div>
	);
}

function Row(props) {
	let rowType = props.rowNumber % 2;
	let elements = [];
	for (let i =0; i<8; i++) {
		let color = i % 2 !== props.rowType ? "light" : "dark";
		elements[i] = Square({color: color});
	}
	elements.push(<br/>);
	return elements;
}

function Board(props) {
	let rows = [];
	for (let i=0; i<8; i++) {
		rows.push(Row({rowNumber: i}));
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

	static hexagon() {
		let bb = new BitBoard();
		let n=bb.size;
		for (let i=0; i<n; i++) {
			let middle = Math.floor(n/2);
			let start = Math.max(0, middle-i);
			let end = Math.min(n+middle-i, n);
			for (let j=start; j<end; j++) {
				bb.set(i, j);
			}
		}
		
		// Add a specialized print function
		bb.print = () => {
			let lines = [];
			console.log(lines);
			for (let i=0; i<n; i++) {
				lines[i] = " " * i;
				console.log(lines);
				for (let j=0; j<n; j++) {
					lines[i] += bb[i][j] + " ";
					console.log(lines);
				}
			}
			console.log(lines);
			return lines;
		}
		return bb;
	}
}

function App() {
	let activeSquares = BitBoard.hexagon();
  	return (
    <div id="Board">
		{Board()}
		<h1>Hello {Date.now()}</h1>
		{/* {activeSquares.print()} */}
  	</div>
  );
}

export default App;

