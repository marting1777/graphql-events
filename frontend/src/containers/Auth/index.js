import { useState, useEffect, useContext } from "react";
import { AuthContainer } from "./styles";
import Form from "../../components/Form";
import { useHttp } from "../../hooks/useHttp";
import AuthContext from "../../context/auth-context";

function Auth() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [requestBody, setRequestBody] = useState(null);
  const data = useHttp(requestBody)[1];
  const authContext = useContext(AuthContext);

  const FORM_DATA = [
    {
      id: "email",
      htmlFor: "email",
      labelText: "E-Mail",
      value: email,
      onChange: (event) => setEmail(event.target.value),
      name: "email",
      type: "email",
      placeholder: "E-Mail",
    },
    {
      id: "password",
      htmlFor: "password",
      labelText: "Password",
      value: password,
      onChange: (event) => setPassword(event.target.value),
      name: "password",
      type: "password",
      placeholder: "Password",
    },
  ];

  const FORM_ACTIONS = [
    {
      id: 1,
      type: "submit",
      btnText: "Submit",
      marginLeft: true,
    },
    {
      id: 2,
      type: "button",
      btnText: `Switch to ${isLogin ? "Sign Up" : "Log In"}`,
      onClick: () => setIsLogin((prevState) => !prevState),
      marginLeft: true,
    },
  ];

  const onSubmit = (event) => {
    event.preventDefault();
    if (email.trim().length === 0 || password.trim().length === 0) return;

    setRequestBody({
      query: `
        query {
          login(email: "${email}", password: "${password}") {
            userId
            token
            tokenExpiration
          }
        }
      `,
    });

    if (!isLogin) {
      setRequestBody({
        query: `
          mutation {
            createUser(userInput: { email: "${email}", password: "${password}" }) {
              _id
              email
            }
          }
        `,
      });
    }
  };

  useEffect(() => {
    if (data && data.login) {
      authContext.login(
        data.login.token,
        data.login.userId,
        data.login.expirationToken
      );
    }
  }, [data, authContext]);

  return (
    <AuthContainer>
      <Form
        border
        data={FORM_DATA}
        actions={FORM_ACTIONS}
        onSubmit={onSubmit}
      />
    </AuthContainer>
  );
}

export default Auth;

