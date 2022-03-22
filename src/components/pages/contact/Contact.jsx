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
import * as Yup from 'yup';
import { useState } from 'react';

function Contact() {
  const [wasSubmitError, setWasSubmitError] = useState(false);

  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email address').required('Email is required'),
    message: Yup.string().required('Message is required')
  });

  const handleSubmit = async (values, setSubmitting) => {
    setWasSubmitError(false);

    emailjs.init(process.env.REACT_APP_EMAILJS_USER_ID);

    const emailParams = {
      user_email: values.email,
      message: sanitizeHtml(values.message, { allowedTags: [] })
    };

    try {
      await emailjs.send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        emailParams
      );
    } catch (e) {
      setWasSubmitError(true);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Formik
      initialValues={{ email: '', message: '' }}
      validationSchema={validationSchema}
      onSubmit={async (values, { setSubmitting }) => {
        handleSubmit(values, setSubmitting);
      }}>
      {(props) => (
        <Form>
          <Field name="email">
            {({ field, form }) => (
              <FormControl isInvalid={form.errors.email && form.touched.email}>
                <FormLabel htmlFor="email">Email</FormLabel>
                <Input {...field} id="email" placeholder="Email" type="email" />
                <FormErrorMessage>{form.errors.email}</FormErrorMessage>
              </FormControl>
            )}
          </Field>

          <Field name="message">
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

          {wasSubmitError && <p>There was a problem submitting your email. Please try again</p>}
        </Form>
      )}
    </Formik>
  );
}

export default Contact;
