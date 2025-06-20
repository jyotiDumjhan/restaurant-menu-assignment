// script.js
// This IIFE populates the provided `names` array, then loops through each name
// and uses helloSpeaker or byeSpeaker to log greetings/farewells in 10 languages.

(function(window) {
  // TODO 1: Create a names array that has at least one "JS" or "js" name for testing and one normal name
  var names = [
    "Alice",    // normal name → should get "Hello"
    "JSBob",    // starts with "JS" → should get "Goodbye"
    "Carol",    // normal
    "jsDavid",  // starts with "js" → should get "Goodbye"
    "Ethan",    // normal
    "jsFiona",  // starts with "js" → should get "Goodbye"
    "George",   // normal
    "Hannah",   // normal
    "jsIan",    // starts with "js" → should get "Goodbye"
    "Julia"     // normal
  ];

  // TODO 8: Loop over the names array
  for (var i = 0; i < names.length; i++) {
    var name = names[i];

    // TODO 9: Retrieve first and second letters, converted to lower case
    var firstLetter  = name.charAt(0).toLowerCase();
    var secondLetter = name.charAt(1).toLowerCase();

    // TODO 10: If the first two letters are "j" and "s", use byeSpeaker,
    // otherwise use helloSpeaker.
    if (firstLetter === 'j' && secondLetter === 's') {
      // Calls SpeakGoodBye.js's byeSpeaker.speak(name)
      byeSpeaker.speak(name);
    } else {
      // Calls SpeakHello.js's helloSpeaker.speak(name)
      helloSpeaker.speak(name);
    }
  }
})(window);
