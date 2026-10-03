import PropTypes from 'prop-types';

import CookieConsent from 'components/shared/cookie-consent';
import Footer from 'components/shared/footer';
import Header from 'components/shared/header';
import Topbar from 'components/shared/topbar';
import { cn } from 'utils/cn';

const Layout = ({
  className = null,
  headerClassName = null,
  withOverflowHidden = false,
  children,
  isHeaderSticky = false,
  isHeaderStickyOverlay = false,
  hasThemesSupport = false,
  isClient = false,
}) => (
  <>
    {!isClient && <Topbar />}
    <div
      className={cn(
        'relative flex flex-col pt-safe',
        isClient ? 'min-h-screen' : 'min-h-[calc(100vh-36px)]'
      )}
    >
      <Header
        className={headerClassName}
        isSticky={isHeaderSticky}
        isStickyOverlay={isHeaderStickyOverlay}
        hasThemesSupport={hasThemesSupport}
        isClient={isClient}
      />
      <main
        className={cn(withOverflowHidden && 'overflow-hidden', 'flex flex-1 flex-col', className)}
      >
        {children}
      </main>
      <Footer hasThemesSupport={hasThemesSupport} />
      <CookieConsent />
    </div>
  </>
);

Layout.propTypes = {
  className: PropTypes.string,
  headerClassName: PropTypes.string,
  withOverflowHidden: PropTypes.bool,
  children: PropTypes.node.isRequired,
  isHeaderSticky: PropTypes.bool,
  isHeaderStickyOverlay: PropTypes.bool,
  hasThemesSupport: PropTypes.bool,
  isClient: PropTypes.bool,
};

export default Layout;
