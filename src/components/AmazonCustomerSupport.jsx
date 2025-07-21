




// // import  { useState } from 'react';
// // import PopComponent from './PopComponent';
// // // import SupportImage from './support-image.png'; 
// // function AmazonCustomerSupport() {
// //   // State to manage which FAQ is open
// //   const [openFAQ, setOpenFAQ] = useState(null);

// //   // Function to toggle FAQ answers
// //   const toggleFAQ = (index) => {
// //     setOpenFAQ(openFAQ === index ? null : index);
// //   };

// //   return (
// //     <div className="flex flex-col h-2">
// //       {/* Header */}
// //       <header className="w-full bg-gradient-to-r from-yellow-300 to-orange-500 text-white py-2 px-4">
// //         <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between">
// //           {/* Text Content */}
// //           <div className="lg:w-1/2">
// //             <h1 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-md">
// //               Amazon Customer Support – Get Help Now!
// //             </h1>
// //             <p className="text-lg md:text-xl mb-6 drop-shadow-md">
// //               Facing issues with orders, returns, or accounts? We’re here to assist you with all your Amazon-related queries.
// //             </p>
// //             <div className="cta-buttons flex flex-col sm:flex-row justify-start items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-4">
// //               <button
// //                 onClick={() => document.getElementById('contact-form').scrollIntoView({ behavior: 'smooth' })}
// //                 className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition transform hover:scale-105"
// //               >
// //                 Submit a Query
// //               </button>
// //               <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition transform hover:scale-105">
// //                 Chat with Us
// //               </button>
// //             </div>
// //           </div>

// //           {/* Image */}
// //           <div className="lg:w-1/4 mb-8 lg:mb-0">
// //             <img src="/amazonCustomerCare.png" alt="Customer Support Illustration" className="w-full h-auto" />
// //           </div>
// //         </div>
// //       </header>

// //     <PopComponent/>
// //       {/* Navigation */}
// //       {/* <nav className="bg-blue-700 shadow-md sticky top-0 z-50">
// //         <div className="max-w-7xl mx-auto px-4">
// //           <div className="flex justify-center space-x-6 py-4">
// //             <a href="#home" className="text-white hover:text-yellow-300 transition-colors text-lg font-medium">
// //               Home
// //             </a>
// //             <a href="#about" className="text-white hover:text-yellow-300 transition-colors text-lg font-medium">
// //               About Us
// //             </a>
// //             <a href="#services" className="text-white hover:text-yellow-300 transition-colors text-lg font-medium">
// //               Services
// //             </a>
// //             <a href="#support" className="text-white hover:text-yellow-300 transition-colors text-lg font-medium">
// //               Support
// //             </a>
// //             <a href="#contact" className="text-white hover:text-yellow-300 transition-colors text-lg font-medium">
// //               Contact
// //             </a>
// //           </div>
// //         </div>
// //       </nav> */}

// //       {/* Main Content */}
// //       <main className="flex-grow container mx-auto px-4 py-8">
// //         {/* Home Section */}
// //         <section id="home" className="mb-12">
// //           <h2 className="text-3xl font-semibold text-blue-700 mb-6">How Can We Help You?</h2>
// //           <div className="faq space-y-4">
// //             {[
// //               { question: 'Where is my order?', answer: 'Track your package easily with our assistance.' },
// //               { question: 'How do I return an item?', answer: 'Learn how to initiate a return or request a refund.' },
// //               { question: 'I can’t log into my Amazon account!', answer: 'Let us help you recover your account or reset your password.' },
// //               { question: 'Why was my payment declined?', answer: 'Resolve payment errors quickly and securely.' },
// //               { question: 'How do I manage my Amazon Prime membership?', answer: 'Get assistance with upgrading, canceling, or renewing your subscription.' },
// //               { question: 'How do I contact an Amazon seller?', answer: 'Learn how to reach out to sellers for inquiries or issues.' },
// //             ].map((faq, index) => (
// //               <div key={index}>
// //                 <h3
// //                   onClick={() => toggleFAQ(index)}
// //                   className="text-xl font-medium cursor-pointer flex justify-between items-center"
// //                 >
// //                   {faq.question}
// //                   <span>{openFAQ === index ? '-' : '+'}</span>
// //                 </h3>
// //                 {openFAQ === index && <p className="mt-2 text-gray-700">{faq.answer}</p>}
// //               </div>
// //             ))}
// //           </div>
// //         </section>

