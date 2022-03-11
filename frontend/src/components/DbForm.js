import { useState } from "react";

const MyForm = (value) => {
  const [val, setVal] = useState(value);

  return [
    val,
    (event) => {
      setVal({ ...val, [event.target.name]: event.target.value });
    },
  ];
};
export default MyForm;
