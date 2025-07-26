import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Header } from "@/components/header";

export default function HomePage() {
    return (
        <div className="min-h-screen bg-background">
            <Header />

            {/* Hero Section */}
            <main>
                <div className="relative overflow-hidden">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
                        <div className="text-center">
                            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
                                Bienvenue sur{" "}
                                <span className="text-primary">ShopNex</span>
                            </h1>
                            <p className="mt-6 text-lg leading-8 text-muted-foreground max-w-2xl mx-auto">
                                Votre plateforme e-commerce moderne construite avec 
                                les dernières technologies. Découvrez nos produits 
                                et profitez d'une expérience d'achat exceptionnelle.
                            </p>
                            <div className="mt-10 flex items-center justify-center gap-x-6">
                                <Button size="lg" asChild>
                                    <Link href="/products">
                                        Voir les produits
                                    </Link>
                                </Button>
                                <Button variant="outline" size="lg" asChild>
                                    <Link href="/about">
                                        En savoir plus
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Features Section */}
                <div className="py-24 bg-muted/50">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="text-center">
                            <h2 className="text-base font-semibold leading-7 text-primary">
                                Fonctionnalités
                            </h2>
                            <p className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
                                Tout ce dont vous avez besoin
                            </p>
                            <p className="mt-6 text-lg leading-8 text-muted-foreground">
                                Découvrez pourquoi ShopNex est la plateforme idéale pour votre e-commerce
                            </p>
                        </div>

                        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                            <Card>
                                <CardHeader>
                                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                                        🛍️
                                    </div>
                                    <CardTitle>Catalogue complet</CardTitle>
                                    <CardDescription>
                                        Découvrez notre large gamme de produits
                                        soigneusement sélectionnés pour vous.
                                    </CardDescription>
                                </CardHeader>
                            </Card>

                            <Card>
                                <CardHeader>
                                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                                        🚚
                                    </div>
                                    <CardTitle>Livraison rapide</CardTitle>
                                    <CardDescription>
                                        Livraison gratuite et rapide partout en France
                                        avec suivi en temps réel.
                                    </CardDescription>
                                </CardHeader>
                            </Card>

                            <Card>
                                <CardHeader>
                                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                                        🔒
                                    </div>
                                    <CardTitle>Paiement sécurisé</CardTitle>
                                    <CardDescription>
                                        Vos transactions sont protégées par un
                                        cryptage de niveau bancaire.
                                    </CardDescription>
                                </CardHeader>
                            </Card>
                        </div>
                    </div>
                </div>
            </main>

            {/* Footer */}
            <footer className="bg-background border-t">
                <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
                    <div className="xl:grid xl:grid-cols-3 xl:gap-8">
                        <div className="space-y-8 xl:col-span-1">
                            <h3 className="text-lg font-semibold">ShopNex</h3>
                            <p className="text-sm text-muted-foreground">
                                Votre destination e-commerce de confiance.
                                Construite avec les meilleures technologies modernes.
                            </p>
                        </div>
                        <div className="mt-12 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
                            <div className="md:grid md:grid-cols-2 md:gap-8">
                                <div>
                                    <h3 className="text-sm font-semibold tracking-wider uppercase">
                                        Navigation
                                    </h3>
                                    <ul className="mt-4 space-y-4">
                                        <li>
                                            <Link
                                                href="/"
                                                className="text-sm text-muted-foreground hover:text-foreground"
                                            >
                                                Accueil
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                href="/products"
                                                className="text-sm text-muted-foreground hover:text-foreground"
                                            >
                                                Produits
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                                <div className="mt-12 md:mt-0">
                                    <h3 className="text-sm font-semibold tracking-wider uppercase">
                                        Support
                                    </h3>
                                    <ul className="mt-4 space-y-4">
                                        <li>
                                            <Link
                                                href="/contact"
                                                className="text-sm text-muted-foreground hover:text-foreground"
                                            >
                                                Contact
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                href="/admin"
                                                className="text-sm text-muted-foreground hover:text-foreground"
                                            >
                                                Administration
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
