import React, { FC } from 'react';
import styled, { css } from 'styled-components';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

import { colors, spacing, typography } from '../../../../constants';
import { minMedia, maxEqualToMedia } from '../../../../helpers/responsiveness';

import Link, { LinkProps } from '../../../atoms/Link/Link';
import Icon from '../../../atoms/Icon/Icon';

export interface NavbarLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  active?: boolean;
  withChevron?: boolean;
  isDropdownLink?: boolean;
  open?: boolean;
  target?: LinkProps['target'];
  'data-automation'?: string;
}

export interface StyledNavbarLinkProps extends LinkProps {
  active: boolean;
  withChevron: boolean;
  isDropdownLink: boolean;
}

export interface ChevronContainerProps extends React.HTMLAttributes<HTMLSpanElement> {
  open: boolean;
}

export const navbarLinkStyles = css<StyledNavbarLinkProps>`
  align-items: center;
  text-decoration: none;
  font-weight: ${typography.weights.semiBold}

  display: inline-flex;
  padding: ${spacing[3]} ${spacing[4]} ${spacing[4]};

  &:active,
  &:hover {
    color: ${colors.actionDark};
    opacity: ${({ active }) => (active ? 1 : 0.88)};
  }

  ${maxEqualToMedia.desktop`
    ${({ withChevron }: StyledNavbarLinkProps) =>
      withChevron &&
      css`
        color: ${colors.greyDarkest};
        font-size: ${typography.sizes.text.small};
        font-weight: ${typography.weights.bold};
        text-transform: uppercase;
      `}
  `}

  ${minMedia.desktop`
    ${({ isDropdownLink }: StyledNavbarLinkProps) =>
      isDropdownLink &&
      css`
        padding: ${spacing[3]};
        border-radius: 8px;
        width: 100%;

        &:hover {
          background-color: ${colors.actionLight};
        }
      `}
  `}
`;

const StyledNavbarLink = styled(Link)<StyledNavbarLinkProps>`
  ${navbarLinkStyles}
`;

const LinkContainer = styled.span`
  display: inline-flex;
  margin-right: ${spacing[2]};
`;

const ChevronContainer = styled.span<ChevronContainerProps>`
  display: none;

  ${minMedia.desktop`
    display: inline-flex;
    align-items: center;
    font-size: 12px;

    transition: transform 0.3s;
    ${({ open }: ChevronContainerProps) => (open ? 'transform: rotate(180deg)' : 'transform: rotate(0deg)')}
  `}
`;

const NavbarLink: FC<NavbarLinkProps> = React.forwardRef<HTMLAnchorElement, NavbarLinkProps>(
  ({ active = false, children, open = false, withChevron = false, isDropdownLink = false, ...rest }, ref) => (
    <StyledNavbarLink active={active} withChevron={withChevron} isDropdownLink={isDropdownLink} ref={ref} {...rest}>
      {withChevron ? <LinkContainer>{children}</LinkContainer> : children}
      {withChevron && (
        <ChevronContainer open={open}>
          <Icon variant={faChevronDown} color={colors.grey} height="12px" width="12px" />
        </ChevronContainer>
      )}
    </StyledNavbarLink>
  ),
);

export default NavbarLink;
