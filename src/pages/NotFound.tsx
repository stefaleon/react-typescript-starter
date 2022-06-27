import { useLocation } from "react-router-dom";

function NotFound() {
  const location = useLocation();

  return (
    <>
      <div>404 - Cannot find this page...</div>
      <div> {location.pathname}</div>
    </>
  );
}

export default NotFound;
