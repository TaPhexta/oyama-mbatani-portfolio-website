import { NavLink } from "react-router-dom";

import Button from "../../components/Button/Button";

function NotFound() {
  return (
    <main id="not-found-page" className="not-found-page">
      <h1>404</h1>

      <p>The page you are looking for does not exist.</p>

      <NavLink to="/">
        <Button>Return Home</Button>
      </NavLink>
    </main>
  );
}

export default NotFound;
