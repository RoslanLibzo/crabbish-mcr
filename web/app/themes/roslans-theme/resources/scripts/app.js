import domReady from '@roots/sage/client/dom-ready';
import * as componentMap from './components/countup';
import Splide from '@splidejs/splide/dist/js/splide.esm';
/**
 * Application entrypoint
 */
console.log(Splide);

domReady(async () => {
  new Splide( '.splide' ).mount();
  console.log("HERERE IS HELLO!");  // ...
});

/**
 * @see {@link https://webpack.js.org/api/hot-module-replacement/}
 */
if (import.meta.webpackHot) import.meta.webpackHot.accept(console.error);


// components.register(componentMap);

console.log('HELLO!');
console.log('HELLO!');