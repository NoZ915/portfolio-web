import { Box, Typography, Link, Divider } from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import ProjectInfo from "../components/ProjectInfo";

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
    title: "2024年下學期「人工智慧」：應用貝氏機率在診斷型測驗推算學生學習錯誤原因",
    date: "2024/03 ~ 2024/04",
    description: `
    為一用來診斷學生學習錯誤原因的系統，可由教師新增測驗，測驗內容包含題目以及錯誤類型，學生進入測驗後，將可即時算出每一個錯誤類型的熟悉度，並且可依照該題目選項的錯誤類型而推算出該題正確/錯誤率，而當測驗結束後會顯示最終結果，越不熟悉的錯誤類型將排序至最上方，且可以查看該錯誤類型之敘述，以及可透過教師提供的影音連結學習、複習，以上皆利用貝氏機率所完成。
    `,
    image: "src/assets/bsmf.png",
    technologies: "React JS、MUI、Node JS、Express JS、MongoDB，前後端均部署於Zeabur平台上。",
    github: "https://github.com/NoZ915/bayesian-student-mistake-finder",
    website: "https://bayesian-student-mistake-finder.zeabur.app/"
  },
  {
    title: "畢業專題：百年南遇-基於 PixiJS 與 LINE Bot 之解謎遊戲",
    date: "2022/02 ~ 2023/01",
    description: `
    為一款自製解謎遊戲，從遊戲腳本、美術設計到程式設計皆自行完成。主要由pixi.js以及操作HTML DOM元素、CSS來完成網頁遊戲之畫面，而遊戲媒介則透過LINE Bot完成，背後則透過Express做為後端框架來建立伺服器連接，並將LINE Bot部署在Heroku這個雲平台上。
    
    PS 因Heroku收費因素，LINE Bot部分已從Heroku平台上下架`,
    image: "src/assets/pah-ni-lam-gu.png",
    technologies: "HTML、CSS、JavaScript、Pixi.js、Express、Heroku、LINE Bot",
    github: "https://github.com/NoZ915/pah-ni-lam-gu",
    website: "https://noz915.github.io/pah-ni-lam-gu/"
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
          />
        ))}
      </Box>
    </>
  )
}

export default HomePage;