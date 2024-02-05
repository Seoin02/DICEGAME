import './Button.css';
import './style.css';

function Button({ children, onClick, color = 'blue', className = '' }) {
  const classNames = `Button ${color} ${className}`; //클래스 2개는 사이에 공백을 둬야한다.
  return (
    <button className={classNames} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;

// const baseButtonStyle = {
//   //CSS 속성 명은 카멜 케이스로 작성해야 한다.
//   padding: '14px 27px',
//   outline: 'none',
//   cursor: 'pointer',
//   borderRadius: '30px',
//   fontSize: '17px',
// };

// const blueButtonStyle = {
//   ...baseButtonStyle,
//   backgroundColor: 'rgba(0,89,255,0.2',
//   border: 'solid 1px #7090ff',
//   color: '#7090ff',
// };

// const redButtonStyle = {
//   ...baseButtonStyle,
//   backgroundColor: 'rgba(255,89,255,0.2',
//   border: 'solid 1px #ff4664',
//   color: '#ff4664',
// };
