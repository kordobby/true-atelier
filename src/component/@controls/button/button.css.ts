import { style } from '@vanilla-extract/css';

export const buttonStyle = style({
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  height: '32px',
  padding: '0 10px',
  border: '1px solid #dde1e8',
  borderRadius: '3px',
  textAlign: 'left',
  boxShadow:
    '0 0 1px rgba(67, 90, 111, 0.03), 0 2px 2px -2px rgba(67, 90, 111, 0.2)',
  background: 'white',
  color: '#575a5e',
  fontSize: '12px',
});
