import { Routes, Route } from "react-router-dom";
import Base from "./Base";
import Home from "./components/Content/Home";
import ContactForm from "./components/Content/ContactForm";
import ScrollToTop from "./components/CustomUi/ScrollToTop";

export default function App() {
  return (
    <div className="min-h-screen w-full bg-blueprint">
      <ScrollToTop/>
      <Routes>
        <Route path="/" element={<Base/>}>
          <Route index element={<Home/>}/>
          <Route path="contact" element={<ContactForm/>}/>
        </Route>
      </Routes>
    </div>
  );
}
