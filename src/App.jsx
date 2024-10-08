import "./App.css";
import Navbar from "../src/components/Navbar/Navbar";
import Sidebar from "../src/components/Sidebar/Sidebar";
import FrontSection from "./components/FrontSection";
import Chat from "./components/Chat/Chat";
function App() {

  return (
    <div className="App flex flex-col">
      <div className="flex">
        <Sidebar/>
        <Navbar />
      </div>
      <Chat/>
    </div>
  );
}

export default App;
