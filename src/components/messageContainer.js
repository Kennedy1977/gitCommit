import React, { useState } from 'react';
import { Message } from './styles';
import MessageIcon from '@mui/icons-material/Message';

export const MessageContainer = (props) => {
  const { message } = props;
  const [active, setActive] = useState(false);
  return (
    <>
      <MessageIcon
        style={{
          fontSize: 24,
          color: '#333',
          cursor: 'pointer',
        }}
        onClick={() => setActive(!active)}
      />
      <Message active={active}>{message}</Message>
    </>
  );
};
