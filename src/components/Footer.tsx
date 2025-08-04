export default function Footer() {
    return (
        <footer className="p-4 text-center fixed bottom-0 left-0 w-full">
            <p>&copy; {new Date().getFullYear()} The Lab. All rights reserved.</p>
        </footer>
    );
}