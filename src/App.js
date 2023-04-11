import {useState} from "react";
import toggle from "../src/assets/sidebar-nav/toggle.svg"

function App() {

    const [isOpen, setIsOpen] = useState(true);

    function toggleSidebar() {
        setIsOpen(!isOpen);
    }

    return (<div className="App flex h-screen bg-brand-white bg-blue-50">
            <nav
                className={"bg-brand-white hover:bg-brand-white absolute z-30 inset-y-0 left-0 w-64 rounded-r-xl shadow hover:shadow-xl transition duration-300 transform translate-x-full md:translate-x-0 md:static md:inset-0"}>
                <button className={"absolute right-[-15.5px] top-[69px] shadow-lg"}>
                    <img src={toggle} alt="button menu toggle"/>
                </button>
            </nav>
        </div>
    );
}

export default App;
