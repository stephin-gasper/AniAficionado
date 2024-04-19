# AniAficionado

A simple app for all anime aficionado's. It's an unofficial app for [animixplay](https://animixplay.to/) to stream your favorite anime.

The project is still in its infancy and will be adding further features later on, you can check the roadmap below for future plans.

## Note

**Update(25th Nov, 2023)**
Animixplay has been shutdown (since 21st Dec, 2022) so had dropped working on active development on this project. Will be pushing all the work done till now (which are incomplete in implementation and some missing/incomplete test files) and will be picking up the project when I get free time and find suitable alternative website.

## Features roadmap

- [x] Home screen - Check latest episodes of recent animes
  - [x] Implement functional base UI
  - [x] Implement design
- [ ] Anime details screen - Get details for the selected anime
  - [ ] Implement functional base UI
  - [ ] Implement design
- [ ] Episode list - Play episodes and show list of all episodes
  - [ ] Implement functional base UI
  - [ ] Implement design
- [ ] Anime search - Search for anime's ( series or movies )
  - [ ] Implement functional base UI
  - [ ] Implement design
- [ ] Release schedule - Get all the animes releasing in the week for current anime season
  - [ ] Implement functional base UI
  - [ ] Implement design
- [ ] Seasons - Get anime list releases based on season like MAL (MyAnimeList).
  - [ ] Implement functional base UI
  - [ ] Implement design
- [ ] My list - Get all anime added to your list in MAL
  - [ ] Implement functional base UI
  - [ ] Implement design

### Possible features

- [ ] Create iOS app

## Screenshots

### Home screen

![Screen 1](https://i.ibb.co/gRg0qF5/home-1.png)

![Screen 2](https://i.ibb.co/CvMdxyT/home-2.png)

### Demo

![Demo](/demo.webp)

## Tech Stack

- [React native](https://github.com/facebook/react-native)
- [React navigation](https://github.com/react-navigation/react-navigation)
- [Style components](https://github.com/styled-components/styled-components)
- [Jest](https://github.com/facebook/jest)
- [React native testing library](https://github.com/callstack/react-native-testing-library)
- [Axios](https://github.com/axios/axios)
- [ESlint](https://github.com/eslint/eslint) (Airbnb style guide)

### API details

- [Animixplay api](https://animixplay.to/)

#### API checklist

- [ ] [Jikan api](https://jikan.moe/) - For getting publically available details from MAL
- [ ] [MALScrapper](https://github.com/Kylart/MalScraper) - For getting user related details from MAL

### Tech stack checklist

- [ ] Integrate [Jotai](https://github.com/pmndrs/jotai)
- [ ] Integrate [TypeScript](https://github.com/microsoft/TypeScript)

## How to run the app

- Setup react native by following this link: <https://reactnative.dev/docs/environment-setup>
- Run following commands in terminal - 'yarn start' and then 'yarn android' in another terminal.

## Using mock data to check app demo

- Download [Mockoon](https://mockoon.com/)
- Create json files after coping the json from links
  - [Jikan.json](https://www.npoint.io/docs/3c3e1039d3a4237d48ad)
  - [Animiplay.json](https://www.npoint.io/docs/9b45d342305e7631ba88)
- Open mentioned json files after clicking on File -> open environment
- Point base url for animixplay in api/animixplay.js as <http://10.0.2.2:3003> and for jikan in api/jikan as <http://10.0.2.2:3002/v4>
