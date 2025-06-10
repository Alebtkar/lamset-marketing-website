
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    // Redirect to main app since we're using single page layout
    window.location.href = "/";
  }, []);

  return null;
};

export default Index;
