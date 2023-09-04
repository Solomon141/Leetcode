class EventEmitter {
    
    constructor(){
this.events ={};
    }
    
  subscribe(event, cb) {
      this.events[event] = this.events[event] || []
      this.events[event].push(cb)
      
    return {
        unsubscribe: () => {
        this.events[event] = this.events[event].filter(callback => callback !== cb)
        }
    };
  }

  emit(event, args = []) {
    if(!this.events[event]){
        return [];
}
      
      return this.events[event].map(callback=> callback(...args))
  }
}

/**
 * const emitter = new EventEmitter();
 *
 * // Subscribe to the onClick event with onClickCallback
 * function onClickCallback() { return 99 }
 * const sub = emitter.subscribe('onClick', onClickCallback);
 *
 * emitter.emit('onClick'); // [99]
 * sub.unsubscribe(); // undefined
 * emitter.emit('onClick'); // []
 */