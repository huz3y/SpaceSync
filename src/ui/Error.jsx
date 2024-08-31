import PropTypes from "prop-types";

export default function Error({ error, resetErrorBoundary }) {
  return (
    <main className="error__layout">
      <div className="error__box">
        <h1>Oops! Something Went wrong</h1>
        <p>
          We could not load the page you were looking for. But don&apos;t worry!
          You can find your way back
        </p>
        <p>Error: {error.message}</p>
        <a onClick={resetErrorBoundary} size="large">
          &larr; Go back
        </a>
      </div>
    </main>
  );
}

Error.propTypes = {
  error: PropTypes.object,
  resetErrorBoundary: PropTypes.func,
};
