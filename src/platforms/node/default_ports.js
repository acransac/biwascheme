import { Port } from "../../system/port.js"

const current_input = Port.current_input;

const current_output = new Port.CustomOutput(
  function (str) {
    process.stdout.write(str)
  }
);

const current_error = current_output;

export { current_input, current_output, current_error }
