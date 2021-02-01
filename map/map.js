import quests from '../data.js';

const ul = document.querySelector('ul');

const user = JSON.parse(localStorage.getItem('USER'));

let completedQuests = true;

for (let quest of quests) {
    if (!user.completed[quest.id]) {
        completedQuests = false;
    }
}

if (user.oxygen <= 0 || completedQuests) {
    window.location = '../results';
}

for (let quest of quests) {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.textContent = quest.title;
    a.href = `../quests/?id=${quest.id}`;

    li.append(a);
    ul.append(li);
}