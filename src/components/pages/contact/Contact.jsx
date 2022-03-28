/* eslint-disable react/prop-types */
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Textarea
} from '@chakra-ui/react';
import { Field, Form, Formik } from 'formik';
import emailjs from '@emailjs/browser';
import sanitizeHtml from 'sanitize-html';
import * as Yup from 'yup';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { parentVariants, childVariants } from './animationVariants';

const AnimatedForm = motion(Form);
const AnimatedBox = motion(Box);
const AnimatedButton = motion(Button);

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
    <Box p={10} w="75%" mx="auto">
      <Formik
        initialValues={{ email: '', message: '' }}
        validationSchema={validationSchema}
        onSubmit={async (values, { setSubmitting }) => {
          handleSubmit(values, setSubmitting);
        }}>
        {(props) => (
          <AnimatedForm variants={parentVariants} initial="hidden" animate="visible">
            <Heading variant="section">Contact</Heading>

            <AnimatedBox mt={4} variants={childVariants}>
              <Field name="email">
                {({ field, form }) => (
                  <FormControl isInvalid={form.errors.email && form.touched.email}>
                    <FormLabel htmlFor="email">Email</FormLabel>
                    <Input
                      {...field}
                      id="email"
                      placeholder="Email"
                      type="email"
                      bg="white"
                      border="1px"
                      borderColor="gray.400"
                      _hover={{ borderColor: 'mid' }}
                    />
                    <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>
            </AnimatedBox>

            <AnimatedBox mt={4} variants={childVariants}>
              <Field name="message">
                {({ field, form }) => (
                  <FormControl isInvalid={form.errors.message && form.touched.message}>
                    <FormLabel htmlFor="message">Message</FormLabel>
                    <Textarea
                      {...field}
                      id="message"
                      placeholder="Message"
                      type="text"
                      bg="white"
                      resize="none"
                      rows={20}
                      border="1px"
                      borderColor="gray.400"
                      _hover={{ borderColor: 'mid' }}
                    />
                    <FormErrorMessage>{form.errors.message}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>
            </AnimatedBox>

            <AnimatedButton
              mt={4}
              isLoading={props.isSubmitting}
              type="submit"
              name="submit"
              bg="darkAccent"
              color="white"
              _hover={{ textDecor: 'none', bg: 'lightAccent' }}
              variants={childVariants}>
              Submit
            </AnimatedButton>

            {wasSubmitError && <p>There was a problem submitting your email. Please try again</p>}
          </AnimatedForm>
        )}
      </Formik>
    </Box>
  );
}

export default Contact;
