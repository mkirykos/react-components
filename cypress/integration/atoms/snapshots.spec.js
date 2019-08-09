import { getSnapshotConfig } from '../../support/percy';

const percySnapshotConfig = getSnapshotConfig();

describe('ATOMS', () => {
  before(() => {
    cy.visit('/');
  });

  it('<AlertBox />', () => {
    cy.getByText('AlertBox')
      .click()
      .percySnapshot('Alert Box', percySnapshotConfig);
  });

  it('<Badge />', () => {
    cy.getByText('Badge')
      .click()
      .percySnapshot('Badge', percySnapshotConfig);
  });

  it('<Button />', () => {
    cy.getByText('Button')
      .click()
      .percySnapshot('Button', percySnapshotConfig);
  });

  it('<Card />', () => {
    cy.getByText('Card')
      .click()
      .percySnapshot('Card', percySnapshotConfig);
  });

  it('<Dropdown />', () => {
    cy.getByText('Dropdown')
      .click()
      .percySnapshot('Dropdown', percySnapshotConfig);
  });

  it('<ErrorMessage />', () => {
    cy.getByText('ErrorMessage')
      .click()
      .percySnapshot('ErrorMessage', percySnapshotConfig);
  });

  it('<HelpText />', () => {
    cy.getByText('HelpText')
      .click()
      .percySnapshot('HelpText', percySnapshotConfig);
  });

  it('<InputLabel />', () => {
    cy.getByText('InputLabel')
      .click()
      .percySnapshot('InputLabel', percySnapshotConfig);
  });

  it('<InputText />', () => {
    cy.getByText('InputText')
      .click()
      .percySnapshot('InputText', percySnapshotConfig);
  });

  it('<Link />', () => {
    cy.getByText('Link')
      .click()
      .percySnapshot('Link', percySnapshotConfig);
  });

  it('<SidekickCard />', () => {
    cy.getByText('SidekickCard')
      .click()
      .percySnapshot('SidekickCard', percySnapshotConfig);
  });

  it('<Spinner />', () => {
    cy.getByText('Spinner')
      .click()
      .percySnapshot('Spinner', percySnapshotConfig);
  });
});
