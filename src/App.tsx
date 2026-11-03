import {
  BarChart3,
  FileText,
  FileSpreadsheet,
  Presentation,
  Upload,
  Download,
  TrendingUp,
  ArrowRight,
  Sparkles,
  CheckCircle,
} from 'lucide-react'

const features = [
  {
    icon: Upload,
    title: 'Excel 원장 가져오기',
    desc: '월간 판매 원장 엑셀 파일을 불러와 자동으로 분석·요약합니다.',
  },
  {
    icon: TrendingUp,
    title: '매출 추이 & 예상',
    desc: '목표·실적 데이터를 입력하면 그래프와 예상 매출이 자동 생성됩니다.',
  },
  {
    icon: BarChart3,
    title: '핵심 지표 자동 산출',
    desc: '누적 실적, 달성률, 직전 대비 증감 등 주요 KPI를 즉시 계산합니다.',
  },
  {
    icon: FileText,
    title: 'Word로 저장',
    desc: '완성된 보고서를 Word(.docx) 형식으로 바로 다운로드합니다.',
  },
  {
    icon: FileSpreadsheet,
    title: 'Excel로 저장',
    desc: '표·숫자 중심 데이터를 엑셀(.xlsx)로 깔끔하게 저장합니다.',
  },
  {
    icon: Presentation,
    title: 'PowerPoint로 저장',
    desc: '발표용 슬라이드(.pptx)를 자동으로 생성하여 다운로드합니다.',
  },
]

const steps = [
  { num: '01', label: '보고서 정보 입력', desc: '회사·부서, 보고 기간, 작성자를 입력합니다.' },
  { num: '02', label: 'Excel 업로드 또는 직접 입력', desc: '판매 원장 엑셀을 올리거나 수동으로 실적을 입력합니다.' },
  { num: '03', label: '지표 확인 및 내용 편집', desc: '자동 산출된 KPI와 분석 내용을 검토하고 수정합니다.' },
  { num: '04', label: '파일 저장 및 공유', desc: 'Word·Excel·PowerPoint·한글 형식으로 즉시 저장합니다.' },
]

export default function App() {
  const handleOpen = () => {
    window.open('/app.html', '_blank', 'noopener,noreferrer')
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 antialiased selection:bg-teal-500/40">
      {/* ── Hero ─────────────────────────────────────── */}
      <section className="relative overflow-hidden">
        {/* Background glows */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-32 left-1/2 h-[600px] w-[700px] -translate-x-1/2 rounded-full bg-teal-600/20 blur-3xl" />
          <div className="absolute top-40 -right-20 h-72 w-72 rounded-full bg-indigo-600/15 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-5xl px-6 pb-24 pt-20 text-center">
          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-teal-700/50 bg-teal-950/70 px-4 py-1.5 text-xs font-medium tracking-wide text-teal-300">
            <Sparkles className="h-3.5 w-3.5 animate-pulse text-teal-400" />
            판매실적 보고서 자동화 솔루션
          </div>

          {/* Title */}
          <h1 className="mb-4 bg-gradient-to-br from-white via-slate-200 to-teal-300 bg-clip-text text-5xl font-black tracking-tight text-transparent sm:text-7xl">
            Synthera
          </h1>
          <p className="mx-auto mb-10 max-w-2xl text-base leading-relaxed text-slate-400 sm:text-lg">
            Excel을 올리거나 데이터를 직접 입력하면 판매실적 보고서가 완성됩니다.
            <br className="hidden sm:block" />
            <span className="text-teal-400">Word · Excel · PowerPoint</span> 파일로 즉시 저장하세요.
          </p>

          {/* CTA */}
          <button
            onClick={handleOpen}
            className="group inline-flex items-center gap-3 rounded-2xl bg-teal-500 px-8 py-4 text-base font-bold text-slate-950 shadow-xl shadow-teal-500/25 transition hover:bg-teal-400 active:scale-95"
          >
            <Download className="h-5 w-5" />
            보고서 작성 시작하기
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </button>
          <p className="mt-3 text-xs text-slate-500">설치 불필요 · 브라우저에서 바로 실행</p>
        </div>
      </section>

      {/* ── Features ─────────────────────────────────── */}
      <section className="mx-auto max-w-5xl px-6 pb-24">
        <h2 className="mb-2 text-center text-2xl font-bold text-white sm:text-3xl">주요 기능</h2>
        <p className="mb-10 text-center text-sm text-slate-500">
          입력부터 저장까지, 보고서 작성의 모든 과정을 한 화면에서 처리합니다.
        </p>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div
              key={f.title}
              className="group rounded-2xl border border-slate-800 bg-slate-900/60 p-5 backdrop-blur-sm transition hover:border-teal-700/60 hover:bg-slate-900"
            >
              <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-teal-950 text-teal-400 transition group-hover:bg-teal-900">
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="mb-1 font-semibold text-slate-100">{f.title}</h3>
              <p className="text-sm leading-relaxed text-slate-400">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── How it works ─────────────────────────────── */}
      <section className="border-y border-slate-800/60 bg-slate-900/30 py-24">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="mb-10 text-center text-2xl font-bold text-white sm:text-3xl">사용 방법</h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {steps.map((s) => (
              <div key={s.num} className="flex gap-4">
                <span className="mt-0.5 flex-shrink-0 text-3xl font-black text-teal-600/40">{s.num}</span>
                <div>
                  <p className="font-semibold text-slate-100">{s.label}</p>
                  <p className="mt-0.5 text-sm leading-relaxed text-slate-400">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Highlights ───────────────────────────────── */}
      <section className="mx-auto max-w-4xl px-6 py-24">
        <h2 className="mb-10 text-center text-2xl font-bold text-white sm:text-3xl">왜 Synthera인가요?</h2>
        <div className="grid gap-3 sm:grid-cols-2">
          {[
            '설치 없이 브라우저만으로 실행',
            '인터넷 연결 없이도 데이터 입력 가능',
            '한글·영문 모두 지원하는 문서 저장',
            '월별·분기별·연간 단위 자유롭게 선택',
            '선형 추세·평균 증가율 등 예상 매출 자동 계산',
            'Word·Excel·PowerPoint 동시 저장 지원',
          ].map((t) => (
            <div key={t} className="flex items-center gap-3 rounded-xl border border-slate-800 bg-slate-900/40 px-4 py-3">
              <CheckCircle className="h-4 w-4 flex-shrink-0 text-teal-400" />
              <span className="text-sm text-slate-300">{t}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── Bottom CTA ───────────────────────────────── */}
      <section className="border-t border-slate-800/60 bg-slate-900/40 py-20 text-center">
        <h2 className="mb-3 text-2xl font-bold text-white sm:text-3xl">지금 바로 시작해보세요</h2>
        <p className="mb-8 text-sm text-slate-400">복잡한 판매 보고서를 몇 분 안에 완성하세요.</p>
        <button
          onClick={handleOpen}
          className="group inline-flex items-center gap-3 rounded-2xl bg-teal-500 px-8 py-4 text-base font-bold text-slate-950 shadow-xl shadow-teal-500/20 transition hover:bg-teal-400 active:scale-95"
        >
          보고서 작성 시작하기
          <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
        </button>
      </section>

      {/* ── Footer ───────────────────────────────────── */}
      <footer className="border-t border-slate-800/40 py-8 text-center text-xs text-slate-600">
        © 2026 Synthera · 판매실적 보고서 자동화 솔루션
      </footer>
    </div>
  )
}
