# ReactJS Server Side Rendering Template
This is a ReactJS Server Side Rendering Template for project initiation.
This project has setup React Router v4, Redux for keeping state on session and CSS-Module.
You can check or blame my webpack config at webpack.conf.js it's including configs for server and client
and CSS/Stylus module.
```
    This project is for development and may be not a good practice, if you see something wrong you can notice me.
```

### Required
- [yarn](https://yarnpkg.com/en/) or  npm
- [babel-cli](https://babeljs.io/docs/usage/cli/) (as global) to run ES6 script

### Installation

- Clone this repository and go to directory
- ``` > yarn install ```
- ``` > webpack --config ./webpack.conf.js ```
- ``` > yarn start```
- Server will be running on port 3000

bundle.js will be in /public and server-bundle.js will be in /assets directory.
server-bundle.js is packed result from /client/server-render.js. It use to prerender the HTML.

### Structure
ReactJS + Redux + React Router v4 + Express
#### Rendering
Server render html and place it in div root
```html
	<div id="root"><%- Pre-render HTML Code -%></div>
```
So, browser do not need to wait for getting entire bundle.js for rendering.
Server still serving bundle.js file. When browser get bundle.js browser will reuse HTML and mount event handlers into it.

#### Redux state
Redux use for keeping state on browser. See detail at [ReduxJS](http://redux.js.org/). This is not implement for persistent state, it only keep state in session of express server(session will end when browser is closed).

After refresh the page, server will get initial state from session (see in /client/server-render.js) via express-session middleware, than create storage with recieved initial state and place the state in HTML template file (page.ejs). After that, client part will create storage with initial state that recieved from server part(see in /client/client.js). Everytime that state change client will sent changed state to server for keeping new in the session.

If you want to implement persistent state, you may use cookie or something else.

#### React Router v4
Nothing special with router. For the server part, using ```StaticRouter``` with see detail at [react-router](https://reacttraining.com/react-router/web/api/StaticRouter). For client part is using ```BrowserRouter```. Pre-render is used for first request of page. After that, it will be browser render, means no need to send a page request to server for changing page if use```<Link />``` component.

#### CSS-Module
In webpack config, it has set css and [stylus](http://stylus-lang.com/) loader. So, you can import css or stylus in .js file.

If you have name collision issue, you can change css/stylus-loader module config or use other module to fit your coding style.

### Warning
This project setup is for development. If you want to use in production, you need to consider about coding standard, performance, config , and security issues.

- Author
Thanachai "Predator" Swangarom