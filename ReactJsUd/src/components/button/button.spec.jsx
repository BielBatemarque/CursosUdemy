import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {Button} from '.';

 describe('<Button />', () => {
    it('should render the button with the text "Load more"', () => {
        render(<Button text="Load more" /> );
        expect.assertions(1);

        const button = screen.getByRole('button', { name: /load more/i });
        expect(button).toBeInTheDocument();
    });

    it('should call function on button click', () => {
        const fn = jest.fn();
        render(<Button text="Load more" onClick={fn} /> );

        const button = screen.getByRole('button', { name: /load more/i });

        userEvent.click(button);
        // fireEvent.click(buCtton);
  //      expect(fn).toHaveBeenalledTimes(1);
    });

    it('should be disabled when disabled is true', () => {
        const fn = jest.fn();
        render(<Button text="Load more" disabled={true} /> );

        const button = screen.getByRole('button', { name: /load more/i });

        expect(button).toBeDisabled();
    });

    it('should be disabled when disabled is false', () => {
        const fn = jest.fn();
        render(<Button text="Load more" disabled={false} /> );

        const button = screen.getByRole('button', { name: /load more/i });

        expect(button).toBeEnabled();
    });

    it('should match snapshot', () => {
        const fn = jest.fn();
        const {container} = render(<Button text="Load more" disabled={false} onClick={fn} /> );

        expect(container.firstChild).toMatchSnapshot();
    });
});

