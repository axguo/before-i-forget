let sentenceLengths = {
  '23': [ 'I want to make a chair.' ],
  '25': [ 'I want to make spaghetti.' ],
  '27': [ 'I wish to be love abundant.' ],
  '29': [ 'I want to try to sew a dress.', 'The internet has weather too.' ],
  '30': [
    'I want some cheese and grapes.',
    'I am a fucking powerful witch.'
  ],
  '33': [
    'My craving leads me to a burrito.',
    'Today I am not yet quite at love.',
    'This was a good week for the sky.'
  ],
  '36': [ 'I am an emotionless brick sometimes.' ],
  '37': [
    'I should buy some flowers for myself.',
    'How do you know if you love somebody?',
    'I feel really seen when I’m around E.',
    'I think I have 5 big frogs right now.'
  ],
  '39': [
    'Foliage forecaster is a an actual job!!',
    'I want to become intimate with a color.'
  ],
  '42': [
    'I listened to my joy (pink storage cubes).',
    'I want SOUP. What soups are in my arsenal.'
  ],
  '44': [ 'The sky at sunset feels like a Barbie movie.' ],
  '48': [ 'Eavesdropped on the conversation in the kitchen.' ],
  '54': [
    'I’ve been craving mini cream puffs since Thanksgiving.',
    'Today I shall forgive myself for my unformed opinions.',
    'I think spending some time with me will be good today.'
  ],
  '55': [ 'To say I am present here with you is to say I love you.' ],
  '57': [ 'The most powerful thing I can do is cultivate a good gut.' ],
  '61': [ "If I spend a year like this, imagine where I'll be next year." ],
  '62': [
    'I’m finally writing poetry again and I feel extremely at home.',
    'Apparently I am not yet great at getting up early. That is ok.'
  ],
  '64': [
    'How would I act if I really cared about the things I said I did!',
    'Got that vegan burger for lunch, slept, and got the potato gift.'
  ],
  '65': [
    'Drew a portrait in blue bc I felt blue and it was pretty helpful.'
  ],
  '67': [
    'I read a poem every day. Every poem this week has left me in tears.'
  ],
  '71': [
    'Just found out that both ice cream places have new flavors every month.'
  ],
  '72': [
    'My intentions for the day are to get a good deal of work done I suppose!'
  ],
  '75': [
    'Meetings meetings meetings and then pasta making with Pietro. I miss Italy.'
  ],
  '76': [
    'J was back today. I smiled and said hi in passing and then felt so relieved.'
  ],
  '77': [
    'I got emotional in the bookstore picking things out and putting them on hold.'
  ],
  '79': [
    'I’m feeling so lucky and full of love, I am filled to the brim and overflowing.'
  ],
  '80': [
    'I want to flirt by saying I think you and I could make beautiful zines together.'
  ],
  '81': [
    "I think I have a better grasp of what I’m doing but I still feel like I'm behind."
  ],
  '82': [
    'I LOVE a good unreliable narrator // I’m starting to feel a bit unreliable myself.',
    'What would be the fun thing?? Writing a substack? Also a lot of things to submit!!',
    'What if the truth is.. that I won’t have time to sleep with all that I want to do.'
  ],
  '83': [
    'Had my therapy session and of course I cried. But I only cry during these sessions.',
    'It feels weird not to be surrounded by people anymore. I will definitely miss that.'
  ],
  '85': [
    'Is this thought causing me to suffer? could i stop listening to it... and not suffer?',
    'Did abs with J then got distracted during lecture learning about cells from an anime.',
    'I keep going and going and going. Once I get a chocolate in me I will be unstoppable.',
    'I dreamt of poetic phrases that have since faded. If I nap again will they come back?',
    'So glad L was also at the party, we get to have our little introvert corner together.'
  ],
  '87': [
    "There's something about walking through a city crying at night. therapeutic? Revealing?"
  ],
  '91': [
    'I’m convinced this keylime cheesecake can make any man fall in love with me. Any woman too.'
  ],
  '92': [
    'Made dinner, annotated all 1000 sentences, and met with B. She is more lost than me I think.',
    'I’m feeling great! The sun has graced us all week and I think that I could have a life here.'
  ],
  '94': [
    'The visi-sonor is one of the first items described in sci-fi that make me go… this feels good.',
    'Interview and the person didn’t smile I have no idea what to do with the ones who don’t smile.'
  ],
  '96': [
    'I downloaded a book on dandelions on a whim. I didn’t have the time to read it but I did anyway.'
  ],
  '98': [
    'M is coming over to work today but I really just want to watch the new episode that just came out.'
  ],
  '100': [
    'Still got up around noon. Today was a decent day. The meeting got moved and passed out after dinner.'
  ],
  '102': [
    'I feel an excitement so forceful it knocks me out of focus (this happens too often, be still my heart)',
    'In the dark, it is safe to feel everything where only the moon and the glowing dandelions can see you.'
  ],
  '103': [
    'Speaking is a position of power. I admire people who naturally take up space and make space for others.'
  ],
  '105': [
    'A Friday night crafting while watching the newest episode of bakeoff is a small pocket of the purest joy.'
  ],
  '106': [
    'Art from suffering is not better, but I suppose I am glad to have this place to hold my most painful self.'
  ],
  '111': [
    'Watched bachelorette with them while doing ethics homework and texting Y. I like that we’ve texted a lot today.',
    "The transition of seasons is really getting to me and I'm lost in time. I don't know what summer it is anymore."
  ],
  '112': [
    'I’m struggling to find the words to express in this letter - poetry might be the only form that will feel right.',
    'Walked from the library to the old office and then stopped in Walgreens to get lashes while waiting for N and E.'
  ],
  '113': [
    'I predict great difficulty in creating community in the absence of finding one waiting but I know it can be done.'
  ],
  '114': [
    'I dance every night in my room and put on flashing lights. It’s a nightclub for one and may be the secret to life.'
  ],
  '115': [
    'I’ve been calling N every evening and I don’t tell her enough, but I love the company. It makes all the difference.',
    "How much my life would improve if I didn't get so car sick. What other bits of my life would have this much impact?"
  ],
  '117': [
    'Bike was ok. It was nice to be w a group though I realized that when I walk I prefer to stay silent and enjoy myself.'
  ],
  '119': [
    'Today I saw a new sunflower patch in the middle of the sidewalk on Hampshire. I have no idea how it appeared overnight.'
  ],
  '123': [
    'To visit a place year after year and meet the snapshots of all of your past selves - they have so many questions to ask me.',
    "I feel that fluttery feeling in my stomach. I think I am nervous. I'm toeing the threshold, where I truly am my own person."
  ],
  '125': [
    'We walked from the bookstore and ate our food at the park. We lay down on the blanket and talked. Whose memoirs would I read?'
  ],
  '127': [
    'B called to ask about salary and then started crying so we talked for an hour about job options and boys and the dynamics here.'
  ],
  '129': [
    'Called mom today to ask about the meatball recipe. Every time I cook I want to make something new but I don’t have time for this.'
  ],
  '130': [
    'I think about how much I love A. It scares me because this is the first moment that it hits like this could really really hurt me.'
  ],
  '132': [
    "I feel super overwhelmed and worried that I won't be able to be present when I'm with G because I'll be thinking so much about work."
  ],
  '134': [
    'Thinking about the ways dependence can lead to independence, how we can fearlessly fail when we have a support system to come back to.'
  ],
  '135': [
    'I think I met one of my parts today - a younger me, wanting to stay true to her feelings and scared of not being able to trust herself.'
  ],
  '139': [
    'Cava for din and tried watching half a horror movie with N. Started Hereditary when they got back why are we always watching horror movies.'
  ],
  '142': [
    'Started this book to appease N but now it is 5am and I cannot put this down. I cannot leave until she is back with the impossibly perfect guy.'
  ],
  '144': [
    'Shadows are really orienting? Sunny days are great bc shadows offer contrast -- cloudy/gray days feel off due to the sameness of hue everywhere.'
  ],
  '147': [
    'I want to write poems instead of just reading, I want to do research instead of just consuming. I want to create art instead of just being jealous.'
  ],
  '148': [
    'How has half a year passed by so quickly here? How did I end up in a place where time passes by so quickly? I want slowness where every day is full.'
  ],
  '151': [
    "I'm spending the holidays with my parents in Texas where it's warm and sunny and I still call it home. I wonder when I'll stop saying 'I'm going home.'"
  ],
  '156': [
    'I must finish my readings. Then I must write my essay, then do my laundry, then call A, then make my returns, then go to pottery. That’s only like 5 things.'
  ],
  '161': [
    "I'm getting into romcoms again. Maybe this is what they mean by nature is healing. To wish to be a girl in a string of coincidences that lead to the perfect guy.",
    'And I keep writing and writing and writing for a whole three minutes maybe? Is that three pages? If I do this continuously, will my creative energy be unblocked?',
    "I don't particularly have much to say today other than it's nice to be home and I am feeling myself pull in parts of adult me that have been dormant for a while."
  ],
  '170': [
    'There’s something about rain that is an equalizer, like the night. Trudging through rainwater in one city is pretty close to trudging through rainwater in any other city.'
  ],
  '177': [
    'Received a letter from A today and I felt my heart burst. I feel so warm but now the pressure to send a letter back soon is even greater. This feels so much better than texting.'
  ],
  '181': [
    'Just read an article that said if you have to swallow a frog today, do it first thing. If you have two, swallow the biggest frog first, and I love that phrasing. What is my frog rn?',
    'Funny how with any journaling, I always come out with actionables. Things I can do and if nothing else that is a reason to keep writing. I have so many loves that have been subdued.'
  ],
  '183': [
    "I feel very STUCK. I don't know what to do right now and there's no way forward. I'm literally just frozen in time unable to do anything. I wonder why. My body feels physically tired."
  ],
  '185': [
    'Had a work social which was pretty fun. I wanted to play codenames but we played drawing games instead. I always think they won’t be fun but then I get really into them and competitive.'
  ],
  '186': [
    'It’s raining and I’m sitting on a tram and getting a peak into everyone’s gardens as I pass by. I imagine these are the perfect balance of privacy and connection that Alexander mentions.'
  ],
  '190': [
    "One intention I set for these next few months was to spend less time on food, because as much as I love to cook and plan where I'll have my next meal, it takes so much time and mental space."
  ],
  '193': [
    "Grief always catches up to me in this last week of the year, for the versions of myself that I feel I did not stay true to and for the love I've let dwindle. And yet there is still so much joy."
  ],
  '194': [
    'It rained today. As in, looked like enough rain to warrant an umbrella, yet when I opened mine the drops made no sound. It felt a bit silly to carry an umbrella for raindrops that leave no mark.'
  ],
  '204': [
    "There are a few things I do daily now. I paint a small square of the sky each day. I read a poem each day. I feel impure when I put them on the todo list, after all, rituals shouldn't need checkboxes, no?"
  ],
  '206': [
    'Every time we bring back a dog we think what have gotten ourselves into, how have we committed three weeks to a dog that seems so distant from us and has already peed inside. I know I will love her so much.'
  ],
  '221': [
    'I feel my attention being scrambled all the time. How did I get myself into three hobby classes and all of these projects and work and needing to find friends and the weight of maintaining and maintaining and maintaining.'
  ],
  '239': [
    'In this discomfort I realize that I have a sense of home, small as it is. When the grayness-but-really-white-lack-of-shadows gets to me I wishi to be in my room, where the warm glow of half a dozen bulbs and my craft table feel like a hug.'
  ],
  '240': [
    'What would it be like to nurture a project over time without deadline, without decay in excitement that leads to dread? To work on my own secret thing away from external pressures? To come home to it everyday knowing I’d never have to rush.'
  ],
  '269': [
    'While the cheesecakes were baking N convinced me to start a new book and I did a warm eye compress. At some point when I was cleaning up my roommate walked in and asked if I was okay, it seemed like I had been in the kitchen for six hours. just a casual thursday night.'
  ],
  '277': [
    "Summer in boston is magical. I've never seen things SO GREEN and the water so sparkly and I wouldn't be surprised if there were fairies all around us. I've been a bit in my own head this past week and forgotten to notice how the city was glowing around me. I forgot to breathe."
  ],
  '329': [
    'We skipped a whole summer here. I walked back the way from work --- about an hour but more because I think I took a longer way. I decided to walk because I don’t like the way the trains feel except for when they’re completely empty but G called and I felt so bothered that I decided to walk it off and ended up crying it out too.',
    "N did my tarot reading while I cooked and said I had no cup cards:I’m not driven by emotion right now. I should take a break or risk burnout, there is an abundance of creativity right now, I shouldn't stay in a job I dislike, and there will soon be a work/relationship situation where I'll have to stand my ground with my values."
  ]
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
for (let i = 0; i < 20; i++) {
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
    setTimeout(updateLetters, 100 + Math.random(50));
  }
  updateLetters();
}
updateParagraph();