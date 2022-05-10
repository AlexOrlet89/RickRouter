import { screen } from '@testing-library/react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';
import { CharacterProvider } from './context/CharacterContext';

test('Should render Rick Sanchez ', async () => {
  render(
    <MemoryRouter>
      <CharacterProvider>
        <App />
      </CharacterProvider>
    </MemoryRouter>
  );

  const rick = await screen.findByText('Rick Sanchez');
  screen.debug();
  expect(rick).toBeInTheDocument();
});
