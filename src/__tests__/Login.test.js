import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../helpers/renderWithRoutes';
import App from '../App';

describe('Testes realizados na página de login', () => {
  beforeAll(() => {
    // JSDom does not implement this and an error was being
    // thrown from jest-axe because of it.
    window.getComputedStyle = () => {};
  });
  const USER_EMAIL = 'email.teste@teste.com';
  const USER_PASSWORD = '1234567';

  it('Existe um input de login funcional', () => {
    renderWithRouter(<App />);
    const loginInput = screen.getByLabelText('Email');
    expect(loginInput).toBeInTheDocument();
    expect(loginInput).toHaveProperty('type', 'email');
  });

  it('Existe um input de password funcional', () => {
    renderWithRouter(<App />);
    const passwordInput = screen.getByLabelText('Password');
    expect(passwordInput).toBeInTheDocument();
    expect(passwordInput).toHaveProperty('type', 'password');
  });

  it('A validação de email funciona corretamente', () => {
    renderWithRouter(<App />);
    const loginInput = screen.getByLabelText('Email');
    const passwordInput = screen.getByLabelText('Password');
    const btnLogin = screen.getByTestId('login-submit-btn');
    userEvent.type(loginInput, USER_EMAIL);
    userEvent.type(passwordInput, USER_PASSWORD);
    expect(btnLogin).toHaveProperty('disabled', false);
  });
});
