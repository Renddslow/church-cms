import React from 'react';
import styled from 'styled-components';

import Button from '../../components/Button';
import Input from '../../components/Input';

const Card = styled.div`
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.05), 0 3px 6px rgba(0, 0, 0, 0.23);
  background: #fff;
  border-radius: 8px;
  box-sizing: border-box;
  width: 350px;
  margin: 200px auto 0;
  padding: 24px;

  button {
    margin-left: auto;
    margin-top: 12px;
  }
`;

const Login = () => (
  <Card>
    <h2>Login with Email Address</h2>
    <form>
      <Input label="Email Address" type="email" name="email" />
      <Button type="submit" appearance="primary">
        Get Magic Link{' '}
        <span role="img" aria-label="Sparkle">
          ✨
        </span>
      </Button>
    </form>
  </Card>
);

export default Login;
