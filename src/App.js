import "./App.css";

//Lessons
// import Lesson02 from "./lessons/Lesson02/Lesson02";

//Homeworks
import Homework02 from "./homeworks/Homework02/Homework02";

//Consultations
import Consultation01 from "./consultations/Consultation01/Consultation01";
function App() {
  return (
    <div className="App">
      <div className="app-lesson02">
        {/* <Lesson02 /> */}
      </div>
      <div className="app-homework02">
        <Homework02 />
      </div>
      <div className="app-homework02">
        <Consultation01 />
      </div>
    </div>
  );
}

export default App;
