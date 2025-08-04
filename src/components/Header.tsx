import Navbar from "./Navbar";

const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
];

export default function Header() {
    return (
        <header className="flex flex-col items-center">
            <h1 className="text-4xl font-extrabold p-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 drop-shadow-lg">
                The Lab<span className="text-base font-normal text-gray-400 ml-2">(Demo)</span>
            </h1>
            <Navbar links={links} />
        </header>
    );
}
