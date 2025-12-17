const steps = [
  {
    title: 'Browse restaurants',
    desc: 'Discover top-rated spots and curated categories tailored to your taste.',
    icon: (
      <svg className="h-6 w-6 text-orange-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" />
        <path d="M21 21l-4.35-4.35" />
      </svg>
    ),
  },
  {
    title: 'Customize your order',
    desc: 'Add your favorites, pick sides, and choose exactly how you like it.',
    icon: (
      <svg className="h-6 w-6 text-orange-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="12" rx="2" />
        <path d="M7 20h10" />
      </svg>
    ),
  },
  {
    title: 'Track delivery',
    desc: 'Real-time updates from kitchen to your door. Average 30 minutes.',
    icon: (
      <svg className="h-6 w-6 text-orange-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 13h13l3 5H6l-3-5Z" />
        <circle cx="7.5" cy="19.5" r="1.5" />
        <circle cx="17.5" cy="19.5" r="1.5" />
      </svg>
    ),
  },
];

const StepCard = ({ title, desc, icon }) => (
  <div className="group rounded-2xl border border-black/10 bg-white p-5 shadow-sm transition hover:shadow-lg">
    <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-orange-600/10">
      {icon}
    </div>
    <h3 className="mt-4 text-base font-semibold text-gray-900">{title}</h3>
    <p className="mt-1 text-sm text-gray-600">{desc}</p>
  </div>
);

const HowItWorks = () => {
  return (
    <section className="relative">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-24 bg-gradient-to-b from-gray-50" />
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="mb-8 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <h2 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">How it works</h2>
            <p className="mt-2 max-w-2xl text-gray-600">Ordering made simple in three steps. No guesswork—just great food, fast.</p>
          </div>
          <button className="inline-flex items-center rounded-full bg-orange-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-orange-500">
            Browse menu
          </button>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((s) => (
            <StepCard key={s.title} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
