@classDecorator
class Boat {
  @testDecoreator
  color: string = 'red';

  @testDecoreator
  get formattedColor(): string {
    return `This boats color is ${this.color}`;
  }

  @logError('Oops... boat was sunk in ocean')
  pilot(
    @parameterDecorator speed: string,
    @parameterDecorator generateWake: boolean
  ): void {
    if (speed === 'fast') {
      console.log('swish');
    } else {
      console.log('nothing');
    }
  }

  sample: number = 12;
}

function classDecorator(constructor: typeof Boat): void {
  console.log(constructor.toString());
}

function parameterDecorator(target: Boat, key: string, index: number) {
  console.log(key, index);
}

function logError(errorMessage: string) {
  return function (target: any, key: string, desc: PropertyDescriptor): void {
    const method = desc.value;

    desc.value = function () {
      try {
        method();
      } catch (e) {
        console.log(errorMessage);
      }
    };
  };
}

function testDecoreator(target: any, key: string): void {
  console.log(key);
}
