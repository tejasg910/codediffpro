import { Mail, MessageCircle, Clock, MapPin, Sparkles } from "lucide-react";

export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-500/20 via-purple-500/10 to-transparent rounded-full blur-3xl opacity-60"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-tl from-emerald-500/20 via-blue-500/10 to-transparent rounded-full blur-3xl opacity-60"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-6 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 backdrop-blur-sm mb-8">
              <Sparkles className="w-4 h-4 mr-2 text-blue-400" />
              <span className="text-sm font-medium bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Get in Touch
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl font-black mb-8 leading-tight">
              <span className="bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 dark:from-white dark:via-gray-200 dark:to-white bg-clip-text text-transparent">
                Contact
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-blue-600 bg-clip-text text-transparent">
                Our Team
              </span>
            </h1>

            <p className="text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              Have questions, suggestions, or need help? We'd love to hear from you. 
              Reach out and we'll get back to you as soon as possible.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 mb-16">
              {/* Primary Contact */}
              <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-200/50 dark:border-gray-700/50 hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Email Us
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  For support, feature requests, bug reports, or general inquiries, 
                  send us an email and we'll respond within 24 hours.
                </p>
                <div className="space-y-3">
                  <a 
                    href="mailto:tejasgiri910@gmail.com"
                    className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-200 font-semibold"
                  >
                    <Mail className="w-5 h-5 mr-2" />
                    tejasgiri910@gmail.com
                  </a>
                </div>
              </div>

              {/* Response Time */}
              <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-200/50 dark:border-gray-700/50 hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Response Time
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  We pride ourselves on quick responses. Most emails are answered 
                  within a few hours during business days.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center text-gray-600 dark:text-gray-300">
                    <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                    <span>Support: Within 24 hours</span>
                  </div>
                  <div className="flex items-center text-gray-600 dark:text-gray-300">
                    <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
                    <span>General: Within 48 hours</span>
                  </div>
                  <div className="flex items-center text-gray-600 dark:text-gray-300">
                    <div className="w-3 h-3 bg-purple-500 rounded-full mr-3"></div>
                    <span>Business: Same day</span>
                  </div>
                </div>
              </div>
            </div>

            {/* What to Include */}
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800/50 dark:to-gray-700/50 rounded-2xl p-8 mb-12">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
                What to Include in Your Message
              </h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    For Bug Reports:
                  </h4>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                    <li>• Detailed description of the issue</li>
                    <li>• Steps to reproduce the problem</li>
                    <li>• Browser and operating system</li>
                    <li>• Screenshots if applicable</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    For Feature Requests:
                  </h4>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                    <li>• Clear description of the feature</li>
                    <li>• Use case or problem it solves</li>
                    <li>• How it would improve your workflow</li>
                    <li>• Priority level for your needs</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-200/50 dark:border-gray-700/50">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
                Frequently Asked Questions
              </h3>
              <div className="space-y-6">
                <div className="border-b border-gray-200 dark:border-gray-700 pb-6">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    Is the JavaScript comparison tool really free?
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    Yes! Our core comparison features are completely free to use. We believe 
                    in providing essential developer tools without barriers.
                  </p>
                </div>
                <div className="border-b border-gray-200 dark:border-gray-700 pb-6">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    How secure is my code when using your tool?
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    Your code never leaves your browser. All comparisons happen client-side, 
                    ensuring your intellectual property and sensitive code remain secure.
                  </p>
                </div>
                <div className="border-b border-gray-200 dark:border-gray-700 pb-6">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    Can I suggest new features?
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    Absolutely! We actively listen to our community and regularly implement 
                    user-requested features. Send us your ideas via email.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    Do you offer enterprise solutions?
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    We're working on enterprise features for teams and organizations. 
                    Contact us to discuss your specific requirements and get early access.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-500/10 to-purple-500/10">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Ready to Start Comparing?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Don't let code differences slow you down. Try our comparison tool now!
            </p>
            <button
              onClick={() => window.location.href = '/'}
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl font-semibold text-lg shadow-2xl hover:shadow-blue-500/25 transform hover:-translate-y-1 transition-all duration-300"
            >
              Try the Tool
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}