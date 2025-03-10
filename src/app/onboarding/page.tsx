export default function OnboardingPage() {
    return (
      <div className="container mx-auto px-4 py-16">
        {/* Onboarding Header Section */}
        <header className="text-center mb-8">
        <h1 className="text-4xl font-extrabold text-blue-600">Coming Soon: HeartGuard Onboarding</h1>
        <p className="mt-4 text-lg text-gray-700">
          We’re working hard to bring you the full onboarding experience! Stay tuned for helpful tips and resources to help you manage your heart health.
        </p>
      </header>
  
        {/* Step 1: Introduction to Health */}
        <section className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-semibold text-blue-600">Your Health Information</h2>
          <p className="mt-4 text-lg text-gray-600">
            HeartGuard will help you make informed choices for managing your heart health. 
            Here, we’ll provide personalized advice based on your health information.
          </p>
        </section>
  
        {/* Step 2: Goal Overview */}
        <section className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-semibold text-green-600">Your Goal</h2>
          <p className="mt-4 text-lg text-gray-600">
            Whether you&apos;re looking to lower your cholesterol or improve your overall heart health, 
            we’re here to help you reach your goals with tailored resources and guidance.
          </p>
        </section>
  
        {/* Step 3: Personalized Recommendations */}
        <section className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-semibold text-red-600">Your Personalized Plan</h2>
          <p className="mt-4 text-lg text-gray-600">
            Based on your health and goals, we will offer tips, articles, and recipes designed to help you make healthier choices. 
            Start your journey towards a heart-healthy life today!
          </p>
        </section>
  
        {/* End Section */}
        <section className="text-center mt-8">
        <p className="text-lg text-gray-600">
          Check out other pages for helpful tips, articles, and heart-healthy recipes while we prepare the full onboarding experience!
        </p>
        </section>
      </div>
    );
  }
  