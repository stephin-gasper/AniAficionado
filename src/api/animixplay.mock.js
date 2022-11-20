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

export const ANIMIXPLAY_ALL_RECENT_EPISODES_INITIAL_RESPONSE = {
  data: {
    result: [
      {
        title: 'The First Immortal of the Seven Realms',
        url: '/v1/qi-jie-diyi-xian/ep77',
        picture:
          'https://cdn.animixplay.to/i/d52284c3c93f00524d11443a30a9063a.jpg',
        infotext: 'ONA ',
        timetop: '2022-11-04 16:16:05',
        score: 604,
      },
      {
        title: 'Qi Jie Diyi Xian',
        url: '/v11/XhaDbdfQ8H6E2BBE7/ep77',
        picture:
          'https://cdn.animixplay.to/i/6913c2c934e333a6d67d1d7cb4325f59.jpg',
        infotext: '2022 ONA',
        timetop: '2022-11-04 16:15:22',
        score: 604,
      },
      {
        title: 'Wu Shang Shen Di 2nd Season',
        url: '/v1/wu-shang-shen-di-2nd-season/ep155',
        picture:
          'https://cdn.animixplay.to/i/3ba88a4a5c1eed9733f12794e7032559.jpg',
        infotext: 'ONA ',
        timetop: '2022-11-04 05:00:06',
        score: 693,
      },
    ],
    more: true,
    last: '2022-11-04 05:00:06',
  },
};

export const ANIMIXPLAY_ALL_RECENT_EPISODES_LOAD_MORE_RESPONSE = {
  data: {
    result: [
      {
        title: 'Wan Jie Shen Zhu',
        url: '/v1/wan-jie-shen-zhu/ep281',
        picture:
          'https://cdn.animixplay.to/i/9df62b0406a56edc357b94594d1aceeb.jpg',
        infotext: 'ONA ',
        timetop: '2022-11-04 05:00:04',
        score: 681,
      },
      {
        title: 'Sweet Bite Marks',
        url: '/v1/tian-mei-de-yao-hen/ep11',
        picture:
          'https://cdn.animixplay.to/i/f3ac7f3929c20fc7143ff8ec8832e2c7.jpg',
        infotext: 'ONA ',
        timetop: '2022-11-04 04:50:03',
        score: 641,
      },
      {
        title: 'Bibliophile Princess',
        url: '/v1/mushikaburi-hime/ep5',
        picture: 'https://cdn.animixplay.to/min/mal/1256/128714.jpg',
        infotext: 'Fall 2022 Anime ',
        timetop: '2022-11-03 14:45:04',
        score: 723,
      },
    ],
    more: true,
    last: '2022-11-03 14:45:04',
  },
};

export const ANIMIXPLAY_LATEST_MOVIES_INITIAL_RESPONSE = {
  data: {
    result: [
      {
        title: 'Demon Slayer -Kimetsu no Yaiba- The Movie: Mugen Train',
        url: '/v1/kimetsu-no-yaiba-movie-mugen-ressha-hen-camrip',
        picture: 'https://cdn.animixplay.to/min/mal/1704/106947.jpg',
        infotext: ' Movie',
        score: 864,
      },
      {
        title: "My Hero Academia: World Heroes' Mission",
        url: '/v1/boku-no-hero-academia-the-movie-3-world-heroes-mission',
        picture: 'https://cdn.animixplay.to/min/mal/1049/115605.jpg',
        infotext: 'Movie ',
        score: 757,
      },
      {
        title: 'My Hero Academia: Heroes Rising',
        url: '/v1/boku-no-hero-academia-the-movie-2-heroesrising',
        picture:
          'https://cdn.animixplay.to/i/f8e5c8123212d73cf54a29648d59b022.jpg',
        infotext: '2019 Movies ',
        score: 800,
      },
    ],
    more: true,
    last: 519415,
  },
};

export const ANIMIXPLAY_LATEST_MOVIES_LOAD_MORE_RESPONSE = {
  data: {
    result: [
      {
        title: 'Demon Slayer: Kimetsu no Yaiba',
        url: '/v1/kimetsu-no-yaiba-recap-movie-2-mt-natagumo-arc',
        picture:
          'https://cdn.animixplay.to/i/4b93286be725dff5bca322bd8e917bd5.jpg',
        infotext: 'Movie ',
        score: 852,
      },
      {
        title: 'My Hero Academia: Two Heroes',
        url: '/v1/boku-no-hero-academia-the-movie-futari-no-hero',
        picture:
          'https://cdn.animixplay.to/i/772058d8e574c002682d600796711267.jpg',
        infotext: 'Movies ',
        score: 757,
      },
      {
        title:
          "KonoSuba: God's Blessing on This Wonderful World! - Legend of Crimson",
        url: '/v1/kono-subarashii-sekai-ni-shukufuku-wo-kurenai-densetsu',
        picture:
          'https://cdn.animixplay.to/i/1c65d845f8323a17034b1f66ef1b0e92.jpg',
        infotext: 'Movies ',
        score: 846,
      },
    ],
    more: true,
    last: 344603,
  },
};

export const ANIMIXPLAY_LATEST_POPULAR_EPISODES_INITIAL_RESPONSE = {
  data: {
    result: [
      {
        title: 'Spy x Family Part 2',
        url: '/anime/50602',
        picture:
          'https://cdn.animixplay.to/i/a21cc23f574ea628e8908eaef9d8dacc.jpg',
        timetop: '',
        infotext: '<i class="glyphicon glyphicon-stats"></i> 848,842',
        score: 880,
      },
      {
        title: 'Blue Lock',
        url: '/anime/49596',
        picture:
          'https://cdn.animixplay.to/i/55b1e8116c273ed5f56aaf06279cfb6d.jpg',
        timetop:
          '<div style="color: #42d042;"><i class="glyphicon glyphicon-menu-up"></i> 2</div>',
        infotext: '<i class="glyphicon glyphicon-stats"></i> 438,452',
        score: 0,
      },
      {
        title: 'Mob Psycho 100 III',
        url: '/anime/50172',
        picture:
          'https://cdn.animixplay.to/i/d745de809e9219112a3d2dd36fada30f.jpg',
        timetop:
          '<div style="color: #d05353;"><i class="glyphicon glyphicon-menu-down"></i> 1</div>',
        infotext: '<i class="glyphicon glyphicon-stats"></i> 377,048',
        score: 0,
      },
    ],
  },
};

