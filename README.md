# `combineObj` for xstream

`npm install xs-combine-obj`

A port of [`combineLatestObj`](https://github.com/staltz/combineLatestObj) to [xstream](http://github.com/staltz/xstream).

## Usage

Given these observables:
```js
const a$ = xs.periodic(50).take(3);
const b$ = xs.of('Boston');
const c$ = xs.of('Colorado');
```

Make an observable which is the combination of them, bundled as an object.

```js
import combineObj from 'xs-combine-obj';

const state$ = combineObj({a$, b$, c$});
// or const state$ = combineLatestObj({a: a$, b: b$, c: c$});

state$.addListener({
  next: x => console.dir(x),
  error: () => {},
  complete: () => {}
});
// {a: 0, b: 'Boston', c: 'Colorado'}
// {a: 1, b: 'Boston', c: 'Colorado'}
// {a: 2, b: 'Boston', c: 'Colorado'}
```

It takes [Cycle.js' hungarian notation `$`](http://cycle.js.org/basic-examples.html#what-does-the-suffixed-dollar-sign-mean) into consideration, returning an object whose keys don't have the $.

The above is more convenient than writing:
```js
var stateAlt$ = xs.combine(a$, b$, c$).map(([a, b, c]) => ({a, b, c}));
```
_Credit: Code and README example pulled from [`combineLatestObj`](https://github.com/staltz/combineLatestObj)_
