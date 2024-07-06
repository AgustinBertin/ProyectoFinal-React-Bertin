import React from "react";
import { hatch } from "ldrs";
const LoaderComponent = () => {
  hatch.register();
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <l-hatch size="28" stroke="4" speed="3.5" color="blue"></l-hatch>
    </div>
  );
};

export default LoaderComponent;