// //         {/* Support Services Section */}
// //         <section id="support-services" className="mb-12">
// //           <h2 className="text-3xl font-semibold text-blue-700 mb-6">Our Amazon Support Services</h2>
// //           <ul className="list-disc list-inside space-y-3 text-gray-700">
// //             <li>
// //               <strong>Order Assistance:</strong> Track packages and resolve order-related issues.
// //             </li>
// //             <li>
// //               <strong>Returns and Refunds:</strong> Help with return requests and refunds.
// //             </li>
// //             <li>
// //               <strong>Account Recovery:</strong> Assistance with locked or hacked accounts.
// //             </li>
// //             <li>
// //               <strong>Payment Issues:</strong> Resolve declined transactions and payment errors.
// //             </li>
// //             <li>
// //               <strong>Prime Membership:</strong> Manage your Amazon Prime subscription and benefits.
// //             </li>
// //             <li>
// //               <strong>Technical Help:</strong> Assistance with Kindle, Fire TV, and other Amazon devices.
// //             </li>
// //           </ul>
// //         </section>

// //         {/* Contact Form Section */}
// //         <section id="contact-form" className="mb-12">
// //           <h2 className="text-3xl font-semibold text-blue-700 mb-6 text-center">Submit Your Amazon Query</h2>
// //           <form className="contact-form max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-lg">
// //             <div className="mb-6">
// //               <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
// //                 Full Name:
// //               </label>
// //               <input
// //                 type="text"
// //                 id="name"
// //                 name="name"
// //                 required
// //                 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
// //                 placeholder="Your Name"
// //               />
// //             </div>

// //             <div className="mb-6">
// //               <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
// //                 Email Address:
// //               </label>
// //               <input
// //                 type="email"
// //                 id="email"
// //                 name="email"
// //                 required
// //                 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
// //                 placeholder="Your Email"
// //               />
// //             </div>

// //             <div className="mb-6">
// //               <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
// //                 Phone Number:
// //               </label>
// //               <input
// //                 type="text"
// //                 id="phone"
// //                 name="phone"
// //                 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
// //                 placeholder="Your Phone Number"
// //               />
// //             </div>

// //             <div className="mb-6">
// //               <label htmlFor="order" className="block text-gray-700 font-medium mb-2">
// //                 Order Number:
// //               </label>
// //               <input
// //                 type="text"
// //                 id="order"
// //                 name="order"
// //                 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
// //                 placeholder="Your Order Number"
// //               />
// //             </div>

// //             <div className="mb-6">
// //               <label htmlFor="query-type" className="block text-gray-700 font-medium mb-2">
// //                 Query Type:
// //               </label>
// //               <select
// //                 id="query-type"
// //                 name="query-type"
// //                 required
// //                 className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
// //               >
// //                 <option value="" disabled selected>
// //                   Select a query type
// //                 </option>
// //                 <option value="orders">Orders</option>
// //                 <option value="returns">Returns</option>
// //                 <option value="account">Account</option>
// //                 <option value="payment">Payment</option>
// //                 <option value="prime">Prime Membership</option>
// //                 <option value="seller">Seller</option>
// //                 <option value="devices">Devices</option>
// //               </select>
// //             </div>

// //             <div className="mb-6">
// //               <label htmlFor="issue" className="block text-gray-700 font-medium mb-2">
// //                 Describe Your Issue:
// //               </label>
// //               <textarea
// //                 id="issue"
// //                 name="issue"
// //                 rows="5"
// //                 required
// //                 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
// //                 placeholder="Describe your issue..."
// //               ></textarea>
// //             </div>

