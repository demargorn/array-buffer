import { Magician } from '../Magician';
const gendalf = new Magician('Gendalf', 'Magician');

test('test MathChar attack setter with %n values', () => {
   gendalf.attack = -10
   expect(gendalf._attack).toBe(0);
});

test('test MathChar stoned setter with %b values', () => {
   gendalf.stoned = true
   expect(gendalf.stoned).toBeTruthy();
});

test('test MathChar stoned getter', () => {
   expect(gendalf.stoned).toBeTruthy();
});

test('test MathChar attack getter with %n values: distance, stoned', () => {
   gendalf.attack = 100;
   gendalf.distance = 1;
   gendalf.stoned = true;
   expect(gendalf.attack).toBe(100);
});

test('test MathChar attack getter with %n values: distance, not stoned', () => {
   gendalf.attack = 200;
   gendalf.distance = 2;
   gendalf.stoned = false;
   expect(gendalf.attack).toBe(180);
});

test('test MathChar attack getter with %n values: distance, not stoned', () => {
   gendalf.attack = 200;
   gendalf.distance = 3;
   gendalf.stoned = false;
   expect(gendalf.attack).toBe(160);
});

test('test MathChar attack getter with %n values: distance, not stoned', () => {
   gendalf.attack = 200;
   gendalf.distance = 4;
   gendalf.stoned = false;
   expect(gendalf.attack).toBe(140);
});

test('test MathChar attack getter with %n values: distance, not stoned', () => {
   gendalf.attack = 200;
   gendalf.distance = 5;
   gendalf.stoned = false;
   expect(gendalf.attack).toBe(120);
});
