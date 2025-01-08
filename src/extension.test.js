import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Editor from './Editor';

describe('TiptapEditor Component', () => {
  it('renders the editor with menu buttons', () => {
    render(<Editor />);
    // Check for the presence of the editor content
    expect(screen.getByRole('textbox')).toBeInTheDocument();

    // Check for some menu bar buttons
    expect(screen.getByText('Insert table')).toBeInTheDocument();
    expect(screen.getByText('Add image from URL')).toBeInTheDocument();
  });

  it('adds an image when the "Add image from URL" button is clicked', () => {
    render(<Editor />);
    const addImageButton = screen.getByText('Add image from URL');
    const url = 'https://via.placeholder.com/150';

    // Mock prompt
    jest.spyOn(window, 'prompt').mockReturnValue(url);

    // Simulate button click
    fireEvent.click(addImageButton);

    // Check if the image is added to the editor content
    const image = screen.getByRole('img');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', url);
  });

  it('inserts a table into the editor', () => {
    render(<Editor />);
    const insertTableButton = screen.getByText('Insert table');

    // Simulate button click
    fireEvent.click(insertTableButton);

    // Check if the table is added
    const table = screen.getByRole('table');
    expect(table).toBeInTheDocument();
  });
});
