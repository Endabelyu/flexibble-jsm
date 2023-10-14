import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import './global.css';

export const metadata = {
  title: 'Flexibble ',
  description: 'Showcase and discover remarable developer projects ',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
