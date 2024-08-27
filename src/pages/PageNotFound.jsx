import { useNavigate } from "react-router-dom";

function PageNotFound() {
  const navigate = useNavigate();
  return (
    <main className="pageNotFound__layout">
      <div className="pageNotFound__box">
        <h1>Oops! This Page Got Lost in the Wilderness 🌲</h1>
        <p>
          We couldn&apos;t find the page you were looking for. It might have
          taken a wrong turn on the way here. But don&apos;t worry! You can find
          your way back
        </p>
        <a onClick={() => navigate(-1)} size="large">
          &larr; Go back
        </a>
      </div>
    </main>
  );
}

export default PageNotFound;
