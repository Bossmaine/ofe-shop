import Header from "./components/Header";
import { Container } from "react-bootstrap";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/ReactToastify.css'

function App() {
  return <div className="d-flex flex-column min-vh-100">
    <ToastContainer />
    <Header />
    <main className="flex-grow-1 py-4">
      <Container>
        <Outlet />
      </Container>
    </main>
    <Footer />
  </div>;
}

export default App;
