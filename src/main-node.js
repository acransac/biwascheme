import BiwaScheme from "./main.js";
BiwaScheme.on_node = true;

import Console from "./platforms/node/console.js"
BiwaScheme.Console = Console;

import { current_input, current_output, current_error } from "./platforms/node/default_ports.js"
BiwaScheme.Port.current_input = current_input;
BiwaScheme.Port.current_output = current_output;
BiwaScheme.Port.current_error = current_error;

//
// node-specific code
//

import { run } from "./platforms/node/run.js"
BiwaScheme.run = run;

module.exports = BiwaScheme;
