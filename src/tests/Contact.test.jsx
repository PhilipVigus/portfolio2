import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import emailjs from '@emailjs/browser';
import Contact from '../components/pages/contact/Contact';

jest.mock('@emailjs/browser');

emailjs.init = jest.fn();
emailjs.send = jest.fn();

describe('Contact Page', () => {
  beforeAll(() => {
    process.env.REACT_APP_EMAILJS_USER_ID = 'user_id';
    process.env.REACT_APP_EMAILJS_SERVICE_ID = 'email_service_id';
    process.env.REACT_APP_EMAILJS_TEMPLATE_ID = 'email_template_id';
  });

  it('renders Contact page', () => {
    render(<Contact />);

    expect(screen.getByText('Email')).toBeInTheDocument();
  });

  it('submits the form when you click the button if it is filled in correctly', async () => {
    const TEST_EMAIL = 'test@email.com';
    const TEST_MESSAGE = 'test message';

    render(<Contact />);

    userEvent.type(screen.getByLabelText('Email'), TEST_EMAIL);
    userEvent.type(screen.getByLabelText('Message'), TEST_MESSAGE);

    userEvent.click(screen.getByRole('button', { name: 'Submit' }));

    await waitFor(() => {
      expect(emailjs.init).toHaveBeenCalledTimes(1);
      expect(emailjs.init.mock.calls[0]).toEqual([process.env.REACT_APP_EMAILJS_USER_ID]);

      expect(emailjs.send).toHaveBeenCalledTimes(1);
      expect(emailjs.send.mock.calls[0]).toEqual([
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        {
          user_email: TEST_EMAIL,
          message: TEST_MESSAGE
        }
      ]);
    });
  });

  it('will not submit the form when you click the button if the email is blank', async () => {
    const TEST_MESSAGE = 'test message';

    render(<Contact />);

    userEvent.type(screen.getByLabelText('Message'), TEST_MESSAGE);

    userEvent.click(screen.getByRole('button', { name: 'Submit' }));

    await waitFor(() => {
      expect(emailjs.init).toHaveBeenCalledTimes(0);
      expect(emailjs.send).toHaveBeenCalledTimes(0);

      expect(screen.getByText('Email is required')).toBeInTheDocument();
    });
  });

  it('will not submit the form when you click the button if the message is blank', async () => {
    const TEST_EMAIL = 'test@email.com';

    render(<Contact />);

    userEvent.type(screen.getByLabelText('Email'), TEST_EMAIL);

    userEvent.click(screen.getByRole('button', { name: 'Submit' }));

    await waitFor(() => {
      expect(emailjs.init).toHaveBeenCalledTimes(0);
      expect(emailjs.send).toHaveBeenCalledTimes(0);

      expect(screen.getByText('Message is required')).toBeInTheDocument();
    });
  });

  it('will not submit the form when you click the button if the email is incorrectly formatted', async () => {
    const TEST_EMAIL = 'testemail.com';
    const TEST_MESSAGE = 'test message';

    render(<Contact />);

    userEvent.type(screen.getByLabelText('Email'), TEST_EMAIL);
    userEvent.type(screen.getByLabelText('Message'), TEST_MESSAGE);

    userEvent.click(screen.getByRole('button', { name: 'Submit' }));

    await waitFor(() => {
      expect(emailjs.init).toHaveBeenCalledTimes(0);
      expect(emailjs.send).toHaveBeenCalledTimes(0);
    });
  });

  it('sanitises the message', async () => {
    const TEST_EMAIL = 'test@email.com';
    const UNSANITISED_TEST_MESSAGE = 'test<div> message</div>';
    const SANITISED_TEST_MESSAGE = 'test message';

    render(<Contact />);

    userEvent.type(screen.getByLabelText('Email'), TEST_EMAIL);
    userEvent.type(screen.getByLabelText('Message'), UNSANITISED_TEST_MESSAGE);

    userEvent.click(screen.getByRole('button', { name: 'Submit' }));

    await waitFor(() => {
      expect(emailjs.init).toHaveBeenCalledTimes(1);
      expect(emailjs.init.mock.calls[0]).toEqual([process.env.REACT_APP_EMAILJS_USER_ID]);

      expect(emailjs.send).toHaveBeenCalledTimes(1);
      expect(emailjs.send.mock.calls[0]).toEqual([
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        {
          user_email: TEST_EMAIL,
          message: SANITISED_TEST_MESSAGE
        }
      ]);
    });
  });
});
