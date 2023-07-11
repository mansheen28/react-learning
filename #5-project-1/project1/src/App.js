import "./App.css";
import Navbar from "./component/Navbar";
import TextForm from "./component/TextForm";
function App() {
  return (
    <>
      <Navbar title="Mansheen" heading="About"/>
      <div className="container">
      <TextForm heading="ENTER THE TEXT"/>
      </div>
    </>
  );
}

export default App;
