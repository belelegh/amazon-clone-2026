import React, { useContext, useState } from "react";
import classes from "./Signup.module.css";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../Utility/firebase";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { ClipLoader } from "react-spinners";
import { DataContext } from "../../components/DataProvider/DataProvider";
import { Type } from "../../Utility/action.type";

function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState({
    signIn: false,
    signUP: false,
  });

  const [{ user }, dispatch] = useContext(DataContext);
  const navigate = useNavigate()

  const handleSignIn = async (e) => {
    e.preventDefault();
    setError(""); // Clear previous errors
    try {
      setLoading({ ...loading, signIn: true });
      const userInfo = await signInWithEmailAndPassword(auth, email, password);
      dispatch({
        type: Type.SET_USER,
        user: userInfo.user,
      });
      setLoading({ ...loading, signIn: false });
      navigate("/")
    } catch (err) {
      setError(err.message);
      setLoading({ ...loading, signIn: false });
    }
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    setError(""); // Clear previous errors
    try {
      setLoading({ ...loading, signUP: true });
      const userInfo = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      dispatch({
        type: Type.SET_USER,
        user: userInfo.user,
      });
      setLoading({ ...loading, signUP: false });
      navigate("/");

    } catch (err) {
      setError(err.message);
      setLoading({ ...loading, signUP: false });
    }
  };

  return (
    <section className={classes.login}>
      <div className={classes.logo_container}>
        <img
          src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="Amazon Logo"
          className={classes.logo}
        />

        <div className={classes.form_container}>
          <h1>Sign In</h1>

          {error && <p className={classes.error}>{error}</p>}

          {/* Sign In Form */}
          <form onSubmit={handleSignIn}>
            <div className={classes.input_group}>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={loading.signIn || loading.signUP}
              />
            </div>

            <div className={classes.input_group}>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                disabled={loading.signIn || loading.signUP}
              />
            </div>

            <button
              type="submit"
              className={classes.signin_button}
              disabled={loading.signIn || loading.signUP}
            >
              {loading.signIn ? (
                <ClipLoader color="#fff" size={15} />
              ) : (
                "Sign In"
              )}
            </button>
          </form>

          <p className={classes.terms}>
            By continuing, you agree to Amazon's Conditions of Use and Privacy
            Notice.
          </p>

          <div className={classes.divider}>
            <span>New to Amazon?</span>
          </div>

          {/* Create Account Button with its own form */}
          <form onSubmit={handleSignUp}>
            <button
              type="submit"
              className={classes.create_account_button}
              disabled={loading.signIn || loading.signUP}
            >
              {loading.signUP ? (
                <ClipLoader color="#000" size={15} />
              ) : (
                "Create your Amazon Account"
              )}
            </button>
          </form>

          <Link to="/" className={classes.back_home}>
            ← Back to home
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Auth;

// import React, { useContext, useState } from "react";
// import classes from "./Signup.module.css";
// import { Link } from "react-router-dom";
// import { auth } from "../../Utility/firebase";
// import {
//   signInWithEmailAndPassword,
//   createUserWithEmailAndPassword,
// } from "firebase/auth";
// import { DataContext } from "../../components/DataProvider/DataProvider";
// import { Type } from "../../Utility/action.type";

// function Auth() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const [isSignIn, setIsSignIn] = useState(true); // Track if sign in or sign up
//   const [loading, setLoadin] = useState({
//     signIn: false,
//     signUP: false
//   })
//   const [{ user }, dispatch] = useContext(DataContext);

//   const authHandler = async (e) => {
//     e.preventDefault();

//     try {
//       let userInfo;

//       if (isSignIn) {
//         // Sign in
//         userInfo = await signInWithEmailAndPassword(auth, email, password);
//       } else {
//         // Sign up
//         userInfo = await createUserWithEmailAndPassword(auth, email, password);
//       }

//       console.log(userInfo);
//       dispatch({
//         type: Type.SET_USER,
//         user: userInfo.user,
//       });
//     } catch (err) {
//       setError(err.message);
//     }
//   };

//   const toggleAuthMode = () => {
//     setIsSignIn(!isSignIn);
//     setError(""); // Clear error when switching modes
//   };

//   return (
//     <section className={classes.login}>
//       {/* Fixed: Removed invalid <link> tag, replaced with <div> */}
//       <div className={classes.logo_container}>
//         <img
//           src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
//           alt="Amazon Logo"
//           className={classes.logo}
//         />
//         <h1>{isSignIn ? "Sign In" : "Create Account"}</h1>

//         {error && <p className={classes.error}>{error}</p>}

//         <form onSubmit={authHandler}>
//           <div>
//             <label htmlFor="email">Email</label>
//             <input
//               type="email"
//               id="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />
//           </div>
//           <div>
//             <label htmlFor="password">Password</label>
//             <input
//               type="password"
//               id="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//           </div>
//           <button type="submit" className={classes.login_signinbutton}>
//             {isSignIn ? "Sign In" : "Create Account"}
//           </button>
//         </form>

//         <p className={classes.terms}>
//           By continuing, you agree to Amazon's Conditions of Use and Privacy
//           Notice.
//         </p>

//         <button
//           type="button"
//           onClick={toggleAuthMode}
//           className={classes.toggle_button}
//         >
//           {isSignIn
//             ? "Create your Amazon Account"
//             : "Already have an account? Sign In"}
//         </button>
//         {error && (<small style={{paddingTop: "5px, color: "red"}}>{error}</small>
//         )}
//         {/* Optional: Add back to home link */}
//         <Link to="/" className={classes.back_home}>
//           ← Back to home
//         </Link>
//       </div>
//     </section>
//   );
// }

// import React, { useContext, useState } from "react";
// import classes from "./Signup.module.css";
// import { Link } from "react-router-dom";
// import { auth } from "../../Utility/firebase";
// import {
//   signInWithEmailAndPassword,
//   createUserWithEmailAndPassword,
// } from "firebase/auth";
// import { DataContext } from "../../components/DataProvider/DataProvider";
// import { Type } from "../../Utility/action.type";
// function Auth() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState({
//   signIn: false,
// signUP: false
//})
//   const [{ user }, dispatch] = useContext(DataContext);

//   const authHandler = async (e) => {
//     e.preventDefault();
//     console.log(e.target.name);
//     if (e.target.name == "signin") {
//     setLoading({...loading, signIn:false})
//       signInWithEmailAndPassword(auth, email, password)
//         .then((userInfo) => {
//           console.log(userInfo);
//           dispatch({
//             type: Type.SET_USER,
//             user: userInfo.user,
//           });
//         })
//         .catch((err) => {
//           setError(err.message);
//         });
//     } else {
//      setLoading({...loading, signUP:true})
//       createUserWithEmailAndPassword(auth, email, password)
//         .then((userInfo) => {
//           console.log(userInfo);
//           dispatch({
//             type: Type.SET_USER,
//             user: userInfo.user,
//           });
//         })
//         .catch((err) => {
//           setError(err.message);
//         });
//
//     }

//   };
//   return (
//     <section className={classes.login}>
//       <link>
//         src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
//         <img src="" alt="" />
//       </link>
//       <div className={classes.log - container}>
//         <h1>Sign In</h1>
//         <form action="">
//           <div>
//             <label htmlFor="email"> Email</label>
//             <input type="email" id="email" />
//           </div>
//           <div>
//             <label htmlFor="password">Password</label>
//             <input type="password" id="password" />
//           </div>
//           <button className={classes.login_signinbutton}>Sign In</button>
//         </form>
//         <p>
//           By sign in you agree to the AMAZON FAKE CLONE Condition of use and
//           sale. Please see our Privacy Notice, our Cookie Notice and our
//           Interest-Based Ads Notice.
//         </p>
//         <button className={classes.login_registerbutten}>
//           Create your Amazon Account
//         </button>
//       </div>
//     </section>
//   );
// }

// export default Auth;
