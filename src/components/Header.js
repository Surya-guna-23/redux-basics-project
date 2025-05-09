import classes from "./Header.module.css";
import { authActions } from "../store/index";
import { useDispatch } from "react-redux";
import { UseSelector } from "react-redux";
import { useSelector } from "react-redux";
const Header = () => {
  const dispatch = useDispatch();
  const isauth = useSelector((state) => state.auth.isauthenticated);
  const logouthandler = () => {
    dispatch(authActions.logout());
  };
  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      {isauth && (
        <nav>
          <ul>
            <li>
              <a href="/">My Products</a>
            </li>
            <li>
              <a href="/">My Sales</a>
            </li>
            <li>
              <button onClick={logouthandler}>Logout</button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
