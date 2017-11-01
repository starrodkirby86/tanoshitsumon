# Tanoshitsumon

## Introduction
A demo application using React and Redux. The goal is, using Anilist's API, to create a quiz application whose functions rely on the Redux architecture. The project attempts to use good practices in organizing the various components in Redux.

Made with create-react-app.

## Installation
Clone the repository to your preferred location, and install the Node.js project from the root folder of the repository (i.e. the folder with the ``package.json`` file).

This project relies on the API v1 of the anime management website, [Anilist](https://anilist.co/). In order to properly run the project, you must have a registered client on Anilist. [Follow the steps in registering for one here](http://anilist-api.readthedocs.io/en/latest/introduction.html), and then create a ``res/api/secret.js`` file containing the exportable variables ``CLIENT_ID`` and ``CLIENT_SECRET``.

Otherwise, the startup and build process are all identical to Create React App. This includes starting the application with ``npm start``, or creating a minified version with ``npm build``.

## Todo List
- Create a ranking question/component, and then actions generating said question.
- Question generation. Successfully test that, with a series being grabbed/browsed, we can then create an appropriate question that React will take in.
- Actions requiring the usage of an access token need to rely on calling these actions first, *then* call the actual action.
- *Low priority*: Centered component formatting is imperfect. But that's outside the main needs of the project.

## Resources and Special Thanks
- [Heropatterns](http://www.heropatterns.com/) - Provided some pretty sick SVG backgrounds.
- [Semantic UI](https://semantic-ui.com/) - Includes a really extensive React library for its user interface.
- [Fullstack React](https://www.fullstackreact.com/) - Probably one of the best resources I've used in learning React.
- [A Dummy's Guide to Redux and Thunk in React](https://codepen.io/stowball/post/a-dummy-s-guide-to-redux-and-thunk-in-react) - This article helped break down thunk functions and reducers.
- [Create React App User Guide](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md) - Common questions for any React developer, especially when using Create React App.
- [JetBrains WebStorm](https://www.jetbrains.com/webstorm/) - Anime girls give me power. WebStorm lets me have a custom background for this.
- Hifumi Takimoto