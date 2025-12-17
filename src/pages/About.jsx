import { appData } from '../data/data';

const About = () => {
  const stats = [
    { label: 'Happy Customers', value: '50K+' },
    { label: 'Partner Restaurants', value: '500+' },
    { label: 'Cities Served', value: '25+' },
    { label: 'Orders Delivered', value: '1M+' }
  ];

  const values = [
    {
      title: 'Quality First',
      description: 'We partner only with restaurants that meet our high standards for food quality and safety.',
      icon: '🏆'
    },
    {
      title: 'Fast Delivery',
      description: 'Our optimized delivery network ensures your food arrives hot and fresh in 30 minutes or less.',
      icon: '⚡'
    },
    {
      title: 'Customer Care',
      description: '24/7 support team ready to help with any questions or concerns about your order.',
      icon: '💝'
    },
    {
      title: 'Fair Pricing',
      description: 'Transparent pricing with no hidden fees. Great food at prices that make sense.',
      icon: '💰'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-50 to-red-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About {appData.brand.name}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're on a mission to connect people with great food from their favorite local restaurants, 
            delivered fast and fresh to their doorstep.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-orange-600 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Founded in 2020, {appData.brand.name} started with a simple idea: great food should be 
                  accessible to everyone, delivered quickly and affordably.
                </p>
                <p>
                  What began as a small team of food lovers has grown into a platform serving thousands 
                  of customers daily, partnering with the best local restaurants in your area.
                </p>
                <p>
                  Today, we're proud to be the bridge between amazing restaurants and hungry customers, 
                  making every meal a delightful experience.
                </p>
              </div>
            </div>
            <div className="relative">
              <img 
                src={appData.images.heroMain} 
                alt="Food delivery team" 
                className="rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              These core principles guide everything we do, from selecting restaurant partners 
              to delivering your order.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center p-6 rounded-2xl bg-gray-50 hover:bg-orange-50 transition-colors">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-orange-600 to-red-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Order?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of satisfied customers and experience the {appData.brand.name} difference.
          </p>
          <button className="bg-white text-orange-600 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-gray-100 transition-colors">
            {appData.hero.ctaText}
          </button>
        </div>
      </section>
    </div>
  );
};

export default About;