// //             <button
// //               type="submit"
// //               className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition transform hover:scale-105 flex items-center justify-center"
// //             >
// //               Submit Query
// //             </button>
// //           </form>
// //         </section>
// //       </main>

// //       {/* Footer */}
// //       <footer className="bg-blue-700 text-white text-center py-6">
// //         <p>
// //           © {new Date().getFullYear()} Amazon Support Services. All Rights Reserved. |{' '}
// //           <a href="#" className="text-yellow-300 hover:underline">
// //             Privacy Policy
// //           </a>{' '}
// //           |{' '}
// //           <a href="#" className="text-yellow-300 hover:underline">
// //             Terms of Service
// //           </a>
// //         </p>
// //       </footer>
// //     </div>
// //   );
// // }

// // export default AmazonCustomerSupport;


// import { useState } from 'react';
// import { HeadphonesIcon, ShieldCheckIcon, ClockIcon, MessageCircleIcon } from 'lucide-react';

// function AmazonCustomerSupport() {
//   // State to manage which FAQ is open
//   const [openFAQ, setOpenFAQ] = useState(null);

//   // Function to toggle FAQ answers
//   const toggleFAQ = (index) => {
//     setOpenFAQ(openFAQ === index ? null : index);
//   };

//   return (
//     <div className="flex flex-col min-h-screen">
//       {/* Hero Section */}
//       <header className="relative bg-gradient-to-br from-blue-50 via-white to-blue-100 overflow-hidden">
//         <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-orange-500/5"></div>
//         <div className="relative max-w-7xl mx-auto px-4 py-16 lg:py-24">
//           <div className="grid lg:grid-cols-2 gap-12 items-center">
//             {/* Text Content */}
//             <div className="space-y-8">
//               <div className="space-y-4">
//                 <div className="flex items-center space-x-2 text-blue-600">
//                   <HeadphonesIcon className="w-6 h-6" />
//                   <span className="text-sm font-semibold tracking-wide uppercase">24/7 Support Available</span>
//                 </div>
//                 <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
//                   We're here to 
//                   <span className="text-blue-600"> help you</span> with 
//                   <span className="text-orange-500"> everything</span>
//                 </h1>
//                 <p className="text-xl text-gray-600 leading-relaxed">
//                   Get instant support for your Amazon orders, returns, account issues, and more. 
//                   Our friendly team is ready to assist you every step of the way.
//                 </p>
//               </div>

//               {/* Trust Indicators */}
//               <div className="grid grid-cols-3 gap-4 py-6">
//                 <div className="text-center">
//                   <div className="flex justify-center mb-2">
//                     <ClockIcon className="w-8 h-8 text-green-500" />
//                   </div>
//                   <p className="text-sm font-medium text-gray-700">Quick Response</p>
//                   <p className="text-xs text-gray-500">Under 2 minutes</p>
//                 </div>
//                 <div className="text-center">
//                   <div className="flex justify-center mb-2">
//                     <ShieldCheckIcon className="w-8 h-8 text-blue-500" />
//                   </div>
//                   <p className="text-sm font-medium text-gray-700">Secure & Safe</p>
//                   <p className="text-xs text-gray-500">Protected chat</p>
//                 </div>
//                 <div className="text-center">
//                   <div className="flex justify-center mb-2">
//                     <MessageCircleIcon className="w-8 h-8 text-purple-500" />
//                   </div>
//                   <p className="text-sm font-medium text-gray-700">Expert Help</p>
//                   <p className="text-xs text-gray-500">Trained specialists</p>
//                 </div>
//               </div>

