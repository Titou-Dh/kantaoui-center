import Link from "next/link"

export default function Component() {
    return (
        <footer className="bg-muted py-6 md:px-40 px-16 text-sm bg-primaryBg text-primary">
            <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row">
                <p className="text-muted-foreground">&copy; 2024 Kantaoui Center Inc. All rights reserved.</p>
                <div className="flex flex-col">
                    <p className="font-medium">Contact Us</p>
                    <p>Phone: +216 73346800/801</p>
                    <p>Fax: +216 73346900/901</p>
                    <p>Email: reservation@hotel-elkantaouicenter.com</p>
                    <p>Address: B.P 355 - BD14 Janvier 2011-4089 Port El Kantaoui - Sousse - Tunisie  </p>
                </div>
                <div className="flex flex-col items-center gap-4 md:flex-row">
                    <nav className="flex items-center gap-4">
                        <Link href="#" className="hover:underline" prefetch={false}>
                            Home
                        </Link>
                        <Link href="#" className="hover:underline" prefetch={false}>
                            About
                        </Link>
                        <Link href="#" className="hover:underline" prefetch={false}>
                            Contact
                        </Link>
                        <Link href="#" className="hover:underline" prefetch={false}>
                            Contact
                        </Link>
                        <Link href="#" className="hover:underline" prefetch={false}>
                            Contact
                        </Link>
                    </nav>

                </div>
            </div>
        </footer>
    )
}