import { Link } from '@remix-run/react'
import { Code2, Moon, Sun } from 'lucide-react'
import { Theme, useTheme } from 'remix-themes'

const Header = () => {
    const [theme, setTheme] = useTheme()

    return (
        <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-white/5 dark:bg-gray-900/20 backdrop-blur-xl">
            <div className="container mx-auto px-6 h-20 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                    <div className="relative">
                        <Code2 className="w-10 h-10 text-blue-500" />
                        <div className="absolute -top-1 -right-1 w-4 h-4 bg-emerald-500 rounded-full animate-ping"></div>
                    </div>
                    <div>
                        <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                            CodeDiff Pro
                        </Link>
                        <p className="text-xs text-gray-500 dark:text-gray-400">JavaScript Specialist</p>
                    </div>
                </div>
                <nav className="hidden md:flex items-center space-x-8">
                    <Link to="/about" className="text-gray-600 dark:text-gray-300 hover:text-blue-500 transition-colors font-medium">
                        About
                    </Link>
                    <Link to="/terms" className="text-gray-600 dark:text-gray-300 hover:text-blue-500 transition-colors font-medium">
                        Terms
                    </Link>
                    <Link to={"/privacy-policy"} className="text-gray-600 dark:text-gray-300 hover:text-blue-500 transition-colors font-medium">
                        Privacy Policy
                    </Link>

                    <Link to="/contact" className="text-gray-600 dark:text-gray-300 hover:text-blue-500 transition-colors font-medium">
                        Contact
                    </Link>
                    <button
                        onClick={() => {
                            theme === "dark" ? setTheme(Theme.LIGHT) : setTheme(Theme.DARK)
                        }}
                        className="p-2 rounded-full bg-gray-200/50 dark:bg-gray-800/50 backdrop-blur-sm hover:bg-gray-300/50 dark:hover:bg-gray-700/50 transition-all"
                    >
                        {theme === "dark" ? <Sun className="w-5 h-5 text-yellow-500" /> : <Moon className="w-5 h-5 text-gray-600" />}
                    </button>
                </nav>
            </div>
        </header>
    )
}

export default Header