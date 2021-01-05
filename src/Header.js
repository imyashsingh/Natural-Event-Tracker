import leaf from "./icon/leaf.png";

const Header = () => {
  return (
    <div className="header">
      <h2>
        <img src={leaf} alt="logo" />
        Natural Events
      </h2>
      <strong>by Yash singh</strong>
    </div>
  );
};

export default Header;
