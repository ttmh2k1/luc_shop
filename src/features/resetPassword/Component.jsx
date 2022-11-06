import Form from '~/components/Layout/components/Form';
import Input from '~/components/Input';
import Button from '~/components/Button';

function ResetPasswordComponent() {
  return (
    <Form title="RESET PASSWORD" height="34rem" titleSize="3.2rem">
      <div>
        <Input type="password" placeholder="New password" />
        <Input type="password" placeholder="Confirm password" />

        <div style={{ marginTop: '2rem' }}>
          <Button primary children="SAVE" rounded large />
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

export default ResetPasswordComponent;
