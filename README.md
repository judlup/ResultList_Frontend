# Result List Frontend [![CI](https://github.com/judlup/ResultList_Frontend/actions/workflows/main.yml/badge.svg)](https://github.com/judlup/ResultList_Frontend/actions/workflows/main.yml)

## Introduction

This project has as purpose show a tariffs application thhat allow to the user sort its elements, for an example given, with this project you could click on any of top buttons to ascendent sort and click again to descendent sort for a specific field, and show the result.

### Stack used

This project was created using [NextJS framework](https://nextjs.org/) and [React-Bootstrap](https://react-bootstrap.netlify.app/), is hosted in [Github](https://github.com/judlup/ResultList_Frontend), deployed using [Netlify](https://www.netlify.com/) and tested using [Playwright](https://playwright.dev/docs/intro) and [GitHub Actions](https://github.com/judlup/ResultList_Frontend/actions) its backend was built using [.Net 6](https://dotnet.microsoft.com/en-us/), [Repository](https://github.com/judlup/ResultList_API) and deployed in [Azure](https://resultlistapi.azurewebsites.net/Tariff) this is its [Swagger](https://resultlistapi.azurewebsites.net/swagger/index.html) page.

### Source

[Data](https://github.com/judlup/ResultList_API/blob/main/resultlist_api/Data/Data.json)

## Netlify Demo

Please, visit this [Site](https://resultlist.netlify.app)

web

![Screenshot](/resources/web_screenshot.png 'Web Demo')
![Screenshot](/resources/web_laptop_screenshot.png 'Laptop Demo')
![Screenshot](/resources/tablet_screenshot.png 'Tablet Demo')
![Screenshot](/resources/mobile_screenshot.png 'Mobile Demo')

## How to run the project

First, clone this repository [https://github.com/judlup/ResultList_Frontend](https://github.com/judlup/ResultList_Frontend), then you need to install the dependencies: `npm install`

Then, you can run the project: `npm build` and `npm start`

And finally, you can test the project opening a new terminal and running: `npm run test:e2e`

### GitHub Actions

![Screenshot_Github_Actions](/resources/unit_testing_github_actions.png 'Unit testing and Github Actions Demo')

## To Do

- [ ] Add Redux
- [ ] Add Framer Motion
