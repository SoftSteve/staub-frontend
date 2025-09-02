import { Outlet } from "react-router-dom";
import NavBar from './components/navigation/NavBar.jsx';

export default function Base() {
    return(
        <div className="w-screen h-screen flex flex-col">
            <div className="relative z-20">
                <NavBar />
            </div>
            <main className="flex-1 relative z-10 bg-blueprint">
                <Outlet/>
            </main>
        </div>
    );
}