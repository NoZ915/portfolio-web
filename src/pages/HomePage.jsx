import { Box, Typography, Link, Divider } from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import ProjectInfo from "../components/ProjectInfo";
import WebIcon from '@mui/icons-material/Web';

const boxStyle = {
  m: 3,
  ml: 5,
  mr: 5,
  width: 'auto',
  // boxShadow: 10,
  pt: 3,
  px: 4,
  pb: 3,
  backgroundColor: "white"
}
const projects = [
  {
    title: "好想工作室",
    date: "2021/04 ~ 2023/10",
    description: (
      <ul>
        <li style={{ listStyle: "none" }}>1. 每周 JavaScript 讀書會，曾擔任導讀導讀內容包含閉包與範圍、正規表達式</li>
        <li style={{ listStyle: "none" }}>2. 2022 iThome 鐵人賽 ：PixiJS 青銅玩家</li>
      </ul>
    ),
    image: "goodideas.png",
    others: (
      <>
        <Link href="https://hackmd.io/@noz915/BJIRyzGrj" sx={{ display: "flex", fontSize: 18, color: "black" }} target="_blank" underline="hover">
          <WebIcon />
          <Typography sx={{ ml: 1, fontSize: 18 }}>第五章 大師級函式：閉包與範圍</Typography>
        </Link> <br />
        <Link href="https://hackmd.io/@noz915/rksy4m8js" sx={{ display: "flex", fontSize: 18, color: "black" }} target="_blank" underline="hover">
          <WebIcon />
          <Typography sx={{ ml: 1, fontSize: 18 }}>第十章 正規表達式</Typography>
        </Link><br />
        <Link href="https://ithelp.ithome.com.tw/users/20152526/ironman/5741" sx={{ display: "flex", fontSize: 18, color: "black" }} target="_blank" underline="hover">
          <WebIcon />
          <Typography sx={{ ml: 1, fontSize: 18 }}>2022 iThome 鐵人賽 ：PixiJS 青銅玩家</Typography>
        </Link><br />
      </>
    )
  },
  {
    title: "2024年下學期「人工智慧」：應用基因演算法進行題庫選題於平行測驗建置",
    date: "2024/05",
    description: `
    為利用基因演算法來幫助選題，並且可用於平行測驗的建置中，讓使用者可以從題庫中一鍵按下，同時產生兩份難度相當，且題目完全不重複的試卷，使用場景例如教師需出兩份試卷，一份用於補考學生， 因此既難度相當符合公平性外，也因題目不重複出現使題目無曝光性。
    `,
    image: "ga.png",
    technologies: "React JS、MUI、Node JS、Express JS、MongoDB，前後端均部署於Zeabur平台上。",
    github: "https://github.com/NoZ915/GA-parallel-test-item-selection",
    website: "https://ga-exam-item-selection.zeabur.app/"
  },
  {
    title: "2024年下學期「人工智慧」：應用貝氏機率在診斷型測驗推算學生學習錯誤原因",
    date: "2024/03 ~ 2024/04",
    description: `
    為一用來診斷學生學習錯誤原因的系統，可由教師新增測驗，測驗內容包含題目以及錯誤類型，學生進入測驗後，將可即時算出每一個錯誤類型的熟悉度，並且可依照該題目選項的錯誤類型而推算出該題正確/錯誤率，而當測驗結束後會顯示最終結果，越不熟悉的錯誤類型將排序至最上方，且可以查看該錯誤類型之敘述，以及可透過教師提供的影音連結學習、複習，以上皆利用貝氏機率所完成。
    `,
    image: "bsmf.png",
    technologies: "React JS、MUI、Node JS、Express JS、MongoDB，前後端均部署於Zeabur平台上。",
    github: "https://github.com/NoZ915/bayesian-student-mistake-finder",
    website: "https://bayesian-student-mistake-finder.zeabur.app/"
  },
  {
    title: "2023年上學期「資料庫系統」：BinGo併電商網站",
    date: "2023/12 ~ 2024/01",
    description: `
    一個讓使用者可以快速找到人一起免運、併單、團購的平台，主要負責後端以及前端部分重構。
    `,
    image: "bingobin.png",
    technologies: "前端使用EJS、CSS、JavaScript，後端使用NodeJS、Express，資料庫則利用MongoDB建置，並架設至Zeabur上",
    github: "https://github.com/NoZ915/database-final-project",
    website: "https://bingobin.zeabur.app/",
    youtube: "https://www.youtube.com/watch?v=wkv-owmVaQA"
  },
  {
    title: "2023年上學期「機器學習」：手寫辨識系統",
    date: "2023/09 ~ 2023/10",
    description: `
    使用原生JavaScript（ Without AI Framework）完成，將MNIST資料集讀入之後作訓練，並且搭配p5.js供使用者可以在網頁中寫上數字。
    `,
    image: "hand-written.png",
    technologies: "MLP多層感知器概念、JavaScript、HTML、CSS（將資料視覺化成長條圖）、p5.js",
    github: "https://github.com/NoZ915/handwritten-digit-recognize",
    website: "https://noz915.github.io/handwritten-digit-recognize/",
    youtube: "https://www.youtube.com/watch?v=fKIbeqtwQpk"
  },
  {
    title: "畢業專題：百年南遇-基於 PixiJS 與 LINE Bot 之解謎遊戲",
    date: "2022/02 ~ 2023/01",
    description: (
      <>
        為一款自製解謎遊戲，從遊戲腳本、美術設計到程式設計皆自行完成。主要由pixi.js以及操作HTML DOM元素、CSS來完成網頁遊戲之畫面，而遊戲媒介則透過LINE Bot完成，背後則透過Express做為後端框架來建立伺服器連接，並將LINE Bot部署在Heroku這個雲平台上。
        <br />
        <br />
        PS 因Heroku收費因素，LINE Bot部分已從Heroku平台上下架
      </>

    ),
    image: "pah-ni-lam-gu.png",
    technologies: "HTML、CSS、JavaScript、Pixi.js、Express、Heroku、LINE Bot",
    github: "https://github.com/NoZ915/pah-ni-lam-gu",
    website: "https://noz915.github.io/pah-ni-lam-gu/",
    youtube: "https://www.youtube.com/watch?v=lX4oTrl02nE"
  },
  {
    title: "2022下學期「學習管理系統」：登革熱學習管理系統網站",
    date: "2022/10 ~ 2022/12",
    description: (
      <>
        為一學習管理系統，從學習情境、課程內容設計，網站
        前端以及後端架設皆自行完成。該網站包含： <br />
        1. 學習互動（影片教學、問答、遊戲式互動測驗）<br />
        2. 成績紀錄與排行榜 <br />
        3. 留言板 <br />
        4. 登入 / 註冊頁面 <br />
      </>
    ),
    technologies: (
      <>
        1. 前端、後端：HTML、原生 CSS、DIVE、JavaScript、
        diveLinker、PHP、mySQL、phpmyadmin、cookie <br />
        2. 伺服器：XAMPP、ngrok
      </>
    ),
    image: "lms.png",
    youtube: "https://www.youtube.com/watch?v=tv8FPuHtGyA"
  },
  {
    title: "2021上學期「網頁程式設計」：台灣旅遊導覽",
    date: "2021/10 ~ 2021/12",
    description: (
      <>
        1. 透過 JS 串接交通部提供的 api，ajax 實現方法則用了 axios 的套件，地圖用了 Leaflet 這個 js 框架，以及地圖資料使用了openStreetMap， 而定位的部分則是使用了navigation web
        api。<br />
        2. CSS 則使用原生 CSS 來完成 lightbox，以及首頁滑動功能。<br />
        3. 熱門活動則使用了當時剛學到的演算法 "bubble sort" 做排序。
        <br />
        <br />
        PS 目前地圖資料原先串接交通部提供的腳踏車數量 api，因近期腳
        踏車 api 有更動，因此目前是讀取不到的，還請見諒！
      </>
    ),
    technologies: (
      <>
        1. 前端主要：HTML、CSS、JavaScript<br />
        2. API 串接：axios、使用交通部運輸資料流通服務平臺提供之 API<br />
        3. 地圖：Leaflet、openStreetMap、navigation web api<br />
      </>
    ),
    image: "f2e.png",
    github: "https://github.com/NoZ915/2021F2E-week1_Taiwan-travel-guide",
    website: "https://noz915.github.io/2021F2E-week1_Taiwan-travel-guide/"
  },
  {
    title: "2020上學期「JavaScript 程設」：記憶遊戲進階版",
    date: "2020/10 ~ 2020/12",
    description: (
      <>
        藉由 JavaScript 完成的記憶遊戲，再加上 CSS 加入血條
        與會變色的腳色，將一般的記憶遊戲又更添樂趣。以及
        利用 localStorage 將分數紀錄，讓玩家可以再次挑戰自
        己的分數！
      </>
    ),
    technologies: "HTML、CSS、JavaScript",
    image: "memory-game.png",
    github: "https://github.com/NoZ915/memoryGame.github.io",
    website: "https://noz915.github.io/memoryGame.github.io/",
    youtube: "https://www.youtube.com/watch?v=W0LbF8JfuaA&sttick=0"
  },
  {
    title: "2019上學期「運算思維」：迷宮打怪喝藥水",
    date: "2019/10 ~ 2019/12",
    description: "利用學校實驗室開發的 DIVE 平台完成之遊戲，並且搭配 JavaScript 來串接個個專案，達到可以跳轉地圖的功能。",
    technologies: "DIVE 平台、JavaScript",
    image: "dive.png",
    youtube: "https://www.youtube.com/watch?v=dunxL9OHSIQ"
  }
]

function HomePage() {
  return (
    <>
      <Box sx={{ ...boxStyle }}>
        <Typography variant="h1" sx={{ fontSize: 24, fontWeight: 700 }}>YuXuan Lin 林育瑄</Typography>
        <Divider sx={{ mt: 1 }} />
        <Link href="https://github.com/NoZ915" target="_blank" underline="hover" sx={{ display: "flex", mt: 2, color: "black" }}>
          <GitHubIcon sx={{ display: "inline-block" }} />
          <Typography variant="h2" sx={{ display: "inline-block", ml: 1, fontSize: 18 }}>
            NoZ915
          </Typography>
        </Link>
      </Box>

      <Box sx={{ ...boxStyle, mt: 5 }}>
        <Typography variant="h2" sx={{ fontSize: 24, fontWeight: 700 }}>Projects and Experience 專案與經驗</Typography>
        <Divider sx={{ mt: 1 }} />
        {projects.map(project => (
          <ProjectInfo
            key={project.date}
            title={project.title}
            date={project.date}
            description={project.description}
            image={project.image}
            technologies={project.technologies}
            website={project.website}
            github={project.github}
            youtube={project.youtube}
            others={project.others}
          />
        ))}
      </Box>
    </>
  )
}

export default HomePage;