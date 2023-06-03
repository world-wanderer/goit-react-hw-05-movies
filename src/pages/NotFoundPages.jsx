import { Link } from 'react-router-dom';

function NotFoundPage() {
  return (
    <div>
      <h2>ERROR! Page not found!</h2>
      <button>
        <Link to="/">Back to main page</Link>
      </button>
    </div>
  );
}

export default NotFoundPage;
