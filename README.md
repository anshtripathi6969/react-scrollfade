<p align="center">
  <h1 align="center">🚀 ScrollFade</h1>
  <p align="center">
    <strong>Lightweight, dependency-free fade-in on scroll React component powered by IntersectionObserver.</strong>
  </p>

  <p align="center">
    <a href="https://www.npmjs.com/package/@anshtripathi8989/scrollfade">
      <img src="https://img.shields.io/npm/v/@anshtripathi8989/scrollfade?color=blue" />
    </a>
    <a href="https://www.npmjs.com/package/@anshtripathi8989/scrollfade">
      <img src="https://img.shields.io/npm/dm/@anshtripathi8989/scrollfade?color=green" />
    </a>
    <img src="https://img.shields.io/npm/l/@anshtripathi8989/scrollfade?color=orange" />
  </p>
</p>

---

## ✨ Features

- 🚀 Zero dependencies
- 🧠 Uses native `IntersectionObserver`
- 🎯 Animate once or on every scroll
- 🎨 Customizable direction (up, down, left, right)
- ⏱ Adjustable delay & duration
- ♿ Respects `prefers-reduced-motion`
- 📦 Tiny bundle size (~11kb)
- 💯 Full TypeScript support




---

## 📦 Installation

```bash
npm install @anshtripathi8989/scrollfade
```

| Prop      | Type                             | Default | Description                        |
| --------- | -------------------------------- | ------- | ---------------------------------- |
| delay     | number                           | 0       | Delay before animation starts (ms) |
| duration  | number                           | 600     | Animation duration (ms)            |
| direction | "up" | "down" | "left" | "right" | "up"    | Animation direction                |
| once      | boolean                          | true    | Animate only once                  |
| threshold | number                           | 0.2     | Intersection threshold             |
| distance  | number                           | 20      | Initial translate distance (px)    |
| className | string                           | -       | Additional CSS classes             |
| style     | React.CSSProperties              | -       | Inline styles                      |




