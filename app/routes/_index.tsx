import { useState } from "react";
import { Copy, FileText, GitCompare, Moon, Sun, Zap, Check, Play, Code2, Sparkles, ArrowRight, Github, Shield, Cpu } from "lucide-react";
import * as Diff from "diff";
import { Theme, useTheme } from "remix-themes";

const JSCodeCompare = () => {
  const [originalCode, setOriginalCode] = useState(`function calculateSum(a, b) {
  return a + b;
}

console.log(calculateSum(5, 3));`);

  const [modifiedCode, setModifiedCode] = useState(`function calculateSum(a, b, c = 0) {
  const result = a + b + c;
  return result;
}

console.log(calculateSum(5, 3, 2));`);
  const [theme, setTheme] = useTheme()
  console.log(theme, "This is theme")
  interface DiffResultType {
    leftLines: Array<{ type: 'removed' | 'placeholder' | 'unchanged'; content?: string; lineNum?: number }>;
    rightLines: Array<{ type: 'added' | 'placeholder' | 'unchanged'; content?: string; lineNum?: number }>;
  }

  const [diffResult, setDiffResult] = useState<DiffResultType | null>(null);
  const [isComparing, setIsComparing] = useState(false);
  const [copied, setCopied] = useState({ original: false, modified: false });

  const compareCodes = async () => {
    setIsComparing(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    const diff = Diff.diffLines(originalCode, modifiedCode);
    const leftLines: Array<{ type: 'removed' | 'placeholder' | 'unchanged', content?: string, lineNum?: number }> = [];
    const rightLines: Array<{ type: 'added' | 'placeholder' | 'unchanged', content?: string, lineNum?: number }> = [];
    let originalLineNum = 1;
    let modifiedLineNum = 1;

    diff.forEach(part => {
      const lines = part.value.split('\n');
      if (lines[lines.length - 1] === '' && !part.value.endsWith('\n\n')) {
        lines.pop();
      }
      if (part.removed) {
        lines.forEach(line => {
          leftLines.push({ type: 'removed', content: line, lineNum: originalLineNum });
          rightLines.push({ type: 'placeholder' });
          originalLineNum++;
        });
      } else if (part.added) {
        lines.forEach(line => {
          leftLines.push({ type: 'placeholder' });
          rightLines.push({ type: 'added', content: line, lineNum: modifiedLineNum });
          modifiedLineNum++;
        });
      } else {
        lines.forEach(line => {
          leftLines.push({ type: 'unchanged', content: line, lineNum: originalLineNum });
          rightLines.push({ type: 'unchanged', content: line, lineNum: modifiedLineNum });
          originalLineNum++;
          modifiedLineNum++;
        });
      }
    });

    setDiffResult({ leftLines, rightLines });
    setIsComparing(false);
  };

  const copyToClipboard = async (text: string, type: string) => {
    await navigator.clipboard.writeText(text);
    setCopied({ ...copied, [type]: true });
    setTimeout(() => setCopied({ ...copied, [type]: false }), 2000);
  };

  const clearCode = (type: string) => {
    if (type === "original") {
      setOriginalCode("");
    } else {
      setModifiedCode("");
    }
  };


  return (
    <div className={`min-h-screen transition-all duration-500 ${theme === "dark" ? "dark bg-gray-950" : "bg-gray-50"}`}>
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-emerald-500/20 to-blue-600/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

 

      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-500/30 via-purple-500/20 to-transparent rounded-full blur-3xl opacity-60"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-tl from-emerald-500/30 via-blue-500/20 to-transparent rounded-full blur-3xl opacity-60"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear_gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:50px_50px] dark:bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear_gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)]"></div>

        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="inline-flex items-center px-6 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 backdrop-blur-sm mb-8">
              <Sparkles className="w-4 h-4 mr-2 text-blue-400" />
              <span className="text-sm font-medium bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                AI-Powered Code Analysis
              </span>
            </div>

            <h1 className="text-6xl md:text-8xl font-black mb-8 leading-tight">
              <span className="bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 dark:from-white dark:via-gray-200 dark:to-white bg-clip-text text-transparent">
                Compare
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-blue-600 bg-clip-text text-transparent animate-pulse">
                JavaScript
              </span>
              <br />
              <span className="bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 dark:from-white dark:via-gray-200 dark:to-white bg-clip-text text-transparent">
                Like a Pro
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              Enterprise-grade diff engine with intelligent syntax highlighting,
              semantic analysis, and instant visualization of code changes.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
              <button
                onClick={() => document.getElementById('tool')?.scrollIntoView({ behavior: 'smooth' })}
                className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl font-semibold text-lg shadow-2xl hover:shadow-blue-500/25 transform hover:-translate-y-1 transition-all duration-300 flex items-center"
              >
                <Play className="w-6 h-6 mr-3 group-hover:scale-110 transition-transform" />
                Start Comparing
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>

              <button className="px-8 py-4 bg-white/10 dark:bg-gray-800/50 backdrop-blur-sm border border-white/20 dark:border-gray-700/50 text-gray-900 dark:text-white rounded-2xl font-semibold text-lg hover:bg-white/20 dark:hover:bg-gray-700/50 transition-all duration-300 flex items-center">
                <Github className="w-6 h-6 mr-3" />
                View on GitHub
              </button>
            </div>

            <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">50K+</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">Developers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">1M+</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">Comparisons</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">99.9%</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">Uptime</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="tool" className="py-24 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Professional Code Comparison
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Experience the most advanced JavaScript diff engine with intelligent syntax highlighting and semantic analysis.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            <div className="group">
              <div className="bg-white/50 dark:bg-gray-900/50 backdrop-blur-xl rounded-3xl border border-white/20 dark:border-gray-800/50 shadow-2xl hover:shadow-emerald-500/10 transition-all duration-500 overflow-hidden">
                <div className="flex items-center justify-between p-6 border-b border-gray-200/50 dark:border-gray-800/50">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full animate-pulse delay-100"></div>
                    <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse delay-200"></div>
                    <span className="ml-4 font-semibold text-gray-900 dark:text-white flex items-center">
                      <FileText className="w-5 h-5 mr-2 text-emerald-500" />
                      Original Code
                    </span>
                  </div>
                  <div className="flex space-x-2">
                    <button
                      onClick={() => copyToClipboard(originalCode, "original")}
                      className="p-2 rounded-xl text-gray-800 dark:text-gray-100 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                    >
                      {copied.original ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                    </button>
                    <button
                      onClick={() => clearCode("original")}
                      className="px-4 py-2 text-gray-800 dark:text-gray-100 rounded-xl bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors text-sm font-medium"
                    >
                      Clear
                    </button>
                  </div>
                </div>
                <div className="p-6">
                  <textarea
                    value={originalCode}
                    onChange={(e) => setOriginalCode(e.target.value)}
                    placeholder="// Paste your original JavaScript code here..."
                    className="w-full h-80 bg-transparent border-none outline-none resize-none font-mono text-sm text-gray-900 dark:text-gray-100 placeholder-gray-400"
                    spellCheck={false}
                  />
                </div>
              </div>
            </div>

            <div className="group">
              <div className="bg-white/50 dark:bg-gray-900/50 backdrop-blur-xl rounded-3xl border border-white/20 dark:border-gray-800/50 shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 overflow-hidden">
                <div className="flex items-center justify-between p-6 border-b border-gray-200/50 dark:border-gray-800/50">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full animate-pulse delay-100"></div>
                    <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse delay-200"></div>
                    <span className="ml-4 font-semibold text-gray-900 dark:text-white flex items-center">
                      <FileText className="w-5 h-5 mr-2 text-blue-500" />
                      Modified Code
                    </span>
                  </div>
                  <div className="flex space-x-2">
                    <button
                      onClick={() => copyToClipboard(modifiedCode, "modified")}
                      className="p-2 rounded-xl text-gray-800 dark:text-gray-100 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                    >
                      {copied.modified ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                    </button>
                    <button
                      onClick={() => clearCode("modified")}
                      className="px-4 py-2 rounded-xl text-gray-800 dark:text-gray-100 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors text-sm font-medium"
                    >
                      Clear
                    </button>
                  </div>
                </div>
                <div className="p-6">
                  <textarea
                    value={modifiedCode}
                    onChange={(e) => setModifiedCode(e.target.value)}
                    placeholder="// Paste your modified JavaScript code here..."
                    className="w-full h-80 bg-transparent border-none outline-none resize-none font-mono text-sm text-gray-900 dark:text-gray-100 placeholder-gray-400"
                    spellCheck={false}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mb-12">
            <button
              onClick={compareCodes}
              disabled={isComparing}
              className="group relative px-12 py-6 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 dark:from-blue-700 dark:via-purple-700 dark:to-blue-800 text-white rounded-2xl font-bold text-xl shadow-2xl hover:shadow-blue-500/25 dark:hover:shadow-blue-400/10 transform hover:-translate-y-1 transition-all duration-300 disabled:opacity-50 disabled:transform-none disabled:cursor-not-allowed"
            >
              {isComparing ? (
                <div className="flex items-center">
                  <div className="w-6 h-6 border-2 border-white/30 dark:border-white/40 border-t-white rounded-full animate-spin mr-3"></div>
                  <span className="text-white/90 dark:text-white/80">Analyzing Code...</span>
                </div>
              ) : (
                <div className="flex items-center">
                  <GitCompare className="w-6 h-6 mr-3 group-hover:scale-110 transition-transform text-white/90 dark:text-white/80" />
                  <span className="text-white/90 dark:text-white/80">Compare Code</span>
                  <Sparkles className="w-5 h-5 ml-3 group-hover:rotate-12 transition-transform text-white/90 dark:text-white/80" />
                </div>
              )}
            </button>
          </div>

          {diffResult && (
            <div className="bg-white/50 dark:bg-gray-900/50 backdrop-blur-xl rounded-3xl border border-white/20 dark:border-gray-800/50 shadow-2xl overflow-hidden">
              <div className="flex items-center justify-between p-6 border-b border-gray-200/50 dark:border-gray-800/50">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center">
                  <GitCompare className="w-6 h-6 mr-3 text-purple-500" />
                  Code Comparison
                </h3>
                <div className="flex items-center space-x-6 text-sm">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
                    <span className="text-gray-600 dark:text-gray-400">Changes</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-emerald-500 rounded-full mr-2"></div>
                    <span className="text-gray-600 dark:text-gray-400">Additions</span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 border-b border-gray-200/50 dark:border-gray-800/50">
                <div className="p-4 bg-blue-50/30 dark:bg-blue-950/20 border-r border-gray-200/50 dark:border-gray-800/50">
                  <div className="flex items-center text-blue-700 dark:text-blue-300 font-semibold">
                    <FileText className="w-5 h-5 mr-3" />
                    Original Code
                  </div>
                </div>
                <div className="p-4 bg-emerald-50/30 dark:bg-emerald-950/20">
                  <div className="flex items-center text-emerald-700 dark:text-emerald-300 font-semibold">
                    <FileText className="w-5 h-5 mr-3" />
                    Modified Code
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 font-mono text-sm max-h-96 overflow-auto">
                <div className="border-r max-w-full border-gray-200/50 dark:border-gray-800/50 overflow-x-hidden">                  {diffResult.leftLines.map((line, index) => (
                  <div
                    key={`original-${index}`}
                    className={`flex border-b border-gray-100/30 dark:border-gray-800/20 min-h-[1.75rem] ${line.type === 'removed'
                      ? "bg-red-50/60 dark:bg-red-950/30"
                      : line.type === 'placeholder'
                        ? "bg-gray-100/30 dark:bg-gray-800/20"
                        : "hover:bg-gray-50/50 dark:hover:bg-gray-800/30"
                      } transition-colors`}
                  >
                    <div className="w-12 flex-shrink-0 px-2 py-1 text-gray-400 dark:text-gray-500 text-xs text-right border-r border-gray-200/30 dark:border-gray-700/30 bg-gray-50/50 dark:bg-gray-800/30 flex items-center justify-center">
                      {line.type !== 'placeholder' ? line.lineNum : ''}
                    </div>
                    <div className="flex-1 px-3 py-1 flex items-center">
                      {line.type !== 'placeholder' ? (
                        <pre
                          className={`w-full whitespace-pre-wrap break-words text-sm leading-relaxed ${line.type === 'removed'
                            ? "text-red-700 dark:text-red-300"
                            : "text-gray-800 dark:text-gray-200"
                            }`}
                        >
                          {line.content}
                        </pre>
                      ) : (
                        <div className="text-gray-400 italic text-xs py-1">
                          (line not present)
                        </div>
                      )}
                    </div>
                    <div className="w-6 flex-shrink-0 flex items-center justify-center">
                      {line.type === 'removed' && (
                        <div className="w-2 h-2 rounded-full bg-red-400"></div>
                      )}
                    </div>
                  </div>
                ))}
                </div>

                <div className="overflow-x-hidden">                  {diffResult.rightLines.map((line, index) => (
                  <div
                    key={`modified-${index}`}
                    className={`flex border-b border-gray-100/30 dark:border-gray-800/20 min-h-[1.75rem] ${line.type === 'added'
                      ? "bg-emerald-50/60 dark:bg-emerald-950/30"
                      : line.type === 'placeholder'
                        ? "bg-gray-100/30 dark:bg-gray-800/20"
                        : "hover:bg-gray-50/50 dark:hover:bg-gray-800/30"
                      } transition-colors`}
                  >
                    <div className="w-12 flex-shrink-0 px-2 py-1 text-gray-400 dark:text-gray-500 text-xs text-right border-r border-gray-200/30 dark:border-gray-700/30 bg-gray-50/50 dark:bg-gray-800/30 flex items-center justify-center">
                      {line.type !== 'placeholder' ? line.lineNum : ''}
                    </div>
                    <div className="flex-1 px-3 py-1 flex items-center">
                      {line.type !== 'placeholder' ? (
                        <pre
                          className={`w-full whitespace-pre-wrap break-words text-sm leading-relaxed ${line.type === 'added'
                            ? "text-emerald-700 dark:text-emerald-300"
                            : "text-gray-800 dark:text-gray-200"
                            }`}
                        >
                          {line.content}
                        </pre>
                      ) : (
                        <div className="text-gray-400 italic text-xs py-1">
                          (line not present)
                        </div>
                      )}
                    </div>
                    <div className="w-6 flex-shrink-0 flex items-center justify-center">
                      {line.type === 'added' && (
                        <div className="w-2 h-2 rounded-full bg-emerald-400"></div>
                      )}
                    </div>
                  </div>
                ))}
                </div>
              </div>

              <div className="p-4 bg-gray-50/50 dark:bg-gray-800/30 border-t border-gray-200/50 dark:border-gray-800/50">
                <div className="flex items-center justify-center space-x-8 text-sm">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                    <span className="text-gray-600 dark:text-gray-400">
                      {originalCode.split('\n').length} lines original
                    </span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></div>
                    <span className="text-gray-600 dark:text-gray-400">
                      {modifiedCode.split('\n').length} lines modified
                    </span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mr-2"></div>
                    <span className="text-gray-600 dark:text-gray-400">
                      {(() => {
                        const originalLines = originalCode.split('\n');
                        const modifiedLines = modifiedCode.split('\n');
                        let changes = 0;
                        const maxLines = Math.max(originalLines.length, modifiedLines.length);
                        for (let i = 0; i < maxLines; i++) {
                          if ((originalLines[i] || '') !== (modifiedLines[i] || '')) {
                            changes++;
                          }
                        }
                        return changes;
                      })()} differences
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      <section id="features" className="py-24 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Why Developers Choose Us
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Built by developers, for developers. Every feature is designed to enhance your coding workflow.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="group p-8 bg-white/50 dark:bg-gray-900/50 backdrop-blur-xl rounded-3xl border border-white/20 dark:border-gray-800/50 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Lightning Fast
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Instant comparison with real-time highlighting powered by advanced algorithms. No waiting, no delays.
              </p>
            </div>

            <div className="group p-8 bg-white/50 dark:bg-gray-900/50 backdrop-blur-xl rounded-3xl border border-white/20 dark:border-gray-800/50 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Code2 className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Smart Syntax
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Intelligent JavaScript syntax highlighting with semantic understanding and context-aware coloring.
              </p>
            </div>

            <div className="group p-8 bg-white/50 dark:bg-gray-900/50 backdrop-blur-xl rounded-3xl border border-white/20 dark:border-gray-800/50 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Secure & Private
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Your code never leaves your browser. Everything is processed locally with enterprise-grade security.
              </p>
            </div>
          </div>
        </div>
      </section>

    
    </div>
  );
};

export default JSCodeCompare;