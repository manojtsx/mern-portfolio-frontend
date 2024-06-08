import React from 'react';

const LoadingScreen = () => {
  return (
    <div className="flex flex-col space-y-4 animate-pulse">
      <div className="h-32 bg-gray-300 rounded"></div>
      <div className="space-y-2">
        <div className="h-4 bg-gray-300 rounded w-3/4"></div>
        <div className="h-4 bg-gray-300 rounded"></div>
        <div className="h-4 bg-gray-300 rounded w-1/2"></div>
      </div>
    </div>
  );
};

export default LoadingScreen;