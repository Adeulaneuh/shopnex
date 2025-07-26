import Link from 'next/link'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <Link href="/" className="text-2xl font-bold text-gray-900">ShopNex</Link>
            </div>
            <nav className="hidden md:flex space-x-8">
              <Link href="/" className="text-gray-500 hover:text-gray-900">Accueil</Link>
              <Link href="/products" className="text-gray-500 hover:text-gray-900">Produits</Link>
              <Link href="/about" className="text-gray-900 font-medium">À propos</Link>
              <Link href="/contact" className="text-gray-500 hover:text-gray-900">Contact</Link>
            </nav>
            <div className="flex items-center space-x-4">
              <Link href="/admin" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                Admin
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Page Content */}
      <main className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            À propos de ShopNex
          </h1>
          <p className="mt-4 text-lg text-gray-500">
            Découvrez notre histoire et notre mission
          </p>
        </div>

        <div className="prose prose-lg prose-blue mx-auto">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Notre Histoire</h2>
            
            <p className="text-gray-600 mb-6">
              ShopNex est né de l'idée simple que le commerce en ligne devrait être 
              accessible, moderne et centré sur l'expérience utilisateur. Nous avons 
              créé cette plateforme pour offrir aux entreprises et aux consommateurs 
              une solution e-commerce complète et intuitive.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">Notre Mission</h3>
            <p className="text-gray-600 mb-6">
              Nous nous engageons à fournir une plateforme e-commerce robuste, 
              flexible et évolutive qui permet aux entreprises de tous types de 
              vendre leurs produits en ligne de manière efficace et professionnelle.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">Nos Valeurs</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
              <li><strong>Innovation :</strong> Nous adoptons les dernières technologies pour offrir la meilleure expérience</li>
              <li><strong>Qualité :</strong> Chaque aspect de notre plateforme est conçu avec soin et attention aux détails</li>
              <li><strong>Simplicité :</strong> Nous croyons que la technologie doit être accessible et facile à utiliser</li>
              <li><strong>Support :</strong> Nous accompagnons nos utilisateurs à chaque étape de leur parcours</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">Technologies Utilisées</h3>
            <p className="text-gray-600 mb-4">
              ShopNex est construit avec les technologies les plus modernes :
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
              <div className="bg-gray-50 p-4 rounded-md text-center">
                <div className="text-2xl mb-2">⚛️</div>
                <div className="font-medium">Next.js</div>
              </div>
              <div className="bg-gray-50 p-4 rounded-md text-center">
                <div className="text-2xl mb-2">🎨</div>
                <div className="font-medium">Tailwind CSS</div>
              </div>
              <div className="bg-gray-50 p-4 rounded-md text-center">
                <div className="text-2xl mb-2">📊</div>
                <div className="font-medium">Payload CMS</div>
              </div>
              <div className="bg-gray-50 p-4 rounded-md text-center">
                <div className="text-2xl mb-2">🔒</div>
                <div className="font-medium">TypeScript</div>
              </div>
              <div className="bg-gray-50 p-4 rounded-md text-center">
                <div className="text-2xl mb-2">🚀</div>
                <div className="font-medium">Turbo</div>
              </div>
              <div className="bg-gray-50 p-4 rounded-md text-center">
                <div className="text-2xl mb-2">📦</div>
                <div className="font-medium">pnpm</div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-12 bg-blue-600 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">
            Prêt à commencer ?
          </h3>
          <p className="text-blue-100 mb-6">
            Explorez nos produits ou accédez à l'administration pour gérer votre boutique.
          </p>
          <div className="space-x-4">
            <Link href="/products" className="inline-block bg-white text-blue-600 px-6 py-3 rounded-md font-medium hover:bg-gray-100">
              Voir les produits
            </Link>
            <Link href="/admin" className="inline-block bg-blue-700 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-800">
              Administration
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}
