import { getSnapshotConfig } from '../../support/percy';

const percySnapshotConfig = getSnapshotConfig();

describe('MOLECULES', () => {
  before(() => {
    cy.visit('/');
  });

  it('<CheckboxField />', () => {
    cy.getByText('CheckboxField')
      .click()
      .percySnapshot('Checkbox Field', percySnapshotConfig);
  });

  it('<DropdownField />', () => {
    cy.getByText('DropdownField')
      .click()
      .percySnapshot('Dropdown Field', percySnapshotConfig);
      .getByLabelText('Your cool dropdown ❤')
      .click()
      .percySnapshot('Dropdown Field [open]', percySnapshotConfig);
  });

  it('<DropdownFiltered />', () => {
    cy.getByText('DropdownFiltered')
      .click()
      .percySnapshot('Dropdown Filtered', percySnapshotConfig)
      .getAllByLabelText('Select a Nationality')
      .first()
      .type('{uparrow}')
      .click()
      .percySnapshot('Dropdown Filtered [open]', percySnapshotConfig);
  });

  it('<Help />', () => {
    cy.getByText('Help')
      .click()
      .percySnapshot('Help', percySnapshotConfig);
  });

  it('<Modal />', () => {
    cy.getByText('Modal')
      .click()
      .percySnapshot('Modal', percySnapshotConfig)
      .getByText('Open Modal')
      .click()
      .percySnapshot('Modal [open]', percySnapshotConfig)
      .getByText('Close Modal')
      .click();
  });

  it('<Progress />', () => {
    cy.getByText('Progress')
      .click()
      .percySnapshot('Progress', percySnapshotConfig);
  });

  it('<RadioField />', () => {
    cy.getByText('RadioField')
      .click()
      .getAllByLabelText('Chilly 🌶')
      .check({ force: true })
      .percySnapshot('Radio Field', percySnapshotConfig);
  });
});
