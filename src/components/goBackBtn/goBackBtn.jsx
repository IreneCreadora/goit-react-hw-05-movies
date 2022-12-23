import PropTypes from 'prop-types';
import { AiOutlineDoubleLeft } from 'react-icons/ai';
import { BackLink } from './goBackBtn.styled';

const GoBackBtn = ({ to, children }) => {
  return (
    <BackLink to={to}>
      <AiOutlineDoubleLeft size="18" />
      {children}
    </BackLink>
  );
};

GoBackBtn.propTypes = {
  to: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired,
};

export default GoBackBtn;
