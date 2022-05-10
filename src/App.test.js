import { fireEvent } from '@testing-library/react';
import { screen } from '@testing-library/react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';
import { CharacterProvider } from './context/CharacterContext';

test('Should render Rick Sanchez ', async () => {
  render(
    <MemoryRouter
      initialEntries={['/profile', '/character/1']}
      initialIndex={1}
    >
      <CharacterProvider>
        <App />
      </CharacterProvider>
    </MemoryRouter>
  );

  const rick = await screen.findByRole('heading', { name: /rick sanchez/i });
  // screen.debug();
  expect(rick).toBeInTheDocument();
});

test('Clicking the backbutton should return user to glasses morty character preview page ', async () => {
  render(
    <MemoryRouter
      initialEntries={['/character/143', '/profile']}
      initialIndex={1}
    >
      <CharacterProvider>
        <App />
      </CharacterProvider>
    </MemoryRouter>
  );

  const button = screen.getByRole('button', { name: /back to characters/i });
  expect(button).toBeInTheDocument();
  fireEvent.click(button);
  const morty = await screen.findByRole('heading', { name: /glasses morty/i });
  screen.debug();
  const addmorty = await screen.findByRole('button', { name: /add morty/i });
  expect(morty).toBeInTheDocument();
  expect(addmorty).toBeInTheDocument();
});
