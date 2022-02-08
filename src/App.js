import logo from './logo.svg';
import './App.css';
import * as Pieces from './Pieces'

function App() {
  return (
    <div id="Board">
		<div class="dark square">{Pieces.blackRook}</div>
		<div class="light square">{Pieces.blackKnight}</div>
		<div class="dark square">{Pieces.blackBishop}</div>
		<div class="light square">{Pieces.blackQueen}</div>
		<div class="dark square">{Pieces.blackKing}</div>
		<div class="light square">{Pieces.blackBishop}</div>
		<div class="dark square">{Pieces.blackKnight}</div>
		<div class="light square">{Pieces.blackRook}</div>
    <br/>

		<div class="light square">{Pieces.blackPawn}</div>
		<div class="dark square">{Pieces.blackPawn}</div>
		<div class="light square">{Pieces.blackPawn}</div>
		<div class="dark square">{Pieces.blackPawn}</div>
		<div class="light square">{Pieces.blackPawn}</div>
		<div class="dark square">{Pieces.blackPawn}</div>
		<div class="light square">{Pieces.blackPawn}</div>
		<div class="dark square">{Pieces.blackPawn}</div>
    <br/>

		<div class="dark square"></div>
		<div class="light square"></div>
		<div class="dark square"></div>
		<div class="light square"></div>
		<div class="dark square"></div>
		<div class="light square"></div>
		<div class="dark square"></div>
		<div class="light square"></div>
    <br/>

		<div class="light square"></div>
		<div class="dark square"></div>
		<div class="light square"></div>
		<div class="dark square"></div>
		<div class="light square"></div>
		<div class="dark square"></div>
		<div class="light square"></div>
		<div class="dark square"></div>
    <br/>

		<div class="dark square"></div>
		<div class="light square"></div>
		<div class="dark square"></div>
		<div class="light square"></div>
		<div class="dark square"></div>
		<div class="light square"></div>
		<div class="dark square"></div>
		<div class="light square"></div>
    <br/>

		<div class="light square"></div>
		<div class="dark square"></div>
		<div class="light square"></div>
		<div class="dark square"></div>
		<div class="light square"></div>
		<div class="dark square"></div>
		<div class="light square"></div>
		<div class="dark square"></div>
    <br/>

		<div class="dark square">{Pieces.whitePawn}</div>
		<div class="light square">{Pieces.whitePawn}</div>
		<div class="dark square">{Pieces.whitePawn}</div>
		<div class="light square">{Pieces.whitePawn}</div>
		<div class="dark square">{Pieces.whitePawn}</div>
		<div class="light square">{Pieces.whitePawn}</div>
		<div class="dark square">{Pieces.whitePawn}</div>
		<div class="light square">{Pieces.whitePawn}</div>
    <br/>

		<div class="light square">{Pieces.whiteRook}</div>
		<div class="dark square">{Pieces.whiteKnight}</div>
		<div class="light square">{Pieces.whiteBishop}</div>
		<div class="dark square">{Pieces.whiteQueen}</div>
		<div class="light square">{Pieces.whiteKing}</div>
		<div class="dark square">{Pieces.whiteBishop}</div>
		<div class="light square">{Pieces.whiteKnight}</div>
		<div class="dark square">{Pieces.whiteRook}</div>
  </div>
  );
}

export default App;

