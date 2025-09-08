export default function NotFound() {
  return (
    <div className="flex items-center justify-center min-h-[60vh]">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-navy-primary mb-4">404</h1>
        <p className="text-lg mb-6">Page not found</p>
        <a 
          href="/" 
          className="text-blue-600 hover:text-blue-800 underline"
        >
          Go back home
        </a>
      </div>
    </div>
  );
}
