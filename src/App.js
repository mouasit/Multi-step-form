import "./App.css";
import StepsBar from "./Components/StepsBar";
import Form from "./Components/Form"

function App() {
  return (
    <main className="lg:flex lg:bg-White lg:p-4 lg:rounded-xl lg:shadow-md ">
      <StepsBar />
      <Form />
    </main>
  );
}

export default App;
