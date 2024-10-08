import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import HeaderBar from "./components/blocks/HeaderBar/header-bar";
import NavBar from "./components/blocks/NavBar/NavBar";
import NotFound from "./components/blocks/NotFound/NotFound";
import Heroes from "./components/Features/Heroes/Heroes";

const queryClient = new QueryClient();

function App() {
  return (
    <div className="pt-5 mt-5">
      <BrowserRouter>
        <div className="section columns">
          <NavBar />
          <main className="column">
            <QueryClientProvider client={queryClient}>
              <Routes>
                <Route
                  path="/tourofheroes"
                  element={<Navigate replace to="/tourofheroes/heroes" />}
                />
                <Route path="/tourofheroes/heroes/*" element={<Heroes />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </QueryClientProvider>
          </main>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
