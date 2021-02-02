import 'reflect-metadata';

const plane = {
  color: 'red',
};

Reflect.defineMetadata(
  'note',
  'This is note on an object property',
  plane,
  'color'
);

const note = Reflect.getMetadata('note', plane, 'color');

console.log('note:>>', note);
