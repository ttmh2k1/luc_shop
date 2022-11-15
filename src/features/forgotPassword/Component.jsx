import { useState } from 'react';
import Form from '~/Layout/components/Form';
import Input from '~/components/Input';
import Button from '~/components/Button';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { resetPassword } from '~/ActionCreators/UserCreator';
//import cookies from 'react-cookies';

function ForgotComponent() {
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('email', email);
    localStorage.setItem('phone', phone);
    dispatch(resetPassword(email, phone));
    navigate('/verify');
  };

  return (
    <Form
      title="FORGOT PASSWORD"
      height="34rem"
      titleSize="3.2rem"
      onSubmit={(e) => handleSubmit(e)}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1.2rem',
          marginTop: '2rem',
        }}
      >
        <Input
          type="text"
          placeholder="Phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <div style={{ marginTop: '2rem' }}>
          <Button primary children="VERIFY" rounded large />
          <div
            style={{ with: '100%', display: 'flex', justifyContent: 'center' }}
          >
            <Button
              text
              href="/login"
              children="Go back to sign in"
              style={{ color: '#000' }}
            />
          </div>
        </div>
      </div>
    </Form>
  );
}

export default ForgotComponent;
