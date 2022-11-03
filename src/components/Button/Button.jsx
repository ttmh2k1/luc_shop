import './button.scss';

function Button({
  text = 'Click me',
  height = '4rem',
  width = '14rem',
  background = '#000',
  color = '#fff',
  border = true,
  borderColor = '#fff',
  fontSize = '1.2rem',
  handleClick = () => {},
}) {
  return (
    <button
      onClick={handleClick}
      className="button"
      style={{
        height: height,
        width: width,
        backgroundColor: background,
        color: color,
        border: border ? `solid 2px ${borderColor}` : 'none',
        borderRadius: 20,
        marginRight: 20,
        fontSize: fontSize,
      }}
    >
      {text}
    </button>
  );
}

export default Button;
