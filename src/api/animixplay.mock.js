export const ANIMIXPLAY_HOMEPAGE_HTML_RESPONSE = {
  data: `
  <!DOCTYPE html>
  <html lang="en">
    <body>
      <div class="middle">
        <div id="flexcontainer">
          <div class="leftside">
            <div id="featuredcard">
              <div id="featuredbgcont">
                <img
                  id="featuredbg"
                  src="https://cdn.animixplay.to/i/b8d55cb861453e3dc2a0c9c7faa158a6.jpg"
                />
              </div>
              <div id="featuredcont">
                <a href="/anime/42963/Kanojo_Okarishimasu_2nd_Season">
                  <img
                    id="featuredimg"
                    src="https://cdn.animixplay.to/i/b8d55cb861453e3dc2a0c9c7faa158a6.jpg"
                  />
                </a>
                <div id="featuredtitle">
                  <a href="/anime/42963/Kanojo_Okarishimasu_2nd_Season"
                    >Rent-a-Girlfriend 2nd Season</a
                  >
                </div>
                <div id="featuredtext">
                  It's rentin' time! Virgin Kazuya back again embarrassing himself
                  in public, surrounded by devilish ex-girlfriend Nanami Mami,
                  hyper-aggressive provisional girlfriend Sarashina Ruka, and
                  super shy but diligent hardworking younger rental girlfriend,
                  Sakurasawa Sumi… and of course he still simping & stalking
                  Chizuru.
                </div>
                <div id="featuredgenre">
                  <i class="glyphicon glyphicon-tag"></i> Comedy, Cringe, Romance,
                  College, Shounen
                </div>
                <a id="featuredNext" onClick="showFeatured(curFeatured + 1)">
                  <i class="glyphicon glyphicon-chevron-right"></i>
                </a>
                <a id="featuredBack" onClick="showFeatured(curFeatured - 1)">
                  <i class="glyphicon glyphicon-chevron-left"></i>
                </a>
              </div>
            </div>
            <div id="resultplace">
              <ul class="searchresult">
                <li>
                  <a
                    href="/v1/boruto-naruto-next-generations/ep267"
                    title="Boruto: Naruto Next Generations"
                  >
                    <div class="searchimg">
                      <img
                        class="resultimg"
                        alt=""
                        src="https://cdn.animixplay.to/i/2b749c9e3e272f2cf4b4f019ffe6c252.jpg"
                      />
                      <div class="timetext">2022-09-18 09:10:03</div>
                      <div class="rating">578</div>
                    </div>
                    <div class="details">
                      <p class="name">Boruto: Naruto Next Generations</p>
                      <p class="infotext">EP 267/?</p>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="/v1/one-piece/ep1033" title="One Piece">
                    <div class="searchimg">
                      <img
                        class="resultimg"
                        alt=""
                        src="https://cdn.animixplay.to/i/73059c39fee46b7c378a3aa0bdd9b6a2.jpg"
                      />
                      <div class="timetext">2022-09-18 02:05:05</div>
                      <div class="rating">867</div>
                    </div>
                    <div class="details">
                      <p class="name">One Piece</p>
                      <p class="infotext">EP 1033/?</p>
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    href="/v1/kakkou-no-iinazuke/ep21"
                    title="A Couple of Cuckoos"
                  >
                    <div class="searchimg">
                      <img
                        class="resultimg"
                        alt=""
                        src="https://cdn.animixplay.to/i/41adf097b26cf486c64da6ada76adac2.jpg"
                      />
                      <div class="timetext">2022-09-17 17:15:04</div>
                      <div class="rating">0</div>
                    </div>
                    <div class="details">
                      <p class="name">A Couple of Cuckoos</p>
                      <p class="infotext">EP 21/24</p>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="rightside" id="rightsidee">
            <div class="rightcard">
              <div class="flexrightcard" id="seasonfilter">
                <div id="seasonleft">
                  <select id="seasonselect">
                    <option value="Winter">Winter</option>
                    <option value="Spring">Spring</option>
                    <option value="Summer">Summer</option>
                    <option value="Fall">Fall</option>
                  </select>
                </div>
              </div>
            </div>
            <div class="rightcard">
              <div class="subtitleright">Genres</div>
              <div class="flexrightcard" id="genreplace">
                Action, Adventure, Anti-Hero, CGDCT, College, Comedy, Drama,
                Ecchi, Fantasy, Gag Humor, Game, Harem, Historical, Horror, Idol,
                Isekai, Iyashikei, Josei, Kids, Magical Girl, Martial Arts, Mecha,
                Military, Movie, Music, Mythology, Mystery, Otaku, Parody, Police,
                Psychological, Racing, Revenge, Romance, Rural, Samurai, School,
                Sci-Fi, Seinen, Shoujo, Shoujo Ai, Shounen, Shounen Ai, Slice of
                Life, Space, Sports, Super Power, Supernatural, Survival,
                Suspense, Time Travel, Vampire, Work
              </div>
            </div>
          </div>
        </div>
      </div>
      <script type="text/javascript">
        var nowtime = "2022-09-18 11:16:23";
        var envYear = 2022;
        var envSeason = "Summer";
        var curFeatured = 0;
      </script>
    </body>
  </html>
  `,
};

