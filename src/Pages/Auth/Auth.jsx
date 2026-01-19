import React, { useContext, useState } from "react";
import classes from "./Signup.module.css";
import { Link } from "react-router-dom";
import { auth } from "../../utility/firebase";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { ClipLoader } from "react-spinners";
import { DataContext } from "../../Components/DataProvider/DataProvider";
import { Type } from "../../utility/action.Type";
function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState({
    signIn: false,
    signUP: false
  });
const { user, dispatch } = useContext(DataContext);

  //  const [{ user}, dispatch] = useContext(DataContext)

  const handleSignIn = async (e) => {
    e?.preventDefault();
    setError("");
    
    if (!email || !password) {
      setError("Please enter both email and password");
      return;
    }
    
    try {
      setLoading({...loading, signIn: true});
      const userInfo = await signInWithEmailAndPassword(auth, email, password);
      console.log(userInfo);
      dispatch({
        type: Type.SET_USER,
        user: userInfo.user,
      });
      setLoading({...loading, signIn: false});
    } catch (err) {
      setError(err.message);
      setLoading({ ...loading, signIn: false });
    }
  };

  const handleSignUp = async (e) => {
    e?.preventDefault();
    setError("");
    
    if (!email || !password) {
      setError("Please enter both email and password");
      return;
    }
    
    try {
      setLoading({...loading, signUP: true});
      const userInfo = await createUserWithEmailAndPassword(auth, email, password);
      console.log(userInfo);
      dispatch({
        type: Type.SET_USER,
        user: userInfo.user,
      });
      setLoading({...loading, signUP: false});
    } catch (err) {
      setError(err.message);
      setLoading({ ...loading, signUP: false });
    }
  };

  const authHandler = async (e) => {
    e.preventDefault();
    setError("");
    
    if (!email || !password) {
      setError("Please enter both email and password");
      return;
    }
    
    const buttonName = e.nativeEvent.submitter?.name || e.target.name;
    
    try {
      if (buttonName === "signin") {
        setLoading({...loading, signIn: true});
        const userInfo = await signInWithEmailAndPassword(auth, email, password);
        dispatch({
          type: Type.SET_USER,
          user: userInfo.user,
        });
        setLoading({...loading, signIn: false});
      } else {
        setLoading({...loading, signUP: true});
        const userInfo = await createUserWithEmailAndPassword(auth, email, password);
        dispatch({
          type: Type.SET_USER,
          user: userInfo.user,
        });
        setLoading({...loading, signUP: false});
      }
    } catch (err) {
      setError(err.message);
      if (buttonName === "signin") {
        setLoading({ ...loading, signIn: false });
      } else {
        setLoading({ ...loading, signUP: false });
      }
    }
  };

  return (
    <section className={classes.login}>
      <div className={classes.logo_container}>
        <img 
          src="https://pngimg.com/uploads/amazon/amazon_PNG6.png" 
          alt="Amazon Logo" 
          className={classes.logo}
        />
        
        <div className={classes.form_container}>
          <h1>Sign In</h1>
          
          {error && <p className={classes.error}>{error}</p>}
          
          <form onSubmit={authHandler}>
            <div className={classes.input_group}>
              <label htmlFor="email">Email</label>
              <input 
                type="email" 
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={loading.signIn || loading.signUP}
                required
              />
            </div>
            <div className={classes.input_group}>
              <label htmlFor="password">Password</label>
              <input 
                type="password" 
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                disabled={loading.signIn || loading.signUP}
                required
              />
            </div>
            
            <button 
              type="submit"
              name="signin"
              className={classes.login_signinbutton}
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
            By signing in you agree to the AMAZON FAKE CLONE Conditions of use and
            sale. Please see our Privacy Notice, our Cookie Notice and our
            Interest-Based Ads Notice.
          </p>
          
          <button 
            onClick={handleSignUp}
            className={classes.login_registerbutton}
            disabled={loading.signIn || loading.signUP}
          >
            {loading.signUP ? (
              <ClipLoader color="#000" size={15} />
            ) : (
              "Create your Amazon Account"
            )}
          </button>
          
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
// import { ClipLoader } from "react-spinners";
// import { DataContext } from "../../components/DataProvider/DataProvider";
// import { Type } from "../../Utility/action.type";

// function Auth() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState({
//     signIn: false,
//     signUP: false
//   });

//   const [{ user }, dispatch] = useContext(DataContext);

//   const handleSignIn = async (e) => {
//     e?.preventDefault(); // Optional chaining in case it's called from onClick
//     setError("");
    
//     if (!email || !password) {
//       setError("Please enter both email and password");
//       return;
//     }
    
//     try {
//       setLoading({...loading, signIn: true});
//       const userInfo = await signInWithEmailAndPassword(auth, email, password);
//       console.log(userInfo);
//       dispatch({
//         type: Type.SET_USER,
//         user: userInfo.user,
//       });
//       setLoading({...loading, signIn: false});
//     } catch (err) {
//       setError(err.message);
//       setLoading({ ...loading, signIn: false });
//     }
//   };

//   const handleSignUp = async (e) => {
//     e?.preventDefault(); // Optional chaining in case it's called from onClick
//     setError("");
    
//     if (!email || !password) {
//       setError("Please enter both email and password");
//       return;
//     }
    
//     try {
//       setLoading({...loading, signUP: true});
//       const userInfo = await createUserWithEmailAndPassword(auth, email, password);
//       console.log(userInfo);
//       dispatch({
//         type: Type.SET_USER,
//         user: userInfo.user,
//       });
//       setLoading({...loading, signUP: false});
//     } catch (err) {
//       setError(err.message);
//       setLoading({ ...loading, signUP: false });
//     }
//   };

//   // Combined handler for the form submit (if you prefer one handler)
//   const authHandler = async (e) => {
//     e.preventDefault();
//     setError("");
    
//     if (!email || !password) {
//       setError("Please enter both email and password");
//       return;
//     }
    
//     const buttonName = e.nativeEvent.submitter?.name || e.target.name;
    
//     try {
//       if (buttonName === "signin") {
//         setLoading({...loading, signIn: true});
//         const userInfo = await signInWithEmailAndPassword(auth, email, password);
//         dispatch({
//           type: Type.SET_USER,
//           user: userInfo.user,
//         });
//         setLoading({...loading, signIn: false});
//       } else {
//         setLoading({...loading, signUP: true});
//         const userInfo = await createUserWithEmailAndPassword(auth, email, password);
//         dispatch({
//           type: Type.SET_USER,
//           user: userInfo.user,
//         });
//         setLoading({...loading, signUP: false});
//       }
//     } catch (err) {
//       setError(err.message);
//       if (buttonName === "signin") {
//         setLoading({ ...loading, signIn: false });
//       } else {
//         setLoading({ ...loading, signUP: false });
//       }
//     }
//   };

//   return (
//     <section className={classes.login}>
//       <div className={classes.logo_container}>
//         <img 
//           src="https://pngimg.com/uploads/amazon/amazon_PNG6.png" 
//           alt="Amazon Logo" 
//           className={classes.logo}
//         />
        
//         <div className={classes.form_container}>
//           <h1>Sign In</h1>
          
//           {error && <p className={classes.error}>{error}</p>}
          
//           {/* Form with onSubmit handler */}
//           <form onSubmit={authHandler}>
//             <div>
//               <label htmlFor="email">Email</label>
//               <input 
//                 type="email" 
//                 id="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 disabled={loading.signIn || loading.signUP}
//                 required
//               />
//             </div>
//             <div>
//               <label htmlFor="password">Password</label>
//               <input 
//                 type="password" 
//                 id="password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 disabled={loading.signIn || loading.signUP}
//                 required
//               />
//             </div>
            
//             {/* Sign In Button with onClick */}
//             <button 
//               type="submit"
//               name="signin"
//               onClick={handleSignIn} // onClick added
//               className={classes.login_signinbutton}
//               disabled={loading.signIn || loading.signUP}
//             >
//               {loading.signIn ? (
//                 <ClipLoader color="#fff" size={15} />
//               ) : (
//                 "Sign In"
//               )}
//             </button>
//           </form>
          
//           <p>
//             By signing in you agree to the AMAZON FAKE CLONE Conditions of use and
//             sale. Please see our Privacy Notice, our Cookie Notice and our
//             Interest-Based Ads Notice.
//           </p>
          
//           {/* Create Account Button with onClick */}
//           <button 
//             onClick={handleSignUp} // onClick added
//             className={classes.login_registerbutton}
//             disabled={loading.signIn || loading.signUP}
//           >
//             {loading.signUP ? (
//               <ClipLoader color="#000" size={15} />
//             ) : (
//               "Create your Amazon Account"
//             )}
//           </button>
          
//           <Link to="/" className={classes.back_home}>
//             ← Back to home
//           </Link>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Auth;






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
//   const [loading, setLoading] = useState({
//     signIn: false,
//     signUp: false
//   });

//   const [{ user }, dispatch] = useContext(DataContext);

//   const authHandler = async (e) => {
//     e.preventDefault();
//     setError(""); // Clear previous errors
    
//     // Validate inputs
//     if (!email || !password) {
//       setError("Please enter both email and password");
//       return;
//     }

//     try {
//       let userInfo;

//       if (isSignIn) {
//         // Sign in
//         setLoading({...loading, signIn: true});
//         userInfo = await signInWithEmailAndPassword(auth, email, password);
//         setLoading({...loading, signIn: false});
//       } else {
//         // Sign up
//         setLoading({...loading, signUp: true});
//         userInfo = await createUserWithEmailAndPassword(auth, email, password);
//         setLoading({...loading, signUp: false});
//       }

//       console.log(userInfo);
//       dispatch({
//         type: Type.SET_USER,
//         user: userInfo.user,
//       });
//     } catch (err) {
//       setError(err.message);
//       setLoading({signIn: false, signUp: false}); // Reset loading states
//     }
//   };

//   const toggleAuthMode = () => {
//     setIsSignIn(!isSignIn);
//     setError(""); // Clear error when switching modes
//   };

//   return (
//     <section className={classes.login}>
//       <div className={classes.logo_container}>
//         <img
//           src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
//           alt="Amazon Logo"
//           className={classes.logo}
//         />
//         <h1>{isSignIn ? "Sign In" : "Create Account"}</h1>

//         {error && <p className={classes.error}>{error}</p>}

//         <form onSubmit={authHandler}>
//           <div className={classes.input_group}>
//             <label htmlFor="email">Email</label>
//             <input
//               type="email"
//               id="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//               disabled={loading.signIn || loading.signUp}
//             />
//           </div>
//           <div className={classes.input_group}>
//             <label htmlFor="password">Password</label>
//             <input
//               type="password"
//               id="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//               disabled={loading.signIn || loading.signUp}
//             />
//           </div>
//           <button 
//             type="submit" 
//             className={classes.login_signinbutton}
//             disabled={loading.signIn || loading.signUp}
//           >
//             {isSignIn 
//               ? (loading.signIn ? "Signing In..." : "Sign In")
//               : (loading.signUp ? "Creating Account..." : "Create Account")
//             }
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
//           disabled={loading.signIn || loading.signUp}
//         >
//           {isSignIn
//             ? "Create your Amazon Account"
//             : "Already have an account? Sign In"}
//         </button>

//         {/* Optional: Add back to home link */}
//         <Link to="/" className={classes.back_home}>
//           ← Back to home
//         </Link>
//       </div>
//     </section>
//   );
// }

// export default Auth;




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


// export default Auth;