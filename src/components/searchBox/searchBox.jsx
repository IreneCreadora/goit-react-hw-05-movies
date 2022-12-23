import PropTypes from 'prop-types';
import { Wrapper, Input, Icon } from './searchBox.styled';

export const SearchBox = ({ value, onChange }) => {
  return (
    <Wrapper>
      <Icon />
      <Input
        type="text"
        name="query"
        value={value}
        autoComplete="off"
        placeholder="Search movies"
        autoFocus
        required
        onChange={e => onChange(e.target.value)}
      />
    </Wrapper>
  );
};

SearchBox.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
