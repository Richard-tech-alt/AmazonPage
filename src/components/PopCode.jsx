// import  { useEffect } from 'react';

// function Popup({ show, onClose, phoneNumber, imageSrc }) {
//   useEffect(() => {
//     if (show) {
//       document.body.style.overflow = 'hidden'; // Disable scrolling
//     } else {
//       document.body.style.overflow = 'auto'; // Enable scrolling
//     }
//     return () => {
//       document.body.style.overflow = 'auto'; // Cleanup on component unmount
//     };
//   }, [show]);

//   if (!show) return null;

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
    
//       <div className="relative bg-white rounded shadow-lg max-w-md w-full overflow-hidden">
//         {/* Close Button */}
//         <button
//           onClick={onClose}
//           className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 z-10"
//         >
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             strokeWidth="2"
//             stroke="currentColor"
//             className="w-6 h-6"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               d="M6 18L18 6M6 6l12 12"
//             />
//           </svg>
//         </button>

//         {/* Popup Content */}
//         <div className="relative flex justify-center items-center">
//           {/* Background Image */}
//           <img
//             src="/AmazonSupport.jpg"
//             alt="Popup Background"
//             className="w-full h-auto object-cover max-h-[90vh] sm:max-h-[70vh] md:max-h-[60vh] rounded-lg"
//           />

//           {/* Support Number */}
//           <a
//             href={`tel:${phoneNumber}`}
//             className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white px-4  rounded-full text-base sm:text-lg md:text-xl font-semibold shadow-lg hover:bg-blue-700"
//           >
//             {phoneNumber}
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Popup;


import { useState, useEffect } from 'react';
import { X, MessageCircle, Clock, Shield, Star, Users, CheckCircle, ArrowRight, Phone, Mail, HeadphonesIcon } from 'lucide-react';

function Popup() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    // Show popup after 5 seconds
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const closePopup = () => {
    setIsVisible(false);
  };

  const handleCallSupport = () => {
  window.location.href = 'tel:+14155552671'; // Replace with your actual number
};

  const steps = [
    {
      title: "👋 Hi there! Need help?",
      subtitle: "We noticed you're browsing our support page",
      content: "Our friendly support team is standing by to help you with any questions or issues you might have."
    },
    {
      title: "🚀 Get instant assistance",
      subtitle: "Choose how you'd like to connect with us",
      content: "We offer multiple ways to get help - pick what works best for you!"
    }
  ];

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-1 backdrop-blur-sm">
      <div className="bg-white rounded-3xl shadow-2xl max-w-lg w-full mx-4 transform transition-all duration-500 scale-100 animate-in overflow-hidden">
        {/* Header with gradient and close button */}
        <div className="relative bg-gradient-to-br from-blue-500 via-blue-600 to-purple-600 text-white p-6">
          <button
            onClick={closePopup}
            className="absolute top-4 right-4 text-white hover:text-gray-200 transition-colors p-1 rounded-full hover:bg-white hover:bg-opacity-20"
          >
            <X className="w-5 h-5" />
          </button>
          
          <div className="text-center">
            <div className="bg-white bg-opacity-20 p-3 rounded-full inline-block mb-3">
              <MessageCircle className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold mb-2">{steps[currentStep].title}</h3>
            <p className="text-blue-100 text-sm">{steps[currentStep].subtitle}</p>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <p className="text-gray-700 text-center mb-6 leading-relaxed">
            {steps[currentStep].content}
          </p>

          {/* Trust indicators */}
          <div className="grid grid-cols-3 gap-3 mb-6">
            <div className="text-center p-3 bg-green-50 rounded-xl">
              <Clock className="w-6 h-6 text-green-600 mx-auto mb-1" />
              <p className="text-xs font-semibold text-green-800">2 min</p>
              <p className="text-xs text-green-600">avg response</p>
            </div>
            <div className="text-center p-3 bg-blue-50 rounded-xl">
              <Users className="w-6 h-6 text-blue-600 mx-auto mb-1" />
              <p className="text-xs font-semibold text-blue-800">24/7</p>
              <p className="text-xs text-blue-600">support</p>
            </div>
            <div className="text-center p-3 bg-purple-50 rounded-xl">
              <Star className="w-6 h-6 text-purple-600 mx-auto mb-1" />
              <p className="text-xs font-semibold text-purple-800">4.9/5</p>
              <p className="text-xs text-purple-600">satisfaction</p>
            </div>
          </div>

          {/* Customer testimonial */}
          {/* <div className="bg-gray-50 rounded-xl p-4 mb-6">
            <div className="flex items-center mb-2">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <span className="text-sm text-gray-600 ml-2">Sarah M.</span>
            </div>
            <p className="text-sm text-gray-700 italic">
              "Amazing support! They solved my order issue in just 3 minutes. Super friendly and helpful!"
            </p>
          </div> */}

          {/* Action buttons */}
          <div className="space-y-3">
            <button
              onClick={() => {
                closePopup();
                document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center space-x-2 group"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Start Live Chat</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={() => {
                  closePopup();
                  document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="flex items-center justify-center space-x-2 border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-semibold py-3 px-4 rounded-xl transition-all duration-300"
              >
                <Mail className="w-4 h-4" />
                <span>Email Us</span>
              </button>
              <button
              onClick={()=>{
                handleCallSupport();
              }}
                className="flex items-center justify-center space-x-2 border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white font-semibold py-3 px-4 rounded-xl transition-all duration-300"
              >
                <Phone className="w-6 h-4" />
                <span>Call Now</span>
              </button> 

            </div>
          </div>

          {/* Security badge */}
          <div className="flex items-center justify-center mt-4 text-gray-500">
            <Shield className="w-4 h-4 mr-2" />
            <span className="text-xs">Your information is secure and protected</span>
          </div>

          {/* Bottom options */}
          <div className="flex justify-between items-center mt-6 pt-4 border-t border-gray-100">
            <button
              onClick={closePopup}
              className="text-gray-500 hover:text-gray-700 text-sm transition-colors"
            >
              Maybe later
            </button>
            <div className="flex items-center space-x-2 text-xs text-gray-400">
              <CheckCircle className="w-3 h-3" />
              <span>Free support</span>
            </div>
          </div>
        </div>

        {/* Progress indicator */}
        {/* <div className="bg-gray-100 px-6 py-3">
          <div className="flex justify-center space-x-2">
            {steps.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentStep ? 'bg-blue-600' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default Popup;