import { Shield, Eye, Database, Cookie, Settings, Lock, Users, AlertTriangle, Mail, FileText } from "lucide-react";

export default function Privacy() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-emerald-500/20 to-blue-600/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
            </div>

            {/* Hero Section */}
            <section className="relative pt-20 pb-16 overflow-hidden">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-green-500/20 via-blue-500/10 to-transparent rounded-full blur-3xl opacity-60"></div>
                <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-tl from-purple-500/20 via-green-500/10 to-transparent rounded-full blur-3xl opacity-60"></div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-flex items-center px-6 py-2 rounded-full bg-gradient-to-r from-green-500/10 to-blue-500/10 border border-green-500/20 backdrop-blur-sm mb-8">
                            <Shield className="w-4 h-4 mr-2 text-green-400" />
                            <span className="text-sm font-medium bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                                Privacy Protection
                            </span>
                        </div>

                        <h1 className="text-5xl md:text-6xl font-black mb-8 leading-tight">
                            <span className="bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 dark:from-white dark:via-gray-200 dark:to-white bg-clip-text text-transparent">
                                Privacy
                            </span>

                            <span className="bg-gradient-to-r ml-2 from-blue-500 via-purple-500 to-blue-600 bg-clip-text text-transparent">
                                Policy
                            </span>
                        </h1>

                        <p className="text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
                            Your privacy is important to us. This policy explains how we collect, use, and protect
                            your information when you use our JavaScript code comparison tool.
                        </p>
                    </div>
                </div>
            </section>

            {/* Privacy Content */}
            <section className="py-16">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto">

                        {/* Information We Collect */}
                        <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-200/50 dark:border-gray-700/50 mb-8">
                            <div className="flex items-center mb-6">
                                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mr-4">
                                    <Database className="w-6 h-6 text-white" />
                                </div>
                                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">1. Information We Collect</h2>
                            </div>
                            <div className="prose prose-lg dark:prose-invert max-w-none">
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Information You Provide</h3>
                                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                                    Our JavaScript code comparison tool processes your code entirely in your browser.
                                    We do not collect, store, or transmit the code you input into our service.
                                    However, we may collect:
                                </p>
                                <ul className="text-gray-600 dark:text-gray-300 space-y-2 mb-6">
                                    <li>• Contact information if you reach out to us</li>
                                    <li>• Feedback or suggestions you provide</li>
                                    <li>• Error reports if you choose to send them</li>
                                </ul>

                                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Automatically Collected Information</h3>
                                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                                    When you use our service, we automatically collect certain information:
                                </p>
                                <ul className="text-gray-600 dark:text-gray-300 space-y-2">
                                    <li>• Usage analytics (page views, features used, time spent)</li>
                                    <li>• Device information (browser type, operating system)</li>
                                    <li>• IP address and general location</li>
                                    <li>• Referrer information (how you found our site)</li>
                                    <li>• Performance metrics and error logs</li>
                                </ul>
                            </div>
                        </div>

                        {/* How We Use Information */}
                        <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-200/50 dark:border-gray-700/50 mb-8">
                            <div className="flex items-center mb-6">
                                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mr-4">
                                    <Settings className="w-6 h-6 text-white" />
                                </div>
                                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">2. How We Use Your Information</h2>
                            </div>
                            <div className="prose prose-lg dark:prose-invert max-w-none">
                                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                                    We use the collected information for the following purposes:
                                </p>
                                <ul className="text-gray-600 dark:text-gray-300 space-y-2 mb-6">
                                    <li>• <strong>Service Improvement:</strong> Analyze usage patterns to enhance functionality</li>
                                    <li>• <strong>Technical Support:</strong> Diagnose and fix technical issues</li>
                                    <li>• <strong>Analytics:</strong> Understand how users interact with our service</li>
                                    <li>• <strong>Communication:</strong> Respond to inquiries and provide support</li>
                                    <li>• <strong>Security:</strong> Detect and prevent abuse or malicious activity</li>
                                    <li>• <strong>Legal Compliance:</strong> Meet legal obligations and protect rights</li>
                                </ul>
                                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                    We do not sell, rent, or share your personal information with third parties
                                    for marketing purposes.
                                </p>
                            </div>
                        </div>

                        {/* Code Privacy */}
                        <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-200/50 dark:border-gray-700/50 mb-8">
                            <div className="flex items-center mb-6">
                                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mr-4">
                                    <Lock className="w-6 h-6 text-white" />
                                </div>
                                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">3. Your Code Privacy</h2>
                            </div>
                            <div className="prose prose-lg dark:prose-invert max-w-none">
                                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                                    <strong>Client-Side Processing:</strong> Our code comparison tool processes
                                    all code locally in your browser. Your code is never sent to our servers
                                    or stored remotely.
                                </p>
                                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                                    <strong>Local Storage:</strong> Your browser may temporarily cache your code
                                    using local storage for functionality purposes. This data remains on your
                                    device and can be cleared at any time.
                                </p>
                                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                                    <strong>No Code Retention:</strong> We do not maintain copies of your code,
                                    analyze its content, or use it for any purpose beyond the immediate
                                    comparison functionality.
                                </p>
                                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                    <strong>Intellectual Property:</strong> You retain all rights to your code.
                                    We claim no ownership or rights to any code you input into our service.
                                </p>
                            </div>
                        </div>

                        {/* Cookies and Tracking */}
                        <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-200/50 dark:border-gray-700/50 mb-8">
                            <div className="flex items-center mb-6">
                                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center mr-4">
                                    <Cookie className="w-6 h-6 text-white" />
                                </div>
                                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">4. Cookies and Tracking</h2>
                            </div>
                            <div className="prose prose-lg dark:prose-invert max-w-none">
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Essential Cookies</h3>
                                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                                    We use essential cookies that are necessary for the service to function:
                                </p>
                                <ul className="text-gray-600 dark:text-gray-300 space-y-2 mb-6">
                                    <li>• Session management and user preferences</li>
                                    <li>• Security and authentication tokens</li>
                                    <li>• Feature toggles and settings</li>
                                </ul>

                                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Analytics Cookies</h3>
                                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                                    We may use analytics services to understand how our service is used:
                                </p>
                                <ul className="text-gray-600 dark:text-gray-300 space-y-2 mb-4">
                                    <li>• Google Analytics (anonymized data)</li>
                                    <li>• Usage tracking and performance monitoring</li>
                                    <li>• Error tracking and debugging information</li>
                                </ul>

                                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                    You can control cookie preferences through your browser settings or
                                    use our cookie consent options when available.
                                </p>
                            </div>
                        </div>

                        {/* Third-Party Services */}
                        <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-200/50 dark:border-gray-700/50 mb-8">
                            <div className="flex items-center mb-6">
                                <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center mr-4">
                                    <Users className="w-6 h-6 text-white" />
                                </div>
                                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">5. Third-Party Services</h2>
                            </div>
                            <div className="prose prose-lg dark:prose-invert max-w-none">
                                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                                    Our service may integrate with third-party services that have their
                                    own privacy policies:
                                </p>
                                <ul className="text-gray-600 dark:text-gray-300 space-y-2 mb-6">
                                    <li>• <strong>Google Analytics:</strong> Website analytics and performance tracking</li>
                                    <li>• <strong>CDN Services:</strong> Content delivery for faster loading</li>
                                    <li>• <strong>Hosting Providers:</strong> Infrastructure and server services</li>
                                    <li>• <strong>Error Tracking:</strong> Bug reporting and monitoring services</li>
                                </ul>
                                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                                    These services may collect information according to their own privacy
                                    policies. We encourage you to review their policies:
                                </p>
                                <ul className="text-gray-600 dark:text-gray-300 space-y-2">
                                    <li>• Google Privacy Policy: policies.google.com/privacy</li>
                                    <li>• We only work with services that maintain appropriate privacy standards</li>
                                </ul>
                            </div>
                        </div>

                        {/* Data Security */}
                        <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-200/50 dark:border-gray-700/50 mb-8">
                            <div className="flex items-center mb-6">
                                <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-pink-500 rounded-xl flex items-center justify-center mr-4">
                                    <Shield className="w-6 h-6 text-white" />
                                </div>
                                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">6. Data Security</h2>
                            </div>
                            <div className="prose prose-lg dark:prose-invert max-w-none">
                                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                                    We implement appropriate security measures to protect your information:
                                </p>
                                <ul className="text-gray-600 dark:text-gray-300 space-y-2 mb-6">
                                    <li>• <strong>HTTPS Encryption:</strong> All data transmission is encrypted</li>
                                    <li>• <strong>Secure Infrastructure:</strong> Industry-standard hosting security</li>
                                    <li>• <strong>Access Controls:</strong> Limited access to any collected data</li>
                                    <li>• <strong>Regular Updates:</strong> Security patches and system updates</li>
                                    <li>• <strong>Data Minimization:</strong> We collect only necessary information</li>
                                </ul>
                                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                    However, no method of transmission over the internet is 100% secure.
                                    While we strive to protect your information, we cannot guarantee
                                    absolute security.
                                </p>
                            </div>
                        </div>

                        {/* Your Rights */}
                        <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-200/50 dark:border-gray-700/50 mb-8">
                            <div className="flex items-center mb-6">
                                <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-xl flex items-center justify-center mr-4">
                                    <Eye className="w-6 h-6 text-white" />
                                </div>
                                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">7. Your Privacy Rights</h2>
                            </div>
                            <div className="prose prose-lg dark:prose-invert max-w-none">
                                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                                    Depending on your location, you may have certain rights regarding
                                    your personal information:
                                </p>
                                <ul className="text-gray-600 dark:text-gray-300 space-y-2 mb-6">
                                    <li>• <strong>Access:</strong> Request information about data we have about you</li>
                                    <li>• <strong>Correction:</strong> Request correction of inaccurate information</li>
                                    <li>• <strong>Deletion:</strong> Request deletion of your personal information</li>
                                    <li>• <strong>Portability:</strong> Request a copy of your data in a portable format</li>
                                    <li>• <strong>Restriction:</strong> Request limitation of data processing</li>
                                    <li>• <strong>Objection:</strong> Object to certain types of data processing</li>
                                </ul>
                                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                                    To exercise these rights, please contact us at the email address
                                    provided below. We will respond to your request within the timeframe
                                    required by applicable law.
                                </p>
                                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                    Note: Since most of our processing happens locally in your browser,
                                    you can clear your local data at any time through your browser settings.
                                </p>
                            </div>
                        </div>

                        {/* Children's Privacy */}
                        <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-200/50 dark:border-gray-700/50 mb-8">
                            <div className="flex items-center mb-6">
                                <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-xl flex items-center justify-center mr-4">
                                    <AlertTriangle className="w-6 h-6 text-white" />
                                </div>
                                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">8. Children's Privacy</h2>
                            </div>
                            <div className="prose prose-lg dark:prose-invert max-w-none">
                                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                                    Our service is not directed to children under the age of 13. We do
                                    not knowingly collect personal information from children under 13.
                                    If you are a parent or guardian and believe your child has provided
                                    us with personal information, please contact us.
                                </p>
                                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                    If we discover that we have collected personal information from a
                                    child under 13 without parental consent, we will take steps to
                                    delete that information promptly.
                                </p>
                            </div>
                        </div>

                        {/* International Users */}
                        <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-200/50 dark:border-gray-700/50 mb-8">
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">9. International Users</h2>
                            <div className="prose prose-lg dark:prose-invert max-w-none">
                                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                                    Our service is available globally. If you are using our service from
                                    outside the country where our servers are located, please be aware
                                    that your information may be transferred to, stored, and processed
                                    in that country.
                                </p>
                                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                                    We comply with applicable privacy laws and regulations, including:
                                </p>
                                <ul className="text-gray-600 dark:text-gray-300 space-y-2 mb-4">
                                    <li>• European Union General Data Protection Regulation (GDPR)</li>
                                    <li>• California Consumer Privacy Act (CCPA)</li>
                                    <li>• Other applicable regional privacy laws</li>
                                </ul>
                                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                    By using our service, you consent to the transfer of your information
                                    to countries that may have different privacy laws than your country
                                    of residence.
                                </p>
                            </div>
                        </div>

                        {/* Changes to Policy */}
                        <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-gray-800/50 dark:to-gray-700/50 rounded-2xl p-8">
                            <div className="flex items-center mb-6">
                                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-green-500 rounded-xl flex items-center justify-center mr-4">
                                    <FileText className="w-6 h-6 text-white" />
                                </div>
                                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">10. Changes to This Policy</h2>
                            </div>
                            <div className="prose prose-lg dark:prose-invert max-w-none">
                                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                                    We may update this privacy policy from time to time. We will notify
                                    you of any changes by posting the new policy on this page and
                                    updating the "Last Updated" date.
                                </p>
                                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                                    For significant changes, we may provide additional notice such as
                                    adding a statement to our website or sending you a notification.
                                </p>
                                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                                    Your continued use of the service after any changes constitutes
                                    acceptance of the new privacy policy.
                                </p>
                                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                                    <strong>Last Updated:</strong> January 2025
                                </p>
                                <div className="bg-white/50 dark:bg-gray-700/50 rounded-xl p-6 mt-6">
                                    <div className="flex items-center mb-4">
                                        <Mail className="w-5 h-5 text-blue-600 dark:text-blue-400 mr-2" />
                                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Contact Us</h3>
                                    </div>
                                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                        If you have any questions about this Privacy Policy, please contact us at:
                                        <br />
                                        <a href="mailto:tejasgiri910@gmail.com" className="text-blue-600 dark:text-blue-400 hover:underline font-medium">
                                            tejasgiri910@gmail.com
                                        </a>
                                    </p>
                                </div>
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
                            Your Privacy Matters
                        </h2>
                        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                            We're committed to protecting your privacy. Start using our secure code comparison tool!
                        </p>
                        <button
                            onClick={() => window.location.href = '/'}
                            className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl font-semibold text-lg shadow-2xl hover:shadow-blue-500/25 transform hover:-translate-y-1 transition-all duration-300"
                        >
                            Start Comparing
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
}