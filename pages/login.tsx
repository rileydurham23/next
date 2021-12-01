import Head from "components/Head";
import { default as LoginPageComponent } from "components/LoginPage";

const LoginPage = () => {
  return (
    <>
      <Head
        image="unified-access-plane-og-image.png"
        title="Sign in to teleport"
        description="Sign in to your Teleport account"
      />
      <LoginPageComponent />
    </>
  );
};

export default LoginPage;
