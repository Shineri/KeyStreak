// Example paragraphs for different types
const predefinedparagraphs = {
  lowercase: [
    "this is a lowercase paragraph for typing practice.",
    "practicing typing improves speed and accuracy.",
    "regular practice is key to mastering typing.",
    "typing consistently improves your skills over time.",
    "practicing every day helps in mastering new techniques.",
    "accuracy in typing is essential for productivity.",
    "speed is important, but accuracy should not be compromised.",
    "take breaks during long typing sessions to prevent strain.",
    "use ergonomic keyboards to reduce the risk of repetitive strain injury.",
    "learning touch typing enhances your efficiency.",
    "typing with proper posture improves comfort and reduces fatigue.",
    "use keyboard shortcuts to speed up your workflow.",
    "review your typing mistakes to identify areas for improvement.",
  ],
  camelcase: [
    "thisIsCamelCaseParagraphForTypingPractice.",
    "typingSpeedImprovesWithRegularPractice.",
    "masteringCamelCaseTypingRequiresConsistency.",
    "theQuickBrownFoxJumpsOverTheLazyDog.",
    "sheSellsSeaShellsByTheSeaShore.",
    "theRainInSpainFallsMainlyInThePlain.",
    "howMuchWoodWouldAWoodchuckChuckIfAWoodchuckCouldChuckWood."
  ],
  alphanumeric: [
    "a1b2c3d4e5f6g7h8i9j0 for practicing typing.",
    "123abc456def789ghi0 for improving speed.",
    "mixingNumbersAndLettersForBetterTypingSkills123.",
    "2bOrNot2bTh@IsTheQuestion!",
  "4ScoreAnd7YearsAgoOurF@thersBr0ughtF0rthOnTh1sC0ntinent.",
  "1fY0uC@nR3@dTh1sY0uH@veAG00dUnd3rst@nd1ngOfL33tSp34k."
  ],
  punctuation: [
    "Hello, world! This is a punctuation-rich paragraph.",
    "Practice; makes: perfect.",
    "Keep typing... to improve!",
    "forGods@sakeLetUsSitUponTheGroundAndTellSadStoriesOfTheDeathOfKings.",
    "toBeOrN0tToBeTh@tIsTheQuestion!",
    "2BeOrNot2BTh@IsTheQuestion!",
    "2+2=4-1=3QuickMaths."
  ],
};

// word lists for generation
const wordLists = {
  lowercase: ["this", "is", "a", "test", "paragraph", "for", "typing", "practice"],
  camelcase: ["thisIs", "aTest", "paragraphFor", "typingPractice"],
  alphanumeric: ["a1b2", "c3d4", "e5f6", "g7h8", "i9j0"],
  punctuation: ["Hello,", "world!", "This", "is", "a", "test;", "for", "typing:", "practice..."]
};




export const generatepredefinedParagraph = async (type, duration) => {
  let paragraphType = predefinedparagraphs[type];
  if (!paragraphType) {
    return "Invalid paragraph type.";
  }
  // Calculate the number of sentences needed based on duration
  const sentencesPerMinute = 2;
  const totalSentences = sentencesPerMinute * duration;

  // Randomly select sentences from the paragraph type
  let selectedParagraph = "";
  for (let i = 0; i < totalSentences; i++) {
    const randomIndex = Math.floor(Math.random() * paragraphType.length);
    selectedParagraph += paragraphType[randomIndex] + " ";
  }

  // Trim any trailing whitespace
  return selectedParagraph.trim();
};

// Function to generate random paragraph
export const generateRandomParagraph = async (type, duration) => {
  let paragraph = "";
  const words = wordLists[type];
  let wordCount = Math.ceil((duration) * 200); // Estimate word count based on duration (200 WPM avg typing speed)
  for (let i = 0; i < wordCount; i++) {
      paragraph += words[Math.floor(Math.random() * words.length)] + " ";
  }
  return paragraph.trim();
};

//export default {generatepredefinedParagraph,generateRandomParagraph};