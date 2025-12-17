import { useState } from 'react';

const faqs = [
  {
    q: 'How long does delivery take?',
    a: 'Most orders arrive within 30–40 minutes depending on restaurant prep time and your location. You can track delivery in real time in the app.',
  },
  {
    q: 'What areas do you serve?',
    a: 'We’re expanding quickly and now cover most neighborhoods in your city. Enter your address at checkout to confirm availability.',
  },
  {
    q: 'Are there delivery fees?',
    a: 'Delivery fees vary by distance and restaurant. Look out for free-delivery promos and app-only deals featured on the home page.',
  },
  {
    q: 'Can I schedule an order?',
    a: 'Yes. Choose a pickup time at checkout to schedule your delivery in advance—perfect for lunch breaks or dinner plans.',
  },
  {
    q: 'What payment methods do you accept?',
    a: 'We accept major credit/debit cards and digital wallets. Payments are processed securely and your details are never shared with restaurants.',
  },
  {
    q: 'How do refunds or issues work?',
    a: 'If something is wrong with your order, contact support from your order details. We’ll investigate and make it right as quickly as possible.',
  },
];

const Item = ({ i, q, a, open, onToggle }) => {
  const id = `faq-${i}`;
  return (
    <div className="rounded-2xl border border-black/10 bg-white p-4 shadow-sm">
      <button
        aria-expanded={open}
        aria-controls={`${id}-panel`}
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-3 text-left"
      >
        <span className="text-base font-semibold text-gray-900">{q}</span>
        <span className="grid h-8 w-8 place-items-center rounded-full bg-gray-100 text-gray-700">
          {open ? (
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 12H6"/></svg>
          ) : (
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 6v12M6 12h12"/></svg>
          )}
        </span>
      </button>
      {open && (
        <div id={`${id}-panel`} className="mt-2 text-sm text-gray-700">
          {a}
        </div>
      )}
    </div>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);
  return (
    <section className="bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="mb-8 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <h2 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">Frequently asked questions</h2>
            <p className="mt-2 max-w-2xl text-gray-600">Answers to common questions about delivery, fees, scheduling, and support.</p>
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {faqs.map((f, i) => (
            <Item
              key={f.q}
              i={i}
              q={f.q}
              a={f.a}
              open={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
