import { appData } from '../../data/data';

const Categories = () => {
  const categories = appData.categories;

  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
        Browse Categories
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {categories.map((category) => (
          <div
            key={category.name}
            className={`${category.color} p-6 rounded-lg text-center cursor-pointer transition-colors`}
          >
            <div className="text-4xl mb-2">{category.emoji}</div>
            <h3 className="font-semibold text-gray-800">{category.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Categories;