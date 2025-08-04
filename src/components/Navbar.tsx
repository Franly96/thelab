"use client";
import { usePathname } from "next/navigation";

type Props = {
    links: { href: string; label: string }[];
};

export default function Navbar({ links }: Props) {
    const isActive = (path: string) => {

        const pathname = usePathname();
        return pathname === path ? "text-blue-500" : "text-gray-400";
    };
    return (
        <nav className="p-4">
            <ul className="flex space-x-4">
                {links.map((link) => (
                    <li key={link.href}>
                        <a href={link.href} className={`hover:underline ${isActive(link.href)}`}>
                            {link.label}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
}