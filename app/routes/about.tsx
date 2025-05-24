import { Sparkles, Code, Users, Zap, Shield, Globe } from "lucide-react";
import { useTheme } from "remix-themes";

export default function About() {
    const [theme, _] = useTheme()
    return (
        <div className={`min-h-screen bg-gradient-to-br from-gray-50 via-white ${theme === "dark" ? "dark bg-gray-950" : "bg-gray-50"} to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900`}>
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
                                About Our Mission
                            </span>
                        </div>

                        <h1 className="text-5xl md:text-6xl font-black mb-8 leading-tight">
                            <span className="bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 dark:from-white dark:via-gray-200 dark:to-white bg-clip-text text-transparent">
                                Empowering Developers
                            </span>
                            <br />
                            <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-blue-600 bg-clip-text text-transparent">
                                Through Better Code
                            </span>
                        </h1>

                        <p className="text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
                            We believe that comparing and understanding code changes shouldn't be complicated.
                            Our mission is to provide developers with the most intuitive and powerful JavaScript
                            comparison tools available.
                        </p>
                    </div>
                </div>
            </section>

            {/* Story Section */}
            <section className="py-16 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
                            Our Story
                        </h2>
                        <div className="prose prose-lg dark:prose-invert mx-auto">
                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                                Born from the frustration of comparing code changes across different versions,
                                our JavaScript code comparison tool was created to solve a real problem that
                                developers face daily. Whether you're reviewing pull requests, debugging
                                differences between environments, or learning from code examples, we make
                                it simple and visual.
                            </p>
                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                                What started as a side project has grown into a comprehensive platform used
                                by thousands of developers worldwide. We've focused on creating an
                                enterprise-grade diff engine that's accessible to everyone, from beginners
                                learning JavaScript to senior engineers working on complex codebases.
                            </p>
                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                Our commitment is to continuously improve and expand our tools while
                                keeping them fast, reliable, and completely free for the developer community.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Grid */}
            <section className="py-16">
                <div className="container mx-auto px-6">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
                            What Makes Us Different
                        </h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-200/50 dark:border-gray-700/50 hover:shadow-xl transition-all duration-300">
                                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-6">
                                    <Code className="w-6 h-6 text-white" />
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                                    Intelligent Analysis
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                    Our diff engine understands JavaScript syntax and semantics, providing
                                    more accurate comparisons than simple text-based tools.
                                </p>
                            </div>

                            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-200/50 dark:border-gray-700/50 hover:shadow-xl transition-all duration-300">
                                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-6">
                                    <Zap className="w-6 h-6 text-white" />
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                                    Lightning Fast
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                    Built with performance in mind, our tool handles large files and
                                    complex comparisons without breaking a sweat.
                                </p>
                            </div>

                            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-200/50 dark:border-gray-700/50 hover:shadow-xl transition-all duration-300">
                                <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center mb-6">
                                    <Users className="w-6 h-6 text-white" />
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                                    Developer Focused
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                    Built by developers, for developers. Every feature is designed
                                    with real-world development workflows in mind.
                                </p>
                            </div>

                            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-200/50 dark:border-gray-700/50 hover:shadow-xl transition-all duration-300">
                                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center mb-6">
                                    <Shield className="w-6 h-6 text-white" />
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                                    Privacy First
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                    Your code never leaves your browser. All comparisons happen
                                    client-side, ensuring your intellectual property stays secure.
                                </p>
                            </div>

                            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-200/50 dark:border-gray-700/50 hover:shadow-xl transition-all duration-300">
                                <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-rose-500 rounded-xl flex items-center justify-center mb-6">
                                    <Globe className="w-6 h-6 text-white" />
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                                    Always Available
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                    99.9% uptime guarantee with global CDN distribution ensures
                                    you can compare code whenever and wherever you need.
                                </p>
                            </div>

                            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-200/50 dark:border-gray-700/50 hover:shadow-xl transition-all duration-300">
                                <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center mb-6">
                                    <Sparkles className="w-6 h-6 text-white" />
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                                    Continuously Evolving
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                    Regular updates and new features based on community feedback
                                    and the latest developments in JavaScript tooling.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-16 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800/50 dark:to-gray-700/50">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12">
                            Trusted by Developers Worldwide
                        </h2>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                            <div className="text-center">
                                <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">50K+</div>
                                <div className="text-gray-600 dark:text-gray-400">Active Users</div>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl font-bold bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent mb-2">1M+</div>
                                <div className="text-gray-600 dark:text-gray-400">Code Comparisons</div>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">99.9%</div>
                                <div className="text-gray-600 dark:text-gray-400">Uptime</div>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent mb-2">195+</div>
                                <div className="text-gray-600 dark:text-gray-400">Countries</div>
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
                            Join thousands of developers who trust our tool for their daily code comparison needs.
                        </p>
                        <button
                            onClick={() => window.location.href = '/'}
                            className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl font-semibold text-lg shadow-2xl hover:shadow-blue-500/25 transform hover:-translate-y-1 transition-all duration-300"
                        >
                            Start Comparing Now
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
}