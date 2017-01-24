A Pen created at CodePen.io. You can find this one at http://codepen.io/pixelthing/pen/fbajl.

 BEST TO USE http://codepen.io/pixelthing/pen/emYOEx INSTEAD.

If you really need a carousel, you at least need a responsive one.

*bug with multiple "+" CSS selectors in Mac/iOS Safari 8.0 - fixed in nightly 10600.1.25.1, r175941!* 

*IE11 doesn't like transitioning to/from a calc() measurement, fixed here: http://codepen.io/pixelthing/pen/emYOEx *

This demo is just an early test of a different sort of carousel layout. Generally you need javascript to be in control of the not only the events, but monitoring for viewport size changes, setting the size of the carousel and the position of the cards on and off canvas.

The tricky bit is that the CSS - not the JS - is controlling the media queries and the basic layout. So why fight it. This demo only changes one thing in the DOM when you click left or right - it selects the next card that is the first visible one.

Everything else is taken care of in CSS.

And it's not one long strip, which still uses up compositing memory, even if it's not painted to the screen. Instead, it uses a stack left and right. Less memory, and a neat animation as a side effect. And because there's no floats or absolute positioning, the height is controlled only by the content, containers don't need a complimentary fixed height to maintain shape.

This was originally built to work with an angular.js website (not like the jQ version here) and it suits that pattern as you only need to set one directive in your controller.

Next version - swap the margin transition for a transform to get some more FPS on mobile platforms. And even less need for JS.