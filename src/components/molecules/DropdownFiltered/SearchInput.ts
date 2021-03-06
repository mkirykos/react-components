import styled, { css } from 'styled-components';
import { colors } from '../../../constants';
import InputText from '../../atoms/InputText/InputText';
import { InputProps } from '../../types';

export interface SearchInputProps {
  isOpen?: boolean;
}

export const SearchInput = styled(InputText)<SearchInputProps & InputProps>`
  margin: 0;
  padding-left: 16px;
  padding-right: 32px;
  ${({ hasError }) => !hasError && 'margin-bottom: 0'};
  ${({ isOpen }) =>
    isOpen &&
    css`
      box-shadow: 0 0 4px 0 ${colors.brand};
      border-radius: 8px 8px 0 0;
      border-color: ${colors.brand};
    `};
`;

export const SearchInputWrap = styled.div`
  position: relative;
`;

export const SearchArrowWrap = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 12px;
  cursor: pointer;
  display: flex;
`;
