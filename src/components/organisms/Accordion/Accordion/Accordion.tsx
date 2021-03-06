import React, { FC, HTMLAttributes } from 'react';

import { AccordionContext } from '../hooks';
import { useAccordion } from '../hooks/useAccordion';

export interface AccordionProps extends HTMLAttributes<HTMLDivElement> {}

const Accordion: FC<AccordionProps> = ({ children, ...rest }) => {
  const context = useAccordion();
  return (
    <AccordionContext.Provider value={context}>
      <div {...rest}>{children}</div>
    </AccordionContext.Provider>
  );
};

export default Accordion;
