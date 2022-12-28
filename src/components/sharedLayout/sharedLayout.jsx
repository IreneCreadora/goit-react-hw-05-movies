import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { InfinitySpin } from 'react-loader-spinner';
import { ToastContainer } from 'react-toastify';
import { Container, Header, Logo, Link } from './sharedLayout.styled';
import { AiFillRocket } from 'react-icons/ai';

export const SharedLayout = () => {
  return (
    <Container>
      <Header>
        <Logo>
          <span role="img" aria-label="logo icon">
            <AiFillRocket size="30px" color="#9f40ff" />
          </span>{' '}
          TRENDING MOVIES TODAY
        </Logo>
        <nav>
          <Link to="/" end>
            Home
          </Link>
          <Link to="/movies">Movies</Link>
        </nav>
      </Header>
      <Suspense fallback={<InfinitySpin width="200" color="#9f40ff" />}>
        <Outlet />
      </Suspense>
      <ToastContainer />
    </Container>
  );
};
