import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import { ThemeProvider, createTheme } from '@mui/material';
import HomePage from './pages/HomePage.jsx';

const theme = createTheme({
  palette: {
    primary: {
      main: '#0276aa',
    },
    secondary: {
      main: '#81d4fa',
    },
  },
})
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
        index: true
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>,
)
