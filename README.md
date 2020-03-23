# React-Object-Hook
A dead simple react hook for complex multi-level state objects

<div align="center">
  <p>
    <a href="https://discord.gg/N7ZKH3P"><img src="https://discordapp.com/api/guilds/298508738623438848/embed.png" alt="Discord server" /></a>
    <a href="https://www.npmjs.com/package/react-object.hook"><img src="https://img.shields.io/npm/v/react-object.hook.svg?maxAge=3600" alt="NPM version" /></a>
    <a href="https://www.npmjs.com/package/react-object.hook"><img src="https://img.shields.io/npm/dt/react-object.hook.svg?maxAge=3600" alt="NPM downloads" /></a>
    <a href="https://david-dm.org/eslachance/react-object.hook"><img src="https://img.shields.io/david/eslachance/react-object.hook.svg?maxAge=3600" alt="Dependencies" /></a>
    <a href="https://www.patreon.com/eviecodes"><img src="https://img.shields.io/badge/donate-patreon-F96854.svg" alt="Patreon" /></a>
  </p>
  <p>
    <a href="https://nodei.co/npm/react-object.hook/"><img src="https://nodei.co/npm/react-object.hook.png?downloads=true&stars=true" alt="npm installnfo" /></a>
  </p>
</div>

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
  const {state, setState, getState} = useObject(initialState);

  console.log(state); // logs initialState
  console.log(getState('d.thing.a')); // majig
  setState('meme', 'd.thing.a'); 
  console.log(getState('d.thing.a')); // meme
  return (
    <div>Get the d: {getState('d.thing.a')}</div>
  )
}
```

## API Reference

> Maaaaa do I really gotta? UGH OK NO NEED TO NAG!

`useObject(initialState)`
The initial state must be an object. GEE I WONDER WHY.

Returns an object with the following possible properties: 
- `state`: The object with the current value, just like any other react state in the history of react states.
- `setState`: A function with 2 arguments: 
  - `value`: The value to set into the state. If there is no path, this should be an object and will override the entire stored object.
  - `path`: A path to the property to change. Standard lodash path. See [Lodash Documentation](https://lodash.com/docs/4.17.15#get) for deets.
- `getState`: A function that takes a path and returns the value at that path (instead of the whole object, for optimization).
  - `path`: See above, same deal
  - `default`: Value returned if the path leads to an undefined value. Just like lodash get().
- `mergeState`: A function that takes in an object and merges it with the current object value, in a recursive fashion. This... is pretty much like the old `setState`'s behaviour, sort of. Remember setState? ;)
 

## The future is bleak and uncertain

I can't promise anything but I'm sure I'll update this with more features eventually. Feel free to suggest stuff.

And uhh... testing, I guess. Yeah, testing...

## Contributing

I like sarcasm and stuff but I'm not protective of the stuff I do. PR this thing with non-shitty code and I'll definitely consider hitting that Merge button. Cuz you're awesome!
