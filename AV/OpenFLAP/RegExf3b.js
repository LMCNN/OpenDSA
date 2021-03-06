document.write('<script src="../../../AV/Development/formal_language/fa/Automaton.js"></script>');
document.write('<script src="../../../AV/Development/formal_language/fa/FA.js"></script>');

$(document).ready(function() {
  "use strict";

  var av_name = "RegExf3b";
  var av = new JSAV(av_name, {animationMode: "none"});
  var config = ODSA.UTILS.loadConfig({av_name: av_name}),
  interpret = config.interpreter;
  var url = interpret("regexp3b");

  var BinaryDFA = new av.ds.fa();
  FiniteAutomaton.prototype.loadFAFromJFLAPFile.call(BinaryDFA,url);
  BinaryDFA.disableDragging();
  av.displayInit();
  av.recorded();
});