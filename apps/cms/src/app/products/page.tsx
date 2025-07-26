import Link from "next/link";

export default function ProductsPage() {
    // Ici vous pourrez plus tard récupérer les vrais produits depuis l'API Payload
    const products = [
        {
            id: 1,
            name: "Produit Example 1",
            price: "29.99€",
            image: "/placeholder-product.jpg",
            description: "Description du produit exemple",
        },
        {
            id: 2,
            name: "Produit Example 2",
            price: "49.99€",
            image: "/placeholder-product.jpg",
            description: "Description du produit exemple",
        },
        {
            id: 3,
            name: "Produit Example 3",
            price: "19.99€",
            image: "/placeholder-product.jpg",
            description: "Description du produit exemple",
        },
    ];

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
                                className="text-gray-900 font-medium"
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
                                className="text-gray-500 hover:text-gray-900"
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
                <div className="text-center">
                    <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                        Nos Produits
                    </h1>
                    <p className="mt-4 text-lg text-gray-500">
                        Découvrez notre sélection de produits de qualité
                    </p>
                </div>

                <div className="mt-12 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
                    {products.map((product) => (
                        <div
                            key={product.id}
                            className="group relative bg-white rounded-lg shadow-md overflow-hidden"
                        >
                            <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-t-lg overflow-hidden group-hover:opacity-75">
                                <div className="w-full h-full object-center object-cover bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                                    <span className="text-gray-500 text-4xl">
                                        📦
                                    </span>
                                </div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-lg font-medium text-gray-900">
                                    <Link href={`/products/${product.id}`}>
                                        <span
                                            aria-hidden="true"
                                            className="absolute inset-0"
                                        />
                                        {product.name}
                                    </Link>
                                </h3>
                                <p className="mt-2 text-sm text-gray-500">
                                    {product.description}
                                </p>
                                <p className="mt-4 text-lg font-medium text-gray-900">
                                    {product.price}
                                </p>
                                <button className="mt-4 w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                                    Ajouter au panier
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Note pour le développement */}
                <div className="mt-16 bg-blue-50 rounded-lg p-6">
                    <h3 className="text-lg font-medium text-blue-900 mb-2">
                        🚀 Note de développement
                    </h3>
                    <p className="text-blue-700">
                        Cette page affiche des produits d'exemple. Pour afficher
                        les vrais produits, vous devrez connecter cette page à
                        l'API Payload CMS et récupérer les données depuis la
                        collection "Products" que vous pouvez gérer dans
                        l'admin.
                    </p>
                    <Link
                        href="/admin"
                        className="inline-block mt-3 text-blue-600 hover:text-blue-500 font-medium"
                    >
                        → Aller à l'administration
                    </Link>
                </div>
            </main>
        </div>
    );
}
