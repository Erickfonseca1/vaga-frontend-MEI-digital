'use client';

import { useRouter } from 'next/navigation';
import React from 'react';

const Header = () => {
  const router = useRouter();

  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4 sm:py-6">
          <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">Sistema de Serviços</h1>
          <div className="flex gap-2 sm:gap-4">
            <button
              onClick={() => router.push('/')}
              className="cursor-pointer bg-white text-blue-600 border border-blue-600 px-2 sm:px-3 lg:px-4 py-1 sm:py-2 rounded-md hover:bg-blue-600 hover:text-white transition-colors text-xs sm:text-sm lg:text-base"
            >
              Home
            </button>
            <button
              onClick={() => router.push('/new-service')}
              className="cursor-pointer bg-white text-blue-600 border border-blue-600 px-2 sm:px-3 lg:px-4 py-1 sm:py-2 rounded-md hover:bg-blue-600 hover:text-white transition-colors text-xs sm:text-sm lg:text-base"
            >
              Novo Serviço
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;