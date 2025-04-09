import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import Table from "@mui/material/Table"
import TableBody from "@mui/material/TableBody"
import TableCell from "@mui/material/TableCell"
import TableContainer from "@mui/material/TableContainer"
import TableHead from "@mui/material/TableHead"
import TableRow from "@mui/material/TableRow"
import Button from "@mui/material/Button"
import Select from "@mui/material/Select"
import MenuItem from "@mui/material/MenuItem"
import IconButton from "@mui/material/IconButton"
import FilterListIcon from "@mui/icons-material/FilterList"
import FirstPageIcon from "@mui/icons-material/FirstPage"
import LastPageIcon from "@mui/icons-material/LastPage"
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft"
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight"
import TextField from "@mui/material/TextField"

export default function SignalInfo() {
  // Common TableCell styling
  const headerCellStyle = {
    backgroundColor: "#2196f3",
    padding: "8px 16px",
    borderRight: "1px solid rgba(255, 255, 255, 0.2)",
  };

  // Last column doesn't need right border
  const lastHeaderCellStyle = {
    ...headerCellStyle,
    borderRight: "none",
  };

  return (
    <Box sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
      {/* Table Container */}
      <TableContainer sx={{ flex: 1, overflow: "auto" }}>
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell sx={{ ...headerCellStyle, minWidth: '150px' }}>
                <TextField 
                  size="small" 
                  variant="outlined" 
                  fullWidth
                  label="Signal ID"
                  sx={{
                    '& .MuiInputLabel-root': {
                      color: 'white', // Change the default color
                    },
                    '& .MuiInputLabel-root.Mui-focused': {
                      color: 'white', // Change the color when focused
                    },
                  }}
                />
              </TableCell>
              <TableCell sx={{ ...headerCellStyle, minWidth: '150px' }}>
                <TextField 
                  size="small" 
                  variant="outlined" 
                  fullWidth
                  label="Zone Group"
                  sx={{
                    '& .MuiInputLabel-root': {
                      color: 'white', // Change the default color
                    },
                    '& .MuiInputLabel-root.Mui-focused': {
                      color: 'white', // Change the color when focused
                    },
                  }}
                />
              </TableCell>
              <TableCell sx={{ ...headerCellStyle, minWidth: '120px' }}>
                <TextField 
                  size="small" 
                  variant="outlined" 
                  fullWidth
                  label="Zone"
                  sx={{
                    '& .MuiInputLabel-root': {
                      color: 'white', // Change the default color
                    },
                    '& .MuiInputLabel-root.Mui-focused': {
                      color: 'white', // Change the color when focused
                    },
                  }}
                />
              </TableCell>
              <TableCell sx={{ ...headerCellStyle, minWidth: '140px' }}>
                <TextField 
                  size="small" 
                  variant="outlined" 
                  fullWidth
                  label="Corridor"
                  sx={{
                    '& .MuiInputLabel-root': {
                      color: 'white', // Change the default color
                    },
                    '& .MuiInputLabel-root.Mui-focused': {
                      color: 'white', // Change the color when focused
                    },
                  }}
                />
              </TableCell>
              <TableCell sx={{ ...headerCellStyle, minWidth: '150px' }}>
                <TextField 
                  size="small" 
                  variant="outlined" 
                  fullWidth
                  label="Subcorridor"
                  sx={{
                    '& .MuiInputLabel-root': {
                      color: 'white', // Change the default color
                    },
                    '& .MuiInputLabel-root.Mui-focused': {
                      color: 'white', // Change the color when focused
                    },
                  }}
                />
              </TableCell>
              <TableCell sx={{ ...headerCellStyle, minWidth: '130px' }}>
                <TextField 
                  size="small" 
                  variant="outlined" 
                  fullWidth
                  label="Agency"
                  sx={{
                    '& .MuiInputLabel-root': {
                      color: 'white', // Change the default color
                    },
                    '& .MuiInputLabel-root.Mui-focused': {
                      color: 'white', // Change the color when focused
                    },
                  }}
                />
              </TableCell>
              <TableCell sx={{ ...headerCellStyle, minWidth: '180px' }}>
                <TextField 
                  size="small" 
                  variant="outlined" 
                  fullWidth
                  label="Main Street Name"
                  sx={{
                    '& .MuiInputLabel-root': {
                      color: 'white', // Change the default color
                    },
                    '& .MuiInputLabel-root.Mui-focused': {
                      color: 'white', // Change the color when focused
                    },
                  }}
                />
              </TableCell>
              <TableCell sx={{ ...headerCellStyle, minWidth: '180px' }}>
                <TextField 
                  size="small" 
                  variant="outlined" 
                  fullWidth
                  label="Side Street Name"
                  sx={{
                    '& .MuiInputLabel-root': {
                      color: 'white', // Change the default color
                    },
                    '& .MuiInputLabel-root.Mui-focused': {
                      color: 'white', // Change the color when focused
                    },
                  }}
                />
              </TableCell>
              <TableCell sx={{ ...headerCellStyle, minWidth: '130px' }}>
                <TextField 
                  size="small" 
                  variant="outlined" 
                  fullWidth
                  label="Milepost"
                  sx={{
                    '& .MuiInputLabel-root': {
                      color: 'white', // Change the default color
                    },
                    '& .MuiInputLabel-root.Mui-focused': {
                      color: 'white', // Change the color when focused
                    },
                  }}
                />
              </TableCell>
              <TableCell sx={{ ...headerCellStyle, minWidth: '120px' }}>
                <TextField 
                  size="small" 
                  variant="outlined" 
                  fullWidth
                  label="As Of"
                  sx={{
                    '& .MuiInputLabel-root': {
                      color: 'white', // Change the default color
                    },
                    '& .MuiInputLabel-root.Mui-focused': {
                      color: 'white', // Change the color when focused
                    },
                  }}
                />
              </TableCell>
              <TableCell sx={{ ...headerCellStyle, minWidth: '140px' }}>
                <TextField 
                  size="small" 
                  variant="outlined" 
                  fullWidth
                  label="Duplicate"
                  sx={{
                    '& .MuiInputLabel-root': {
                      color: 'white', // Change the default color
                    },
                    '& .MuiInputLabel-root.Mui-focused': {
                      color: 'white', // Change the color when focused
                    },
                  }}
                />
              </TableCell>
              <TableCell sx={{ ...headerCellStyle, minWidth: '120px' }}>
                <TextField 
                  size="small" 
                  variant="outlined" 
                  fullWidth
                  label="Include"
                  sx={{
                    '& .MuiInputLabel-root': {
                      color: 'white', // Change the default color
                    },
                    '& .MuiInputLabel-root.Mui-focused': {
                      color: 'white', // Change the color when focused
                    },
                  }}
                />
              </TableCell>
              <TableCell sx={{ ...headerCellStyle, minWidth: '140px' }}>
                <TextField 
                  size="small" 
                  variant="outlined" 
                  fullWidth
                  label="Modified"
                  sx={{
                    '& .MuiInputLabel-root': {
                      color: 'white', // Change the default color
                    },
                    '& .MuiInputLabel-root.Mui-focused': {
                      color: 'white', // Change the color when focused
                    },
                  }}
                />
              </TableCell>
              <TableCell sx={{ ...headerCellStyle, minWidth: '120px' }}>
                <TextField 
                  size="small" 
                  variant="outlined" 
                  fullWidth
                  label="Note"
                  sx={{
                    '& .MuiInputLabel-root': {
                      color: 'white', // Change the default color
                    },
                    '& .MuiInputLabel-root.Mui-focused': {
                      color: 'white', // Change the color when focused
                    },
                  }}
                />
              </TableCell>
              <TableCell sx={{ ...headerCellStyle, minWidth: '130px' }}>
                <TextField 
                  size="small" 
                  variant="outlined" 
                  fullWidth
                  label="Latitude"
                  sx={{
                    '& .MuiInputLabel-root': {
                      color: 'white', // Change the default color
                    },
                    '& .MuiInputLabel-root.Mui-focused': {
                      color: 'white', // Change the color when focused
                    },
                  }}
                />
              </TableCell>
              <TableCell sx={{ ...headerCellStyle, minWidth: '140px' }}>
                <TextField 
                  size="small" 
                  variant="outlined" 
                  fullWidth
                  label="Longitude"
                  sx={{
                    '& .MuiInputLabel-root': {
                      color: 'white', // Change the default color
                    },
                    '& .MuiInputLabel-root.Mui-focused': {
                      color: 'white', // Change the color when focused
                    },
                  }}
                />
              </TableCell>
              <TableCell sx={{ ...headerCellStyle, minWidth: '130px' }}>
                <TextField 
                  size="small" 
                  variant="outlined" 
                  fullWidth
                  label="County"
                  sx={{
                    '& .MuiInputLabel-root': {
                      color: 'white', // Change the default color
                    },
                    '& .MuiInputLabel-root.Mui-focused': {
                      color: 'white', // Change the color when focused
                    },
                  }}
                />
              </TableCell>
              <TableCell sx={{ ...headerCellStyle, minWidth: '120px' }}>
                <TextField 
                  size="small" 
                  variant="outlined" 
                  fullWidth
                  label="City"
                  sx={{
                    '& .MuiInputLabel-root': {
                      color: 'white', // Change the default color
                    },
                    '& .MuiInputLabel-root.Mui-focused': {
                      color: 'white', // Change the color when focused
                    },
                  }}
                />
              </TableCell>
              <TableCell sx={{ ...headerCellStyle, minWidth: '130px' }}>
                <TextField 
                  size="small" 
                  variant="outlined" 
                  fullWidth
                  label="Priority"
                  sx={{
                    '& .MuiInputLabel-root': {
                      color: 'white', // Change the default color
                    },
                    '& .MuiInputLabel-root.Mui-focused': {
                      color: 'white', // Change the color when focused
                    },
                  }}
                />
              </TableCell>
              <TableCell sx={{ ...lastHeaderCellStyle, minWidth: '160px' }}>
                <TextField 
                  size="small" 
                  variant="outlined" 
                  fullWidth
                  label="Classification"
                  sx={{
                    '& .MuiInputLabel-root': {
                      color: 'white', // Change the default color
                    },
                    '& .MuiInputLabel-root.Mui-focused': {
                      color: 'white', // Change the color when focused
                    },
                  }}
                />
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>{/* No data rows shown in the image */}</TableBody>
        </Table>
      </TableContainer>

      {/* Bottom Controls */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          p: 1,
          borderTop: "1px solid rgba(224, 224, 224, 1)",
        }}
      >
        {/* Export Button */}
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#2196f3",
            textTransform: "none",
            borderRadius: 1,
            boxShadow: 1,
          }}
        >
          Export To Excel
        </Button>

        {/* Pagination Controls */}
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography variant="body2" sx={{ mr: 1 }}>
            Items per page:
          </Typography>
          <Select
            value={10}
            size="small"
            sx={{
              minWidth: 70,
              height: 32,
              mr: 2,
              "& .MuiSelect-select": {
                py: 0.5,
              },
            }}
          >
            <MenuItem value={10}>10</MenuItem>
            <MenuItem value={25}>25</MenuItem>
            <MenuItem value={50}>50</MenuItem>
          </Select>

          <Typography variant="body2" sx={{ mr: 2 }}>
            0 of 0
          </Typography>

          <Box sx={{ display: "flex" }}>
            <IconButton size="small" disabled>
              <FirstPageIcon />
            </IconButton>
            <IconButton size="small" disabled>
              <KeyboardArrowLeft />
            </IconButton>
            <IconButton size="small" disabled>
              <KeyboardArrowRight />
            </IconButton>
            <IconButton size="small" disabled>
              <LastPageIcon />
            </IconButton>
          </Box>
        </Box>
      </Box>
    </Box>
  )
};