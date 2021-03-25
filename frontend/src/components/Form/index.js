import { useState, useContext, useEffect } from "react";
import { useHttp } from "../../hooks/useHttp";
import { FormAuth, FormControl, FormActions } from "./styles";
import Input from "./Input";
import Label from "./Label";
import Button from "../UI/Button";
import AuthContext from "../../context/auth-context";

function Form() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [requestBody, setRequestBody] = useState(null);
  const [status, data] = useHttp(requestBody);
  const contextAuth = useContext(AuthContext);

  const switchMode = () => setIsLogin((prevState) => !prevState);

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
      contextAuth.login(
        data.login.token,
        data.login.userId,
        data.login.expirationToken
      );
    }
  }, [data]);

  return (
    <FormAuth onSubmit={onSubmit} autoComplete="off">
      <FormControl>
        <Label htmlFor="email" labelText="E-Mail" />
        <Input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          name="email"
          id="email"
          type="email"
          placeholder="E-Mail"
        />
      </FormControl>
      <FormControl>
        <Label htmlFor="password" labelText="Password" />
        <Input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          name="password"
          id="password"
          type="password"
          placeholder="Password"
        />
      </FormControl>
      <FormActions>
        <Button type="submit" btnText="Submit" marginLeft />
        <Button
          type="button"
          btnText={`Switch to ${isLogin ? "Sign Up" : "Log In"}`}
          onClick={switchMode}
          marginLeft
        />
      </FormActions>
    </FormAuth>
  );
}

export default Form;

