import { FileText, Users, Shield, AlertCircle, Sparkles, Scale } from "lucide-react";

export default function Terms() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
                 <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-emerald-500/20 to-blue-600/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
            </div>
            {/* Hero Section */}
            <section className="relative pt-20 pb-16 overflow-hidden">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-500/20 via-purple-500/10 to-transparent rounded-full blur-3xl opacity-60"></div>
                <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-tl from-emerald-500/20 via-blue-500/10 to-transparent rounded-full blur-3xl opacity-60"></div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-flex items-center px-6 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 backdrop-blur-sm mb-8">
                            <Sparkles className="w-4 h-4 mr-2 text-blue-400" />
                            <span className="text-sm font-medium bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                                Legal Terms
                            </span>
                        </div>

                        <h1 className="text-5xl md:text-6xl font-black mb-8 leading-tight">
                            <span className="bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 dark:from-white dark:via-gray-200 dark:to-white bg-clip-text text-transparent">
                                Terms of
                            </span>
                            <br />
                            <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-blue-600 bg-clip-text text-transparent">
                                Service
                            </span>
                        </h1>

                        <p className="text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
                            These terms and conditions govern your use of our JavaScript code comparison tool.
                            Please read them carefully before using our service.
                        </p>
                    </div>
                </div>
            </section>

            {/* Terms Content */}
            <section className="py-16">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto">

                        {/* Acceptance */}
                        <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-200/50 dark:border-gray-700/50 mb-8">
                            <div className="flex items-center mb-6">
                                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mr-4">
                                    <FileText className="w-6 h-6 text-white" />
                                </div>
                                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">1. Acceptance of Terms</h2>
                            </div>
                            <div className="prose prose-lg dark:prose-invert max-w-none">
                                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                                    By accessing and using our JavaScript code comparison tool ("Service"),
                                    you accept and agree to be bound by the terms and provision of this
                                    agreement. If you do not agree to abide by the above, please do not
                                    use this service.
                                </p>
                                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                    These terms apply to all visitors, users, and others who access or
                                    use the service.
                                </p>
                            </div>
                        </div>

                        {/* Use of Service */}
                        <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-200/50 dark:border-gray-700/50 mb-8">
                            <div className="flex items-center mb-6">
                                <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center mr-4">
                                    <Users className="w-6 h-6 text-white" />
                                </div>
                                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">2. Use of Service</h2>
                            </div>
                            <div className="prose prose-lg dark:prose-invert max-w-none">
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Permitted Use</h3>
                                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                                    You may use our service for legitimate purposes including:
                                </p>
                                <ul className="text-gray-600 dark:text-gray-300 space-y-2 mb-6">
                                    <li>• Comparing JavaScript code snippets for development purposes</li>
                                    <li>• Educational and learning activities</li>
                                    <li>• Code review and debugging</li>
                                    <li>• Research and analysis</li>
                                </ul>

                                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Prohibited Use</h3>
                                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                                    You agree not to use the service to:
                                </p>
                                <ul className="text-gray-600 dark:text-gray-300 space-y-2">
                                    <li>• Upload or compare malicious code, viruses, or harmful content</li>
                                    <li>• Violate any applicable laws or regulations</li>
                                    <li>• Infringe on intellectual property rights of others</li>
                                    <li>• Attempt to reverse engineer or exploit the service</li>
                                    <li>• Use automated tools to abuse or overload the service</li>
                                    <li>• Compare copyrighted code without proper authorization</li>
                                </ul>
                            </div>
                        </div>

                        {/* Intellectual Property */}
                        <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-200/50 dark:border-gray-700/50 mb-8">
                            <div className="flex items-center mb-6">
                                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mr-4">
                                    <Shield className="w-6 h-6 text-white" />
                                </div>
                                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">3. Intellectual Property</h2>
                            </div>
                            <div className="prose prose-lg dark:prose-invert max-w-none">
                                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                                    The service and its original content, features, and functionality are
                                    and will remain the exclusive property of our company and its licensors.
                                    The service is protected by copyright, trademark, and other laws.
                                </p>
                                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                                    You retain all rights to the code you input into our comparison tool.
                                    We do not claim ownership of your code or store it on our servers.
                                </p>
                                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                    Our trademarks and trade dress may not be used in connection with
                                    any product or service without our prior written consent.
                                </p>
                            </div>
                        </div>

                        {/* Privacy & Data */}
                        <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-200/50 dark:border-gray-700/50 mb-8">
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">4. Privacy & Data Handling</h2>
                            <div className="prose prose-lg dark:prose-invert max-w-none">
                                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                                    Your privacy is important to us. Our code comparison tool processes
                                    your code client-side (in your browser) and does not transmit your
                                    code to our servers. However:
                                </p>
                                <ul className="text-gray-600 dark:text-gray-300 space-y-2 mb-4">
                                    <li>• We may collect anonymous usage analytics</li>
                                    <li>• Browser storage may temporarily cache your code locally</li>
                                    <li>• We use cookies for functionality and analytics</li>
                                    <li>• Third-party services (ads, analytics) may collect data</li>
                                </ul>
                                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                    Please refer to our Privacy Policy for detailed information about
                                    data collection and usage.
                                </p>
                            </div>
                        </div>

                        {/* Service Availability */}
                        <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-200/50 dark:border-gray-700/50 mb-8">
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">5. Service Availability</h2>
                            <div className="prose prose-lg dark:prose-invert max-w-none">
                                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                                    We strive to maintain high availability but cannot guarantee uninterrupted
                                    service. We reserve the right to:
                                </p>
                                <ul className="text-gray-600 dark:text-gray-300 space-y-2 mb-4">
                                    <li>• Modify, suspend, or discontinue the service at any time</li>
                                    <li>• Perform maintenance and updates as needed</li>
                                    <li>• Implement usage limits or restrictions</li>
                                    <li>• Block access for violations of these terms</li>
                                </ul>
                                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                    We will provide reasonable notice for planned maintenance when possible.
                                </p>
                            </div>
                        </div>

                        {/* Disclaimer of Warranties */}
                        <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-200/50 dark:border-gray-700/50 mb-8">
                            <div className="flex items-center mb-6">
                                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center mr-4">
                                    <AlertCircle className="w-6 h-6 text-white" />
                                </div>
                                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">6. Disclaimer of Warranties</h2>
                            </div>
                            <div className="prose prose-lg dark:prose-invert max-w-none">
                                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                                    The service is provided on an "as is" and "as available" basis.
                                    We make no representations or warranties of any kind, express or
                                    implied, including but not limited to:
                                </p>
                                <ul className="text-gray-600 dark:text-gray-300 space-y-2 mb-4">
                                    <li>• Warranties of merchantability or fitness for a particular purpose</li>
                                    <li>• Accuracy, reliability, or completeness of the service</li>
                                    <li>• Uninterrupted, secure, or error-free operation</li>
                                    <li>• Results obtained from using the service</li>
                                </ul>
                                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                    You use the service at your own risk and discretion.
                                </p>
                            </div>
                        </div>

                        {/* Limitation of Liability */}
                        <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-200/50 dark:border-gray-700/50 mb-8">
                            <div className="flex items-center mb-6">
                                <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-pink-500 rounded-xl flex items-center justify-center mr-4">
                                    <Scale className="w-6 h-6 text-white" />
                                </div>
                                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">7. Limitation of Liability</h2>
                            </div>
                            <div className="prose prose-lg dark:prose-invert max-w-none">
                                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                                    In no event shall we be liable for any indirect, incidental, special,
                                    consequential, or punitive damages, including without limitation, loss
                                    of profits, data, use, goodwill, or other intangible losses, resulting
                                    from your use of the service.
                                </p>
                                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                    Our total liability for any claims arising from these terms or your
                                    use of the service shall not exceed the amount you paid us in the
                                    12 months preceding the claim (or $100 if you haven't paid anything).
                                </p>
                            </div>
                        </div>

                        {/* Indemnification */}
                        <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-200/50 dark:border-gray-700/50 mb-8">
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">8. Indemnification</h2>
                            <div className="prose prose-lg dark:prose-invert max-w-none">
                                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                                    You agree to defend, indemnify, and hold harmless our company, its
                                    affiliates, licensors, and service providers from and against any
                                    claims, liabilities, damages, judgments, awards, losses, costs,
                                    expenses, or fees arising out of or relating to:
                                </p>
                                <ul className="text-gray-600 dark:text-gray-300 space-y-2">
                                    <li>• Your violation of these terms</li>
                                    <li>• Your use of the service</li>
                                    <li>• Your violation of any third-party rights</li>
                                    <li>• Any code or content you input into the service</li>
                                </ul>
                            </div>
                        </div>

                        {/* Governing Law */}
                        <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-200/50 dark:border-gray-700/50 mb-8">
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">9. Governing Law</h2>
                            <div className="prose prose-lg dark:prose-invert max-w-none">
                                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                    These terms shall be interpreted and governed by the laws of the
                                    jurisdiction in which our company is established, without regard
                                    to its conflict of law provisions. Any disputes arising from these
                                    terms or your use of the service shall be resolved through good
                                    faith negotiation, and if necessary, binding arbitration.
                                </p>
                            </div>
                        </div>

                        {/* Changes to Terms */}
                        <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800/50 dark:to-gray-700/50 rounded-2xl p-8">
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">10. Changes to Terms</h2>
                            <div className="prose prose-lg dark:prose-invert max-w-none">
                                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                                    We reserve the right to modify or replace these terms at any time.
                                    If a revision is material, we will try to provide at least 30 days
                                    notice prior to any new terms taking effect.
                                </p>
                                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                                    Your continued use of the service after we post any modifications
                                    constitutes acceptance of the new terms.
                                </p>
                                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                                    <strong>Last Updated:</strong> January 2025
                                </p>
                                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                    If you have any questions about these Terms of Service, please
                                    contact us at
                                    <a href="mailto:tejasgiri910@gmail.com" className="text-blue-600 dark:text-blue-400 hover:underline ml-1">
                                        tejasgiri910@gmail.com
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16">
                <div className="container mx-auto px-6 text-center">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                            Ready to Get Started?
                        </h2>
                        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                            Now that you've reviewed our terms, start comparing your JavaScript code!
                        </p>
                        <button
                            onClick={() => window.location.href = '/'}
                            className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl font-semibold text-lg shadow-2xl hover:shadow-blue-500/25 transform hover:-translate-y-1 transition-all duration-300"
                        >
                            Start Comparing
                        </button>
                    </div>
                </div>
            </section>     </div>
    );
}