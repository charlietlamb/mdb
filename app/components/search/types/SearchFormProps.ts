import {FormProps} from '@remix-run/react';
import {ChildrenRenderProps} from './ChildrenRenderProps';

export type SearchFromProps = {
  action?: FormProps['action'];
  className?: string;
  children: (passedProps: ChildrenRenderProps) => React.ReactNode;
  [key: string]: unknown;
};
