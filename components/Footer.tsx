import Link from "next/link";

export default function Component() {
    return (
        <footer className="bg-gray-50 dark:bg-primaryBg text-gray-700 dark:text-gray-200 py-8 md:px-40 px-16">
            <div className="container mx-auto flex flex-col items-center justify-between gap-8 px-4 md:flex-row">
                <p className="text-center md:text-left text-sm md:text-base">&copy; 2024 Kantaoui Center Inc. All rights reserved.</p>
                <div className="flex flex-col items-center md:items-start text-center md:text-left gap-2">
                    <p className="font-semibold text-lg">Contact Us</p>
                    <p>Phone: <a href="tel:+21673346800" className="hover:underline">+216 73346800/801</a></p>
                    <p>Fax: <a href="tel:+21673346900" className="hover:underline">+216 73346900/901</a></p>
                    <p>Email: <a href="mailto:reservation@hotel-elkantaouicenter.com" className="hover:underline">reservation@hotel-elkantaouicenter.com</a></p>
                    <p>Address: B.P 355 - BD14 Janvier 2011-4089 Port El Kantaoui - Sousse - Tunisie</p>
                </div>
                <nav className="flex flex-col items-center gap-4 md:flex-row md:items-end">
                    <Link href="/" className="hover:underline" prefetch={false}>
                        Home
                    </Link>
                    <Link href="/facilities" className="hover:underline" prefetch={false}>
                        Facilities
                    </Link>
                    <Link href="/#about" className="hover:underline" prefetch={false}>
                        About Us
                    </Link>
                    <Link href="/contact" className="hover:underline" prefetch={false}>
                        Contact
                    </Link>
                </nav>
            </div>
        </footer>
    );
}
