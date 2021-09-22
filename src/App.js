import "./app.css";
import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Topbar />
      <div className="container">
        <Sidebar />

        <Home />
      </div>
    </div>
  );
}

export default App;