export const ANIMIXPLAY_LATEST_POPULAR_EPISODES_LOAD_MORE_RESPONSE = {
  data: {
    result: [
      {
        title: 'Chainsaw Man',
        url: '/anime/44511',
        picture: 'https://cdn.animixplay.to/min/mal/1806/126216.jpg',
        timetop: '',
        infotext: '<i class="glyphicon glyphicon-stats"></i> 2,143,445',
        score: 891,
      },
      {
        title: 'Fairy Tail',
        url: '/anime/6702',
        picture:
          'https://cdn.animixplay.to/i/29d2ea476a899ab2ccc4a0dc2c92a2a2.jpg',
        timetop:
          '<div style="color: #42d042;"><i class="glyphicon glyphicon-menu-up"></i> 1</div>',
        infotext: '<i class="glyphicon glyphicon-stats"></i> 33,229',
        score: 758,
      },
      {
        title: 'The Quintessential Quintuplets 2',
        url: '/anime/39783',
        picture:
          'https://cdn.animixplay.to/i/40d7d4f647937993102bd4715493c7c4.jpg',
        timetop:
          '<div style="color: #d05353;"><i class="glyphicon glyphicon-menu-down"></i> 6</div>',
        infotext: '<i class="glyphicon glyphicon-stats"></i> 33,069',
        score: 810,
      },
    ],
  },
};

