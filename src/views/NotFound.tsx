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
        <p className="text-2xl mb-8">Oops! No pudimos encontrar la página que buscas.</p>
        <Button
          onClick={goHome}>
          Volver al Inicio
        </Button>
      </div>
    </div>
  );
};

export default NotFoundPage;
