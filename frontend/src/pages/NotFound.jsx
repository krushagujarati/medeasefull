import { Link } from 'react-router-dom';
export default function NotFound() {
  return (
    <div className="p-8 text-center">
      <h1 className="text-2xl">404 - Page Not Found</h1>
      <Link to="/" className="text-blue-500 underline">Go Home</Link>
    </div>
  );
}
