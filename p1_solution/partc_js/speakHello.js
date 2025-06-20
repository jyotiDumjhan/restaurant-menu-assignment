// SpeakHello.js
// This module defines an array of greetings in 10 languages and
// exposes a `helloSpeaker` object with a `.speak(name)` method to the global scope.

(function(window) {
  // TODO 2: Create a greetings array with 10 translations of 'Hello'
  var greetings = [
    "Hello",      // English
    "Hola",       // Spanish
    "Bonjour",    // French
    "Ciao",       // Italian
    "Olá",        // Portuguese
    "Hallo",      // German
    "こんにちは", // Japanese (Konnichiwa)
    "नमस्ते",    // Nepali (Namaste)
    "Salaam",     // Arabic
    "Привет"      // Russian (Privet)
  ];

  // TODO 3: Attach a `speak` method to an object named 'helloSpeaker'
  var helloSpeaker = {};
  helloSpeaker.speak = function(name) {
    for (var i = 0; i < greetings.length; i++) {
      console.log(greetings[i] + " " + name);
    }
  };

  // TODO 4: Expose the `helloSpeaker` object to the global scope
  window.helloSpeaker = helloSpeaker;
})(window);
