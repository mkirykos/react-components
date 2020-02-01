import React from 'react';

import FormButton from './FormButton/FormButton';
import FormTextField from './FormTextField/FormTextField';
import FormCheckboxField from './FormCheckboxField/FormCheckboxField';
import FormRadioField from './FormRadioField/FormRadioField';
import FormDropdownField from './FormDropdownField/FormDropdownField';
import FormDropdownFilteredField from './FormDropdownFilteredField/FormDropdownFilteredField';
import FormComponent from './Form/Form';

interface IFormStatic {
  Button: typeof FormButton;
  TextField: typeof FormTextField;
  CheckboxField: typeof FormCheckboxField;
  RadioField: typeof FormRadioField;
  DropdownField: typeof FormDropdownField;
  DropdownFilteredField: typeof FormDropdownFilteredField;
}

export const Form: IFormStatic & typeof FormComponent = props => <FormComponent {...props} />;

Form.Button = FormButton;
Form.TextField = FormTextField;
Form.CheckboxField = FormCheckboxField;
Form.RadioField = FormRadioField;
Form.DropdownField = FormDropdownField;
Form.DropdownFilteredField = FormDropdownFilteredField;

export * from './hooks';
