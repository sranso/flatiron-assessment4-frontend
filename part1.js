// Frontend Assessment Part 1
// HTML

// What does "semantic markup" mean?
  // basically namespacing that makes sense. so, if you're making a blue div that will hold a poem, naming the class "blue-div-for-poem" makes sense!

// What does a doctype do?
  // tells the browser what kind of language it's about to read
// Explain what standards and standards bodies are and why they are important.
  // 
// What are CSS3 and HTML5? How are they different from previous standards? Why is this important?
  // they are the latest versions of css and html specification. they are not just references to the new features in css / html, but are also the current levels of the progress in language specification.


// CSS

// What does a CSS reset do and why is it useful?
  // a css reset reduces browser inconsistencies. the css author can force every browser to have all its styles reset to null which helps to avoid cross-browser differences.
// What is the box model? Draw a picture and label the portions here.
  // 
// What is the difference between a relative, fixed, absolute, and statically positioned element? Feel free to draw pictures to explain your answer.
  // relative - elements near the relative-positioned element behave as if relative element is exactly where it "should" be
  // fixed - element remains at specified position relative to screen's viewport, doesn't move
  // absolute - element remains at a specified position relative to its closest positioned ancestor / to the containing block
  // statically - element behaves normally
// What is SASS and why do people use it?
  // syntactically awesome stylesheet. people use it b/c it writes our css for us -- we can write less code that is more organized.
// Name one feature of SASS and explain why it is helpful.
  // you can set variables at the beginning of the doc, like $font-stack: Helvetica, Arial, sans-serif; and then use that font in the rest of the doc. so, if you end up changing that font-stack, you only have to change it in one place.


// JS

// Explain prototypal inheritance.
  // allows for methods that are defined via the prototype chain to be changed universally for all instances. so, the methods all inherit from this prototype.
// What is a closure and how/why would you use one?
  // a closure is when a function within a function accesses variables outside of its immediate scope.
// What is an anonymous function? Give a typical usecase for one.
  // anonymous function is a function without a name. might use one when you have a one-off function you want to do.
// Describe the difference between
// function Person(){}
  // a function definition
// var person = Person()
  // a variable that links to the function Person
// var person = new Person()
  // a variable that links to a new instance of Person
// Explain hoisting.
  // variables that are defined later in a document of code are able to be referenced before that line of code is reached because their existence is "hoisted" to the top
// What is the difference between === and ==?
  // == asks if it is truthy, === asks if it is definitively true.