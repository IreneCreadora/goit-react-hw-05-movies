import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 16px;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 8px 0;
  margin-bottom: 16px;
  border-bottom: 1px solid ${p => p.theme.colors.muted};

  > nav {
    display: flex;
  }
`;

export const Logo = styled.p`
  font-weight: ${p => p.theme.fontWeights.bold};
  margin: 0;
`;

export const Link = styled(NavLink)`
  padding: 8px 16px;
  border-radius: ${p => p.theme.radii.normal};
  text-decoration: none;
  color: ${p => p.theme.colors.black};
  font-weight: ${p => p.theme.fontWeights.large};

  &.active {
    color: ${p => p.theme.colors.white};
    background-color: ${p => p.theme.colors.accent};
  }
`;
