import Link from 'next/link';

import { site } from 'data';

import styles from './styles.scss';

const Logo = () => (
  <>
    <Link href="/">
      <a className="logo" title={site.brand}>
        {/* ... */}
      </a>
    </Link>
    <style jsx>{styles}</style>
  </>
);
export default Logo;
