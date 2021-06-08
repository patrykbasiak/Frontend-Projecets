import open from "../images/icon-hamburger.svg"
import close from "../images/icon-close.svg"
const Menu = ({isOpen, setIsOpen}) => {
    return (
      <div>
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
          {isOpen ? <img src={close} alt="" /> : <img src={open} alt="" />}
        </button>
      </div>
    );
}

export default Menu