//               {/* CTA Buttons */}
//               <div className="flex flex-col sm:flex-row gap-4">
//                 <button
//                   onClick={() => document.getElementById('contact-form').scrollIntoView({ behavior: 'smooth' })}
//                   className="group bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-xl shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center justify-center space-x-2"
//                 >
//                   <MessageCircleIcon className="w-5 h-5" />
//                   <span>Start a Conversation</span>
//                 </button>
//                 <button className="group border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2">
//                   <HeadphonesIcon className="w-5 h-5" />
//                   <span>Call Support</span>
//                 </button>
//               </div>
//             </div>

//             {/* Image/Illustration */}
//             <div className="relative">
//               <div className="relative z-10 bg-white rounded-2xl shadow-2xl p-8">
//                 <img 
//                   src="/amazonCustomerCare.png" 
//                   alt="Friendly Customer Support Representative" 
//                   className="w-full h-auto rounded-xl"
//                 />
//               </div>
//               {/* Decorative elements */}
//               <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-200 rounded-full opacity-60"></div>
//               <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-orange-200 rounded-full opacity-40"></div>
//             </div>
//           </div>
//         </div>
//       </header>

//       {/* Quick Help Section */}
//       <section className="bg-gray-50 py-12">
//         <div className="max-w-7xl mx-auto px-4">
//           <div className="text-center mb-8">
//             <h2 className="text-2xl font-bold text-gray-900 mb-2">Popular Help Topics</h2>
//             <p className="text-gray-600">Quick answers to the most common questions</p>
//           </div>
          
//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {[
//               { 
//                 title: 'Track Your Order', 
//                 description: 'Get real-time updates on your package delivery',
//                 icon: '📦',
//                 color: 'bg-blue-50 border-blue-200'
//               },
//               { 
//                 title: 'Return or Exchange', 
//                 description: 'Easy returns and exchanges within 30 days',
//                 icon: '🔄',
//                 color: 'bg-green-50 border-green-200'
//               },
//               { 
//                 title: 'Account Issues', 
//                 description: 'Password resets and account recovery help',
//                 icon: '👤',
//                 color: 'bg-purple-50 border-purple-200'
//               },
//               { 
//                 title: 'Payment Problems', 
//                 description: 'Resolve payment errors and billing questions',
//                 icon: '💳',
//                 color: 'bg-orange-50 border-orange-200'
//               },
//               { 
//                 title: 'Prime Membership', 
//                 description: 'Manage your Prime benefits and subscription',
//                 icon: '⭐',
//                 color: 'bg-yellow-50 border-yellow-200'
//               },
//               { 
//                 title: 'Device Support', 
//                 description: 'Help with Kindle, Echo, and Fire devices',
//                 icon: '📱',
//                 color: 'bg-indigo-50 border-indigo-200'
//               }
//             ].map((topic, index) => (
//               <div key={index} className={`${topic.color} border-2 rounded-xl p-6 hover:shadow-lg transition-all duration-300 cursor-pointer group`}>
//                 <div className="text-3xl mb-3">{topic.icon}</div>
//                 <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
//                   {topic.title}
//                 </h3>
//                 <p className="text-gray-600 text-sm">{topic.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Main Content */}
//       <main className="flex-grow container mx-auto px-4 py-12">
//         {/* FAQ Section */}
//         <section id="home" className="mb-16">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
//             <p className="text-gray-600 max-w-2xl mx-auto">
//               Find quick answers to common questions. If you can't find what you're looking for, 
//               our support team is always ready to help.
//             </p>
//           </div>
          
