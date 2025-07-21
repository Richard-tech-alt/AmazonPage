// import { Phone, MessageCircle, Clock, Users } from 'lucide-react';

// function PhonePopup() {
//   const phoneNumber = "+1-800-746-7539";
//   const displayNumber = "1-800-AMAZON";

//   const handlePhoneClick = () => {
//     window.location.href = `tel:${phoneNumber}`;
//   };

//   return (
//     <div className="fixed bottom-4 right-4 z-50 max-w-xs w-full px-4">
//       {/* Main popup container */}
//       <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden transform transition-all duration-300 hover:scale-105">
//         {/* Header with gradient */}
//         <div className="bg-gradient-to-r from-green-500 to-green-600 text-white p-4">
//           <div className="flex items-center space-x-3">
//             <div className="bg-white bg-opacity-20 p-2 rounded-full">
//               <Phone className="w-5 h-5" />
//             </div>
//             <div>
//               <h3 className="font-bold text-sm">Need Immediate Help?</h3>
//               <p className="text-xs text-green-100">Call us now for instant support</p>
//             </div>
//           </div>
//         </div>

//         {/* Content */}
//         <div className="p-4">
//           {/* Trust indicators */}
//           <div className="grid grid-cols-2 gap-2 mb-4">
//             <div className="text-center p-2 bg-blue-50 rounded-lg">
//               <Clock className="w-4 h-4 text-blue-600 mx-auto mb-1" />
//               <p className="text-xs font-semibold text-blue-800">24/7</p>
//               <p className="text-xs text-blue-600">Available</p>
//             </div>
//             <div className="text-center p-2 bg-green-50 rounded-lg">
//               <Users className="w-4 h-4 text-green-600 mx-auto mb-1" />
//               <p className="text-xs font-semibold text-green-800">Expert</p>
//               <p className="text-xs text-green-600">Support</p>
//             </div>
//           </div>

//           {/* Phone number button */}
//           <button
//             onClick={handlePhoneClick}
//             className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-bold py-3 px-4 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center space-x-2 mb-3"
//           >
//             <Phone className="w-5 h-5" />
//             <span className="text-lg">{displayNumber}</span>
//           </button>

//           {/* Alternative contact */}
//           <button
//             onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
//             className="w-full border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-semibold py-2 px-4 rounded-xl transition-all duration-300 flex items-center justify-center space-x-2"
//           >
//             <MessageCircle className="w-4 h-4" />
//             <span className="text-sm">Or Chat Online</span>
//           </button>

//           {/* Additional info */}
//           <div className="mt-3 text-center">
//             <p className="text-xs text-gray-500">
//               🔒 Secure & Free Support
//             </p>
//             <p className="text-xs text-gray-400 mt-1">
//               Average wait time: &lt; 30 seconds
//             </p>
//           </div>
//         </div>

//         {/* Pulsing indicator */}
//         <div className="absolute -top-1 -right-1">
//           <div className="w-4 h-4 bg-red-500 rounded-full animate-pulse"></div>
//           <div className="absolute top-0 right-0 w-4 h-4 bg-red-500 rounded-full animate-ping"></div>
//         </div>
//       </div>

//       {/* Mobile-specific adjustments */}
//       <style jsx>{`
//         @media (max-width: 640px) {
//           .fixed {
//             bottom: 1rem;
//             right: 1rem;
//             max-width: 280px;
//           }
//         }
        
//         @media (max-width: 480px) {
//           .fixed {
//             bottom: 0.75rem;
//             right: 0.75rem;
//             max-width: 260px;
//           }
//         }
//       `}</style>
//     </div>
//   );
// }

// export default PhonePopup;






import { Phone, MessageCircle, Clock, Users, X } from 'lucide-react';
import { useState } from 'react';

