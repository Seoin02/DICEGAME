import { Fragment } from 'react';
import ReactDOM from 'react-dom/client';

const winRule = {
  rock: 'scissor',
  scissor: 'paper',
  paper: 'rock',
};

const getResult = function (left, right) {
  if (winRule[left] === right) return '승리';
  if (left === winRule[right]) return '패배';
  return '무승부';
};
const handleClick = function () {
  console.log('가위바위보!');
};

const me = 'rock';
const other = 'scissor';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <h1 id="title">가위바위보</h1>
    <h2>{getResult(me, other)}</h2>
    <button onClick={handleClick} className="hand">
      가위
    </button>
    <button onClick={handleClick} className="hand">
      바위
    </button>
    <button onClick={handleClick} className="hand">
      보
    </button>
  </>
);
