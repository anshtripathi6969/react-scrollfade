<div align="center">
  <br />
  <img src="https://raw.githubusercontent.com/lucide-icons/lucide/main/icons/layers.svg" alt="ScrollFade Logo" width="80" height="80" />
  <h1>React ScrollFade</h1>
  <p>
    <strong>A lightweight, zero-dependency fade-in-on-scroll React component.</strong>
  </p>

  <p>
    <a href="https://www.npmjs.com/package/@anshtripathi8989/scrollfade"><img src="https://img.shields.io/npm/v/@anshtripathi8989/scrollfade" alt="NPM Version" /></a>
    <a href="https://bundlephobia.com/package/@anshtripathi8989/scrollfade"><img src="https://img.shields.io/bundlephobia/minzip/@anshtripathi8989/scrollfade" alt="Bundle Size" /></a>
    <img alt="TypeScript" src="https://img.shields.io/badge/TypeScript-007ACC?style=flat-square&logo=typescript&logoColor=white" />
  </p>
  
  <p>
    <i>Smooth fade-in on scroll. Zero dependencies. Powered by native IntersectionObserver.</i>
  </p>
  <p>
    <strong>🌍 Interactive Docs & Live Demo: <a href="https://scrollfade-new.vercel.app/">https://scrollfade-new.vercel.app/</a></strong>
  </p>
</div>

---

## ✨ Why ScrollFade?

Heavy animation libraries (like Framer Motion) are amazing, but often overkill for 90% of use cases where you just want elements to elegantly fade in as the user scrolls down the page. 

**ScrollFade** solves this by providing:
- 📦 **Zero Dependencies**: Doesn't bloat your node_modules.
- ⚡ **Native IntersectionObserver**: Uses the highly optimized browser API.
- 🪶 **Tiny Bundle Size**: Adds effectively nothing (< 2kb) to your final build.
- 🛡️ **Fully Typed**: Built with TypeScript for great autocomplete.
- 🎨 **Hardware Accelerated**: Uses CSS 3D transforms for buttery 60fps animations.

## 🚀 Installation

Install via your preferred package manager:

```bash
npm install @anshtripathi8989/scrollfade
```
```bash
yarn add @anshtripathi8989/scrollfade
```
```bash
pnpm add @anshtripathi8989/scrollfade
```

## 💻 Usage

Wrap any React node with `<ScrollFade>` and it will automatically animate into view when the user scrolls to it!

```jsx
import { ScrollFade } from '@anshtripathi8989/scrollfade';

export default function MyPage() {
  return (
    <main>
      {/* 1. Default usage (slides up) */}
      <ScrollFade>
        <h1>Welcome to my website!</h1>
      </ScrollFade>

      {/* 2. Customizing direction and timing */}
      <ScrollFade direction="left" delay={200} duration={0.8}>
        <p>This paragraph gently slides in from the left side.</p>
      </ScrollFade>
      
      {/* 3. Re-triggering animation when scrolling back up */}
      <ScrollFade once={false}>
        <div>I animate every time I enter the viewport</div>
      </ScrollFade>
    </main>
  );
}
```

## ⚙️ Props API

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactNode` | **Required** | The elements to be animated. |
| `direction` | `'up' \| 'down' \| 'left' \| 'right' \| 'none'` | `'up'` | The direction from which the element slides into its final position. |
| `duration` | `number` | `0.6` | The length of the animation in seconds. |
| `delay` | `number` | `0` | The delay before the animation starts in milliseconds. |
| `once` | `boolean` | `true` | If true, animates only once. If false, re-animates every time it enters the viewport. |
| `threshold` | `number` | `0.1` | How much of the element (0 to 1.0) must be visible before triggering. |
| `className` | `string` | `''` | Optional CSS classes to pass to the wrapper `<div>`. |

## 🎮 Interactive Playground

Check out the [Live Demo & Playground](https://scrollfade-new.vercel.app/) to tweak delays, durations, directions, and thresholds and get instantly copyable JSX.

## 🤝 Contributing

We welcome contributions! Please feel free to submit a Pull Request.

## 📜 License

Distributed under the MIT License. Brought to you by [Ansh Tripathi](https://github.com/anshtripathi6969).
