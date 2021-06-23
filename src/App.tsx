import "./App.css";
import Header from "./component/Header/index";
import DoctorList from "./component/DoctorList/index";
import Global from "./styles/Global";

function App() {
  return (
    <>
      <Global />
      <Header />
      <DoctorList />
    </>
  );
}

export default App;
