import React from 'react';
import styled from 'styled-components';
import * as colors from '../../../constants/colors';
import { typography } from '../../../constants/typography';
import Text from '../../atoms/Text/Text';

export interface IProgressionStyleProps {
  width?: string;
}

export interface IProgressProps extends IProgressionStyleProps, React.HTMLAttributes<HTMLElement> {
  totalSteps: number;
  currentStep: number;
}

const SProgressBar = styled.div`
  position: relative;
  width: 100%;
  border-radius: 100px;
  background: ${colors.base.white};
  height: 4px;
`;

const SProgression = styled.div<IProgressionStyleProps>`
  width: ${({ width }) => width};
  position: relative;
  border-radius: 100px;
  height: 4px;
  display: block;
  background: ${colors.primary.yellow500};

  > span {
    position: absolute;
    top: 10px;
    right: 0;
    font-size: ${typography.sizes.text[3]};
    line-height: 16px;
    font-weight: 600;
    color: ${colors.neutral.neutral300};
  }
`;

const Progress: React.FunctionComponent<IProgressProps> = ({ totalSteps, currentStep, style }) => (
  <SProgressBar style={style}>
    <SProgression width={`${(100 / totalSteps) * currentStep}%`}>
      <Text size="small">
        Step {currentStep} of {totalSteps}
      </Text>
    </SProgression>
  </SProgressBar>
);

export default Progress;