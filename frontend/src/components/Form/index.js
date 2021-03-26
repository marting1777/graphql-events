import React from "react";
import { FormAuth, FormControl, FormActions } from "./styles";
import Input from "./Input";
import Label from "./Label";
import Button from "../UI/Button";

function Form({ border, data, actions, onSubmit }) {
  return (
    <FormAuth border={border} onSubmit={onSubmit} autoComplete="off">
      <FormControl>
        {data &&
          data.map((group) => (
            <React.Fragment key={group.id}>
              <Label htmlFor={group.htmlFor} labelText={group.labelText} />
              <Input
                value={group.value}
                onChange={group.onChange}
                name={group.name}
                id={group.id}
                type={group.type}
                placeholder={group.placeholder}
              />
            </React.Fragment>
          ))}
      </FormControl>
      <FormActions>
        {actions &&
          actions.map((action) => (
            <Button
              key={action.id}
              type={action.type}
              btnText={action.btnText}
              marginLeft={action.marginLeft}
              onClick={action.onClick}
            />
          ))}
      </FormActions>
    </FormAuth>
  );
}

export default Form;

