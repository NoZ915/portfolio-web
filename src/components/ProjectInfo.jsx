import { Box, Divider, Typography, Link } from "@mui/material";
import EventNoteIcon from '@mui/icons-material/EventNote';
import WebIcon from '@mui/icons-material/Web';
import GitHubIcon from '@mui/icons-material/GitHub';
import YouTubeIcon from '@mui/icons-material/YouTube';

const boxStyle = {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-between",
  m: 3,
  mr: 0,
  ml: 0,
  width: 'auto',
  boxShadow: 2,
  pt: 3,
  px: 3,
  pb: 3,
  backgroundColor: "white"
}

function ProjectInfo({ title, date, description, image, technologies, github, website, youtube, others }) {
  return (
    <Box sx={{ ...boxStyle }}>
      <Box sx={{ maxWidth: 700 }}>
        <Typography variant="h2" sx={{ fontSize: 18, fontWeight: 700 }}>{title}</Typography>
        <Box sx={{ display: "flex", mt: 1 }}>
          <EventNoteIcon />
          <Typography variant="h3" sx={{ ml: 1, fontSize: 18 }}>{date}</Typography>
        </Box>
        <Typography variant="h4" sx={{ mt: 1, fontSize: 18 }}>{description}</Typography>
        <Divider sx={{ mt: 1 }} />
        {technologies &&
          <Typography variant="h3" sx={{ mt: 1, fontSize: 18, fontWeight: 700, color: "#0276aa" }}>使用技術：</Typography>
        }
        <Typography sx={{ mt: 1, fontSize: 18 }}>{technologies}</Typography>
        {github &&
          <Link href={github} target="_blank" underline="hover" sx={{ display: "flex", mt: 1, color: "black" }}>
            <GitHubIcon />
            <Typography variant="h3" sx={{ ml: 1, fontSize: 18 }}>原始碼連結</Typography>
          </Link>
        }
        {website &&
          <Link href={website} target="_blank" underline="hover" sx={{ display: "flex", mt: 1, color: "black" }}>
            <WebIcon />
            <Typography variant="h3" sx={{ ml: 1, fontSize: 18 }}>網站連結</Typography>
          </Link>
        }
        {youtube &&
          <Link href={youtube} target="_blank" underline="hover" sx={{ display: "flex", mt: 1, color: "black" }}>
            <YouTubeIcon />
            <Typography variant="h3" sx={{ ml: 1, fontSize: 18 }}>DEMO影片</Typography>
          </Link>
        }
        {others &&
          <Box sx={{ mt: 3 }}>
            {others}
          </Box>
        }
      </Box>

      <Box sx={{ display: "flex", alignItems: "center" }}>
        <img
          style={{ width: "100%", maxHeight: 400 }}
          src={image}
        />
      </Box>
    </Box >
  )
}

export default ProjectInfo;