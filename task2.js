class Light {
  constructor(state) {
    this.name = 'Light';
    this._state = state;
  }

  get state() {
    return this._state;
  }

  set state(x) {
    this._state = x;
  }

  changeState() {
    const currentState = this._state;
    return this._state = currentState === 'on' ? 'off' : 'on';
  }

}

function main() {
  let myLight = new Light('on');  
  console.log(myLight.state);
  console.log(myLight.changeState());
  console.log(myLight.state);
  console.log(myLight.changeState());
};

main(); 



