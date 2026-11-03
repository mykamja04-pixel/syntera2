import { useState } from 'react'
import { Sparkles, Code2, Rocket, CheckCircle2, ArrowRight } from 'lucide-react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col items-center justify-center p-6 selection:bg-cyan-500 selection:text-white">
      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 -left-20 w-80 h-80 bg-indigo-500/15 rounded-full blur-3xl" />
      </div>

      <main className="relative z-10 max-w-2xl w-full flex flex-col items-center text-center space-y-8">
        {/* Status Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-700/50 text-cyan-300 text-xs font-medium tracking-wide">
          <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
          <span>React + TypeScript + Tailwind CSS 준비 완료</span>
        </div>

        {/* Title & Description */}
        <div className="space-y-3">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
            프로젝트 환경 설정 완료
          </h1>
          <p className="text-slate-400 text-sm sm:text-base max-w-lg mx-auto">
            Vite 8, React 19, TypeScript 및 Tailwind CSS v4 환경이 성공적으로 세팅되었습니다. 지금 바로 개발을 시작해보세요!
          </p>
        </div>

        {/* Interactive Card */}
        <div className="w-full bg-slate-900/60 border border-slate-800 rounded-2xl p-6 backdrop-blur-sm shadow-xl space-y-4">
          <div className="flex items-center justify-between text-left">
            <div>
              <h2 className="text-sm font-semibold text-slate-200">카운터 컴포넌트 테스트</h2>
              <p className="text-xs text-slate-400">React 상태 관리와 반응형 클릭 이벤트 테스트</p>
            </div>
            <button
              onClick={() => setCount((prev) => prev + 1)}
              className="px-4 py-2 bg-cyan-500 hover:bg-cyan-400 active:scale-95 text-slate-950 font-semibold text-sm rounded-xl transition duration-150 shadow-md shadow-cyan-500/20"
            >
              클릭 수: {count}
            </button>
          </div>

          <div className="pt-4 border-t border-slate-800/80 text-left">
            <span className="text-xs font-mono text-slate-400 bg-slate-950/70 px-2.5 py-1.5 rounded-lg border border-slate-800 block">
              💻 <code>src/App.tsx</code> 파일을 열어 코드를 수정해보세요.
            </span>
          </div>
        </div>

        {/* Feature Highlights Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full text-left">
          <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/80 space-y-2">
            <div className="w-8 h-8 rounded-lg bg-blue-500/10 text-blue-400 flex items-center justify-center">
              <Rocket className="w-4 h-4" />
            </div>
            <h3 className="font-semibold text-xs text-slate-200">초고속 번들러</h3>
            <p className="text-xs text-slate-400 leading-relaxed">Vite 기반 번들링으로 즉각적인 HMR 지원</p>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/80 space-y-2">
            <div className="w-8 h-8 rounded-lg bg-indigo-500/10 text-indigo-400 flex items-center justify-center">
              <Code2 className="w-4 h-4" />
            </div>
            <h3 className="font-semibold text-xs text-slate-200">엄격한 타입 안전성</h3>
            <p className="text-xs text-slate-400 leading-relaxed">TypeScript 최신 설정 및 <code className="text-cyan-400">@/</code> 경로 별칭</p>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/80 space-y-2">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center">
              <CheckCircle2 className="w-4 h-4" />
            </div>
            <h3 className="font-semibold text-xs text-slate-200">Tailwind CSS v4</h3>
            <p className="text-xs text-slate-400 leading-relaxed">Zero-config 유틸리티 클래스 지원</p>
          </div>
        </div>

        {/* Footer Links */}
        <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-slate-500">
          <a
            href="https://react.dev"
            target="_blank"
            rel="noreferrer"
            className="hover:text-cyan-400 flex items-center gap-1 transition"
          >
            React 공식 문서 <ArrowRight className="w-3 h-3" />
          </a>
          <span>•</span>
          <a
            href="https://tailwindcss.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-cyan-400 flex items-center gap-1 transition"
          >
            Tailwind CSS <ArrowRight className="w-3 h-3" />
          </a>
          <span>•</span>
          <a
            href="https://vite.dev"
            target="_blank"
            rel="noreferrer"
            className="hover:text-cyan-400 flex items-center gap-1 transition"
          >
            Vite <ArrowRight className="w-3 h-3" />
          </a>
        </div>
      </main>
    </div>
  )
}

export default App