export const ANIMIXPLAY_LATEST_SUBBED_EPISODES_RESPONSE = {
  data: {
    result: [
      {
        title: 'Pop Team Epic Season 2',
        url: '/v1/poputepipikku-2nd-season/ep2',
        picture: 'https://cdn.animixplay.to/min/mal/1237/128067.jpg',
        infotext: 'EP 2/12',
        timetop: '2022-10-08 17:40:03',
        score: 725,
      },
      {
        title: 'Berserk: The Golden Age Arc - Memorial Edition',
        url: '/v1/berserk-ougon-jidai-hen-memorial-edition/ep2',
        picture:
          'https://cdn.animixplay.to/i/1321b74296956451a9be2f8eb05aaa10.jpg',
        infotext: 'EP 2/?',
        timetop: '2022-10-08 17:10:02',
        score: 762,
      },
      {
        title: 'Ani ni Tsukeru Kusuri wa Nai! 5',
        url: '/v1/ani-ni-tsukeru-kusuri-wa-nai-5/ep11',
        picture:
          'https://cdn.animixplay.to/i/b138226a737f622fdd885b8066cb0123.jpg',
        infotext: 'EP 11/12',
        timetop: '2022-10-08 02:15:04',
        score: 707,
      },
    ],
    more: true,
    last: '2022-10-08 02:15:04',
  },
};

export const ANIMIXPLAY_LATEST_DUBBED_EPISODES_INITIAL_RESPONSE = {
  data: {
    result: [
      {
        title: 'Is It Wrong to Try to Pick Up Girls in a Dungeon? IV (Dub)',
        url: '/v1/dungeon-ni-deai-wo-motomeru-no-wa-machigatteiru-darou-ka-iv-shin-shou-meikyuu-hen-dub/ep6',
        picture:
          'https://cdn.animixplay.to/i/9070fe0fedb8b559371dfdbc3dca63eb.jpg',
        infotext: 'EP 6/11',
        timetop: '2022-11-03 17:45:09',
        score: 768,
      },
      {
        title: 'Call of the Night (Dub)',
        url: '/v1/yofukashi-no-uta-dub/ep9',
        picture:
          'https://cdn.animixplay.to/i/c3668266da90c7b66bc52152593e50bb.jpg',
        infotext: 'EP 9/13',
        timetop: '2022-11-03 17:45:07',
        score: 809,
      },
      {
        title: 'Engage Kiss (Dub)',
        url: '/v1/engage-kiss-dub/ep11',
        picture:
          'https://cdn.animixplay.to/i/d4c1969bc419f6a1a3a092eb5e80be95.jpg',
        infotext: 'EP 11/13',
        timetop: '2022-10-29 23:35:05',
        score: 690,
      },
    ],
    more: true,
    last: '2022-10-29 23:35:05',
  },
};

export const ANIMIXPLAY_LATEST_DUBBED_EPISODES_LOAD_MORE_RESPONSE = {
  data: {
    result: [
      {
        title: "I'm the Villainess, So I'm Taming the Final Boss (Dub)",
        url: '/v1/akuyaku-reijou-nanode-last-boss-wo-kattemimashita-dub/ep3',
        picture:
          'https://cdn.animixplay.to/i/e6b8df94c496957dea85857204f240de.jpg',
        infotext: 'EP 3/?',
        timetop: '2022-10-29 23:30:03',
        score: 748,
      },
      {
        title: 'Blue Lock (Dub)',
        url: '/v1/blue-lock-dub/ep2',
        picture:
          'https://cdn.animixplay.to/i/55b1e8116c273ed5f56aaf06279cfb6d.jpg',
        infotext: 'EP 2/24',
        timetop: '2022-10-29 23:29:07',
        score: 827,
      },
      {
        title: "Natsume's Book of Friends (Dub)",
        url: '/v1/natsume-yuujinchou-dub/ep13',
        picture:
          'https://cdn.animixplay.to/i/5f109a1c50e3251d3414c1ee0a2c93b2.jpg',
        infotext: 'EP 13/13',
        timetop: '2022-10-17 02:10:06',
        score: 832,
      },
    ],
    more: true,
    last: '2022-10-17 02:10:06',
  },
};
