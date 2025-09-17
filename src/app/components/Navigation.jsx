'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-xl font-bold text-blue-600">
            Reedone Blog
          </Link>
          
          <div className="flex space-x-6">
            <Link 
              href="/" 
              className={`hover:text-blue-600 transition-colors ${pathname === '/' ? 'text-blue-600 font-medium' : 'text-gray-600'}`}
            >
              Home
            </Link>
            <Link 
              href="/blogs" 
              className={`hover:text-blue-600 transition-colors ${pathname === '/blogs' ? 'text-blue-600 font-medium' : 'text-gray-600'}`}
            >
              Blogs
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}