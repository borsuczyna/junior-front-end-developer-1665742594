import './Board.css';

function Board({ children }) {
    return (
        <div id="board">
            {children}
        </div>
    );
}

export default Board;