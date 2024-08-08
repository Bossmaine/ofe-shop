import Header from "./components/Header";
import { Container } from "react-bootstrap";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";

function App() {
  return <div className="d-flex flex-column min-vh-100">
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
