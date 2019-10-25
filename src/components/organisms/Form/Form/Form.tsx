import React, { FC, HTMLAttributes } from 'react';

import { FormContext } from '../context';
import useForm, { TValues, TErrors } from '../../../hooks/useForm/useForm';

export interface IFormProps {
  /**
   * Hash of form elements identifiers and their default values. Use it to pre-populate the form.
   */
  initialValues: TValues;
  /**
   * Function that will be called with the form values as completed by the user.
   */
  onSubmit: (values: TValues) => void;
  /**
   * Validation function that will be supplied the form values every time a form element is blurred.
   */
  validate?: (values: TValues) => TErrors;
}

const Form: FC<HTMLAttributes<HTMLFormElement> & IFormProps> = ({
  children,
  initialValues,
  onSubmit,
  validate,
  ...rest
}) => {
  const context = useForm({
    initialValues,
    onSubmit,
    validate,
  });
  return (
    <FormContext.Provider value={context}>
      <form onSubmit={context.handleSubmit} {...rest}>
        {children}
      </form>
    </FormContext.Provider>
  );
};

export default Form;
