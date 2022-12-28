import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Wrapper = styled.div`
  border-bottom: 1px solid ${p => p.theme.colors.muted};
  @media (min-width: 768px) {
    display: flex;
  }
`;

export const Poster = styled.img`
  margin-top: 14px;
  margin-bottom: 14px;
  height: auto;
  border-radius: ${p => p.theme.radii.normal};

  @media (min-width: 768px) {
    max-width: 250px;
  }
  @media (min-width: 1170px) {
    max-width: 350px;
  }
`;

export const Info = styled.div`
  margin: 14px auto 14px 20px;
  width: 300px;
  @media (min-width: 768px) {
    width: 500px;
  }
`;

export const InfoItem = styled.li`
  margin-top: 14px;
`;

export const Genre = styled.li`
  font-size: ${p => p.theme.fontSizes.s};
  &:first-child {
    margin-top: 8px;
  }
  &:not(:last-child) {
    margin-bottom: 6px;
  }

  &::before {
    content: '▶';
    margin-right: 10px;
    color: ${p => p.theme.colors.accent};
  }
`;
export const Nav = styled.nav`
  margin-top: 12px;
  margin-bottom: 12px;
`;

export const Link = styled(NavLink)`
  padding: 6px 12px;
  border-radius: ${p => p.theme.radii.normal};
  text-decoration: none;
  color: ${p => p.theme.colors.black};
  font-weight: ${p => p.theme.fontWeights.large};
  margin-left: 10px;
  :hover {
    color: ${p => p.theme.colors.white};
    background-color: ${p => p.theme.colors.affect};
  }
  &.active {
    color: ${p => p.theme.colors.white};
    background-color: ${p => p.theme.colors.accent};
  }
`;