//           <div className="max-w-3xl mx-auto space-y-4">
//             {[
//               { question: 'Where is my order?', answer: 'You can track your package in real-time by visiting Your Orders in your Amazon account. We\'ll provide detailed tracking information and delivery estimates.' },
//               { question: 'How do I return an item?', answer: 'Returns are easy! Go to Your Orders, select the item you want to return, choose your reason, and we\'ll guide you through the process. Most items can be returned within 30 days.' },
//               { question: 'I can\'t log into my Amazon account', answer: 'Don\'t worry! We can help you recover your account. Try resetting your password first, or contact us if you need additional assistance with account recovery.' },
//               { question: 'Why was my payment declined?', answer: 'Payment issues can happen for several reasons. Check that your payment method is valid and has sufficient funds. We can help resolve any payment errors quickly and securely.' },
//               { question: 'How do I manage my Amazon Prime membership?', answer: 'You can manage your Prime membership in Your Account under Prime Membership. From there, you can view benefits, update payment methods, or cancel if needed.' },
//               { question: 'How do I contact an Amazon seller?', answer: 'To contact a seller, go to Your Orders, find the relevant order, and click "Contact Seller." You can message them directly through Amazon\'s secure messaging system.' },
//             ].map((faq, index) => (
//               <div key={index} className="bg-white border border-gray-200 rounded-xl shadow-sm">
//                 <button
//                   onClick={() => toggleFAQ(index)}
//                   className="w-full text-left p-6 flex justify-between items-center hover:bg-gray-50 transition-colors rounded-xl"
//                 >
//                   <h3 className="text-lg font-semibold text-gray-900 pr-4">{faq.question}</h3>
//                   <span className="text-2xl text-blue-600 flex-shrink-0">
//                     {openFAQ === index ? '−' : '+'}
//                   </span>
//                 </button>
//                 {openFAQ === index && (
//                   <div className="px-6 pb-6">
//                     <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
//                   </div>
//                 )}
//               </div>
//             ))}
//           </div>
//         </section>

//         {/* Contact Form Section */}
//         <section id="contact-form" className="mb-16">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl font-bold text-gray-900 mb-4">Still Need Help?</h2>
//             <p className="text-gray-600 max-w-2xl mx-auto">
//               Can't find the answer you're looking for? Send us a message and we'll get back to you as soon as possible.
//             </p>
//           </div>
          
//           <form className="max-w-2xl mx-auto bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
//             <div className="grid md:grid-cols-2 gap-6 mb-6">
//               <div>
//                 <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
//                   Full Name *
//                 </label>
//                 <input
//                   type="text"
//                   id="name"
//                   name="name"
//                   required
//                   className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
//                   placeholder="Enter your full name"
//                 />
//               </div>
//               <div>
//                 <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
//                   Email Address *
//                 </label>
//                 <input
//                   type="email"
//                   id="email"
//                   name="email"
//                   required
//                   className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
//                   placeholder="Enter your email"
//                 />
//               </div>
//             </div>

//             <div className="grid md:grid-cols-2 gap-6 mb-6">
//               <div>
//                 <label htmlFor="phone" className="block text-gray-700 font-semibold mb-2">
//                   Phone Number
//                 </label>
//                 <input
//                   type="text"
//                   id="phone"
//                   name="phone"
//                   className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
//                   placeholder="Enter your phone number"
//                 />
//               </div>
//               <div>
//                 <label htmlFor="order" className="block text-gray-700 font-semibold mb-2">
//                   Order Number
//                 </label>
//                 <input
//                   type="text"
//                   id="order"
//                   name="order"
//                   className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
//                   placeholder="Enter your order number"
//                 />
//               </div>
//             </div>

//             <div className="mb-6">
//               <label htmlFor="query-type" className="block text-gray-700 font-semibold mb-2">
//                 What can we help you with? *
//               </label>
//               <select
//                 id="query-type"
//                 name="query-type"
//                 required
//                 className="w-full px-4 py-3 border border-gray-300 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
//               >
//                 <option value="" disabled selected>
//                   Choose a topic
//                 </option>
//                 <option value="orders">Order Questions</option>
//                 <option value="returns">Returns & Refunds</option>
//                 <option value="account">Account Issues</option>
//                 <option value="payment">Payment Problems</option>
//                 <option value="prime">Prime Membership</option>
//                 <option value="seller">Seller Questions</option>
//                 <option value="devices">Device Support</option>
//                 <option value="other">Something Else</option>
//               </select>
//             </div>

