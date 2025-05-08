import { useEffect } from "react";
import { RoutesIndex } from "./routes/route";
import { useAuthStore } from "./store/authstore";

function App() {
  useEffect(() => {
    useAuthStore.getState().initializeAuth();
  }, []);
  
  return (
    <>
      <RoutesIndex />
    </>
  );
}

export default App;
