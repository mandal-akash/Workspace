import "./App.css";
import Navbar from "../src/components/Navbar/Navbar";
import Sidebar from "../src/components/Sidebar/Sidebar";
import FrontSection from "./components/FrontSection";

function App() {

  return (
    <div className="App">
      <FrontSection/>
      {/* <div className="flex w-screen">
        <Sidebar />
        <Navbar />
      </div> */}
    </div>
  );
}

export default App;
