import {useState} from "react";
import toggle from "../src/assets/sidebar-nav/toggle.svg"

function App() {

    const [isOpen, setIsOpen] = useState(false);

    const menuClass = isOpen ? "w-64" : "w-20";
    const iconToggle = !isOpen ? "rotate-180" : "";

    return (<div className="App flex h-screen bg-brand-white bg-blue-50">
            <nav
                className={`${menuClass} bg-blue-200 absolute z-30 inset-y-0 left-0 rounded-r-xl shadow hover:shadow-xl transition-all duration-300 ease-in-out`}>
                <button className={"absolute right-[-15.5px] top-[69px] shadow-lg"} onClick={() => setIsOpen(prevState => !prevState)}>
                    <img src={toggle} alt="button menu toggle" className={`transition-all duration-300 ease-in-out ${iconToggle}`}/>
                </button>
                <div className={``}>
                    <img src="" alt=""/>
                </div>
            </nav>
            <main className={`container`}>
                <h1 className={`text-9xl mx-auto`}>hello word</h1>
            </main>

        </div>
    );
}

export default App;
