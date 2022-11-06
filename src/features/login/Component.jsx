import Form from '~/components/Layout/components/Form';
import Input from '~/components/Input';
import Button from '~/components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGooglePlusG } from '@fortawesome/free-brands-svg-icons';
import classNames from 'classnames/bind';
import styles from './Login.module.scss';

const cx = classNames.bind(styles);

function LoginComponent() {
  return (
    <Form title="SIGN IN" height="46rem">
      <div>
        <Input type="text" placeholder="Username" />
        <Input type="password" placeholder="Password" />
        <div
          style={{
            marginTop: '0.5rem',
            padding: '0 1rem',
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <div style={{ margin: '1rem 2rem 0 0' }}>
            <input type="checkbox" />{' '}
            <span style={{ color: '#000' }}>Remember account</span>
          </div>
          <Button text href="/forgot-password" children="Forgot password" />
        </div>
        <div
          style={{
            marginTop: '2rem',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Button href="/home" primary children="SIGN IN" rounded large />
          <div
            style={{ with: '100%', display: 'flex', justifyContent: 'center' }}
          >
            <Button
              text
              href="/register"
              children="Create a account? Sign up"
            />
          </div>

          <Button
            primary
            href="/register"
            children="SIGN IN WITH GOOGLE"
            leftIcon={
              <FontAwesomeIcon
                icon={faGooglePlusG}
                className={cx('icon-google')}
              />
            }
            className={cx('btn-google')}
            large
          />
        </div>
      </div>
    </Form>
  );
}

export default LoginComponent;
