import React, { FC } from 'react';
import styled from 'styled-components';
import { colors } from '../../../constants';
import alert from '../../../content/images/alert-icon.svg';
import triumph from '../../../content/images/triumph-icon.svg';
import verified from '../../../content/images/valid-icon.svg';
import { maxMedia } from '../../../helpers/responsiveness';

export type SidekickCardTypes = 'triumph' | 'verified' | 'alert';

export interface SidekickCardProps {
  /** Type of SidekickCard to render */
  type: SidekickCardTypes;
}

const sidekickTypeColors = {
  alert: colors.warning,
  triumph: colors.success,
  verified: colors.success,
};

const typeIcons = {
  alert,
  triumph,
  verified,
};

const SidekickCard = styled.div<SidekickCardProps>`
  border-radius: 4px;
  background: url(${({ type }) => typeIcons[type]}) 24px 48px no-repeat ${colors.white};
  padding: 48px 48px 48px 80px;
  border-left: 16px solid ${({ type }) => sidekickTypeColors[type]};

  ${maxMedia.tablet`
    border-radius: 0;
    background-position: 24px 18px;
    padding: 56px 32px 32px 24px;
  `};
`;

// TODO: Styleguidist to be able to locate styled components. See #147.
export const StyleguidistSidekickCard: FC<SidekickCardProps> = props => <SidekickCard {...props} />;

export default SidekickCard;
