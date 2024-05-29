
 const Tital=()=>{
    return(<img
    src="https://image.similarpng.com/very-thumbnail/2021/09/Good-food-logo-design-on-transparent-background-PNG.png"
    alt="logo"
    className="logo"
    />)}

 const Header = () => {
    return (
      <>
      <div className="header">
        <div className="logo-container">
      <Tital/>
        </div>
        <div className="nav-links">
          <ul className="links">
            <li>Home</li>
            <li>About US</li>
            <li>Contact US</li>
            <li>Cart</li>
          </ul>
        </div>
      </div>
      </>
    );
  };
  export default Header;
