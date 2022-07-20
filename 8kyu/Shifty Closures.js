Functional closures can get overly attached. Set them straight!

Why doesn't greet_abe() actually greet Abe?

Solution

var name;
function greet_abe() {
  name = 'Abe';
  return "Hello, " + name + '!';
};


function greet_ben() {
  name = 'Ben';
  return "Hello, " + name + '!';
};
