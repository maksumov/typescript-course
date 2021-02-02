import 'reflect-metadata';

class Plane {
  color: string = 'red';

  @markFunction
  fly() {
    console.log('vrrrrrrr');
  }
}

function markFunction(target: Plane, key: string): void {
  Reflect.defineMetadata('secret', 123, target, key);
}

const secret = Reflect.getMetadata('secret', Plane.prototype, 'fly');

console.log(secret);
