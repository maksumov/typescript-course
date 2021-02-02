import 'reflect-metadata';

@printMetadata
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

function printMetadata(target: typeof Plane) {
  for (let key in target.prototype) {
    const secret = Reflect.getMetadata('secret', target.prototype, key);
    console.log(secret);
  }
}
