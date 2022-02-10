import logo from './logo.svg';
import './App.css';
import * as Pieces from './Pieces'
import { act } from 'react-dom/cjs/react-dom-test-utils.production.min';
import Board from './components/Board'
import React from 'react';

function Square(props) {
	return (
		<div className={props.color + " square"} onClick={props.onClick}></div>
	);
}

function Row(props) {
	let rowType = props.row % 2;
	let elements = [];
	for (let column=0; column<props.active.size; column++) {
		let color="removed";
		if (props.active.isSet(props.row, column)) {
			color = column % 2 !== rowType ? "light" : "dark";
		}

		elements[column] = <Square color={color} onClick={() => props.onClick(props.row, column)}/>;
	}
	elements.push(<br/>);
	return elements;
}

function DynamicBoard(props) {
	let rows = [];
	for (let i=0; i<props.active.size; i++) {
		rows.push(<Row row={i} active={props.active}
			onClick={props.onClick}/>);
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

	isSet(row, column) {
		return this.state[row][column];
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
		return bb;
	}
}

function App() {
	const [board, setBoard] = React.useState(BitBoard.hexagon());
	const [time, setTime] = React.useState(Date.now());
	const update = (i,j) => {
		console.log("update", i, j);
		board.clear(i,j);
		console.log(board.state);
		setBoard(board); // Doesn't update UI because board refers to same object
		setTime(Date.now()); // Won't update without this line
	}
  	return (
		<React.Fragment>
			<Board />
		</React.Fragment>
	// <div id="Board">
	// 	<DynamicBoard active={board} onClick={update}/>
	// 	<h1>Hello {Date.now()}</h1>
  	// </div>
  );
}

export default App;

