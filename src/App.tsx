import React from 'react';
import { Home } from './ui/pages/Home/Home.tsx';
import { RoutineProvider } from './context/RoutineContext.tsx'

const App: React.FC = () => {

  return (
    <RoutineProvider>
      <Home />      
    </RoutineProvider>
  );
};

export default App;