//             <div className="mb-8">
//               <label htmlFor="issue" className="block text-gray-700 font-semibold mb-2">
//                 Tell us more about your issue *
//               </label>
//               <textarea
//                 id="issue"
//                 name="issue"
//                 rows="5"
//                 required
//                 className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition resize-none"
//                 placeholder="Please describe your issue in detail so we can help you better..."
//               ></textarea>
//             </div>

//             <button
//               type="submit"
//               className="w-full bg-blue-600 text-white py-4 px-6 rounded-xl font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center space-x-2"
//             >
//               <MessageCircleIcon className="w-5 h-5" />
//               <span>Send Message</span>
//             </button>
            
//             <p className="text-sm text-gray-500 text-center mt-4">
//               We typically respond within 2 hours during business hours
//             </p>
//           </form>
//         </section>
//       </main>

//       {/* Footer */}
//       <footer className="bg-gray-900 text-white">
//         <div className="max-w-7xl mx-auto px-4 py-12">
//           <div className="grid md:grid-cols-3 gap-8 mb-8">
//             <div>
//               <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
//               <ul className="space-y-2 text-gray-300">
//                 <li><a href="#" className="hover:text-white transition-colors">Track Your Order</a></li>
//                 <li><a href="#" className="hover:text-white transition-colors">Return an Item</a></li>
//                 <li><a href="#" className="hover:text-white transition-colors">Manage Prime</a></li>
//                 <li><a href="#" className="hover:text-white transition-colors">Your Account</a></li>
//               </ul>
//             </div>
//             <div>
//               <h3 className="text-lg font-semibold mb-4">Support</h3>
//               <ul className="space-y-2 text-gray-300">
//                 <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
//                 <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
//                 <li><a href="#" className="hover:text-white transition-colors">Live Chat</a></li>
//                 <li><a href="#" className="hover:text-white transition-colors">Community Forums</a></li>
//               </ul>
//             </div>
//             <div>
//               <h3 className="text-lg font-semibold mb-4">Connect</h3>
//               <p className="text-gray-300 mb-4">Get support 24/7</p>
//               <div className="flex space-x-4">
//                 <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition-colors">
//                   Live Chat
//                 </button>
//                 <button className="border border-gray-600 hover:border-gray-400 px-4 py-2 rounded-lg transition-colors">
//                   Call Us
//                 </button>
//               </div>
//             </div>
//           </div>
          
//           <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
//             <p>
//               © {new Date().getFullYear()} Amazon Support Services. All Rights Reserved. |{' '}
//               <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors">
//                 Privacy Policy
//               </a>{' '}
//               |{' '}
//               <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors">
//                 Terms of Service
//               </a>
//             </p>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// }

// export default AmazonCustomerSupport;









import { useState } from 'react';
import { HeadphonesIcon, ShieldCheckIcon, ClockIcon, MessageCircleIcon } from 'lucide-react';
import PopComponent from './PopComponent';

