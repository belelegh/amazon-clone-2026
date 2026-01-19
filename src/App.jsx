import React, { useEffect, useContext } from "react";
import Routings from "./Routings";
import { DataContext } from "./Components/DataProvider/DataContext";
import { Type } from "./Utility/action.Type";
import { auth } from "./Utility/firebase";
import { onAuthStateChanged } from "firebase/auth";

function App() {
  const { dispatch } = useContext(DataContext);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (authUser) => {
      if (authUser) {
        dispatch({
          type: Type.SET_USER,
          user: authUser,
        });
      } else {
        dispatch({
          type: Type.SET_USER,
          user: null,
        });
      }
    });

    // cleanup listener on unmount
    return () => unsubscribe();
  }, [dispatch]);

  return <Routings />;
}

export default App;




// import { useEffect } from "react";
// import Routing from "./Router"

// function App() {
//   useEffect(() => {
//     // Log any weird navigation attempts
//     // console.log("App mounted");
//   }, []);
//   return (
//     <>
//       <Routing />
//     </>
//   );
// }

// export default App;
// import React, { useEffect, useContext } from "react";
// import Routings from "./Routings";
// import { DataContext } from "./Components/DataProvider/DataContext";
// import { Type } from "./utility/action.Type";
// import { auth } from "./utility/firebase";
// import { onAuthStateChanged } from "firebase/auth";

// function App() {
//   const { dispatch } = useContext(DataContext);

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (authUser) => {
//       if (authUser) {
//         dispatch({
//           type: Type.SET_USER,
//           user: authUser,
//         });
//       } else {
//         dispatch({
//           type: Type.SET_USER,
//           user: null,
//         });
//       }
//     });

//     // cleanup listener on unmount
//     return () => unsubscribe();
//   }, [dispatch]);

//   return <Routings />;
// }

// export default App;