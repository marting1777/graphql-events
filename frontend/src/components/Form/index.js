import { FormAuth, FormControl, FormActions } from './styles';
import Input from "./Input";
import Label from "./Label";
import Button from "../UI/Button";

function Form() {
  return (
    <FormAuth onSubmit="">
      <FormControl>
        <Label htmlFor="email" labelText="E-Mail"/>
        <Input name="email" id="email" type="email" placeholder="E-Mail"/>
      </FormControl>
      <FormControl>
        <Label htmlFor="password" labelText="Password"/>
        <Input name="password" id="password" type="password"/>
      </FormControl>
      <FormActions>
        <Button type="button" btnText="Switch to Sign Up"/>
        <Button type="submit" btnText="Submit"/>
      </FormActions>
    </FormAuth>
  );
}

export default Form;