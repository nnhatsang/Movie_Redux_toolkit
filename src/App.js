import { useDispatch } from "react-redux";
import BookTicket from "./components/BookTicket";
import Header from "./layout/Header";

function App() {

  return (
    <>
      <Header />
      <div className="">
        <BookTicket />
      </div>
    </>
  );
}

export default App;