function AmazonCustomerSupport() {
  // State to manage which FAQ is open
  const [openFAQ, setOpenFAQ] = useState(null);

  // Function to toggle FAQ answers
  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <header className="relative bg-gradient-to-br from-blue-50 via-white to-blue-100 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-orange-500/5"></div>
        <div className="relative max-w-7xl mx-auto px-4 py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="flex items-center space-x-2 text-blue-600">
                  <HeadphonesIcon className="w-6 h-6" />
                  <span className="text-sm font-semibold tracking-wide uppercase">24/7 Support Available</span>
                </div>
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                  We're here to 
                  <span className="text-blue-600"> help you</span> with 
                  <span className="text-orange-500"> everything</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Get instant support for your Amazon orders, returns, account issues, and more. 
                  Our friendly team is ready to assist you every step of the way.
                </p>
              </div>

              {/* Trust Indicators */}
              <div className="grid grid-cols-3 gap-4 py-6">
                <div className="text-center">
                  <div className="flex justify-center mb-2">
                    <ClockIcon className="w-8 h-8 text-green-500" />
                  </div>
                  <p className="text-sm font-medium text-gray-700">Quick Response</p>
                  <p className="text-xs text-gray-500">Under 2 minutes</p>
                </div>
                <div className="text-center">
                  <div className="flex justify-center mb-2">
                    <ShieldCheckIcon className="w-8 h-8 text-blue-500" />
                  </div>
                  <p className="text-sm font-medium text-gray-700">Secure & Safe</p>
                  <p className="text-xs text-gray-500">Protected chat</p>
                </div>
                <div className="text-center">
                  <div className="flex justify-center mb-2">
                    <MessageCircleIcon className="w-8 h-8 text-purple-500" />
                  </div>
                  <p className="text-sm font-medium text-gray-700">Expert Help</p>
                  <p className="text-xs text-gray-500">Trained specialists</p>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => document.getElementById('contact-form').scrollIntoView({ behavior: 'smooth' })}
                  className="group bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-xl shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center justify-center space-x-2"
                >
                  <MessageCircleIcon className="w-5 h-5" />
                  <span>Start a Conversation</span>
                </button>
                <button className="group border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2">
                  <HeadphonesIcon className="w-5 h-5" />
                  <span>Call Support</span>
                </button>
              </div>
            </div>

            {/* Image/Illustration */}
            <div className="relative">
              <div className="relative z-10 rounded-2xl shadow-2xl p-8">
                <img 
                  src="/QB_Error____Dial_844_4144868_Quickbooks_Customer_-removebg-preview.png" 
                  alt="Friendly Customer Support Representative" 
                  className="w-full h-auto rounded-xl"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-200 rounded-full opacity-60"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-orange-200 rounded-full opacity-40"></div>
            </div>
          </div>
        </div>
      </header>

      <PopComponent />

      {/* Quick Help Section */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Popular Help Topics</h2>
            <p className="text-gray-600">Quick answers to the most common questions</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { 
                title: 'Track Your Order', 
                description: 'Get real-time updates on your package delivery',
                icon: '📦',
                color: 'bg-blue-50 border-blue-200'
              },
              { 
                title: 'Return or Exchange', 
                description: 'Easy returns and exchanges within 30 days',
                icon: '🔄',
                color: 'bg-green-50 border-green-200'
              },
              { 
                title: 'Account Issues', 
                description: 'Password resets and account recovery help',
                icon: '👤',
                color: 'bg-purple-50 border-purple-200'
              },
              { 
                title: 'Payment Problems', 
                description: 'Resolve payment errors and billing questions',
                icon: '💳',
                color: 'bg-orange-50 border-orange-200'
              },
              { 
                title: 'Prime Membership', 
                description: 'Manage your Prime benefits and subscription',
                icon: '⭐',
                color: 'bg-yellow-50 border-yellow-200'
              },
              { 
                title: 'Device Support', 
                description: 'Help with Kindle, Echo, and Fire devices',
                icon: '📱',
                color: 'bg-indigo-50 border-indigo-200'
              }
            ].map((topic, index) => (
              <div key={index} className={`${topic.color} border-2 rounded-xl p-6 hover:shadow-lg transition-all duration-300 cursor-pointer group`}>
                <div className="text-3xl mb-3">{topic.icon}</div>
                <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {topic.title}
                </h3>
                <p className="text-gray-600 text-sm">{topic.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="flex-grow container mx-auto px-4 py-12">
        {/* FAQ Section */}
        <section id="home" className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Find quick answers to common questions. If you can't find what you're looking for, 
              our support team is always ready to help.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-4">
            {[
              { question: 'Where is my order?', answer: 'You can track your package in real-time by visiting Your Orders in your Amazon account. We\'ll provide detailed tracking information and delivery estimates.' },
              { question: 'How do I return an item?', answer: 'Returns are easy! Go to Your Orders, select the item you want to return, choose your reason, and we\'ll guide you through the process. Most items can be returned within 30 days.' },
              { question: 'I can\'t log into my Amazon account', answer: 'Don\'t worry! We can help you recover your account. Try resetting your password first, or contact us if you need additional assistance with account recovery.' },
              { question: 'Why was my payment declined?', answer: 'Payment issues can happen for several reasons. Check that your payment method is valid and has sufficient funds. We can help resolve any payment errors quickly and securely.' },
              { question: 'How do I manage my Amazon Prime membership?', answer: 'You can manage your Prime membership in Your Account under Prime Membership. From there, you can view benefits, update payment methods, or cancel if needed.' },
              { question: 'How do I contact an Amazon seller?', answer: 'To contact a seller, go to Your Orders, find the relevant order, and click "Contact Seller." You can message them directly through Amazon\'s secure messaging system.' },
            ].map((faq, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-xl shadow-sm">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left p-6 flex justify-between items-center hover:bg-gray-50 transition-colors rounded-xl"
                >
                  <h3 className="text-lg font-semibold text-gray-900 pr-4">{faq.question}</h3>
                  <span className="text-2xl text-blue-600 flex-shrink-0">
                    {openFAQ === index ? '−' : '+'}
                  </span>
                </button>
                {openFAQ === index && (
                  <div className="px-6 pb-6">
                    <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Contact Form Section */}
        <section id="contact-form" className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Still Need Help?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Can't find the answer you're looking for? Send us a message and we'll get back to you as soon as possible.
            </p>
          </div>
          
          <form className="max-w-2xl mx-auto bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                  placeholder="Enter your full name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                  placeholder="Enter your email"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="phone" className="block text-gray-700 font-semibold mb-2">
                  Phone Number
                </label>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                  placeholder="Enter your phone number"
                />
              </div>
              <div>
                <label htmlFor="order" className="block text-gray-700 font-semibold mb-2">
                  Order Number
                </label>
                <input
                  type="text"
                  id="order"
                  name="order"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                  placeholder="Enter your order number"
                />
              </div>
            </div>

            <div className="mb-6">
              <label htmlFor="query-type" className="block text-gray-700 font-semibold mb-2">
                What can we help you with? *
              </label>
              <select
                id="query-type"
                name="query-type"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
              >
                <option value="" disabled selected>
                  Choose a topic
                </option>
                <option value="orders">Order Questions</option>
                <option value="returns">Returns & Refunds</option>
                <option value="account">Account Issues</option>
                <option value="payment">Payment Problems</option>
                <option value="prime">Prime Membership</option>
                <option value="seller">Seller Questions</option>
                <option value="devices">Device Support</option>
                <option value="other">Something Else</option>
              </select>
            </div>

            <div className="mb-8">
              <label htmlFor="issue" className="block text-gray-700 font-semibold mb-2">
                Tell us more about your issue *
              </label>
              <textarea
                id="issue"
                name="issue"
                rows="5"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition resize-none"
                placeholder="Please describe your issue in detail so we can help you better..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-4 px-6 rounded-xl font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center space-x-2"
            >
              <MessageCircleIcon className="w-5 h-5" />
              <span>Send Message</span>
            </button>
            
            <p className="text-sm text-gray-500 text-center mt-4">
              We typically respond within 2 hours during business hours
            </p>
          </form>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-white transition-colors">Track Your Order</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Return an Item</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Manage Prime</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Your Account</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Live Chat</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Community Forums</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Connect</h3>
              <p className="text-gray-300 mb-4">Get support 24/7</p>
              <div className="flex space-x-4">
                <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition-colors">
                  Live Chat
                </button>
                <button className="border border-gray-600 hover:border-gray-400 px-4 py-2 rounded-lg transition-colors">
                  Call Us
                </button>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
            <p>
              © {new Date().getFullYear()} Amazon Support Services. All Rights Reserved. |{' '}
              <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors">
                Privacy Policy
              </a>{' '}
              |{' '}
              <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors">
                Terms of Service
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default AmazonCustomerSupport;