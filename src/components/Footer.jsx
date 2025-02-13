import { Link } from 'react-router-dom'

function Footer() {
  return (
    <>
      <div id="footer">
        <Link to="/home">HOME</Link>
        <Link to="/red">RED</Link>
        <Link to="/orange">ORANGE</Link>
        <Link to="/yellow">YELLOW</Link>
        <Link to="/green">GREEN</Link>
        <Link to="/blue">BLUE</Link>
        <Link to="/purple">PURPLE</Link>
      </div>    
    </>
  );
}

export default Footer;