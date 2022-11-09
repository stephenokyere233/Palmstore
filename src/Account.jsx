// import { Link } from "react-router-dom";
// import { useState } from "react";
// import { FcGoogle } from "react-icons/fc";
// import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
// import { auth } from "./Firebase.js";
// import { useAuthState } from "react-firebase-hooks/auth";

// const Account = () => {
//   const [loginDetails, setLoginDetails] = useState({
//     email: "",
//     password: "",
//     isSaved: false,
//   });
//   const [validateText, setValidateText] = useState("");
//   const [isFilled, setFilled] = useState(false);
//   const [isLogged, setLogStat] = useState(false);
//   const setForm = (event) => {
//     const { name, value, type, checked } = event.target;
//     setLoginDetails((prevDetails) => ({
//       ...prevDetails,
//       [name]: type === "checkbox" ? checked : value,
//     }));
//   };
//   const validate = (event) => {
//     event.preventDefault();
//     !loginDetails.email || !loginDetails.password
//       ? setValidateText("Please fill both fields")
//       : setValidateText(""),
//       console.log(loginDetails),
//       //   console.log(auth),
//       setFilled(true);
//   };
//   //signin with google
//   const googleProvider = new GoogleAuthProvider();
//   const GoogleLogin = async () => {
//     try {
//       const result = await signInWithPopup(auth, googleProvider);
//       console.log(result.user);
//     } catch (error) {
//       console.log("error");
//     }
//   };
//   const [user, loading] = useAuthState(auth);
//   console.log(loading)

//   return (
//     <section className="logSec">
//       <div className="login">
//         <div className="profile">
//         <h3>{user||loading?'Dashboard':'Login'}</h3>
//         {user&&(<img src={user.photoURL} alt={user.displayName} />)}
//         </div>
//         <form action="" onSubmit={validate}>
//           <label htmlFor="email">
//             Email Address{" "}
//             <p
//               style={{
//                 color: `${isFilled ? "green" : "red"}`,
//                 marginInline: "5px",
//               }}
//             >
//               *
//             </p>{" "}
//           </label>
//           <input
//             className="text"
//             type="email"
//             name="email"
//             placeholder="devsteve@gmail.com"
//             value={loginDetails.email}
//             onChange={setForm}
//           />
//           <br />
//           <label htmlFor="password">
//             Password
//             <p
//               style={{
//                 color: `${isFilled ? "green" : "red"}`,
//                 marginInline: "5px",
//               }}
//             >
//               *
//             </p>
//           </label>
//           <input
//             className="text"
//             type="password"
//             name="password"
//             placeholder="********"
//             value={loginDetails.password}
//             onChange={setForm}
//           />
//           <br />
//           <div className="checkbox">
//             <input type="checkbox" name="isSaved" id="" onClick={setForm} />
//             <label htmlFor="isSaved">Remember Password</label>
//           </div>
//           <br />
//           <p className="invalid">{validateText}</p>
//           <input type="submit" value="login" name="login" /> <br />
//           <span>
//             Don't have an account?
//             <Link
//               style={{
//                 marginLeft: "10px",
//                 fontWeight: "bold",
//                 textDecoration: "none",
//               }}
//               to={"/signup"}
//             >{`SignUp`}</Link>
//           </span>
//           <button className="google-sign" type="button" onClick={GoogleLogin}>
//             Sign in with google{" "}
//             <FcGoogle style={{ marginLeft: "5px", color: "blueviolet" }} />
//           </button>
//         </form>
//       </div>
//     </section>
//   );
// };

// export default Account;
