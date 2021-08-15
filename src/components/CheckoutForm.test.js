import React from "react";
import MutationObserver from 'mutationobserver-shim';
import { render, screen } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import userEvent from '@testing-library/user-event';

// Write up the two tests here and make sure they are testing what the title shows

test("renders without errors", () => {
    render(<CheckoutForm />)
});

test("shows success message on submit with form details", () => {
    render(<CheckoutForm />)
    const firstNameField = screen.getByLabelText(/first name:/i);
    const lastNameField = screen.getByLabelText(/last name:/i);
    const addressField = screen.getByLabelText(/address:/i);
    const cityField = screen.getByLabelText(/city:/i);
    const stateField = screen.getByLabelText(/state:/i);
    const zipCodeField = screen.getByLabelText(/zip:/i);
    const submitButton = screen.getByRole('button');

    userEvent.type(firstNameField, 'Mykael');
    userEvent.type(lastNameField, 'Barnes');
    userEvent.type(addressField, '111 test road');
    userEvent.type(cityField, 'Portland');
    userEvent.type(stateField, 'Oregon');
    userEvent.type(zipCodeField, '123456');
    userEvent.click(submitButton);

    const firstNameDisplay = screen.getByText(/mykael/i);
    const lastNameDisplay = screen.getByText(/barnes/i);
    const addressDisplay = screen.getByText(/111 test road/i);
    const cityDisplay = screen.getByText(/portland/i);
    const stateDisplay = screen.getByText(/oregon/i);
    const zipDisplay = screen.getByText(/123456/i);


    expect(firstNameDisplay).toBeInTheDocument();
    expect(lastNameDisplay).toBeInTheDocument();
    expect(addressDisplay).toBeInTheDocument();
    expect(cityDisplay).toBeInTheDocument();
    expect(stateDisplay).toBeInTheDocument();
    expect(zipDisplay).toBeInTheDocument();
});
