import "./App.css";
import Navbar from "./component/Navbar";
// import TextForm from "./component/TextForm";
import About from "./component/About";
function App() {
  return (
    <>
      <Navbar title="Mansheen" heading="About"/>
      <div className="container">
      {/* <TextForm heading="ENTER THE TEXT"/>  */}
      <About />
      </div>
    </>
  );
}

export default App;
