import { appData } from '../../data/data';

const testimonials = [
  {
    name: 'Sarah K.',
    role: 'Local Guide',
    avatar: appData.images.testimonialSarah,
    rating: 5,
    quote:
      'Super fast delivery and the food was still hot. The deals make it my go-to every week!',
  },
  {
    name: 'Miguel A.',
    role: 'Foodie',
    avatar: appData.images.testimonialMiguel,
    rating: 5,
    quote:
      'The menu variety is awesome. I love being able to customize every order to my taste.',
  },
  {
    name: 'Priya N.',
    role: 'Freelancer',
    avatar: appData.images.testimonialPriya,
    rating: 4,
    quote:
      'Reliable and convenient. Tracking is super accurate and the support is helpful.',
  },
];

const Stars = ({ count }) => (
  <div className="flex">
    {Array.from({ length: 5 }).map((_, i) => (
      <svg
        key={i}
        className={`h-4 w-4 ${i < count ? 'text-orange-500' : 'text-gray-300'}`}
        viewBox="0 0 20 20"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.04 3.2a1 1 0 00.95.69h3.361c.969 0 1.371 1.24.588 1.81l-2.72 1.976a1 1 0 00-.364 1.118l1.04 3.2c.3.922-.755 1.688-1.54 1.118l-2.72-1.975a1 1 0 00-1.175 0l-2.72 1.975c-.784.57-1.838-.196-1.539-1.118l1.04-3.2a1 1 0 00-.364-1.118L2.06 8.627c-.783-.57-.38-1.81.588-1.81h3.36a1 1 0 00.951-.69l1.04-3.2z" />
      </svg>
    ))}
  </div>
);

const TestimonialCard = ({ name, role, avatar, quote, rating }) => (
  <div className="group rounded-2xl border border-black/10 bg-white p-6 shadow-sm transition hover:shadow-lg">
    <div className="flex items-center gap-4">
      <img src={avatar} alt={name} className="h-12 w-12 rounded-full object-cover" loading="lazy" />
      <div>
        <p className="text-sm font-semibold text-gray-900">{name}</p>
        <p className="text-xs text-gray-600">{role}</p>
      </div>
    </div>
    <div className="mt-3">
      <Stars count={rating} />
    </div>
    <p className="mt-3 text-sm text-gray-700">“{quote}”</p>
  </div>
);

const Testimonials = () => {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="mb-8 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <h2 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">Loved by food lovers</h2>
            <p className="mt-2 max-w-2xl text-gray-600">Real experiences from people who order with us every day.</p>
          </div>
          <a
            className="inline-flex items-center rounded-full border border-black/10 bg-white px-4 py-2 text-sm font-semibold text-gray-800 shadow-sm transition hover:bg-gray-50"
            href="#reviews"
          >
            Read more reviews
          </a>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <TestimonialCard key={t.name} {...t} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
