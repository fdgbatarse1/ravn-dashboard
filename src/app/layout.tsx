import type { Metadata } from 'next';
import './globals.css';
import Sidebar from '@/components/sidebar';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-neutral-5 font-sans text-white">
        <div className="flex h-screen flex-col space-y-8 p-8 md:flex-row md:space-x-8 md:space-y-0">
          <nav className="w-full flex-none md:w-64">
            <Sidebar />
          </nav>
          <main className="flex-grow">{children}</main>
        </div>
      </body>
    </html>
  );
}

export default RootLayout;
