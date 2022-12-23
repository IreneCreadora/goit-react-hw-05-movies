import { useLocation } from 'react-router-dom';
import GoBackBtn from 'components/goBackBtn/goBackBtn';

const NotFound = () => {
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  return (
    <main>
      <GoBackBtn to={backLinkHref}>Go back</GoBackBtn>
      <h2>Error 404: Page Not Found</h2>
      <p>😮Sorry we couldn't find that page 😮</p>
    </main>
  );
};

export default NotFound;
