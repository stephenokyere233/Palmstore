// import { useState } from 'react'
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./Home";
import Women from "./Women";
import Product from "./Product";
import Men from "./Men";
import Signup from "./Signup";
import Dashboard from "./Dashboard";
import Login from "./Login";
import { useAuthState } from "react-firebase-hooks/auth";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import { auth } from "./Firebase";
import Item from "./Item";
import { ApiContent, ContextProvider } from "./ApiContext";
import { useContext, useState } from "react";

function App() {
  // const [quer, setQuery] = useContext(ApiContent);
  const [user, loading] = useAuthState(auth);
  return (
    <ContextProvider query={''}>
      <Router>
        {/* {console.log(quer)} */}
        <div className="container">
          <Header />
          <div className="content">
            <Routes>
              <Route exact path="/" element={<Home />} />
              {/* {quer === `category/men's clothing` ? (
                <Route exact path="/men" element={<Men query={''} />} />
              ) : quer === `category/women's clothing` ? (
                <Route
                  exact
                  path="/women"
                  element={<Women query={""} />}
                />
              ) : (
                <Route
                  exact
                  path="/product"
                  element={<Product query={''} />}
                />
              )} */}
              {/* {<Route exact path="/women" element={<Women />} /> ? (
                setQuery(`category/women's clothing`)
              ) : <Route exact path="/men" element={<Men />} /> ? (
                setQuery(`category/men's clothing`)
              ) : (
                setQuery("")
              )} */}
              <Route
                exact
                path="/women"
                element={<Women query={""} />}
              />
              <Route exact path="/product" element={<Product query={""} />} />
              <Route exact path="/men" element={<Men query={``} />} />
              <Route exact path="/account" element={<Login />} />
              <Route exact path="/signup" element={<Signup />} />
              {user ? (
                <Route
                  exact
                  path="account/login/dashboard"
                  element={<Dashboard />}
                />
              ) : (
                <Route exact path="account/login" element={<Login />} />
              )}
              <Route exact path={`/men/id`} element={<Item />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </ContextProvider>
  );
}

export default App;
