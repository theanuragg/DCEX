'use client';
import { useState } from 'react';

const FaqAccordion = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqItems = [
    {
      question: 'What is Crypgo?',
      answer: 'Crypgo is short for Cryptocurrency, which refers to a type of digital or virtual currency that uses Cryptographic techniques for secure transactions. It operates on decentralized networks, often based on blockchain technology, a distributed ledger that records all transactions transparently and immutably.'
    },
    {
      question: 'Is Crypgo available worldwide?',
      answer: 'Yes, Crypgo services are available in most countries around the world, subject to local regulations and compliance requirements.'
    },
    {
      question: 'Which cryptocurrencies are supported on Crypgo?',
      answer: 'Crypgo supports over 100 cryptocurrencies including Bitcoin, Ethereum, Solana, and many other popular altcoins and tokens.'
    },
    {
      question: 'Is my personal information secure with Crypgo?',
      answer: 'Crypgo employs industry-leading security measures including encryption, two-factor authentication, and cold storage solutions to ensure your personal information and assets remain secure.'
    },
    {
      question: 'Are there any deposit or withdrawal fees?',
      answer: 'Crypgo has competitive fee structures that vary by transaction type, payment method, and cryptocurrency. Please refer to our fee schedule for detailed information.'
    },
    {
      question: 'Does Crypgo offer advanced trading tools?',
      answer: 'Yes, Crypgo provides a range of advanced trading tools including real-time charts, technical analysis indicators, and API access for automated trading.'
    }
  ];

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-dark2 text-white flex justify-center items-center p-4">
      <div className="max-w-3xl w-full">
        <div className="text-center mb-4">
          <p className="text-sm">Popular <span className="text-primary">questions</span></p>
          <h1 className="text-4xl font-bold mb-2">Learn more about Crypgo</h1>
          <p className="text-gray-400">We accept 100+ cryptocurrencies around the world</p>
        </div>

        <div className="mt-8">
          {faqItems.map((item, index) => (
            <div 
              key={index} 
              className="mb-4 rounded-lg bg-dark1 overflow-hidden"
            >
              <div 
                className="px-6 py-4 flex justify-between items-center cursor-pointer"
                onClick={() => toggleFaq(index)}
              >
                <h3 className="font-medium">{item.question}</h3>
                <span className={`text-xl transition-transform duration-300 text-primary ${openIndex === index ? 'rotate-45 ' : ''}`}>
                  +
                </span>
              </div>
              
              {openIndex === index && (
                <div className="px-6 py-4 text-gray-400  border-gray-800">
                  <p>{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FaqAccordion;