import propTypes from "prop-types";
import { Children } from "react";

const FormInput = ({ type, placeholder, Children }) => {
  return (
    <div>
      <input type={type} placeholder={placeholder} className="outline-none">
        {Children}
      </input>
    </div>
  );
};

FormInput.protoTypes = {
  type: propTypes.string,
  placeholder: propTypes.string,
  Children: propTypes.Children,
};

export default FormInput;
