import Form from '~/components/Layout/components/Form';
import Input from '~/components/Input';
import Button from '~/components/Button';

function ForgotComponent() {
  return (
    <Form title="FORGOT PASSWORD" height="34rem" titleSize="3.2rem">
      <div>
        <Input type="text" placeholder="Username" />
        <Input type="email" placeholder="Email" />

        <div style={{ marginTop: '2rem' }}>
          <Button
            href="/reset-password"
            primary
            children="VERIFY"
            rounded
            large
          />
          <div
            style={{ with: '100%', display: 'flex', justifyContent: 'center' }}
          >
            <Button text href="/login" children="Go back to sign in" />
          </div>
        </div>
      </div>
    </Form>
  );
}

export default ForgotComponent;