export const ANIMIXPLAY_EPISODE_HTML_RESPONSE = {
  data: `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <script type="text/javascript" src="/assets/v1.min.js?m16" defer></script>
    <script
      type="text/javascript"
      src="/assets/common.min.js?m10"
      defer
    ></script>
  </head>
  <body>
    <div class="playerpage">
      <div id="iframecontainer">
        <iframe
          id="iframeplayer"
          allowfullscreen="true"
          scrolling="no"
          src="about:blank"
        ></iframe>
      </div>
      <div id="lowerplayerpage">
        <div id="aligncenter">
          <span class="animetitle">Boruto: Naruto Next Generations</span>
        </div>
        <div id="epslistplace" style="display: none">
          {"eptotal":275,"0":"//gogohd.net/streaming.php?id=OTc2MzI=&title=Boruto%3A+Naruto+Next+Generations+Episode+1","1":"//gogohd.net/streaming.php?id=OTc3MzA=&title=Boruto%3A+Naruto+Next+Generations+Episode+2","2":"//gogohd.net/streaming.php?id=OTc4MjA=&title=Boruto%3A+Naruto+Next+Generations+Episode+3","3":"//gogohd.net/streaming.php?id=OTc5MDk=&title=Boruto%3A+Naruto+Next+Generations+Episode+4","4":"//gogohd.net/streaming.php?id=OTgwMDQ=&title=Boruto%3A+Naruto+Next+Generations+Episode+5","5":"//gogohd.net/streaming.php?id=OTgxMDg=&title=Boruto%3A+Naruto+Next+Generations+Episode+6","6":"//gogohd.net/streaming.php?id=OTgyMDk=&title=Boruto%3A+Naruto+Next+Generations+Episode+7","7":"//gogohd.net/streaming.php?id=OTgzMTc=&title=Boruto%3A+Naruto+Next+Generations+Episode+8","8":"//gogohd.net/streaming.php?id=OTg0NjQ=&title=Boruto%3A+Naruto+Next+Generations+Episode+9","9":"//gogohd.net/streaming.php?id=OTg1NjU=&title=Boruto%3A+Naruto+Next+Generations+Episode+10","10":"//gogohd.net/streaming.php?id=OTg2ODI=&title=Boruto%3A+Naruto+Next+Generations+Episode+11","11":"//gogohd.net/streaming.php?id=OTg4Nzg=&title=Boruto%3A+Naruto+Next+Generations+Episode+12","12":"//gogohd.net/streaming.php?id=OTkwODE=&title=Boruto%3A+Naruto+Next+Generations+Episode+13","13":"//gogohd.net/streaming.php?id=OTkyMTU=&title=Boruto%3A+Naruto+Next+Generations+Episode+14","14":"//gogohd.net/streaming.php?id=OTk0MjY=&title=Boruto%3A+Naruto+Next+Generations+Episode+15","15":"//gogohd.net/streaming.php?id=OTk1MjE=&title=Boruto%3A+Naruto+Next+Generations+Episode+16","16":"//gogohd.net/streaming.php?id=OTk2NDQ=&title=Boruto%3A+Naruto+Next+Generations+Episode+17","17":"//gogohd.net/streaming.php?id=OTk4MzY=&title=Boruto%3A+Naruto+Next+Generations+Episode+18","18":"//gogohd.net/streaming.php?id=MTAwMTA4&title=Boruto%3A+Naruto+Next+Generations+Episode+19","19":"//gogohd.net/streaming.php?id=MTAwMjM2&title=Boruto%3A+Naruto+Next+Generations+Episode+20","20":"//gogohd.net/streaming.php?id=MTAwNTU4&title=Boruto%3A+Naruto+Next+Generations+Episode+21","21":"//gogohd.net/streaming.php?id=MTAwNjY2&title=Boruto%3A+Naruto+Next+Generations+Episode+22","22":"//gogohd.net/streaming.php?id=MTAwNzgw&title=Boruto%3A+Naruto+Next+Generations+Episode+23","23":"//gogohd.net/streaming.php?id=MTAwOTEx&title=Boruto%3A+Naruto+Next+Generations+Episode+24","24":"//gogohd.net/streaming.php?id=MTAxMDM3&title=Boruto%3A+Naruto+Next+Generations+Episode+25","25":"//gogohd.net/streaming.php?id=MTAxMTUw&title=Boruto%3A+Naruto+Next+Generations+Episode+26","26":"//gogohd.net/streaming.php?id=MTAxMjg4&title=Boruto%3A+Naruto+Next+Generations+Episode+27","27":"//gogohd.net/streaming.php?id=MTAxMzk2&title=Boruto%3A+Naruto+Next+Generations+Episode+28","28":"//gogohd.net/streaming.php?id=MTAxNTMz&title=Boruto%3A+Naruto+Next+Generations+Episode+29","29":"//gogohd.net/streaming.php?id=MTAxNzQz&title=Boruto%3A+Naruto+Next+Generations+Episode+30","30":"//gogohd.net/streaming.php?id=MTAxODU1&title=Boruto%3A+Naruto+Next+Generations+Episode+31","31":"//gogohd.net/streaming.php?id=MTAyMTUw&title=Boruto%3A+Naruto+Next+Generations+Episode+32","32":"//gogohd.net/streaming.php?id=MTAyMjg1&title=Boruto%3A+Naruto+Next+Generations+Episode+33","33":"//gogohd.net/streaming.php?id=MTAyMzc5&title=Boruto%3A+Naruto+Next+Generations+Episode+34","34":"//gogohd.net/streaming.php?id=MTAyNDgw&title=Boruto%3A+Naruto+Next+Generations+Episode+35","35":"//gogohd.net/streaming.php?id=MTAyNzkz&title=Boruto%3A+Naruto+Next+Generations+Episode+36","36":"//gogohd.net/streaming.php?id=MTAyOTM1&title=Boruto%3A+Naruto+Next+Generations+Episode+37","37":"//gogohd.net/streaming.php?id=MTAzMDQy&title=Boruto%3A+Naruto+Next+Generations+Episode+38","38":"//gogohd.net/streaming.php?id=MTAzMTI3&title=Boruto%3A+Naruto+Next+Generations+Episode+39","39":"//gogohd.net/streaming.php?id=MTAzMzQy&title=Boruto%3A+Naruto+Next+Generations+Episode+40","40":"//gogohd.net/streaming.php?id=MTAzNDI4&title=Boruto%3A+Naruto+Next+Generations+Episode+41","41":"//gogohd.net/streaming.php?id=MTAzNTE2&title=Boruto%3A+Naruto+Next+Generations+Episode+42","42":"//gogohd.net/streaming.php?id=MTAzNjEz&title=Boruto%3A+Naruto+Next+Generations+Episode+43","43":"//gogohd.net/streaming.php?id=MTAzNzgy&title=Boruto%3A+Naruto+Next+Generations+Episode+44","44":"//gogohd.net/streaming.php?id=MTAzODg2&title=Boruto%3A+Naruto+Next+Generations+Episode+45","45":"//gogohd.net/streaming.php?id=MTAzOTgx&title=Boruto%3A+Naruto+Next+Generations+Episode+46","46":"//gogohd.net/streaming.php?id=MTA0MTMx&title=Boruto%3A+Naruto+Next+Generations+Episode+47","47":"//gogohd.net/streaming.php?id=MTA0MjQw&title=Boruto%3A+Naruto+Next+Generations+Episode+48","48":"//gogohd.net/streaming.php?id=MTA0MzU5&title=Boruto%3A+Naruto+Next+Generations+Episode+49","49":"//gogohd.net/streaming.php?id=MTA0NTA5&title=Boruto%3A+Naruto+Next+Generations+Episode+50","50":"//gogohd.net/streaming.php?id=MTA0NjQx&title=Boruto%3A+Naruto+Next+Generations+Episode+51","51":"//gogohd.net/streaming.php?id=MTA0NzY0&title=Boruto%3A+Naruto+Next+Generations+Episode+52","52":"//gogohd.net/streaming.php?id=MTA0OTIw&title=Boruto%3A+Naruto+Next+Generations+Episode+53","53":"//gogohd.net/streaming.php?id=MTA1MDc5&title=Boruto%3A+Naruto+Next+Generations+Episode+54","54":"//gogohd.net/streaming.php?id=MTA1MTg3&title=Boruto%3A+Naruto+Next+Generations+Episode+55","55":"//gogohd.net/streaming.php?id=MTA1MzE2&title=Boruto%3A+Naruto+Next+Generations+Episode+56","56":"//gogohd.net/streaming.php?id=MTA1NDg1&title=Boruto%3A+Naruto+Next+Generations+Episode+57","57":"//gogohd.net/streaming.php?id=MTA1NTk3&title=Boruto%3A+Naruto+Next+Generations+Episode+58","58":"//gogohd.net/streaming.php?id=MTA1NzE1&title=Boruto%3A+Naruto+Next+Generations+Episode+59","59":"//gogohd.net/streaming.php?id=MTA1ODMx&title=Boruto%3A+Naruto+Next+Generations+Episode+60","60":"//gogohd.net/streaming.php?id=MTA1OTQx&title=Boruto%3A+Naruto+Next+Generations+Episode+61","61":"//gogohd.net/streaming.php?id=MTA2MTAz&title=Boruto%3A+Naruto+Next+Generations+Episode+62","62":"//gogohd.net/streaming.php?id=MTA2MzEy&title=Boruto%3A+Naruto+Next+Generations+Episode+63","63":"//gogohd.net/streaming.php?id=MTA2NDMw&title=Boruto%3A+Naruto+Next+Generations+Episode+64","64":"//gogohd.net/streaming.php?id=MTA2NjQ0&title=Boruto%3A+Naruto+Next+Generations+Episode+65","65":"//gogohd.net/streaming.php?id=MTA2NzYy&title=Boruto%3A+Naruto+Next+Generations+Episode+66","66":"//gogohd.net/streaming.php?id=MTA3MDQ2&title=Boruto%3A+Naruto+Next+Generations+Episode+67","67":"//gogohd.net/streaming.php?id=MTA3Nzc0&title=Boruto%3A+Naruto+Next+Generations+Episode+68","68":"//gogohd.net/streaming.php?id=MTA4NjM4&title=Boruto%3A+Naruto+Next+Generations+Episode+69","69":"//gogohd.net/streaming.php?id=MTA5NTE5&title=Boruto%3A+Naruto+Next+Generations+Episode+70","70":"//gogohd.net/streaming.php?id=MTA5ODY4&title=Boruto%3A+Naruto+Next+Generations+Episode+71","71":"//gogohd.net/streaming.php?id=MTA5OTcz&title=Boruto%3A+Naruto+Next+Generations+Episode+72","72":"//gogohd.net/streaming.php?id=MTEwMDky&title=Boruto%3A+Naruto+Next+Generations+Episode+73","73":"//gogohd.net/streaming.php?id=MTEwMTk4&title=Boruto%3A+Naruto+Next+Generations+Episode+74","74":"//gogohd.net/streaming.php?id=MTEwMTk5&title=Boruto%3A+Naruto+Next+Generations+Episode+75","75":"//gogohd.net/streaming.php?id=MTEwNDY5&title=Boruto%3A+Naruto+Next+Generations+Episode+76","76":"//gogohd.net/streaming.php?id=MTEwNTg4&title=Boruto%3A+Naruto+Next+Generations+Episode+77","77":"//gogohd.net/streaming.php?id=MTEwNjk4&title=Boruto%3A+Naruto+Next+Generations+Episode+78","78":"//gogohd.net/streaming.php?id=MTEwODQ1&title=Boruto%3A+Naruto+Next+Generations+Episode+79","79":"//gogohd.net/streaming.php?id=MTEwOTY4&title=Boruto%3A+Naruto+Next+Generations+Episode+80","80":"//gogohd.net/streaming.php?id=MTExMDkw&title=Boruto%3A+Naruto+Next+Generations+Episode+81","81":"//gogohd.net/streaming.php?id=MTExMjAy&title=Boruto%3A+Naruto+Next+Generations+Episode+82","82":"//gogohd.net/streaming.php?id=MTExMzAx&title=Boruto%3A+Naruto+Next+Generations+Episode+83","83":"//gogohd.net/streaming.php?id=MTExNDA2&title=Boruto%3A+Naruto+Next+Generations+Episode+84","84":"//gogohd.net/streaming.php?id=MTExNTEz&title=Boruto%3A+Naruto+Next+Generations+Episode+85","85":"//gogohd.net/streaming.php?id=MTExNjcz&title=Boruto%3A+Naruto+Next+Generations+Episode+86","86":"//gogohd.net/streaming.php?id=MTEyMDEz&title=Boruto%3A+Naruto+Next+Generations+Episode+87","87":"//gogohd.net/streaming.php?id=MTEyMjg4&title=Boruto%3A+Naruto+Next+Generations+Episode+88","88":"//gogohd.net/streaming.php?id=MTEyNDgz&title=Boruto%3A+Naruto+Next+Generations+Episode+89","89":"//gogohd.net/streaming.php?id=MTEyNjQz&title=Boruto%3A+Naruto+Next+Generations+Episode+90","90":"//gogohd.net/streaming.php?id=MTEyOTAx&title=Boruto%3A+Naruto+Next+Generations+Episode+91","91":"//gogohd.net/streaming.php?id=MTEzMTc2&title=Boruto%3A+Naruto+Next+Generations+episode+92&typesub=SUB","92":"//gogohd.net/streaming.php?id=MTEzMzQy&title=Boruto%3A+Naruto+Next+Generations+episode+93&typesub=SUB","93":"//gogohd.net/streaming.php?id=MTEzNjg0&title=Boruto%3A+Naruto+Next+Generations+episode+94&typesub=SUB","94":"//gogohd.net/streaming.php?id=MTEzOTgy&title=Boruto%3A+Naruto+Next+Generations+episode+95&typesub=SUB","95":"//gogohd.net/streaming.php?id=MTE0NTI4&title=Boruto%3A+Naruto+Next+Generations+episode+96&typesub=SUB","96":"//gogohd.net/streaming.php?id=MTE1MDc4&title=Boruto%3A+Naruto+Next+Generations+episode+97&typesub=SUB","97":"//gogohd.net/streaming.php?id=MTE1Mzk1&title=Boruto%3A+Naruto+Next+Generations+episode+98&typesub=SUB","98":"//gogohd.net/streaming.php?id=MTE1ODA3&title=Boruto%3A+Naruto+Next+Generations+episode+99&typesub=SUB","99":"//gogohd.net/streaming.php?id=MTE2MTkz&title=Boruto%3A+Naruto+Next+Generations+episode+100&typesub=SUB","100":"//gogohd.net/streaming.php?id=MTE2ODQ2&title=Boruto%3A+Naruto+Next+Generations+episode+101&typesub=SUB","101":"//gogohd.net/streaming.php?id=MTE3NDg1&title=Boruto%3A+Naruto+Next+Generations+episode+102&typesub=SUB","102":"//gogohd.net/streaming.php?id=MTE4MzEx&title=Boruto%3A+Naruto+Next+Generations+episode+103&typesub=SUB","103":"//gogohd.net/streaming.php?id=MTE4ODMw&title=Boruto%3A+Naruto+Next+Generations+episode+104&typesub=SUB","104":"//gogohd.net/streaming.php?id=MTE5Mjg5&title=Boruto%3A+Naruto+Next+Generations+episode+105&typesub=SUB","105":"//gogohd.net/streaming.php?id=MTE5ODQx&title=Boruto%3A+Naruto+Next+Generations+episode+106&typesub=SUB","106":"//gogohd.net/streaming.php?id=MTIwMzg5&title=Boruto%3A+Naruto+Next+Generations+episode+107&typesub=SUB","107":"//gogohd.net/streaming.php?id=MTIxMTA0&title=Boruto%3A+Naruto+Next+Generations+episode+108&typesub=SUB","108":"//gogohd.net/streaming.php?id=MTIxNzE5&title=Boruto%3A+Naruto+Next+Generations+episode+109&typesub=SUB","109":"//gogohd.net/streaming.php?id=MTIyMjE4&title=Boruto%3A+Naruto+Next+Generations+episode+110&typesub=SUB","110":"//gogohd.net/streaming.php?id=MTIyNjQ2&title=Boruto%3A+Naruto+Next+Generations+episode+111&typesub=SUB","111":"//gogohd.net/streaming.php?id=MTIzMTI2&title=Boruto%3A+Naruto+Next+Generations+episode+112&typesub=SUB","112":"//gogohd.net/streaming.php?id=MTIzNzYx&title=Boruto%3A+Naruto+Next+Generations+episode+113&typesub=SUB","113":"//gogohd.net/streaming.php?id=MTI0MDcx&title=Boruto%3A+Naruto+Next+Generations+episode+114&typesub=SUB","114":"//gogohd.net/streaming.php?id=MTI0NTE1&title=Boruto%3A+Naruto+Next+Generations+episode+115&typesub=SUB","115":"//gogohd.net/streaming.php?id=MTI0OTQ3&title=Boruto%3A+Naruto+Next+Generations+episode+116&typesub=SUB","116":"//gogohd.net/streaming.php?id=MTI1Mjcz&title=Boruto%3A+Naruto+Next+Generations+episode+117&typesub=SUB","117":"//gogohd.net/streaming.php?id=MTI1NjAx&title=Boruto%3A+Naruto+Next+Generations+episode+118&typesub=SUB","118":"//gogohd.net/streaming.php?id=MTI2MTE3&title=Boruto%3A+Naruto+Next+Generations+episode+119&typesub=SUB","119":"//gogohd.net/streaming.php?id=MTI2NTM3&title=Boruto%3A+Naruto+Next+Generations+episode+120&typesub=SUB","120":"//gogohd.net/streaming.php?id=MTI3MTk4&title=Boruto%3A+Naruto+Next+Generations+episode+121&typesub=SUB","121":"//gogohd.net/streaming.php?id=MTI3ODI1&title=Boruto%3A+Naruto+Next+Generations+episode+122&typesub=SUB","122":"//gogohd.net/streaming.php?id=MTI4MjY3&title=Boruto%3A+Naruto+Next+Generations+episode+123&typesub=SUB","123":"//gogohd.net/streaming.php?id=MTI4Nzg3&title=Boruto%3A+Naruto+Next+Generations+episode+124&typesub=SUB","124":"//gogohd.net/streaming.php?id=MTI5NjA0&title=Boruto%3A+Naruto+Next+Generations+episode+125&typesub=SUB","125":"//gogohd.net/streaming.php?id=MTMwMDk3&title=Boruto%3A+Naruto+Next+Generations+episode+126&typesub=SUB","126":"//gogohd.net/streaming.php?id=MTMwNzYz&title=Boruto%3A+Naruto+Next+Generations+episode+127&typesub=SUB","127":"//gogohd.net/streaming.php?id=MTMxNDk1&title=Boruto%3A+Naruto+Next+Generations+episode+128&typesub=SUB","128":"//gogohd.net/streaming.php?id=MTMyMDMy&title=Boruto%3A+Naruto+Next+Generations+episode+129&typesub=SUB","129":"//gogohd.net/streaming.php?id=MTMyNDkx&title=Boruto%3A+Naruto+Next+Generations+episode+130&typesub=SUB","130":"//gogohd.net/streaming.php?id=MTMyOTU2&title=Boruto%3A+Naruto+Next+Generations+episode+131&typesub=SUB","131":"//gogohd.net/streaming.php?id=MTMzNDU3&title=Boruto%3A+Naruto+Next+Generations+episode+132&typesub=SUB","132":"//gogohd.net/streaming.php?id=MTM0MjM1&title=Boruto%3A+Naruto+Next+Generations+episode+133&typesub=SUB","133":"//gogohd.net/streaming.php?id=MTM0NDQ2&title=Boruto%3A+Naruto+Next+Generations+episode+134&typesub=SUB","134":"//gogohd.net/streaming.php?id=MTM0NjU3&title=Boruto%3A+Naruto+Next+Generations+episode+135&typesub=SUB","135":"//gogohd.net/streaming.php?id=MTM0ODEx&title=Boruto%3A+Naruto+Next+Generations+episode+136&typesub=SUB","136":"//gogohd.net/streaming.php?id=MTM1MDE3&title=Boruto%3A+Naruto+Next+Generations+episode+137&typesub=SUB","137":"//gogohd.net/streaming.php?id=MTM1Mjcw&title=Boruto%3A+Naruto+Next+Generations+episode+138&typesub=SUB","138":"//gogohd.net/streaming.php?id=MTM1NTk5&title=Boruto%3A+Naruto+Next+Generations+episode+139&typesub=SUB","139":"//gogohd.net/streaming.php?id=MTM1ODAx&title=Boruto%3A+Naruto+Next+Generations+episode+140&typesub=SUB","140":"//gogohd.net/streaming.php?id=MTM2MDEx&title=Boruto%3A+Naruto+Next+Generations+episode+141&typesub=SUB","141":"//gogohd.net/streaming.php?id=MTM2MTYw&title=Boruto%3A+Naruto+Next+Generations+episode+142&typesub=SUB","142":"//gogohd.net/streaming.php?id=MTM2MzI5&title=Boruto%3A+Naruto+Next+Generations+episode+143&typesub=SUB","143":"//gogohd.net/streaming.php?id=MTM2NjUx&title=Boruto%3A+Naruto+Next+Generations+episode+144&typesub=SUB","144":"//gogohd.net/streaming.php?id=MTM2OTAx&title=Boruto%3A+Naruto+Next+Generations+episode+145&typesub=SUB","145":"//gogohd.net/streaming.php?id=MTM3MTQ3&title=Boruto%3A+Naruto+Next+Generations+episode+146&typesub=SUB","146":"//gogohd.net/streaming.php?id=MTM3MzM3&title=Boruto%3A+Naruto+Next+Generations+episode+147&typesub=SUB","147":"//gogohd.net/streaming.php?id=MTM3NjA0&title=Boruto%3A+Naruto+Next+Generations+episode+148&typesub=SUB","148":"//gogohd.net/streaming.php?id=MTM3ODY0&title=Boruto%3A+Naruto+Next+Generations+episode+149&typesub=SUB","149":"//gogohd.net/streaming.php?id=MTM4MDU4&title=Boruto%3A+Naruto+Next+Generations+episode+150&typesub=SUB","150":"//gogohd.net/streaming.php?id=MTM4NDQy&title=Boruto%3A+Naruto+Next+Generations+episode+151&typesub=SUB","151":"//gogohd.net/streaming.php?id=MTM4Njg4&title=Boruto%3A+Naruto+Next+Generations+episode+152&typesub=SUB","152":"//gogohd.net/streaming.php?id=MTM4ODg0&title=Boruto%3A+Naruto+Next+Generations+episode+153&typesub=SUB","153":"//gogohd.net/streaming.php?id=MTM4OTc2&title=Boruto%3A+Naruto+Next+Generations+episode+154&typesub=SUB","154":"//gogohd.net/streaming.php?id=MTQxOTg0&title=Boruto%3A+Naruto+Next+Generations+Episode+155","155":"//gogohd.net/streaming.php?id=MTQyMTky&title=Boruto%3A+Naruto+Next+Generations+Episode+156","156":"//gogohd.net/streaming.php?id=MTQyNDg4&title=Boruto%3A+Naruto+Next+Generations+Episode+157","157":"//gogohd.net/streaming.php?id=MTQyNzM4&title=Boruto%3A+Naruto+Next+Generations+Episode+158","158":"//gogohd.net/streaming.php?id=MTQzMTQ3&title=Boruto%3A+Naruto+Next+Generations+Episode+159","159":"//gogohd.net/streaming.php?id=MTQzNDYw&title=Boruto%3A+Naruto+Next+Generations+Episode+160","160":"//gogohd.net/streaming.php?id=MTQzNzA2&title=Boruto%3A+Naruto+Next+Generations+Episode+161","161":"//gogohd.net/streaming.php?id=MTQ0MTEz&title=Boruto%3A+Naruto+Next+Generations+Episode+162","162":"//gogohd.net/streaming.php?id=MTQ0NTA0&title=Boruto%3A+Naruto+Next+Generations+Episode+163","163":"//gogohd.net/streaming.php?id=MTQ0ODM4&title=Boruto%3A+Naruto+Next+Generations+Episode+164","164":"//gogohd.net/streaming.php?id=MTQ1MjA3&title=Boruto%3A+Naruto+Next+Generations+Episode+165","165":"//gogohd.net/streaming.php?id=MTQ1NjU4&title=Boruto%3A+Naruto+Next+Generations+Episode+166","166":"//gogohd.net/streaming.php?id=MTQ1OTMz&title=Boruto%3A+Naruto+Next+Generations+Episode+167","167":"//gogohd.net/streaming.php?id=MTQ2MTE3&title=Boruto%3A+Naruto+Next+Generations+Episode+168","168":"//gogohd.net/streaming.php?id=MTQ2MzAw&title=Boruto%3A+Naruto+Next+Generations+Episode+169","169":"//gogohd.net/streaming.php?id=MTQ2NTQw&title=Boruto%3A+Naruto+Next+Generations+Episode+170&typesub=SUB","170":"//gogohd.net/streaming.php?id=MTQ2NzUz&title=Boruto%3A+Naruto+Next+Generations+Episode+171&typesub=SUB","171":"//gogohd.net/streaming.php?id=MTQ3MDYw&title=Boruto%3A+Naruto+Next+Generations+Episode+172&typesub=SUB","172":"//gogohd.net/streaming.php?id=MTQ3MzE3&title=Boruto%3A+Naruto+Next+Generations+Episode+173&typesub=SUB","173":"//gogohd.net/streaming.php?id=MTQ3NzM3&title=Boruto%3A+Naruto+Next+Generations+Episode+174&typesub=SUB","174":"//gogohd.net/streaming.php?id=MTQ3OTgz&title=Boruto%3A+Naruto+Next+Generations+Episode+175&typesub=SUB","175":"//gogohd.net/streaming.php?id=MTQ4MjMw&title=Boruto%3A+Naruto+Next+Generations+Episode+176&typesub=SUB","176":"//gogohd.net/streaming.php?id=MTQ4NTE3&title=Boruto%3A+Naruto+Next+Generations+Episode+177&typesub=SUB","177":"//gogohd.net/streaming.php?id=MTQ5MDA4&title=Boruto%3A+Naruto+Next+Generations+Episode+178&typesub=SUB","178":"//gogohd.net/streaming.php?id=MTQ5MzIz&title=Boruto%3A+Naruto+Next+Generations+Episode+179&typesub=SUB","179":"//gogohd.net/streaming.php?id=MTQ5NzUx&title=Boruto%3A+Naruto+Next+Generations+Episode+180&typesub=SUB","180":"//gogohd.net/streaming.php?id=MTUwMjUy&title=Boruto%3A+Naruto+Next+Generations+Episode+181&typesub=SUB","181":"//gogohd.net/streaming.php?id=MTUwNzQ5&title=Boruto%3A+Naruto+Next+Generations+Episode+182&typesub=SUB","182":"//gogohd.net/streaming.php?id=MTUxMTkz&title=Boruto%3A+Naruto+Next+Generations+Episode+183&typesub=SUB","183":"//gogohd.net/streaming.php?id=MTUxNzIw&title=Boruto%3A+Naruto+Next+Generations+Episode+184&typesub=SUB","184":"//gogohd.net/streaming.php?id=MTUxOTg4&title=Boruto%3A+Naruto+Next+Generations+Episode+185&typesub=SUB","185":"//gogohd.net/streaming.php?id=MTUyMzE1&title=Boruto%3A+Naruto+Next+Generations+Episode+186&typesub=SUB","186":"//gogohd.net/streaming.php?id=MTUyODY5&title=Boruto%3A+Naruto+Next+Generations+Episode+187&typesub=SUB","187":"//gogohd.net/streaming.php?id=MTUzNTMx&title=Boruto%3A+Naruto+Next+Generations+Episode+188&typesub=SUB","188":"//gogohd.net/streaming.php?id=MTU0MTE1&title=Boruto%3A+Naruto+Next+Generations+Episode+189&typesub=SUB","189":"//gogohd.net/streaming.php?id=MTU0NzUy&title=Boruto%3A+Naruto+Next+Generations+Episode+190&typesub=SUB","190":"//gogohd.net/streaming.php?id=MTU1NDE0&title=Boruto%3A+Naruto+Next+Generations+Episode+191","191":"//gogohd.net/streaming.php?id=MTU2Mjgz&title=Boruto%3A+Naruto+Next+Generations+Episode+192","192":"//gogohd.net/streaming.php?id=MTU3MDA3&title=Boruto%3A+Naruto+Next+Generations+Episode+193","193":"//gogohd.net/streaming.php?id=MTU3ODM0&title=Boruto%3A+Naruto+Next+Generations+Episode+194","194":"//gogohd.net/streaming.php?id=MTU4ODcw&title=Boruto%3A+Naruto+Next+Generations+Episode+195","195":"//gogohd.net/streaming.php?id=MTU5NTUy&title=Boruto%3A+Naruto+Next+Generations+Episode+196","196":"//gogohd.net/streaming.php?id=MTYwMjE1&title=Boruto%3A+Naruto+Next+Generations+Episode+197","197":"//gogohd.net/streaming.php?id=MTYwNjg4&title=Boruto%3A+Naruto+Next+Generations+Episode+198","198":"//gogohd.net/streaming.php?id=MTYxMzIy&title=Boruto%3A+Naruto+Next+Generations+Episode+199","199":"//gogohd.net/streaming.php?id=MTYxNzY0&title=Boruto%3A+Naruto+Next+Generations+Episode+200","200":"//gogohd.net/streaming.php?id=MTYyMjEz&title=Boruto%3A+Naruto+Next+Generations+Episode+201","201":"//gogohd.net/streaming.php?id=MTYyNTkz&title=Boruto%3A+Naruto+Next+Generations+Episode+202","202":"//gogohd.net/streaming.php?id=MTYzMjI3&title=Boruto%3A+Naruto+Next+Generations+Episode+203","203":"//gogohd.net/streaming.php?id=MTYzNzQx&title=Boruto%3A+Naruto+Next+Generations+Episode+204","204":"https://gogohd.net/streaming.php?id=MTY0MjA2&title=Boruto%3A+Naruto+Next+Generations+Episode+205","205":"//gogohd.net/streaming.php?id=MTY0NjUx&title=Boruto%3A+Naruto+Next+Generations+Episode+206","206":"https://gogohd.net/streaming.php?id=MTY1MDc0&title=Boruto%3A+Naruto+Next+Generations+Episode+207","207":"//gogohd.net/streaming.php?id=MTY1ODAw&title=Boruto%3A+Naruto+Next+Generations+Episode+208","208":"//gogohd.net/streaming.php?id=MTY2ODI4&title=Boruto%3A+Naruto+Next+Generations+Episode+209","209":"//gogohd.net/streaming.php?id=MTY3NjMy&title=Boruto%3A+Naruto+Next+Generations+Episode+210","210":"//gogohd.net/streaming.php?id=MTY4MDE4&title=Boruto%3A+Naruto+Next+Generations+Episode+211","211":"//gogohd.net/streaming.php?id=MTY4NTA5&title=Boruto%3A+Naruto+Next+Generations+Episode+212","212":"//gogohd.net/streaming.php?id=MTY5MjAy&title=Boruto%3A+Naruto+Next+Generations+Episode+213","213":"//gogohd.net/streaming.php?id=MTY5ODIx&title=Boruto%3A+Naruto+Next+Generations+Episode+214","214":"//gogohd.net/streaming.php?id=MTcwMzAx&title=Boruto%3A+Naruto+Next+Generations+Episode+215","215":"//gogohd.net/streaming.php?id=MTcwNzA3&title=Boruto%3A+Naruto+Next+Generations+Episode+216","216":"//gogohd.net/streaming.php?id=MTcxMTk2&title=Boruto%3A+Naruto+Next+Generations+Episode+217","217":"//gogohd.net/streaming.php?id=MTcxODYw&title=Boruto%3A+Naruto+Next+Generations+Episode+218","218":"//gogohd.net/streaming.php?id=MTcyMjg4&title=Boruto%3A+Naruto+Next+Generations+Episode+219","219":"//gogohd.net/streaming.php?id=MTcyNzc3&title=Boruto%3A+Naruto+Next+Generations+Episode+220","220":"//gogohd.net/streaming.php?id=MTczNDU2&title=Boruto%3A+Naruto+Next+Generations+Episode+221","221":"//gogohd.net/streaming.php?id=MTczODQ1&title=Boruto%3A+Naruto+Next+Generations+Episode+222","222":"//gogohd.net/streaming.php?id=MTc0MTc2&title=Boruto%3A+Naruto+Next+Generations+Episode+223","223":"//gogohd.net/streaming.php?id=MTc0NTQ0&title=Boruto%3A+Naruto+Next+Generations+Episode+224","224":"//gogohd.net/streaming.php?id=MTc0OTQ1&title=Boruto%3A+Naruto+Next+Generations+Episode+225","225":"//gogohd.net/streaming.php?id=MTc1Mzk0&title=Boruto%3A+Naruto+Next+Generations+Episode+226","226":"//gogohd.net/streaming.php?id=MTc1Nzc0&title=Boruto%3A+Naruto+Next+Generations+Episode+227","227":"//gogohd.net/streaming.php?id=MTc2MTc2&title=Boruto%3A+Naruto+Next+Generations+Episode+228","228":"//gogohd.net/streaming.php?id=MTc2NjE2&title=Boruto%3A+Naruto+Next+Generations+Episode+229","229":"//gogohd.net/streaming.php?id=MTc2OTUx&title=Boruto%3A+Naruto+Next+Generations+Episode+230","230":"//gogohd.net/streaming.php?id=MTc3ODU4&title=Boruto%3A+Naruto+Next+Generations+Episode+231","231":"//gogohd.net/streaming.php?id=MTc4MjA0&title=Boruto%3A+Naruto+Next+Generations+Episode+232","232":"//gogohd.net/streaming.php?id=MTc4OTgz&title=Boruto%3A+Naruto+Next+Generations+Episode+233","233":"//gogohd.net/streaming.php?id=MTc5NTU3&title=Boruto%3A+Naruto+Next+Generations+Episode+234","234":"//gogohd.net/streaming.php?id=MTgwMDE3&title=Boruto%3A+Naruto+Next+Generations+Episode+235","235":"//gogohd.net/streaming.php?id=MTgwNDgx&title=Boruto%3A+Naruto+Next+Generations+Episode+236&typesub=SUB","236":"//gogohd.net/streaming.php?id=MTgxMDUz&title=Boruto%3A+Naruto+Next+Generations+Episode+237&typesub=SUB","237":"//gogohd.net/streaming.php?id=MTgxNTAy&title=Boruto%3A+Naruto+Next+Generations+Episode+238&typesub=SUB","238":"//gogohd.net/streaming.php?id=MTgyMDE4&title=Boruto%3A+Naruto+Next+Generations+Episode+239&typesub=SUB","239":"//gogohd.net/streaming.php?id=MTgyNDc1&title=Boruto%3A+Naruto+Next+Generations+Episode+240&typesub=SUB","240":"//gogohd.net/streaming.php?id=MTgyODQ2&title=Boruto%3A+Naruto+Next+Generations+Episode+241&typesub=SUB","241":"//gogohd.net/streaming.php?id=MTgzMjAz&title=Boruto%3A+Naruto+Next+Generations+Episode+242&typesub=SUB","242":"//gogohd.net/streaming.php?id=MTgzNjc1&title=Boruto%3A+Naruto+Next+Generations+Episode+243&typesub=SUB","243":"//gogohd.net/streaming.php?id=MTg0MTU3&title=Boruto%3A+Naruto+Next+Generations+Episode+244&typesub=SUB","244":"//gogohd.net/streaming.php?id=MTg0NTg2&title=Boruto%3A+Naruto+Next+Generations+Episode+245&typesub=SUB","245":"//gogohd.net/streaming.php?id=MTg1MDE2&title=Boruto%3A+Naruto+Next+Generations+Episode+246&typesub=SUB","246":"//gogohd.net/streaming.php?id=MTg1NDk3&title=Boruto%3A+Naruto+Next+Generations+Episode+247&typesub=SUB","247":"//gogohd.net/streaming.php?id=MTg2MTE4&title=Boruto%3A+Naruto+Next+Generations+Episode+248&typesub=SUB","248":"//gogohd.net/streaming.php?id=MTg2NDUx&title=Boruto%3A+Naruto+Next+Generations+Episode+249&typesub=SUB","249":"//gogohd.net/streaming.php?id=MTg2ODAx&title=Boruto%3A+Naruto+Next+Generations+Episode+250&typesub=SUB","250":"//gogohd.net/streaming.php?id=MTg3MTkz&title=Boruto%3A+Naruto+Next+Generations+Episode+251&typesub=SUB","251":"//gogohd.net/streaming.php?id=MTg3Mzkx&title=Boruto%3A+Naruto+Next+Generations+Episode+252&typesub=SUB","252":"//gogohd.net/streaming.php?id=MTg3NzAz&title=Boruto%3A+Naruto+Next+Generations+Episode+253&typesub=SUB","253":"//gogohd.net/streaming.php?id=MTg4MjAy&title=Boruto%3A+Naruto+Next+Generations+Episode+254&typesub=SUB","254":"//gogohd.net/streaming.php?id=MTg4NDA5&title=Boruto%3A+Naruto+Next+Generations+Episode+255&typesub=SUB","255":"//gogohd.net/streaming.php?id=MTg4Njk1&title=Boruto%3A+Naruto+Next+Generations+Episode+256&typesub=SUB","256":"//gogohd.net/streaming.php?id=MTg4OTc3&title=Boruto%3A+Naruto+Next+Generations+Episode+257&typesub=SUB","257":"//gogohd.net/streaming.php?id=MTg5Mjcy&title=Boruto%3A+Naruto+Next+Generations+Episode+258&typesub=SUB","258":"//gogohd.net/streaming.php?id=MTg5NTM5&title=Boruto%3A+Naruto+Next+Generations+Episode+259&typesub=SUB","259":"//gogohd.net/streaming.php?id=MTg5OTAy&title=Boruto%3A+Naruto+Next+Generations+Episode+260&typesub=SUB","260":"//gogohd.net/streaming.php?id=MTkwMjIx&title=Boruto%3A+Naruto+Next+Generations+Episode+261&typesub=SUB","261":"//gogohd.net/streaming.php?id=MTkwNTA3&title=Boruto%3A+Naruto+Next+Generations+Episode+262&typesub=SUB","262":"//gogohd.net/streaming.php?id=MTkwNzg5&title=Boruto%3A+Naruto+Next+Generations+Episode+263&typesub=SUB","263":"//gogohd.net/streaming.php?id=MTkxMTcz&title=Boruto%3A+Naruto+Next+Generations+Episode+264&typesub=SUB","264":"//gogohd.net/streaming.php?id=MTkxNTkw&title=Boruto%3A+Naruto+Next+Generations+Episode+265&typesub=SUB","265":"//gogohd.net/streaming.php?id=MTkyMDE3&title=Boruto%3A+Naruto+Next+Generations+Episode+266&typesub=SUB","266":"//gogohd.net/streaming.php?id=MTkyNDEw&title=Boruto%3A+Naruto+Next+Generations+Episode+267&typesub=SUB","267":"//gogohd.net/streaming.php?id=MTkyNzgz&title=Boruto%3A+Naruto+Next+Generations+Episode+268&typesub=SUB","268":"//gogohd.net/streaming.php?id=MTkzMTg2&title=Boruto%3A+Naruto+Next+Generations+Episode+269&typesub=SUB","269":"//gogohd.net/streaming.php?id=MTkzNDk3&title=Boruto%3A+Naruto+Next+Generations+Episode+270&typesub=SUB","270":"//gogohd.net/streaming.php?id=MTkzNzY1&title=Boruto%3A+Naruto+Next+Generations+Episode+271&typesub=SUB","271":"//gogohd.net/streaming.php?id=MTk0MDUy&title=Boruto%3A+Naruto+Next+Generations+Episode+272&typesub=SUB","272":"//gogohd.net/streaming.php?id=MTk0MzU2&title=Boruto%3A+Naruto+Next+Generations+Episode+273&typesub=SUB","273":"//gogohd.net/streaming.php?id=MTk0Njkw&title=Boruto%3A+Naruto+Next+Generations+Episode+274&typesub=SUB","274":"//gogohd.net/streaming.php?id=MTk0OTU0&title=Boruto%3A+Naruto+Next+Generations+Episode+275&typesub=SUB"}
        </div>
        <div id="flexbottom">
          <div id="bottomleft">
            <span id="genres"
              >Genres :

              <span id="genredata"
                >Action, Adventure, Fantasy, Martial Arts, Shounen</span
              >
            </span>
            <br />
            <span id="status">Status : Ongoing</span>
          </div>
        </div>
      </div>
    </div>
    <script type="text/javascript">
      var malid = "34566";
      var copt = "#gh=gogohd.net"; //#recmanga
      var utoken = "HEJUpB7w8B";
      var lastAdded = "2022-11-13 10:05:03";
      var fillerData = [
        "2-17",
        "25-38",
        "40-52",
        "67-147",
        "152-180",
        "190-191",
        209,
        "221-273",
      ];
    </script>
  </body>
  </html>
  `,
};
