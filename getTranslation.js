var strings = {
  home: {
    intro: {
      en: 'Welcome on Copass',
      fr: 'Bienvenue sur Copass'
    },
    content: {
      explanation: {
        en: 'This is an interesting exercise',
        fr: 'C\'est un exercice intéressant',
        de: 'Es ist eine interesante Übung'
      },
      contact: 'Contact',
      goodbye: {
        en: 'Goodbye',
        fr: 'Au revoir',
        es: 'Adios'
      }
    }
  }
}

/* Recursive */
function getTranslation(path, lang) {
    var translationPath = path.split('.'),
        key             = translationPath.splice(0, 1)[0],
        translation     = arguments[2] || strings;

    if (!path) {
        if (translation == 'none') return '';
        return typeof translation !== 'object' ? translation : (translation[lang] || translation['en']);
    }

    return getTranslation(translationPath.join('.'), lang, (translation[key] || 'none'));
}

/* Iterative */
function getTranslation(path, lang) {
    var translationPath = path.split('.'),
        translation     = strings;

    translationPath.forEach(function(key) {
        translation = translation[key] || '';
    });

   return typeof translation !== 'object' ? translation : (translation[lang] || translation['en']);
}

console.log(getTranslation('home.intro', 'fr')) // => 'Bienvenue sur Copass'
console.log(getTranslation('home.content.contact')) // => 'Contact'
console.log(getTranslation('home.intro', 'es')) // => 'Welcome on Copass'
console.log(getTranslation('home.content.explanation'))
console.log(getTranslation('home.content.explanation', 'de'))
console.log(getTranslation('home.content.goodbye')) // => 'Goodbye'
console.log(getTranslation('unvalid.path','en')) // => ''
console.log(getTranslation('very.very.unvalid.path','en')) // => ''
