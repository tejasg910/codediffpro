import { Link } from "@remix-run/react"

const Footer = () => {
    return (
        <footer className="relative bg-gray-950 text-white pb-8">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-950/50 to-purple-950/50"></div>
            <div className="container mx-auto px-6 relative z-10">


                <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between">
                    <p className="text-gray-400">
                        © {new Date().getFullYear()} CodeDiff Pro. All rights reserved.
                    </p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <Link to="/privacy-policy" className="text-gray-400 hover:text-white transition-colors">Privacy</Link>
                        <Link to="/terms" className="text-gray-400 hover:text-white transition-colors">Terms</Link>
                        <Link to="/about" className="text-gray-400 hover:text-white transition-colors">About</Link>
                        <Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer