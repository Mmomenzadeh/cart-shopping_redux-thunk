import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Header = () => {
  const orderState = useSelector(state => state.cartShopping.cart)
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <NavLink to="/" className={(navData)=> navData.isActive ? "nav-link active" : "nav-link"}>Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/Products" className={(navData)=>navData.isActive ? "nav-link active" : "nav-link"}>Products</NavLink>
          </li>
        </ul>
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <NavLink
              className="nav-link p-1 me-3"
            
              to="/cart"
            >
              <span className="badge rounded-pill bg-primary me-1">{orderState.length}</span>
              <i className="bi bi-basket-fill fs-4"></i>
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
