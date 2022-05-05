import React, { FC, createContext } from 'react';
import './App.css';
import { Person, HairColor } from './components/Person';

interface AppContextInterface {
  name: string;
  age: number;
  country: string;
}

const AppContext = createContext<AppContextInterface | null>(null);

const App: FC = () => {
  const contextValue: AppContextInterface = {
    name: 'Lucas',
    age: 21,
    country: 'Argentina'
  }

  return (
    <AppContext.Provider value={contextValue}>
      <div className='App'>
        <Person name='Lucas' age={20} email='lucas@lucas.com' hairColor={HairColor.Blonde} />
      </div>
    </AppContext.Provider>
  )
}

export default App