import { useEffect } from "react";
import Routing from "./Routings"


function App() {
  useEffect(() => {
    // Log any weird navigation attempts
    // console.log("App mounted");
  }, []);
  return (
    <>
      <Routing />
    </>
  );
}

export default App;








