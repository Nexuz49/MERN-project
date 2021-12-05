import React, { Component } from "react";
import HeaderScss from "./Header.scss";

import { Link, Route, Redirect } from "react-router-dom";

// RouterGuard for hidden route after auth
const ProtectedRoute = ({ component: Comp, loggedIn, path, ...rest }) => {
  return (
    <Route
      path={path}
      {...rest}
      render={props => {
        return loggedIn ? (
          <Comp {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: {
                prevLocation: path,
                error: "Only users that are logged in can access this page!"
              }
            }}
          />
        );
      }}
    />
  );
};

const Header = () => (
  <header>
    <nav>
      <Link className="navAnchor1" to="/">
        Home
      </Link>

      <Link className="navAnchor2" to="/about">
        About
      </Link>
    </nav>

    <hr />
  </header>
);

export default Header;

// experimental/not done

// class Header extends Component {
//   state = {
//     loggedIn: false
//   };
//   handleLogin = () => {
//     const state = ({ state = {} } = this.props.location);
//     const { prevLocation } = state;

//     this.setState(
//       {
//         loggedIn: true
//       },
//       () => {
//         this.props.history.push(prevLocation || "/");
//       }
//     );
//   };
//   render() {
//     const state = ({ state = {} } = this.props.location);
//     const { error } = state;
//     return (
//       <div>
//         <div className="links">
//           <Link to="/" className="link">
//             Home
//           </Link>
//           <Link to="/helloworld" className="link">
//             About
//           </Link>
//           <button onClick={this.handleLogin}>Login</button>
//         </div>
//         <div className="tabs">
//           {error && <div>ERROR: {error}</div>}
//           <Switch>
//             <Route path="/" exact component={Home} />
//             <ProtectedRoute
//               path="/helloworld"
//               loggedIn={this.state.loggedIn}
//               component={HelloWorld}
//             />
//           </Switch>
//         </div>
//       </div>
//     );
//   }
// }
// export default Header;
