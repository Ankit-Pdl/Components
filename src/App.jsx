import { useSelector } from "react-redux";
import Navbar from "./Components/Navbar/Navbar";
import { handleTheme } from "./Store/counterSlice";

const App = () => {
  const theme = useSelector((state) => state.theme.theme);
  return (
    <div className={`container ${theme}`}>
      <Navbar />
    </div>
  );
};

export default App;
