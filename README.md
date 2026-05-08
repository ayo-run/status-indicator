# &lt;status-indicator&gt; web component

Circles with colors. That's it. That's the component.

![screenshot](./screenshot.png)

## Usage

Set the `status` property of the `status-indicator` component to any of the following: positive, negative, active, intermediary.

```html
<status-indicator status="positive">
    All systems operational
</status-indicator>
<status-indicator status="negative">
    Something's wrong
</status-indicator>
<status-indicator status="active">
    It's just fine; carry on
</status-indicator>
<status-indicator>
    Nothing matters
</status-indicator>
<status-indicator status="intermediary">
    Slow down...
</status-indicator>
```

---

A project by _Ayo_
