import { appData } from '../../data/data';

const StoreBadge = ({ store, label, sublabel, icon }) => (
  <a
    href="#"
    className="inline-flex items-center gap-3 rounded-xl border border-white/30 bg-white/10 px-4 py-3 text-left text-white shadow-sm backdrop-blur transition hover:bg-white/20"
  >
    {icon}
    <div className="leading-tight">
      <div className="text-[10px] uppercase tracking-widest opacity-80">{sublabel}</div>
      <div className="text-sm font-bold">{label}</div>
    </div>
  </a>
);

const AppleIcon = () => (
  <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="M19.665 16.075c-.35.81-.77 1.55-1.27 2.21-.67.9-1.24 1.52-1.72 1.86-.69.51-1.42.77-2.18.79-.56 0-1.24-.16-2.04-.48-.81-.32-1.56-.48-2.25-.48-.72 0-1.5.16-2.33.48-.83.32-1.5.49-2 .5-.74.03-1.48-.25-2.22-.85-.47-.36-1.05-1-1.74-1.92-.74-1-1.35-2.15-1.82-3.44-.51-1.41-.77-2.77-.77-4.07 0-1.5.32-2.8.96-3.91.5-.87 1.16-1.56 1.98-2.06.82-.51 1.7-.77 2.64-.79.52 0 1.21.17 2.07.51.86.34 1.42.51 1.69.51.18 0 .76-.2 1.74-.59.93-.35 1.71-.49 2.36-.42 1.75.15 3.07.83 3.96 2.04-1.57.95-2.35 2.28-2.35 3.98 0 1.33.49 2.43 1.46 3.3.44.41.93.73 1.48.96.17.06.32.1.45.12-.04.12-.09.25-.14.38Zm-4.55-12.68c0 .99-.36 1.9-1.07 2.74-.86 1.01-1.9 1.6-3.03 1.5a3.25 3.25 0 0 1-.02-.39c0-.96.4-1.99 1.09-2.77.35-.4.8-.73 1.34-.98.54-.25 1.06-.39 1.55-.42.09.1.14.2.14.32Z" />
  </svg>
);

const PlayIcon = () => (
  <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="M3 4.27c0-.88.96-1.42 1.71-.94l14.54 9.23c.72.46.72 1.51 0 1.97L4.71 23.76C3.96 24.23 3 23.7 3 22.82V4.27Z" />
  </svg>
);

const AppCTA = () => {
  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-br from-orange-600 via-rose-600 to-red-600 text-white">
      <div className="absolute inset-0 opacity-10" aria-hidden>
        <div className="mx-auto h-full max-w-7xl bg-[radial-gradient(600px_200px_at_20%_20%,white,transparent)]" />
      </div>
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl">Get your favorites on the go</h2>
            <p className="mt-4 max-w-xl text-white/90">
              Track orders in real time, save your favorites, and unlock app‑only deals. Your next meal is a tap away.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <StoreBadge store="apple" label="Download on the App Store" sublabel="Download on the" icon={<AppleIcon />} />
              <StoreBadge store="google" label="Get it on Google Play" sublabel="GET IT ON" icon={<PlayIcon />} />
            </div>
            <p className="mt-3 text-xs text-white/80">Available on iOS and Android</p>
          </div>

          <div className="relative">
            <div className="mx-auto w-64 sm:w-72 md:w-80">
              <div className="relative aspect-[9/19] overflow-hidden rounded-[2rem] border border-white/30 bg-black/80 shadow-2xl ring-1 ring-white/20">
                <div className="absolute inset-0">
                  <img
                    src={appData.images.appPreview}
                    alt="App preview showing delicious food"
                    className="h-full w-full object-cover opacity-90"
                    loading="lazy"
                  />
                </div>
                <div className="absolute inset-x-0 top-0 h-6 rounded-t-[2rem] bg-gradient-to-b from-white/20 to-transparent" />
                <div className="absolute bottom-0 w-full p-4">
                  <div className="rounded-xl bg-white/10 p-3 backdrop-blur">
                    <div className="flex items-center gap-3">
                      <img
                        className="h-10 w-10 rounded-lg object-cover"
                        src={appData.images.appFeaturedItem}
                        alt="Featured burger"
                        loading="lazy"
                      />
                      <div className="flex-1">
                        <p className="text-sm font-semibold">Chef’s Special Combo</p>
                        <p className="text-xs text-white/80">2x burgers • fries • drink</p>
                      </div>
                      <span className="rounded-full bg-white/20 px-2 py-1 text-xs font-semibold">$12.99</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppCTA;
