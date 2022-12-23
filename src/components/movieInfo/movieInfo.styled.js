import styled from 'styled-components';

export const Card = styled.div`
  position: relative;
  border-radius: ${p => p.theme.radii.normal};
  border: solid 1px ${p => p.theme.colors.border};
  background: ${p => p.theme.colors.muted};
`;

export const Thumb = styled.div`
  height: 250px;

  @media (max-width: 767px) {
    height: 300px;
  }

  @media (max-width: 1169px) {
    height: 350px;
  }

  @media (min-width: 1170px) {
    height: 400px;
  }
`;

export const Poster = styled.img`
  width: 100%;
  height: 100%;
  border-radius: ${p => p.theme.radii.normal};

  object-fit: cover;
  object-position: top;
`;

export const Discription = styled.p`
  display: flex;
  justify-content: center;
  padding: 10px;

  font-size: ${p => p.theme.fontSizes.m};
`;

export const Vote = styled.b`
  position: absolute;
  top: 15px;
  right: 15px;
  padding: 5px;
  border-radius: ${p => p.theme.radii.normal};

  color: ${p => p.theme.colors.white};
  background-color: ${p => p.theme.colors.accent};
`;
