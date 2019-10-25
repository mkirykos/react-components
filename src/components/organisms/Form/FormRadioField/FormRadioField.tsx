import React, { FC } from 'react';
import RadioField, { IRadioField } from '../../../molecules/RadioField/RadioField';

import { useFieldContext } from '../context';

interface IFormRadioFieldProps extends Partial<IRadioField> {
  /**
   * The "name" attribute applied to the native input element
   */
  name: string;
  /**
   * The "value" attribute applied to the native input element
   */
  value: string;
}

const FormRadioField: FC<IFormRadioFieldProps> = ({ name, value, inputProps, ...rest }) => {
  const { error, touched, onChange, onBlur } = useFieldContext(name);
  const handleChange = e => {
    onChange(e.target.value);
  };
  return (
    <RadioField
      hasError={touched && !!error}
      inputProps={{ onChange: handleChange, onBlur, value, name, ...inputProps }}
      {...rest}
    />
  );
};

export default FormRadioField;
