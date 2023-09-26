import { Route, Routes, Navigate, BrowserRouter } from "react-router-dom";
import Container from "./components/Container/Container";
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Container>
        <Routes>
         
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        </Container>
    </BrowserRouter>
  );
}

export default App;
