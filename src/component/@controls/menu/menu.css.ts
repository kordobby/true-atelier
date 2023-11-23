import { style } from '@vanilla-extract/css';

export const menuStyle = style({
  display: 'flex',
  flexDirection: 'column',

  width: '100%',
  minWidth: '120px',
  maxHeight: '300px',

  padding: '5px 0',
  flexGrow: '1',
  overflowY: 'scroll',

  backgroundColor: 'white',
  border: '1px solid #c3c9d0',
  boxSizing: 'border-box',
  boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2), 0px 0 2px rgba(0, 0, 0, 0.06)',
  borderRadius: '3px',

  zIndex: '40',
});

export const menuItem = style({
  display: 'flex',
  alignItems: 'center',

  width: '100%',
  height: '32px',
  padding: '0 12px',

  textAlign: 'left',
  fontSize: '13px',
  color: '#666a6e',

  border: 'none',
  background: 'none',

  ':hover': {
    backgroundColor: '#f8fafb',
  },
  ':focus': {
    backgroundColor: '#f8fafb',
  },

  ':before': {
    display: 'inline-flex',
    flex: '0 0 auto',
    alignItems: 'center',
    justifyContent: 'center',

    width: '14px',
    height: '14px',
    marginTop: '-2px',
    marginRight: '6px',

    fontFamily: 'Material Icons',
    fontSize: '9px',
    lineHeight: '14px',
    color: 'white',

    borderRadius: '3px',
    boxShadow: 'inset 0 0 0 2px #ced4dc',
    backgroundColor: 'white',
    content: '',
  },
});

export const menuItemChecked = style({
  display: 'flex',
  alignItems: 'center',

  width: '100%',
  height: '32px',
  padding: '0 12px',

  textAlign: 'left',
  fontSize: '13px',
  color: '#666a6e',

  border: 'none',
  background: 'none',

  ':hover': {
    backgroundColor: '#f8fafb',
  },
  ':focus': {
    backgroundColor: '#f8fafb',
  },

  ':before': {
    display: 'inline-flex',
    flex: '0 0 auto',
    alignItems: 'center',
    justifyContent: 'center',

    width: '14px',
    height: '14px',
    marginTop: '-2px',
    marginRight: '6px',

    fontFamily: 'Material Icons',
    fontSize: '9px',
    lineHeight: '14px',
    color: 'white',

    borderRadius: '3px',
    boxShadow: 'inset 0 0 0 2px #5096fa',
    backgroundColor: '#5096fa',
    content: '\\e5ca',
  },
});
