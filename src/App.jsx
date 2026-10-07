import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

function Placeholder({ title }) {
  return (
    <div className="rounded-3xl border border-[#e7e9ec] bg-white p-8">
      <h1 className="text-2xl font-semibold">{title}</h1>

      <p className="mt-2 text-sm text-[#858a92]">
        This section is coming next.
      </p>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* =========================
            PUBLIC AUTH ROUTES
        ========================= */}
          <Route
            path="/"
            element={<Home />}
          />
      </Routes>
    </BrowserRouter>
  );
}