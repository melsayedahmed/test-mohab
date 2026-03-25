import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  const phoneNumber = '201146198234';
  const whatsappUrl = `https://wa.me/${phoneNumber}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 left-6 md:bottom-8 md:left-8 z-50 group"
      aria-label="Contact us on WhatsApp"
    >
      <div className="relative">
        <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
          <div className="bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-sm px-3 py-2 rounded-lg font-medium">
            تواصل معنا على واتساب
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-gray-900 dark:border-t-white"></div>
          </div>
        </div>

        <button
          className="flex items-center justify-center w-14 h-14 md:w-16 md:h-16 bg-green-500 hover:bg-green-600 dark:bg-green-600 dark:hover:bg-green-700 rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 group-hover:scale-110 active:scale-95"
        >
          <MessageCircle className="w-7 h-7 md:w-8 md:h-8 text-white" />
        </button>
      </div>
    </a>
  );
}
