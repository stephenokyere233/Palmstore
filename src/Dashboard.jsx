import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import { auth } from "./Firebase";

const Dashboard = () => {
  const [user, loading] = useAuthState(auth);

  if (loading) return <h1>loading...</h1>
  return (
    <div className="dashboard">
      <div className="profile">
        <h3>Dashboard</h3>
        <img src={user.photoURL} alt={user.displayName} />
      </div>
      <div className="welcome">
        <h3>Welcome {user.displayName},</h3>
      </div>
      <div className="cart-items">
        <h4>Your cart is currently empty.</h4>
      </div>
      <div className="btns">
        <button className="backtoShop" onClick={() => auth.signOut()}>
          <Link
            style={{
              marginLeft: "10px",
              fontWeight: "bold",
              textDecoration: "none",
              color:'white'
            }}
            to={"/product"}
          >
            {" "}
            Return To Shop
          </Link>
        </button>

        <button className="signOut" onClick={() => auth.signOut()}>
          Sign Out
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
