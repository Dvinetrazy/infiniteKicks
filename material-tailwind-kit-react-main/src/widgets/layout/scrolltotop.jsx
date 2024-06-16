import React, { useState, useEffect } from 'react';
import { ArrowUpIcon } from '@heroicons/react/24/solid';

export const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Mengecek posisi scroll
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Menambah event listener saat komponen dimuat
  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);

    // Membersihkan event listener saat komponen di-unmount
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  // Fungsi untuk menggulir ke atas halaman
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {isVisible && (
        <button
          className="fixed bottom-10 right-10 bg-gray-800 text-white p-3 rounded-full shadow-lg hover:bg-gray-700 focus:outline-none"
          style={{ zIndex: 9999 }} // Mengatur z-index
          onClick={scrollToTop}
        >
          <ArrowUpIcon className="h-6 w-6" />
        </button>
      )}
    </>
  );
};

export default ScrollToTop;
