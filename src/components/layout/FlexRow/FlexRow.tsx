import React from 'react';
import styled from 'styled-components';
import grid from '../../../constants/grid';

export type TFlexValues = 'flex-start' | 'center' | 'flex-end' | 'space-between' | 'space-around' | 'space-evenly';

export type TFlexDirection = 'row' | 'row-reverse';

export interface IFlexRowProps {
  /**
   * Maps to CSS Flexbox `align-items`
   */
  align?: TFlexValues;
  /**
   * The number of columns the row is meant to contain
   *
   */
  cols?: number;
  /**
   * The white-space (in pixels) to be applied whitin columns
   */
  gutter?: number;
  /**
   * Maps to CSS Flexbox `justify-content`
   */
  justify?: TFlexValues;
  /**
   * Maps to CSS Flexbox `direction`
   */
  direction?: TFlexDirection;
}

export interface IFlexRow extends React.HTMLAttributes<HTMLDivElement>, IFlexRowProps {}

const defaultProps: Partial<IFlexRow> = {
  align: 'flex-start',
  cols: grid.cols,
  gutter: grid.gutter,
  justify: 'flex-start',
  direction: 'row',
};

const StyledFlexRow = styled.div<IFlexRow>`
  display: flex;
  flex-wrap: wrap;
  flex-direction: ${({ direction }) => direction};
  margin-right: -${({ gutter }) => gutter}px;
  margin-left: -${({ gutter }) => gutter}px;
  justify-content: ${({ justify }) => justify};
  align-items: ${({ align }) => align};
`;

const FlexRow: React.FC<IFlexRow> = ({ children, ...props }) => {
  const childrenWithProps = React.Children.toArray(children)
    .filter(child => !!child)
    .map(child => React.cloneElement(child as any, { gutter: props.gutter, cols: props.cols }));

  return <StyledFlexRow {...props}>{childrenWithProps}</StyledFlexRow>;
};

FlexRow.defaultProps = defaultProps;

export default FlexRow;
