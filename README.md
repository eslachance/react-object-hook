# react-object-hook
A dead simple react hook for complex multi-level state objects

## Installation

You know the drill, right?

```
npm i react-object-hook

or

yarn add react-object-hook
```

## Usage

This thing's so simple your grandma could do it.

```js
import useObject from 'react-object-hook';

const initialState = {
  a: 1,
  b: 2,
  c: 3,
  d: {
    foo: 'bar',
    zoo: 'boomafoo',
    thing: {
      a: 'majig',
    }
  }
}

const MyComponent = props => {
  const [state, setState, getState] = useObject(initialState);

  console.log(state); // logs initialState
  console.log(getState('d.thing.a')); // majig
  setState('meme', 'd.thing.a'); 
  console.log(getState('d.thing.a')); // meme
}
```

## API Reference

> Maaaaa do I really gotta? UGH OK NO NEED TO NAG!

`useObject(initialState)`
The initial state must be an object. GEE I WONDER WHY.

Returns an array with 3 values: 
- `state`: The object with the current value, just like any other react state in the history of react states.
- `setState`: A function with 2 arguments: 
  - `value`: The value to set into the state. If there is no path, this should be an object and will override the entire stored object.
  - `path`: A path to the property to change. Standard lodash path. See [https://lodash.com/docs/4.17.15#get](Lodash Documentation).
- `getState`: A function that takes a path and returns the value at that path.
  - `path`: See above, same deal
  - `default`: Value returned if the path leads to an undefined value. Just like lodash get().

## The future is bleak and uncertain

I can't promise anything but I'm sure I'll update this with more features eventually. Feel free to suggest stuff.

And uhh... testing, I guess. Yeah, testing...

## Contributing

I like sarcasm and stuff but I'm not protective of the stuff I do. PR this thing with non-shitty code and I'll definitely consider hitting that Merge button. Cuz you're awesome!