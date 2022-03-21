/* eslint-disable react/prop-types */
import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Textarea
} from '@chakra-ui/react';
import { Field, Form, Formik } from 'formik';
import emailjs from '@emailjs/browser';
import sanitizeHtml from 'sanitize-html';

function Contact() {
  const validateEmail = (email) => {
    let error;

    if (!email) {
      error = 'Email is required';
    }

    return error;
  };

  const validateMessage = (message) => {
    let error;

    if (!message) {
      error = 'Message is required';
    }

    return error;
  };

  return (
    <Formik
      initialValues={{ email: '', message: '' }}
      onSubmit={(values, { setSubmitting }) => {
        emailjs.init(process.env.REACT_APP_EMAILJS_USER_ID);

        const emailParams = {
          user_email: sanitizeHtml(values.email, { allowedTags: [] }),
          message: sanitizeHtml(values.message, { allowedTags: [] })
        };

        emailjs
          .send(
            process.env.REACT_APP_EMAILJS_SERVICE_ID,
            process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
            emailParams
          )
          .then((response) => {
            console.log('SUCCESS!', response.status, response.text);
            setSubmitting(false);
          })
          .catch((error) => {
            console.log('FAILED...', error);
            setSubmitting(false);
          });
      }}>
      {(props) => (
        <Form>
          <Field name="email" validate={validateEmail}>
            {({ field, form }) => (
              <FormControl isInvalid={form.errors.email && form.touched.email}>
                <FormLabel htmlFor="email">Email</FormLabel>
                <Input {...field} id="email" placeholder="Email" type="email" />
                <FormErrorMessage>{form.errors.email}</FormErrorMessage>
              </FormControl>
            )}
          </Field>

          <Field name="message" validate={validateMessage}>
            {({ field, form }) => (
              <FormControl isInvalid={form.errors.message && form.touched.message}>
                <FormLabel htmlFor="message">Message</FormLabel>
                <Textarea {...field} id="message" placeholder="Message" type="text" />
                <FormErrorMessage>{form.errors.message}</FormErrorMessage>
              </FormControl>
            )}
          </Field>

          <Button mt={4} isLoading={props.isSubmitting} type="submit" name="submit">
            Submit
          </Button>
        </Form>
      )}
    </Formik>
  );
}

export default Contact;
