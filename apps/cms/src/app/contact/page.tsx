import Link from "next/link";

export default function ContactPage() {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <header className="bg-white shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center py-6">
                        <div className="flex items-center">
                            <Link
                                href="/"
                                className="text-2xl font-bold text-gray-900"
                            >
                                ShopNex
                            </Link>
                        </div>
                        <nav className="hidden md:flex space-x-8">
                            <Link
                                href="/"
                                className="text-gray-500 hover:text-gray-900"
                            >
                                Accueil
                            </Link>
                            <Link
                                href="/products"
                                className="text-gray-500 hover:text-gray-900"
                            >
                                Produits
                            </Link>
                            <Link
                                href="/about"
                                className="text-gray-500 hover:text-gray-900"
                            >
                                À propos
                            </Link>
                            <Link
                                href="/contact"
                                className="text-gray-900 font-medium"
                            >
                                Contact
                            </Link>
                        </nav>
                        <div className="flex items-center space-x-4">
                            <Link
                                href="/admin"
                                className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
                            >
                                Admin
                            </Link>
                        </div>
                    </div>
                </div>
            </header>

            {/* Page Content */}
            <main className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                        Contactez-nous
                    </h1>
                    <p className="mt-4 text-lg text-gray-500">
                        Nous sommes là pour vous aider
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Formulaire de contact */}
                    <div className="bg-white rounded-lg shadow-md p-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">
                            Envoyez-nous un message
                        </h2>

                        <form className="space-y-6">
                            <div>
                                <label
                                    htmlFor="name"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Nom complet
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 p-3 border"
                                    placeholder="Votre nom"
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="email"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Email
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 p-3 border"
                                    placeholder="votre@email.com"
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="subject"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Sujet
                                </label>
                                <input
                                    type="text"
                                    name="subject"
                                    id="subject"
                                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 p-3 border"
                                    placeholder="Sujet de votre message"
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="message"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Message
                                </label>
                                <textarea
                                    name="message"
                                    id="message"
                                    rows={6}
                                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 p-3 border"
                                    placeholder="Votre message..."
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 font-medium"
                            >
                                Envoyer le message
                            </button>
                        </form>
                    </div>

                    {/* Informations de contact */}
                    <div className="space-y-8">
                        <div className="bg-white rounded-lg shadow-md p-8">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">
                                Nos coordonnées
                            </h2>

                            <div className="space-y-6">
                                <div className="flex items-start">
                                    <div className="flex-shrink-0">
                                        <div className="flex items-center justify-center h-10 w-10 rounded-md bg-blue-500 text-white">
                                            📍
                                        </div>
                                    </div>
                                    <div className="ml-4">
                                        <h3 className="text-lg font-medium text-gray-900">
                                            Adresse
                                        </h3>
                                        <p className="text-gray-500">
                                            123 Rue de l'E-commerce
                                            <br />
                                            75001 Paris, France
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="flex-shrink-0">
                                        <div className="flex items-center justify-center h-10 w-10 rounded-md bg-blue-500 text-white">
                                            📞
                                        </div>
                                    </div>
                                    <div className="ml-4">
                                        <h3 className="text-lg font-medium text-gray-900">
                                            Téléphone
                                        </h3>
                                        <p className="text-gray-500">
                                            +33 1 23 45 67 89
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="flex-shrink-0">
                                        <div className="flex items-center justify-center h-10 w-10 rounded-md bg-blue-500 text-white">
                                            ✉️
                                        </div>
                                    </div>
                                    <div className="ml-4">
                                        <h3 className="text-lg font-medium text-gray-900">
                                            Email
                                        </h3>
                                        <p className="text-gray-500">
                                            contact@shopnex.com
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="flex-shrink-0">
                                        <div className="flex items-center justify-center h-10 w-10 rounded-md bg-blue-500 text-white">
                                            🕒
                                        </div>
                                    </div>
                                    <div className="ml-4">
                                        <h3 className="text-lg font-medium text-gray-900">
                                            Horaires
                                        </h3>
                                        <p className="text-gray-500">
                                            Lundi - Vendredi : 9h00 - 18h00
                                            <br />
                                            Samedi : 10h00 - 16h00
                                            <br />
                                            Dimanche : Fermé
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* FAQ rapide */}
                        <div className="bg-white rounded-lg shadow-md p-8">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">
                                Questions fréquentes
                            </h2>

                            <div className="space-y-4">
                                <div>
                                    <h3 className="font-medium text-gray-900">
                                        Comment passer une commande ?
                                    </h3>
                                    <p className="text-sm text-gray-500 mt-1">
                                        Parcourez nos produits, ajoutez-les au
                                        panier et suivez le processus de
                                        commande.
                                    </p>
                                </div>

                                <div>
                                    <h3 className="font-medium text-gray-900">
                                        Quels sont les délais de livraison ?
                                    </h3>
                                    <p className="text-sm text-gray-500 mt-1">
                                        Nous livrons généralement sous 2-5 jours
                                        ouvrés en France métropolitaine.
                                    </p>
                                </div>

                                <div>
                                    <h3 className="font-medium text-gray-900">
                                        Puis-je retourner un produit ?
                                    </h3>
                                    <p className="text-sm text-gray-500 mt-1">
                                        Oui, vous avez 14 jours pour retourner
                                        un produit en parfait état.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
