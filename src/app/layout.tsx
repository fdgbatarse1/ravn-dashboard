import type { Metadata } from 'next';
import './globals.css';
import Sidebar from '@/components/sidebar';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

interface RootLayoutProps {
  children: React.ReactNode;
  modal: React.ReactNode;
}

function RootLayout({ children, modal }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className="bg-neutral-5 font-sans text-white">
        {modal}
        <div className="flex h-screen flex-col space-y-8 p-8 md:flex-row md:space-x-8 md:space-y-0">
          <nav className="w-full flex-none md:w-64">
            <Sidebar />
          </nav>
          <main className="flex-grow overflow-auto">{children}</main>
        </div>
      </body>
    </html>
  );
}

export default RootLayout;
