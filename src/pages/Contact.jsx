import { useState } from 'react';
import { appData } from '../data/data';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const contactMethods = [
    {
      title: 'Customer Support',
      description: 'Get help with your orders',
      icon: '📞',
      contact: '+1 (555) 123-4567',
      hours: '24/7 Available'
    },
    {
      title: 'Email Support',
      description: 'Send us your questions',
      icon: '✉️',
      contact: 'support@foodexpress.com',
      hours: 'Response within 2 hours'
    },
    {
      title: 'Live Chat',
      description: 'Chat with our team',
      icon: '💬',
      contact: 'Available in app',
      hours: 'Mon-Sun 8AM-10PM'
    }
  ];

  const faqs = [
    {
      question: 'How long does delivery take?',
      answer: 'Most orders arrive within 30 minutes. Delivery time may vary based on distance and restaurant preparation time.'
    },
    {
      question: 'What are the delivery fees?',
      answer: 'Delivery fees start at $2.99 and vary by distance. Free delivery on orders over $25.'
    },
    {
      question: 'Can I track my order?',
      answer: 'Yes! You can track your order in real-time through our app or website once it\'s confirmed.'
    },
    {
      question: 'What if my order is wrong?',
      answer: 'Contact us immediately and we\'ll make it right with a refund or replacement order.'
    }
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-50 to-red-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Get in Touch
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Have questions, feedback, or need help? We're here to assist you 24/7.
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How Can We Help?</h2>
            <p className="text-gray-600">Choose the best way to reach us</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {contactMethods.map((method, index) => (
              <div key={index} className="text-center p-6 rounded-2xl bg-gray-50 hover:bg-orange-50 transition-colors">
                <div className="text-4xl mb-4">{method.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{method.title}</h3>
                <p className="text-gray-600 mb-3">{method.description}</p>
                <div className="font-semibold text-orange-600 mb-1">{method.contact}</div>
                <div className="text-sm text-gray-500">{method.hours}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Send Us a Message</h2>
            <p className="text-gray-600">Fill out the form below and we'll get back to you soon</p>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-900 shadow-sm placeholder:text-gray-400 focus:border-orange-500 focus:outline-none focus:ring-4 focus:ring-orange-500/10"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-900 shadow-sm placeholder:text-gray-400 focus:border-orange-500 focus:outline-none focus:ring-4 focus:ring-orange-500/10"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-900 shadow-sm focus:border-orange-500 focus:outline-none focus:ring-4 focus:ring-orange-500/10"
                >
                  <option value="">Select a subject</option>
                  <option value="order-issue">Order Issue</option>
                  <option value="delivery-problem">Delivery Problem</option>
                  <option value="account-help">Account Help</option>
                  <option value="restaurant-partnership">Restaurant Partnership</option>
                  <option value="feedback">General Feedback</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-900 shadow-sm placeholder:text-gray-400 focus:border-orange-500 focus:outline-none focus:ring-4 focus:ring-orange-500/10"
                  placeholder="Tell us how we can help you..."
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full rounded-xl bg-gradient-to-r from-orange-600 to-orange-500 px-6 py-3.5 text-white font-semibold shadow-lg transition-all duration-200 hover:from-orange-500 hover:to-orange-400 hover:shadow-xl hover:-translate-y-0.5 focus:outline-none focus:ring-4 focus:ring-orange-500/25 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center gap-2">
                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    <span>Sending...</span>
                  </div>
                ) : (
                  'Send Message'
                )}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600">Quick answers to common questions</p>
          </div>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-orange-600 to-red-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Still Hungry?</h2>
          <p className="text-xl mb-8 opacity-90">
            Browse our menu and order your favorite meal now!
          </p>
          <button className="bg-white text-orange-600 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-gray-100 transition-colors">
            {appData.hero.ctaText}
          </button>
        </div>
      </section>
    </div>
  );
};

export default Contact;