import Interpreter from "../../system/interpreter.js"

const run = function(code, opts) {
  opts = opts || {};
  var intp = new Interpreter(function(e){
    if(!opts["no_print"]) {
      if(e.stack){
        console.error(e.stack);
      }
      else{
        console.error(e.toString ? e.toString() : e);
      }
    }

    throw e;
  });
  return intp.evaluate(code);
};
export { run };
