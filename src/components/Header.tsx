"use client"

import type React from "react"

import { useState } from "react"
import { useNavigate } from "react-router-dom"
import AppBar from "@mui/material/AppBar"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"
import IconButton from "@mui/material/IconButton"
import MenuIcon from "@mui/icons-material/Menu"
import FilterListIcon from "@mui/icons-material/FilterList"
import PrintIcon from "@mui/icons-material/Print"
import HelpIcon from "@mui/icons-material/Help"
import SettingsIcon from "@mui/icons-material/Settings"
import ChatIcon from '@mui/icons-material/Chat'
import AppsIcon from "@mui/icons-material/Apps"
import Menu from "@mui/material/Menu"
import MenuItem from "@mui/material/MenuItem"
import Popover from "@mui/material/Popover"
import Box from "@mui/material/Box"
import Paper from "@mui/material/Paper"
import Grid from "@mui/material/Grid"
import Link from "@mui/material/Link"
import ContactForm, { ContactFormData } from "./ContactForm"

// Import app icons
import atspmIcon from "../assets/images/icon_atspm.png"
import citrixIcon from "../assets/images/icon_citrix.png"
import gdot511Icon from "../assets/images/icon_gdot511.png"
import maxviewIcon from "../assets/images/icon_maxview.png"
import navigatorIcon from "../assets/images/icon_navigator.jpg"
import ritisIcon from "../assets/images/icon_ritis.jpg"
import teamsIcon from "../assets/images/icon_teams.png"

// App links
const APP_LINKS = [
  { icon: atspmIcon, url: "https://traffic.dot.ga.gov/atspm", name: "ATSPM" },
  { icon: citrixIcon, url: "https://gdotcitrix.dot.ga.gov/vpn/index.html", name: "Citrix" },
  { icon: gdot511Icon, url: "http://www.511ga.org/", name: "511 GA" },
  { icon: maxviewIcon, url: "http://gdot-tmc-maxv/maxview/", name: "MaxView" },
  { icon: navigatorIcon, url: "https://navigator-atms.dot.ga.gov/", name: "Navigator" },
  { icon: ritisIcon, url: "https://ritis.org/", name: "RITIS" },
  { icon: teamsIcon, url: "https://designitapps.com/GDOT/", name: "TEAMS" }
]

interface HeaderProps {
  sideNavOpen: boolean
  onSideNavToggle: () => void
  onFilterToggle: () => void
}

export default function Header({ sideNavOpen, onSideNavToggle, onFilterToggle }: HeaderProps) {
  const navigate = useNavigate()
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const [contactAnchorEl, setContactAnchorEl] = useState<null | HTMLElement>(null)
  const [helpAnchorEl, setHelpAnchorEl] = useState<null | HTMLElement>(null)
  const [appsAnchorEl, setAppsAnchorEl] = useState<null | HTMLElement>(null)

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleMenuClose = () => {
    setAnchorEl(null)
  }

  const handleContactOpen = (event: React.MouseEvent<HTMLElement>) => {
    setContactAnchorEl(event.currentTarget)
  }

  const handleContactClose = () => {
    setContactAnchorEl(null)
  }

  const handleContactSubmit = (formData: ContactFormData) => {
    console.log('Contact form submitted:', formData)
    // Here you would typically send the data to your backend
    handleContactClose()
  }

  const handleHelpClick = () => {
    navigate("/help")
    handleMenuClose()
  }

  const handleContactClick = () => {
    navigate("/contact")
    handleMenuClose()
  }

  const handleHelpOpen = (event: React.MouseEvent<HTMLElement>) => {
    setHelpAnchorEl(event.currentTarget)
  }

  const handleHelpClose = () => {
    setHelpAnchorEl(null)
  }

  const handleAppsOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAppsAnchorEl(event.currentTarget)
  }

  const handleAppsClose = () => {
    setAppsAnchorEl(null)
  }

  const contactOpen = Boolean(contactAnchorEl)
  const contactId = contactOpen ? 'contact-popover' : undefined
  
  const helpOpen = Boolean(helpAnchorEl)
  const helpId = helpOpen ? 'help-popover' : undefined

  const appsOpen = Boolean(appsAnchorEl)
  const appsId = appsOpen ? 'apps-popover' : undefined

  return (
    <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
      <Toolbar>
        <IconButton color="inherit" aria-label="open drawer" onClick={onSideNavToggle} edge="start" sx={{ mr: 2 }}>
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
          SigOps Metrics
        </Typography>
        <IconButton color="inherit" onClick={onFilterToggle}>
          <FilterListIcon />
        </IconButton>
        <IconButton color="inherit" onClick={handleContactOpen}>
          <ChatIcon />
        </IconButton>
        <IconButton color="inherit" onClick={handleHelpOpen}>
          <HelpIcon />
        </IconButton>
        {/* <IconButton color="inherit">
          <SettingsIcon />
        </IconButton> */}
        <IconButton color="inherit" onClick={handleAppsOpen}>
          <AppsIcon />
        </IconButton>

        <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
          <MenuItem onClick={handleHelpClick}>Help</MenuItem>
          <MenuItem onClick={handleContactClick}>Contact</MenuItem>
        </Menu>

        <Popover
          id={contactId}
          open={contactOpen}
          anchorEl={contactAnchorEl}
          onClose={handleContactClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
        >
          <ContactForm 
            onSubmit={handleContactSubmit}
            onCancel={handleContactClose}
          />
        </Popover>

        <Popover
          id={helpId}
          open={helpOpen}
          anchorEl={helpAnchorEl}
          onClose={handleHelpClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
        >
          <Paper sx={{ width: 400, maxWidth: '100%', bgcolor: '#FFFFFF', borderRadius: 2 }}>
            <Typography variant="h6" gutterBottom sx={{ bgcolor: '#1976d2', color: 'white', p: 1, textAlign: 'center' }}>
              About
            </Typography>
            <Box sx={{ p: 1 }}>
              <Typography paragraph>
                The home page of the SigOps Metrics website. This shows a high level
                overview of performance, volume, equipment, and TEAMS metrics at a
                filtered system and signal level.
              </Typography>
              <Typography paragraph>
                The numbers shown for each metric are an average of all the signals based
                on the current filter.
              </Typography>
              <Typography sx={{ mt: 2 }}>
                App Version: v1.1
              </Typography>
            </Box>
          </Paper>
        </Popover>

        <Popover
          id={appsId}
          open={appsOpen}
          anchorEl={appsAnchorEl}
          onClose={handleAppsClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
        >
          <Paper sx={{ maxWidth: '100%' }}>
            <Typography variant="h6" gutterBottom sx={{ bgcolor: '#1976d2', color: 'white', p: 1, textAlign: 'center' }}>
              GDOT Applications
            </Typography>
            <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 2, p: 1 }}>
              {APP_LINKS.map((app, index) => (
                <Box key={index} sx={{ textAlign: 'center' }}>
                  <Link 
                    href={app.url} 
                    target="_blank" 
                    rel="noopener"
                    underline="none"
                    sx={{ 
                      display: 'flex', 
                      flexDirection: 'column', 
                      alignItems: 'center',
                      '&:hover': { opacity: 0.8 } 
                    }}
                  >
                    <Box 
                      component="img" 
                      src={app.icon} 
                      alt={app.name}
                      sx={{ 
                        width: 100, 
                        // height: 48, 
                        mb: 1, 
                        borderRadius: '8px'
                      }}
                    />
                  </Link>
                </Box>
              ))}
            </Box>
          </Paper>
        </Popover>
      </Toolbar>
    </AppBar>
  )
}
