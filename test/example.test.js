// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { didUserWin } from '../get-random-throw.js';
const test = QUnit.test;

test('its a draw', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 0;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = didUserWin('rock', 'rock');

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('You lose', (expect) => {
    const expected = -1;
    const actual = didUserWin('rock', 'paper');
    expect.equal(actual, expected);
});

test('you win', (expect) => {
    const expected = 1;
    const actual = didUserWin('scissors', 'paper');
    expect.equal(actual, expected);
});