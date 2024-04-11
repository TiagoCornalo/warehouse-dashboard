import { useNavigate } from 'react-router-dom';
import { Button } from '@/components';

const NotFoundPage = () => {
  const navigate = useNavigate();

  const goHome = () => {
    navigate('/');
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-center">
        <h1 className="text-9xl font-bold">404</h1>
        <p className="text-2xl mb-8">Oops, we couldn't find the page you are looking for.</p>
        <Button
          onClick={goHome}>
          Back to home
        </Button>
      </div>
    </div>
  );
};

export default NotFoundPage;
