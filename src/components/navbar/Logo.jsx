import { appData } from '../../data/data';

const Logo = () => {
  return (
    <div className="group inline-flex items-center gap-2">
      <div className="grid h-9 w-9 place-items-center rounded-xl bg-orange-600 text-white shadow-sm transition group-hover:scale-105">
        <span className="text-lg font-extrabold">{appData.brand.logo}</span>
      </div>
      <div className="flex flex-col leading-tight">
        <span className="text-base font-extrabold text-gray-900 tracking-tight">{appData.brand.name}</span>
        <span className="text-[10px] font-medium uppercase tracking-widest text-orange-600/80">Deliveries</span>
      </div>
    </div>
  );
};

export default Logo;