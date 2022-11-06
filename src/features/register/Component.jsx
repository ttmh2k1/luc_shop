import Form from '~/components/Layout/components/Form';
import Input from '~/components/Input';
import Button from '~/components/Button';

function RegisterComponent() {
  return (
    <Form title="SIGN UP" height="48rem">
      <div>
        <Input type="text" placeholder="Fullname" />
        <Input type="text" placeholder="Username" />
        <Input type="password" placeholder="Password" />
        <Input type="email" placeholder="Email" />

        <div style={{ marginTop: '2rem' }}>
          <Button primary children="SIGN UP" rounded large />
          <div
            style={{ with: '100%', display: 'flex', justifyContent: 'center' }}
          >
            <Button text href="/login" children="Have a account? Sign in" />
          </div>
        </div>
      </div>
    </Form>
  );
}

export default RegisterComponent;
