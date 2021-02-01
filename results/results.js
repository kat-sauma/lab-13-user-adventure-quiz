import scoreOxygen from './score-oxygen.js';
import scoreBioluminescence from './score-bio.js';
import { aliveBioMessage, deadBioMessage } from './messages.js';
const user = JSON.parse(localStorage.getItem('USER'));

const gameNarrative = document.getElementById('narration');
const resultArea = document.createElement('p');
const finalScore = document.getElementById('score');
const space = document.createElement('hr');

const oxyResult = scoreOxygen(user.oxygen);
const bioResult = scoreBioluminescence(user.bioluminescence);

const oxyMessages = {
    corpse: `Oh my, Agent ${user.name} not even a ${user.character} like you can make it without oxygen underwater. You have failed your mission.`,
    thriving: `Being of the ${user.character} persuasion, you have saved the world from an environmental disaster.`,
};

const oxyMessage = oxyMessages[oxyResult];

let bioMessages = null;

if (oxyResult === 'corpse') {
    bioMessages = deadBioMessage;
} else {
    bioMessages = aliveBioMessage;
}

const bioMessage = bioMessages[bioResult];

const story = `Here's the tea... Agent ${user.name} ${user.character} ,
${oxyMessage}`;

const storyTwo = `${bioMessage}`;

gameNarrative.textContent = story;
finalScore.textContent = ` OXYGEN: ${user.oxygen} | | BIOLUMINESCENCE: ${user.bioluminescence}`;


gameNarrative.append(resultArea, finalScore);
resultArea.append(storyTwo, space);
