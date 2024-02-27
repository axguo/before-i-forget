const sentenceLengths = {};

for (const ent of entry) {
    const length = ent.length;
    if (sentenceLengths[length]) {
        sentenceLengths[length].push(ent)
    } else {
        sentenceLengths[length] = [ent];
    }
}

// Get the current date
var currentDate = new Date();

// Format the date as "Day Month Year"
var formattedDate = currentDate.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' });

// Set the formatted date as the content of the span with class "title"
document.querySelector('.title').textContent = formattedDate;


let paragraphElement = document.getElementById("text-area");
let paragraph = "";

// keep track of all current sentences in the paragraph
let sentences = [];
// keep track of indices of sentences in entry
let entryIndices = [];

// populate sentences randomly
for (let i = 0; i < 25; i++) {
  let randomEntryIndex = Math.floor(Math.random() * entry.length);
  let randomEntry = entry[randomEntryIndex];
  if (!sentences.includes(randomEntry)) {
    sentences.push(randomEntry);
    entryIndices.push(randomEntryIndex);
  }
}

// set paragraph text
paragraphElement.textContent = sentences.join(" ");

let changingSentences = [];

function findNewSentence(current) {
  let length = current.length;

  let tries = 10;
  while (tries > 0) {
    let randomIndexInMatchingLengths = Math.floor(Math.random() * sentenceLengths[length].length);
    let replacementSentence = sentenceLengths[length][randomIndexInMatchingLengths];
    let replacementIndexInEntry = entry.indexOf(replacementSentence);

    if (!entryIndices.includes(replacementIndexInEntry)) {
      return replacementSentence;
    }
    tries--;
  }
  return current;
}


// Pick random sentences to change
for (let i = 0; i < 10; i++) {
  // pick a sentence to change
  let indexToChange = Math.floor(Math.random() * sentences.length);
  let sentenceToChange = sentences[indexToChange];

  let replacementSentence = findNewSentence(sentenceToChange);

  if (replacementSentence) {
    changingSentences.push({
      indexInSentences: indexToChange,
      currentLetterIndex: 0,
      replacementSentence: replacementSentence
    });
  }
}



function updateParagraph() {
  let updateLetters = () => {
    for (let i = 0; i < changingSentences.length; i++) {
      let changingSentence = changingSentences[i];

      let indexInSentences = changingSentence.indexInSentences;
      let currentLetterIndex = changingSentence.currentLetterIndex;
      let sentence = sentences[indexInSentences];
      let length = sentence.length;
      let replacementSentence = changingSentence.replacementSentence;


      if (currentLetterIndex < length) { //update letters
        let replacementLetter = replacementSentence[currentLetterIndex];

        let updatedSentence = sentence.substring(0, currentLetterIndex) + replacementLetter + sentence.substring(currentLetterIndex + 1);

        sentences[indexInSentences] = updatedSentence;
        paragraph = sentences.join(" ");
        paragraphElement.textContent = paragraph;
        changingSentence.currentLetterIndex++;

      }
      else { // find new sentence to replace
        let replacementIndexInEntry = entry.indexOf(replacementSentence);
        entryIndices[indexInSentences] = replacementIndexInEntry;

        let newSentenceIndex;

        do {
          newSentenceIndex = Math.floor(Math.random() * sentences.length);
        }
        while (changingSentences.some(obj => {
          return obj.indexInSentences === newSentenceIndex;
        }))

        let sentenceToChange = sentences[newSentenceIndex];
        replacementSentence = findNewSentence(sentenceToChange);


        changingSentence.indexInSentences = newSentenceIndex;
        changingSentence.currentLetterIndex = 0;
        changingSentence.replacementSentence = findNewSentence(replacementSentence);
      }
    }
    setTimeout(updateLetters, 100);
  }
  updateLetters();
}
updateParagraph();