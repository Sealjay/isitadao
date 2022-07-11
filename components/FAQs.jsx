import { Container } from './Container'

const faqs = [
  [
    {
      question: 'What is a DAO?',
      answer:
        'A DAO is a decentralized autonomous organization. It is an organization that is run by code, not by people.',
    },
    {
      question: 'How does a DAO work?',
      answer:
        'A DAO is run by code, not by people. The code controls the organization and its members.',
    },
    {
      question: 'Who creates a DAO?',
      answer: 'Anyone can create a DAO.',
    },
  ],[
    {
      question: 'What is the purpose of a DAO?',
      answer:
        'A DAO can have any purpose. Some DAOs are created to provide a service, while others are created to invest in projects or companies.',
    },
    {
      question: 'How does a DAO make decisions?',
      answer:
        "A DAO makes decisions through code. The code can be programmed to make decisions based on input from the DAO's members.",
    },
    {
      question: 'Who manages a DAO?',
      answer:
        'A DAO is managed by its code. The code can be programmed to allow anyone to manage the DAO.',
    },
  ], [
    {
      question:
        'What is the difference between a DAO and a traditional company?',
      answer:
        'A DAO is not controlled by people. A traditional company is controlled by people.',
    },
    {
      question: 'What are the benefits of a DAO?',
      answer:
        "A DAO can be run by code, which can make decisions based on input from the DAO's members. This can make DAOs more efficient than traditional companies.",
    },
    {
      question: 'Are there any risks associated with DAOs?',
      answer:
        'Yes, there are risks associated with DAOs. Because DAOs are not controlled by people, there is a risk that the code could be programmed to make bad decisions. There is also a risk that the DAO could be hacked.',
    },
  ],
]

function SwirlyDoodle({ className }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 281 40"
      className={className}
      preserveAspectRatio="none"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M240.172 22.994c-8.007 1.246-15.477 2.23-31.26 4.114-18.506 2.21-26.323 2.977-34.487 3.386-2.971.149-3.727.324-6.566 1.523-15.124 6.388-43.775 9.404-69.425 7.31-26.207-2.14-50.986-7.103-78-15.624C10.912 20.7.988 16.143.734 14.657c-.066-.381.043-.344 1.324.456 10.423 6.506 49.649 16.322 77.8 19.468 23.708 2.65 38.249 2.95 55.821 1.156 9.407-.962 24.451-3.773 25.101-4.692.074-.104.053-.155-.058-.135-1.062.195-13.863-.271-18.848-.687-16.681-1.389-28.722-4.345-38.142-9.364-15.294-8.15-7.298-19.232 14.802-20.514 16.095-.934 32.793 1.517 47.423 6.96 13.524 5.033 17.942 12.326 11.463 18.922l-.859.874.697-.006c2.681-.026 15.304-1.302 29.208-2.953 25.845-3.07 35.659-4.519 54.027-7.978 9.863-1.858 11.021-2.048 13.055-2.145a61.901 61.901 0 0 0 4.506-.417c1.891-.259 2.151-.267 1.543-.047-.402.145-2.33.913-4.285 1.707-4.635 1.882-5.202 2.07-8.736 2.903-3.414.805-19.773 3.797-26.404 4.829Zm40.321-9.93c.1-.066.231-.085.29-.041.059.043-.024.096-.183.119-.177.024-.219-.007-.107-.079ZM172.299 26.22c9.364-6.058 5.161-12.039-12.304-17.51-11.656-3.653-23.145-5.47-35.243-5.576-22.552-.198-33.577 7.462-21.321 14.814 12.012 7.205 32.994 10.557 61.531 9.831 4.563-.116 5.372-.288 7.337-1.559Z"
      />
    </svg>
  )
}

export function FAQs() {
  return (
    <section
      id="faqs"
      aria-label="faqs"
      className="bg-slate-900 py-20 sm:py-32"
    >
      <Container>
        <div className="md:text-center">
          <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl">
            <span className="relative whitespace-nowrap">
              <SwirlyDoodle className="absolute top-1/2 left-0 h-[1em] w-full fill-red-400" />
              <span className="relative">Frequently asked</span>
            </span>{' '}
            questions
          </h2>
          <p className="mt-4 text-lg text-slate-400">
            It doesn’t matter what size your business is, our software won’t
            work well for you.
          </p>
        </div>
        <ul className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3">
          {faqs.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul className="flex flex-col gap-y-8">
                {column.map((faq, faqIndex) => (
                  <li key={faqIndex}>
                    <h3 className="font-display text-lg leading-7 text-white">
                      {faq.question}
                    </h3>
                    <p className="mt-4 text-sm text-slate-200">{faq.answer}</p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
