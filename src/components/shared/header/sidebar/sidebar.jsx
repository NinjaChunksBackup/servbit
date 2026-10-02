import PropTypes from 'prop-types';

import Button from 'components/shared/button';
import { cn } from 'utils/cn';

const Sidebar = ({ className }) => (
  <div className={cn('flex items-center lg:hidden', className)}>
    <Button
      className="h-10 px-5 text-[14px] font-semibold tracking-snug transition-transform duration-150 hover:scale-[1.02]"
      data-test="header-cta"
      to="#contact"
      theme="white-filled-multi"
      size="xs"
      tagName="Header"
    >
      Take Your Business Online
    </Button>
  </div>
);

Sidebar.propTypes = {
  className: PropTypes.string,
  isClient: PropTypes.bool,
};

export default Sidebar;
