// IMPORT MODULES under test here:
import { setUser } from '../utils.js';

const test = QUnit.test;

test('the FormData should save user input to local storage', (expect) => {
    const form = new FormData();
    form.append('name', 'kat');
    form.append('character', 'aquarius');
    setUser(form);
    // Set up your arguments and expectations
    const actual = localStorage.getItem('USER');
    const trueActual = JSON.parse(actual);

    //Act 
    // Call the function you're testing and set the result to a const
    const expected = {
        name: 'kat',
        character: 'aquarius',
        transport: null,
        oxygen: 100,
        bioluminescence: 0,
        completed: {},
    };

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(trueActual, expected);
});
