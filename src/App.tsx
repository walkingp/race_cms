import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Index } from "./pages/index";

function App() {
  return (
    <Suspense fallback={<span>loading</span>}>
      <Router>
        <Routes>
          <Route key="/" path="/" element={<Index />}></Route>
        </Routes>
      </Router>
    </Suspense>
  );
}

export default App;
