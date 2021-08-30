# React Task

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

The project supports typescript and javascript.

Please download the repository and install the packages.

```
npm install
```

You can run project by:

```
npm start
```

Within the solution, you can use any tool from the React environment. Packages such as Apollo Client and Redux have been pre-configured and their Providers have been added in `src/index.tsx`. If needed they are ready to use.

In the `src/components/App.tsx` file you will find all the HTML elements you need to solve the task. The elements with id references mentioned in Task objective section are available there.

You can find the HTML structure under `designs/index.html`. However HTML elements in the `src/components/App.tsx` are already in the right place and contain all necessary css classes. No additional CSS is required.

Task objective:

The main task is to fetch past launches from SpaceX API and show the correctly converted result in the launches list area "#launches-area". You can use GraphQL or REST API for this purpose. Both URLs to endpoints are defined in the `src/configs/api-urls.ts` file.

Documentation for GraphQL - https://api.spacex.land/graphql/

Documentation for REST - https://docs.spacexdata.com/#fce450d6-e064-499a-b88d-34cc22991bcc

The launches area "#launches-area" should be shown or hidden on the toggle list button "#launches-area-toggler" click. The area should be initially hidden.

Launches in the list should be grouped according to the month in which they took place ("launch_date_utc" field).

Launches grouped by month should be ordered by launches count. The month with the most launches should be on the top of the list.

Dummy launches area list structure:

```
ul
li - Month name 1 (launches count - 3)
li - mission_name 1
li - mission_name 2
li - mission_name 3
li - Month name 2 (launches count - 1)
li - mission_name 4
[...]
```

IMPORTANT! These actions however shouldn't affect the rendering counter. It should show green "1", which means that the App component has only been rendered once. `<RenderCounter />` should stay inside the APP component.

Bonus point:

- implement/design solution for easy access to past launches data in the app
- load "#launches-area" code with the first click on "#launches-area-toggler"
- basic tests
- typescript types
