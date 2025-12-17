import { appData } from '../../data/data';

const categories = [
  { name: "Burgers", image: appData.images.categoryBurgers },
  { name: "Pizza", image: appData.images.categoryPizza },
  { name: "Sushi", image: appData.images.categorySushi },
  { name: "Desserts", image: appData.images.categoryDesserts },
  { name: "Healthy", image: appData.images.categoryHealthy },
  { name: "Drinks", image: appData.images.categoryDrinks },
];

const popular = [
  {
    name: "Double Cheeseburger",
    desc: "Juicy beef, melted cheddar, special sauce",
    price: 8.99,
    image: appData.images.popularBurger,
  },
  {
    name: "Pepperoni Feast",
    desc: "Crispy crust, extra pepperoni, mozzarella",
    price: 12.5,
    image: appData.images.popularPizza,
  },
  {
    name: "Salmon Nigiri Set",
    desc: "Fresh salmon with seasoned rice",
    price: 14.0,
    image: appData.images.popularSushi,
  },
  {
    name: "Chocolate Lava Cake",
    desc: "Warm, gooey center with vanilla ice cream",
    price: 6.75,
    image: appData.images.popularDessert,
  },
];

const SectionHeader = ({ title, subtitle, cta }) => (
  <div className="mb-8 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
    <div>
      <h2 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-2 text-gray-600 max-w-2xl">{subtitle}</p>
      )}
    </div>
    {cta}
  </div>
);

const CategoryCard = ({ name, image }) => (
  <button className="group relative overflow-hidden rounded-2xl border border-black/10 bg-white shadow-sm transition hover:shadow-lg">
    <div className="aspect-[4/3] w-full overflow-hidden">
      <img
        src={image}
        alt={name}
        className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        loading="lazy"
      />
    </div>
    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/0 to-black/0" />
    <div className="absolute bottom-3 left-3 rounded-full bg-white/90 px-3 py-1 text-sm font-semibold text-gray-900 backdrop-blur">
      {name}
    </div>
  </button>
);

const PopularCard = ({ name, desc, price, image }) => (
  <div className="group relative overflow-hidden rounded-2xl border border-black/10 bg-white shadow-sm transition hover:shadow-lg">
    <div className="aspect-video w-full overflow-hidden">
      <img
        src={image}
        alt={name}
        className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        loading="lazy"
      />
    </div>
    <div className="p-4">
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="text-base font-semibold text-gray-900">{name}</h3>
          <p className="mt-1 text-sm text-gray-600">{desc}</p>
        </div>
        <div className="shrink-0 rounded-full bg-orange-600/10 px-3 py-1 text-sm font-semibold text-orange-700">
          ${price.toFixed(2)}
        </div>
      </div>
      <div className="mt-4 flex items-center justify-between">
        <button className="inline-flex items-center rounded-full border border-black/10 bg-white px-3 py-1.5 text-sm font-semibold text-gray-800 shadow-sm transition hover:bg-gray-50">
          Add to cart
        </button>
        <button className="inline-flex items-center rounded-full bg-orange-600 px-3 py-1.5 text-sm font-semibold text-white shadow-sm transition hover:bg-orange-500">
          Quick view
        </button>
      </div>
    </div>
  </div>
);

const FeaturedSection = () => {
  return (
    <section className="bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        {/* Categories */}
        <SectionHeader
          title="Explore categories"
          subtitle="Find exactly what you're craving. From indulgent comfort food to light and healthy options, we've got you covered."
          cta={
            <button className="inline-flex items-center rounded-full border border-black/10 bg-white px-4 py-2 text-sm font-semibold text-gray-800 shadow-sm transition hover:bg-gray-50">
              View all
            </button>
          }
        />
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-6">
          {categories.map((cat) => (
            <CategoryCard key={cat.name} {...cat} />
          ))}
        </div>

        {/* Popular */}
        <div className="mt-16">
          <SectionHeader
            title="Popular right now"
            subtitle="Best-sellers your neighbors are loving today."
            cta={
              <button className="inline-flex items-center rounded-full bg-orange-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-orange-500">
                See deals
              </button>
            }
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {popular.map((item) => (
              <PopularCard key={item.name} {...item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;
