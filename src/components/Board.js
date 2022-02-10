
function Board(props) {
    return (
    <div className="container" style={{--m: 6, --tan: 0.57735026919}}>
        <a style={{"--i": 1}}>O</a>
        <a style={{"--i": 2}}>O</a>
        <a style={{"--i": 3}}>O</a>
        <a style={{"--i": 4}}>O</a>
        <a style={{"--i": 5}}>O</a>
        <a style={{"--i": 6}}>O</a>
    </div>
    );
}

export default Board;