function PhonePopup() {
  const [isMinimized, setIsMinimized] = useState(false);
  const phoneNumber = "+1-803-886-6622";
  const displayNumber = "1-803-AMAZON";

  const handlePhoneClick = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  return (
    <>
      {/* Desktop Version - Vertical Layout */}
      <div className="hidden md:block fixed bottom-4 right-4 z-50 max-w-xs w-full px-4">
        <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden transform transition-all duration-300 hover:scale-105">
          {/* Header with gradient */}
          <div className="bg-gradient-to-r from-green-500 to-green-600 text-white p-4">
            <div className="flex items-center space-x-3">
              <div className="bg-white bg-opacity-20 p-2 rounded-full">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-sm">Need Immediate Help?</h3>
                <p className="text-xs text-green-100">Call us now for instant support</p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-4">
            {/* Trust indicators */}
            <div className="grid grid-cols-2 gap-2 mb-4">
              <div className="text-center p-2 bg-blue-50 rounded-lg">
                <Clock className="w-4 h-4 text-blue-600 mx-auto mb-1" />
                <p className="text-xs font-semibold text-blue-800">24/7</p>
                <p className="text-xs text-blue-600">Available</p>
              </div>
              <div className="text-center p-2 bg-green-50 rounded-lg">
                <Users className="w-4 h-4 text-green-600 mx-auto mb-1" />
                <p className="text-xs font-semibold text-green-800">Expert</p>
                <p className="text-xs text-green-600">Support</p>
              </div>
            </div>

            {/* Phone number button */}
            <button
              onClick={handlePhoneClick}
              className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-bold py-3 px-4 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center space-x-2 mb-3"
            >
              <Phone className="w-5 h-5" />
              <span className="text-lg">{displayNumber}</span>
            </button>

            {/* Alternative contact */}
            <button
              onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-semibold py-2 px-4 rounded-xl transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span className="text-sm">Or Chat Online</span>
            </button>

            {/* Additional info */}
            <div className="mt-3 text-center">
              <p className="text-xs text-gray-500">
                🔒 Secure & Free Support
              </p>
              <p className="text-xs text-gray-400 mt-1">
                Average wait time: - 30 seconds
              </p>
            </div>
          </div>

          {/* Pulsing indicator */}
          <div className="absolute -top-1 -right-1">
            <div className="w-4 h-4 bg-red-500 rounded-full animate-pulse"></div>
            <div className="absolute top-0 right-0 w-4 h-4 bg-red-500 rounded-full animate-ping"></div>
          </div>
        </div>
      </div>

      {/* Mobile Version - Horizontal Layout */}
      <div className="md:hidden fixed bottom-4 left-4 right-4 z-50">
        {!isMinimized ? (
          <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
            {/* Mobile Header - Horizontal */}
            <div className="bg-gradient-to-r from-green-500 to-green-600 text-white p-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="bg-white bg-opacity-20 p-2 rounded-full">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm">Need Help?</h3>
                    <p className="text-xs text-green-100">Call for instant support</p>
                  </div>
                </div>
                <button
                  onClick={() => setIsMinimized(true)}
                  className="text-white hover:text-gray-200 transition-colors p-1"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Mobile Content - Horizontal Layout */}
            <div className="p-3">
              <div className="flex items-center space-x-3">
                {/* Trust indicators - Horizontal */}
                <div className="flex space-x-2 flex-1">
                  <div className="text-center p-2 bg-blue-50 rounded-lg flex-1">
                    <Clock className="w-3 h-3 text-blue-600 mx-auto mb-1" />
                    <p className="text-xs font-semibold text-blue-800">24/7</p>
                  </div>
                  <div className="text-center p-2 bg-green-50 rounded-lg flex-1">
                    <Users className="w-3 h-3 text-green-600 mx-auto mb-1" />
                    <p className="text-xs font-semibold text-green-800">Expert</p>
                  </div>
                </div>

                {/* Action buttons - Horizontal */}
                <div className="flex space-x-2">
                  <button
                    onClick={handlePhoneClick}
                    className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-bold py-2 px-3 rounded-lg transition-all duration-300 flex items-center space-x-1"
                  >
                    <Phone className="w-4 h-4" />
                    <span className="text-sm">Call</span>
                  </button>
                  
                  <button
                    onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
                    className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-semibold py-2 px-3 rounded-lg transition-all duration-300 flex items-center space-x-1"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span className="text-sm">Chat</span>
                  </button>
                </div>
              </div>

              {/* Phone number display */}
              <div className="mt-2 text-center">
                <button
                  onClick={handlePhoneClick}
                  className="text-green-600 font-bold text-lg hover:text-green-700 transition-colors"
                >
                  {displayNumber}
                </button>
                <p className="text-xs text-gray-500">Tap to call • Free support</p>
              </div>
            </div>

            {/* Pulsing indicator */}
            <div className="absolute -top-1 -right-1">
              <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
              <div className="absolute top-0 right-0 w-3 h-3 bg-red-500 rounded-full animate-ping"></div>
            </div>
          </div>
        ) : (
          /* Minimized state - Small floating button */
          <div className="flex justify-end">
            <button
              onClick={() => setIsMinimized(false)}
              className="bg-gradient-to-r from-green-500 to-green-600 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
            >
              <Phone className="w-5 h-5" />
              <div className="absolute -top-1 -right-1">
                <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
              </div>
            </button>
          </div>
        )}
      </div>
    </>
  );
}

export default PhonePopup;