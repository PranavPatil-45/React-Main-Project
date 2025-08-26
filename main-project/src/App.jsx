import Navbar from "./components/Navbar"
import 'bootstrap/dist/css/bootstrap.min.css';
import AllRoutes from "./routes/AllRoutes";
import { ToastContainer } from "react-toastify";


function App() {

  return (
    <>
     <Navbar />
     <AllRoutes />
     <ToastContainer />
    </>
  )
}

export default App