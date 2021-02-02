import 'reflect-metadata';

class Plane {
  color: string = 'red';

  @markFunction('HI THERE')
  fly() {
    console.log('vrrrrrrr');
  }
}

function markFunction(secretInfo: string) {
  return function (target: Plane, key: string): void {
    Reflect.defineMetadata('secret', secretInfo, target, key);
  };
}

const secret = Reflect.getMetadata('secret', Plane.prototype, 'fly');

console.log(secret);
