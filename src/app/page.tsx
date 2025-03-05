import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="container mx-auto px-4">
      {/* Hero Section */}
      <header className="text-center bg-gradient-to-r from-blue-500 to-green-400 text-white py-16 rounded-lg shadow-lg mb-12">
        <h1 className="text-5xl font-extrabold">Welcome to HeartGuard</h1>
        <p className="mt-4 text-lg max-w-2xl mx-auto">
          Your trusted guide to managing cholesterol and keeping your heart healthy.
        </p>
      </header>

      {/* Information Section */}
      <section className="text-center mb-12">
        <h2 className="text-3xl font-semibold">Why Heart Health Matters?</h2>
        <p className="mt-4 text-gray-700 max-w-3xl mx-auto">
          High cholesterol can increase the risk of heart disease and stroke. Making small changes to
          your diet and lifestyle can help you maintain a healthy heart. Discover expert advice, useful
          tips, and delicious recipes designed to lower cholesterol and boost overall wellness.
        </p>
      </section>

      {/* Features Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Articles Card */}
        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300 transform hover:-translate-y-2 text-center">
          <h2 className="text-2xl font-bold text-blue-600">Cholesterol Articles</h2>
          <p className="mt-2 text-gray-600">Learn more about cholesterol management and heart health.</p>
          <Link href="/articles" className="mt-4 inline-block text-blue-500 font-medium hover:underline">
            Read Articles →
          </Link>
        </div>

        {/* Tips Card */}
        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300 transform hover:-translate-y-2 text-center">
          <h2 className="text-2xl font-bold text-green-600">Cholesterol Tips</h2>
          <p className="mt-2 text-gray-600">Simple tips to improve heart health and control cholesterol.</p>
          <Link href="/tips" className="mt-4 inline-block text-green-500 font-medium hover:underline">
            Get Tips →
          </Link>
        </div>

        {/* Recipes Card */}
        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300 transform hover:-translate-y-2 text-center">
          <h2 className="text-2xl font-bold text-red-600">Heart-Healthy Recipes</h2>
          <p className="mt-2 text-gray-600">Delicious, cholesterol-lowering recipes to nourish your body.</p>
          <Link href="/recipes" className="mt-4 inline-block text-red-500 font-medium hover:underline">
            Explore Recipes →
          </Link>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="text-center mt-12">
        <h2 className="text-3xl font-semibold">Take Control of Your Health Today</h2>
        <p className="mt-4 text-gray-700 max-w-3xl mx-auto">
          Whether you&apos;re looking to learn more, improve your diet, or start making healthier choices,
          HeartGuard is here to help. Explore our resources and take the first step towards a heart-healthy life.
        </p>
        <Link
          href="/get-started"
          className="mt-6 inline-block bg-blue-500 hover:bg-blue-600 text-white font-medium px-6 py-3 rounded-lg shadow-lg transition duration-300"
        >
          Get Started
        </Link>
      </section>
    </div>
  );
}
