import React, { FC } from 'react';
import styled from 'styled-components';
import { colors } from '../../../constants/colors';
import Alert from '../../icons/Alert/Alert';

export interface IAlertBoxProps extends React.HTMLAttributes<HTMLElement> {
  /**
   * The icon you want to display on the top-left corner of the component.
   * @default <AlertIcon />
   */
  icon?: FC;
}

const Box = styled.div`
  display: inline-flex;
  padding: 16px;
  border: 1px solid ${colors.neutral.light};
  border-radius: 8px;
  box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.1);
`;

const IconContainer = styled.div`
  margin-top: 6px;
  margin-right: 16px;
`;

const AlertBox: FC<IAlertBoxProps> = ({ children, className, icon = <Alert />, style }) => (
  <Box className={className} style={style}>
    <IconContainer>{icon}</IconContainer>
    {children}
  </Box>
);

export default AlertBox;
