import { appData } from '../../data/data';

const HeroSection = () => {
  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-br from-orange-500 via-red-500 to-rose-500 text-white">
      {/* Decorative blobs */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 -left-20 h-80 w-80 rounded-full bg-white/10 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-24 -right-20 h-80 w-80 rounded-full bg-black/10 blur-3xl"
      />

      <div className="mx-auto max-w-7xl px-6 py-20 md:py-28 lg:px-8">
        <div className="grid items-center gap-12 md:grid-cols-2">
          {/* Copy */}
          <div className="text-center md:text-left">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-sm backdrop-blur">
              <span className="inline-block h-2 w-2 rounded-full bg-lime-400" />
              <span>Now delivering in your area</span>
            </div>
            <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl md:text-6xl">
              {appData.hero.title}
            </h1>
            <p className="mt-4 text-base/7 sm:text-lg/8 text-white/90 max-w-xl md:max-w-2xl md:mt-6">
              {appData.hero.subtitle}
            </p>

            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row md:items-start">
              <button className="w-full sm:w-auto rounded-xl bg-white px-7 py-3 text-base font-semibold text-orange-600 shadow-sm transition hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80">
                {appData.hero.ctaText}
              </button>
              <button className="w-full sm:w-auto rounded-xl border border-white/40 px-7 py-3 text-base font-semibold text-white/90 backdrop-blur transition hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60">
                Browse menu
              </button>
            </div>

            <div className="mt-6 flex items-center justify-center gap-6 md:justify-start text-white/80">
              <div className="flex items-center gap-2">
                <span className="text-2xl">⏱️</span>
                <span>30 min avg delivery</span>
              </div>
              <div className="hidden sm:flex items-center gap-2">
                <span className="text-2xl">⭐</span>
                <span>4.8/5 customer rating</span>
              </div>
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-2xl ring-1 ring-white/20">
              <img
                src={appData.images.heroMain}
                alt="Delicious burger and fries delivered hot"
                className="h-full w-full object-cover"
                loading="eager"
              />
            </div>
            {/* Floating card */}
            <div className="absolute -bottom-6 left-1/2 w-[88%] -translate-x-1/2 rounded-xl bg-white/90 p-4 shadow-xl backdrop-blur md:left-auto md:right-6 md:w-auto md:translate-x-0">
              <div className="flex items-center gap-4">
                <img
                  src={appData.images.heroFloatingCard}
                  alt="Pizza"
                  className="h-14 w-14 rounded-lg object-cover"
                  loading="lazy"
                />
                <div>
                  <p className="text-sm font-semibold text-gray-900">Chef’s Special Combo</p>
                  <p className="text-xs text-gray-600">2x burgers • fries • drink</p>
                </div>
                <div className="ml-auto text-right">
                  <p className="text-sm font-semibold text-gray-900">$12.99</p>
                  <p className="text-xs text-green-600">15% off today</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;