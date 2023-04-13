import './App.css';
import Sidebar from "./components/Sidebar";
import Review from "./components/Review";
import AvgRating from "./components/Avgrating";
import Analysis from "./components/Analysis";
import WebVisitors from "./components/Webvisitors";
export default App;


function App() {
  return (
    <div className="App">
       <div className ="container">
     <Sidebar/>
      <Review/>
      <AvgRating/>
      <Analysis/>      
      <WebVisitors/>
      </div>
    </div>
  );
  
}

