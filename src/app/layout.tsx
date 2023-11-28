import type { Metadata } from 'next';
import './globals.css';
import Sidebar from '@/components/sidebar';

export const metadata: Metadata = {
  title: 'Ravn Dashboard',
  description:
    'The Ravn Dashboard is a task and project management interface that enables users to organize and track their work effectively.',
};

interface RootLayoutProps {
  children: React.ReactNode;
  modal: React.ReactNode;
}

function RootLayout({ children, modal }: RootLayoutProps) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/icon" />
      </head>
      <body className="bg-neutral-5 font-sans text-white">
        <div className="flex h-screen flex-col space-y-8 p-8 md:flex-row md:space-x-8 md:space-y-0">
          <nav className="w-full flex-none md:w-64">
            <Sidebar />
          </nav>
          <main className="flex-grow overflow-auto">
            {children}
            {modal}
          </main>
        </div>
      </body>
    </html>
  );
}

export default RootLayout;
