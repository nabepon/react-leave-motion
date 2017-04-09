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
<LeaveMotion itemKey="1" defaultStyle={{x: 0}} style={{x: spring(10)}}>
  {interpolatingStyle => <div style={interpolatingStyle} />}
</LeaveMotion>
```

## \<LeaveTween />
### Usage
```jsx
<LeaveTween itemKey="1" defaultStyle={{x: 0}} style={{x: 10}}>
  {interpolatingStyle => <div style={interpolatingStyle} />}
</LeaveTween>
```

# bug
要素が消えきる前に同じkeyを追加するとバグりますが、
直す予定は特にありません。
