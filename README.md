# Overview
要素を削除したときにアニメーションするためのコンポーネントです。

# Demo
[demo]( https://nabepon.github.io/react-leave-motion/example/)  
[src](https://github.com/nabepon/react-leave-motion/blob/master/example/src/app.js)  

# API

## Exports

* spring
* presets
* LeaveMotion
* LeaveMotionItem
* LeaveTween
* LeaveTweenItem
* LeaveTransitionGroup


## \<LeaveMotion />
### Usage
```jsx
<LeaveMotion defaultStyle={{x: 0}} style={{x: spring(10)}}>
  {interpolatingStyle => <div style={interpolatingStyle} />}
</Motion>
```

## \<LeaveTween />
### Usage
```jsx
<LeaveTween defaultStyle={{x: 0}} style={{x: 10}}>
  {interpolatingStyle => <div style={interpolatingStyle} />}
</Motion>
```
