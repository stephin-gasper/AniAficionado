# AniAficionado

A simple app for all anime aficionado's. It's an unofficial app for [animixplay](https://animixplay.to/) to stream your favorite anime.

The project is still in its infancy and will be adding further features later on, you can check the roadmap below for future plans.

## Note

**Update(25th Nov, 2023)**
Animixplay has been shutdown (since 21st Dec, 2022) so had dropped working on active development on this project. Will be pushing all the work done till now (which are incomplete in implementation and some missing/incomplete test files) and will be picking up the project when I get free time and find suitable alternative website.

## Features roadmap

- [ ] Home screen - Check latest episodes of recent animes
  - [ ] Implement functional base UI
  - [ ] Implement design
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

<img src="https://i.postimg.cc/26Kgrrkn/Screenshot-1700911787.png" />

<img src="https://i.postimg.cc/g2KzdXfR/Screenshot-1700912747.png" />

<img src="https://pouch.jumpshare.com/preview/dHRtONIUvWSTWjyKgm9BZjCrZ6pU2cq-nFZvP4rzx_9VmjGqn_4nKq7hX90ljOy2rXUKTDRTVrLrqtAOksnfbMrzgr2RKl80RwHp62zVClI" />

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

- Setup react native by following this link: https://reactnative.dev/docs/environment-setup
- Run following commands in terminal - 'yarn start' and then 'yarn android' in another terminal.
