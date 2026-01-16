import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'success' | 'submitting'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    // Simulate API call
    setTimeout(() => {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setStatus('idle'), 3000);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setFormData({...formData, [e.target.id]: e.target.value});
  };

  const socialLinks = [
    { icon: 'facebook', href: '#' },
    { icon: 'rss_feed', href: '#' },
    { icon: 'code', href: 'https://github.com/tu-usuario' } // Updated GitHub link
  ];

  return (
    <section
      id="contact"
      className="py-20 bg-white dark:bg-gray-900 border-t border-border-light dark:border-border-dark"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base text-primary font-semibold tracking-wide uppercase">
            Support
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Contact Us
          </p>
          <p className="mt-4 max-w-2xl text-lg text-gray-500 dark:text-gray-400 mx-auto">
            Have questions or need assistance with compression settings? We're here
            to help.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Info */}
          <div className="flex flex-col justify-center space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Get in touch
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
                Whether you have a suggestion for the next version, need help
                with installation, or just want to say hello, we'd love to hear
                from you. Our team typically responds within 24 hours.
              </p>
            </div>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 dark:bg-blue-900/50 p-3 rounded-lg text-primary">
                  <span className="material-icons">email</span>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Email Us
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    support@daxtercreator.com
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 dark:bg-blue-900/50 p-3 rounded-lg text-primary">
                  <span className="material-icons">forum</span>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Community Forum
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    Join the discussion on our forums
                  </p>
                </div>
              </div>
            </div>
            <div className="pt-4">
              <h4 className="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-wider mb-4">
                Follow Us
              </h4>
              <div className="flex space-x-4">
                {socialLinks.map((item, idx) => (
                  <a
                    key={idx}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-100 dark:bg-gray-800 p-3 rounded-full text-gray-600 dark:text-gray-400 hover:bg-primary hover:text-white dark:hover:bg-primary dark:hover:text-white transition-all transform hover:scale-110"
                  >
                    <span className="material-icons text-xl">{item.icon}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-background-light dark:bg-background-dark p-8 rounded-2xl border border-border-light dark:border-border-dark shadow-sm">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="John Doe"
                  className="w-full px-4 py-3 rounded-lg border-gray-300 dark:border-gray-700 bg-white dark:bg-surface-dark text-gray-900 dark:text-white focus:border-primary focus:ring-primary shadow-sm outline-none ring-1 ring-transparent focus:ring-2 transition-all"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 rounded-lg border-gray-300 dark:border-gray-700 bg-white dark:bg-surface-dark text-gray-900 dark:text-white focus:border-primary focus:ring-primary shadow-sm outline-none ring-1 ring-transparent focus:ring-2 transition-all"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="How can we help you?"
                  className="w-full px-4 py-3 rounded-lg border-gray-300 dark:border-gray-700 bg-white dark:bg-surface-dark text-gray-900 dark:text-white focus:border-primary focus:ring-primary shadow-sm outline-none ring-1 ring-transparent focus:ring-2 transition-all resize-none"
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={status !== 'idle'}
                className={`w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-bold text-white transition-all ${
                    status === 'success' ? 'bg-green-500 hover:bg-green-600' : 'bg-primary hover:bg-blue-600'
                } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary`}
              >
                {status === 'submitting' ? 'Sending...' : status === 'success' ? 'Message Sent!' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;