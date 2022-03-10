import CreateMessage from "./components/CreateMessage";
import ReadMessage from "./components/ReadMessage"
import NotFound from "./components/NotFound";
import  { Container }  from "@material-ui/core";
import {BrowserRouter, Routes, Route  } from "react-router-dom"

function App() {
  return (
    <Container maxWidth="sm">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<CreateMessage />} />
          <Route exact path="/read/:id" element={<ReadMessage />} />
          <Route exact path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </Container>
   
  );
}

export default App;
