import { Shield, AlertTriangle, Info, Sparkles } from "lucide-react";

export default function Disclaimer() {
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
                                Important Information
                            </span>
                        </div>

                        <h1 className="text-5xl md:text-6xl font-black mb-8 leading-tight">
                            <span className="bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 dark:from-white dark:via-gray-200 dark:to-white bg-clip-text text-transparent">
                                Disclaimer
                            </span>
                        </h1>

                        <p className="text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
                            Please read this disclaimer carefully before using our JavaScript code comparison tool.
                            By using our service, you acknowledge and agree to these terms.
                        </p>
                    </div>
                </div>
            </section>

            {/* Disclaimer Content */}
            <section className="py-16">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto">

                        {/* General Disclaimer */}
                        <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-200/50 dark:border-gray-700/50 mb-8">
                            <div className="flex items-center mb-6">
                                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mr-4">
                                    <Info className="w-6 h-6 text-white" />
                                </div>
                                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">General Disclaimer</h2>
                            </div>
                            <div className="prose prose-lg dark:prose-invert max-w-none">
                                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                                    The information and tools provided on this website are for educational and
                                    informational purposes only. While we strive to provide accurate and up-to-date
                                    code comparison functionality, we make no representations or warranties of any
                                    kind, express or implied, about the completeness, accuracy, reliability,
                                    suitability, or availability of the website or the information, products,
                                    services, or related graphics contained on the website.
                                </p>
                                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                    Any reliance you place on such information is strictly at your own risk.
                                    In no event will we be liable for any loss or damage including without
                                    limitation, indirect or consequential loss or damage, or any loss or
                                    damage whatsoever arising from loss of data or profits arising out of,
                                    or in connection with, the use of this website.
                                </p>
                            </div>
                        </div>

                        {/* Code Security */}
                        <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-200/50 dark:border-gray-700/50 mb-8">
                            <div className="flex items-center mb-6">
                                <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center mr-4">
                                    <Shield className="w-6 h-6 text-white" />
                                </div>
                                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Code Security & Privacy</h2>
                            </div>
                            <div className="prose prose-lg dark:prose-invert max-w-none">
                                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                                    While our tool processes code comparisons client-side (in your browser) and
                                    does not transmit your code to our servers, you should exercise caution when
                                    comparing sensitive, proprietary, or confidential code. We recommend:
                                </p>
                                <ul className="text-gray-600 dark:text-gray-300 space-y-2 mb-4">
                                    <li>• Removing sensitive data, API keys, or credentials before comparison</li>
                                    <li>• Using dummy data for testing purposes when possible</li>
                                    <li>• Being aware of browser extensions that might access page content</li>
                                    <li>• Understanding your organization's code sharing policies</li>
                                </ul>
                                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                    We are not responsible for any breach of confidentiality, data loss, or
                                    unauthorized access to code that results from your use of this tool.
                                </p>
                            </div>
                        </div>

                        {/* Tool Accuracy */}
                        <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-200/50 dark:border-gray-700/50 mb-8">
                            <div className="flex items-center mb-6">
                                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center mr-4">
                                    <AlertTriangle className="w-6 h-6 text-white" />
                                </div>
                                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Tool Accuracy & Limitations</h2>
                            </div>
                            <div className="prose prose-lg dark:prose-invert max-w-none">
                                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                                    Our JavaScript code comparison tool is designed to identify differences
                                    between code snippets, but it may not catch all nuances or provide
                                    perfect semantic analysis. Users should:
                                </p>
                                <ul className="text-gray-600 dark:text-gray-300 space-y-2 mb-4">
                                    <li>• Verify critical comparisons through manual review</li>
                                    <li>• Use additional testing and validation methods</li>
                                    <li>• Understand that the tool focuses on textual differences</li>
                                    <li>• Not rely solely on our tool for production deployments</li>
                                </ul>
                                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                    We continuously improve our algorithms, but we cannot guarantee 100%
                                    accuracy in all scenarios or edge cases.
                                </p>
                            </div>
                        </div>

                        {/* Professional Advice */}
                        <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-200/50 dark:border-gray-700/50 mb-8">
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Professional Advice</h2>
                            <div className="prose prose-lg dark:prose-invert max-w-none">
                                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                                    This tool is not a substitute for professional software development
                                    practices, code review processes, or expert consultation. For critical
                                    applications, security-sensitive code, or complex software projects,
                                    we recommend:
                                </p>
                                <ul className="text-gray-600 dark:text-gray-300 space-y-2 mb-4">
                                    <li>• Consulting with experienced developers or architects</li>
                                    <li>• Implementing proper code review workflows</li>
                                    <li>• Using comprehensive testing strategies</li>
                                    <li>• Following industry best practices and standards</li>
                                </ul>
                            </div>
                        </div>

                        {/* External Links */}
                        <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-200/50 dark:border-gray-700/50 mb-8">
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">External Links & Third-Party Content</h2>
                            <div className="prose prose-lg dark:prose-invert max-w-none">
                                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                                    Our website may contain links to external websites, third-party resources,
                                    or advertisements. These links are provided for convenience and informational
                                    purposes only. We do not endorse, control, or assume responsibility for:
                                </p>
                                <ul className="text-gray-600 dark:text-gray-300 space-y-2 mb-4">
                                    <li>• The content, privacy policies, or practices of external sites</li>
                                    <li>• Products or services offered by third parties</li>
                                    <li>• The accuracy or reliability of external information</li>
                                    <li>• Any transactions conducted with third parties</li>
                                </ul>
                                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                    Your interactions with external sites and services are solely between
                                    you and those parties.
                                </p>
                            </div>
                        </div>

                        {/* Service Availability */}
                        <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-200/50 dark:border-gray-700/50 mb-8">
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Service Availability</h2>
                            <div className="prose prose-lg dark:prose-invert max-w-none">
                                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                                    While we strive to maintain 99.9% uptime, we cannot guarantee uninterrupted
                                    service availability. Our service may be temporarily unavailable due to:
                                </p>
                                <ul className="text-gray-600 dark:text-gray-300 space-y-2 mb-4">
                                    <li>• Scheduled maintenance and updates</li>
                                    <li>• Technical difficulties or server issues</li>
                                    <li>• Internet connectivity problems</li>
                                    <li>• Force majeure events beyond our control</li>
                                </ul>
                                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                    We are not liable for any inconvenience, loss, or damage resulting
                                    from service interruptions.
                                </p>
                            </div>
                        </div>

                        {/* Updates */}
                        <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800/50 dark:to-gray-700/50 rounded-2xl p-8">
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Updates to This Disclaimer</h2>
                            <div className="prose prose-lg dark:prose-invert max-w-none">
                                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                                    We reserve the right to update, modify, or replace this disclaimer at any
                                    time without prior notice. Changes will be effective immediately upon posting
                                    on this page. Your continued use of our service after any changes constitutes
                                    acceptance of the new disclaimer.
                                </p>
                                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                                    <strong>Last Updated:</strong> January 2025
                                </p>
                                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                    If you have questions about this disclaimer, please contact us at
                                    <a href="mailto:tejasgiri910@gmail.com" className="text-blue-600 dark:text-blue-400 hover:underline">
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
                            Ready to Compare Your Code?
                        </h2>
                        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                            Now that you understand our terms, start using our powerful comparison tool.
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