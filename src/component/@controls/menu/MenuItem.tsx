import { PropsWithChildren } from 'react';
import styled from 'styled-components';
import { Button } from '../button/Button';

interface Props extends PropsWithChildren {
  checked: boolean;
}
export function MenuItem({ checked, children }: Props) {
  return (
    <StButton checked={checked} type="button">
      {children}
    </StButton>
  );
}

const StButton = styled.button<{ checked: boolean }>`
  display: flex;
  align-items: center;

  width: 100%;
  height: 32px;
  padding: 0 12px;

  text-align: left;
  font-size: 13px;
  color: #666a6e;

  border: none;
  background: none;

  &:hover,
  &:focus {
    background-color: #f8fafb;
  }

  &:before {
    display: inline-flex;
    flex: 0 0 auto;
    align-items: center;
    justify-content: center;

    width: 14px;
    height: 14px;
    margin-top: -2px;
    margin-right: 6px;

    font-family: 'Material Icons';
    font-size: ${13 - 4}px;
    line-height: 14px;
    color: white;

    border-radius: 3px;
    box-shadow: ${(props) =>
      props.checked ? `inset 0 0 0 2px #5096fa` : `inset 0 0 0 2px #ced4dc`};
    background-color: ${(props) => (props.checked ? `#5096fa` : 'white')};
    content: '${(props) => (props.checked ? `\\e5ca` : '')}';
  }
`;
