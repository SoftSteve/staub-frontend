import { Routes, Route, Router } from "react-router-dom";
import Base from "./Base";
import Home from "./components/Content/Home";
import MessageForm from "./components/Content/MessageForm";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Base/>}>
          <Route index element={<Home/>}/>
          <Route path="message" element={<MessageForm/>}/>
        </Route>
      </Routes>
    </div>
  );
}
