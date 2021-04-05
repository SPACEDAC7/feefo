import { render, screen } from '@testing-library/react';
import SupportPanel from "./support-panel";
import React from "react";

const supportContact = {
    name: 'John Smith',
    email: 'john.smith@feefo.com',
    number: '020 2223 2323'
}

test('support panel with correct structure', () => {
  render(<SupportPanel supportEmail={supportContact.email}
                       supportName={supportContact.name}
                       supportNumber={supportContact.number} />);

  const email = screen.getByText(/john.smith@feefo.com/i);
  const name = screen.getByText(/John Smith/i);
  const number = screen.getByText(/020 2223 2323/i);
  expect(email).toBeInTheDocument();
  expect(name).toBeInTheDocument();
  expect(number).toBeInTheDocument();
});