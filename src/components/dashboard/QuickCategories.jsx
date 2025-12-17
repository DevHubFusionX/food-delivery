import { appData } from '../../data/data';

const QuickCategories = ({ onCategorySelect }) => {
  return (
    <div className="mb-8">
      <h2 className="text-xl font-semibold text-gray-900 mb-4">Quick Categories</h2>
      <div className="grid grid-cols-3 sm:grid-cols-6 gap-4">
        {appData.categories.map((category, index) => (
          <button
            key={index}
            onClick={() => onCategorySelect(category.name)}
            className={`${category.color} p-4 rounded-lg text-center transition-colors hover:scale-105 transform`}
          >
            <div className="text-2xl mb-2">{category.emoji}</div>
            <div className="text-sm font-medium text-gray-700">{category.name}</div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuickCategories;