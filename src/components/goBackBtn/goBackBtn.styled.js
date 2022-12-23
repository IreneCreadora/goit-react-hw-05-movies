import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const BackLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 8px 12px;
  border-radius: ${p => p.theme.radii.normal};
  background-color: ${p => p.theme.colors.accent};
  text-decoration: none;
  color: ${p => p.theme.colors.black};
  font-weight: ${p => p.theme.fontWeights.large};

  :hover {
    color: ${p => p.theme.colors.white};
    background-color: ${p => p.theme.colors.affect};
  }
  &.active {
    color: ${p => p.theme.colors.white};
    background-color: ${p => p.theme.colors.affect};

`;
