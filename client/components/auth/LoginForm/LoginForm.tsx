import { Formik } from 'formik';
import Router, { useRouter } from 'next/router';
import React, { useState } from 'react';
import * as Yup from 'yup';

import { Button, Input, PageLoader } from '@/components/ui';
import { useToast } from '@/contexts';
import useLogin from '@/hooks/auth/use-login';
import { LoginFields } from '@/types';

import styles from './LoginForm.module.css';

const initialValues = {
  email: '',
  password: '',
};

const LoginSchema = Yup.object().shape({
  password: Yup.string().required('Password is required').min(6),
  email: Yup.string().email('Invalid email').required('Email is required'),
});

const LoginForm = () => {
  const [submitting, setSubmitting] = useState(false);
  const { query } = useRouter();
  const login = useLogin();

  const ref = query.ref as string;

  const { setToast } = useToast();

  const handleSubmit = async ({ email, password }: LoginFields) => {
    try {
      setSubmitting(true);
      await login(email, password);
      setSubmitting(false);
      if (ref) {
        Router.push(`/products/${ref}`);
      } else {
        Router.push('/profile');
      }
    } catch (error) {
      setToast('error', error.message);
      setSubmitting(false);
    }
  };

  return (
    <>
      {submitting && <PageLoader />}
      <Formik initialValues={initialValues} validationSchema={LoginSchema} onSubmit={handleSubmit}>
        {({ errors, touched, handleChange, handleSubmit, values }) => (
          <form onSubmit={handleSubmit} className={styles.authForm}>
            <Input
              name="email"
              id="email"
              placeholder="Email"
              value={values.email}
              onChange={handleChange}
              type="email"
              error={Boolean(errors.email && touched.email)}
              aria-label="Email"
            />
            {errors.email && touched.email ? (
              <div className={styles.error}>{errors.email}</div>
            ) : null}
            <Input
              name="password"
              id="password"
              placeholder="Password"
              value={values.password}
              onChange={handleChange}
              type="password"
              error={Boolean(errors.password && touched.password)}
              aria-label="Password"
            />
            {errors.password && touched.password ? (
              <div className={styles.error}>{errors.password}</div>
            ) : null}

            <div className={styles.bottom}>
              <Button
                type="submit"
                title="Log In"
                disabled={submitting}
                loading={submitting}
                className={styles.button}
              />
            </div>
          </form>
        )}
      </Formik>
    </>
  );
};

export default LoginForm;
