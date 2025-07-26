import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";

export function Header() {
    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <Link href="/" className="text-xl font-bold">
                            ShopNex
                        </Link>
                    </div>

                    {/* Navigation */}
                    <nav className="hidden md:ml-6 md:flex md:space-x-8">
                        <Button variant="ghost" asChild>
                            <Link href="/">Accueil</Link>
                        </Button>
                        <Button variant="ghost" asChild>
                            <Link href="/products">Produits</Link>
                        </Button>
                        <Button variant="ghost" asChild>
                            <Link href="/about">À propos</Link>
                        </Button>
                        <Button variant="ghost" asChild>
                            <Link href="/contact">Contact</Link>
                        </Button>
                    </nav>

                    {/* Actions */}
                    <div className="flex items-center space-x-4">
                        <ModeToggle />
                        <Button variant="outline" asChild>
                            <Link href="/admin">Admin</Link>
                        </Button>
                    </div>
                </div>
            </div>
        </header>
    );
}
