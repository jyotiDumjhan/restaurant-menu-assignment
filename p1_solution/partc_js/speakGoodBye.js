// SpeakGoodBye.js
// This module defines an array of farewells in 10 languages and
// exposes a `byeSpeaker` object with a `.speak(name)` method to the global scope.

(function(window) {
  // TODO 5: Create an array of "Goodbye" in 10 arbitrary languages
  var farewells = [
    "Goodbye",         // English
    "Adiós",           // Spanish
    "Au revoir",       // French
    "Arrivederci",     // Italian
    "Tchau",           // Portuguese
    "Auf Wiedersehen", // German
    "さようなら",       // Japanese (Sayonara)
    "अलविदा",          // Nepali (Alvida)
    "مع السلامة",      // Arabic (Ma’a salama)
    "До свидания"      // Russian (Do svidaniya)
  ];

  // TODO 6: Attach a `speak` method to a `byeSpeaker` object
  var byeSpeaker = {};
  byeSpeaker.speak = function(name) {
    for (var i = 0; i < farewells.length; i++) {
      console.log(farewells[i] + " " + name);
    }
  };

  // TODO 7: Expose the `byeSpeaker` object to global scope as `byeSpeaker`
  window.byeSpeaker = byeSpeaker;
})(window);
