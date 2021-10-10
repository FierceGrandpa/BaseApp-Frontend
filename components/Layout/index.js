import Header from './Header';
import Footer from './Footer';

import reboot from './reboot.scss';

export default function Layout({ children }) {
  return (
    <>
      <Header />

      <main>{children}</main>

      <Footer />

      <style jsx global>{reboot}</style>
      <style jsx global>
        {`
        #__next {
          position: relative;
          overflow: hidden;
        }
      `}
      </style>
    </>
  );
}
