import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { 
    Box, 
    Tabs, 
    Tab, 
    Typography,
    Paper,
    Grid,
    CircularProgress,
    styled,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    TablePagination
} from '@mui/material';
import Plot from 'react-plotly.js';
import TrafficIcon from '@mui/icons-material/Traffic';
import BuildIcon from '@mui/icons-material/Build';
import EngineeringIcon from '@mui/icons-material/Engineering';
import { RootState } from '../store/store';
import { fetchMetricsTrendData } from '../store/slices/metricsSlice';

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

const RegionHeader = styled(Paper)(({ theme, color }) => ({
    padding: theme.spacing(1),
    textAlign: 'center',
    color: '#fff',
    backgroundColor: color,
    borderRadius: '20px',
    marginBottom: theme.spacing(2)
}));

const StatusCircle = styled(Box)(({ theme, color }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: theme.spacing(1),
    '& .progress-wrapper': {
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 80,
        height: 80,
        '& .MuiCircularProgress-root': {
            position: 'absolute',
            '&.outer': {
                color: color,
                transform: 'scale(1.4)',
                '& .MuiCircularProgress-svg': {
                    strokeLinecap: 'round'
                }
            },
            '&.inner': {
                color: theme.palette.mode === 'light' 
                    ? `${color}40`
                    : `${color}80`,
                '& .MuiCircularProgress-svg': {
                    strokeLinecap: 'round'
                }
            }
        },
        '& .icon': {
            position: 'absolute',
            color: color,
            fontSize: '24px',
            zIndex: 1
        }
    }
}));

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    '&.MuiTableCell-head': {
        backgroundColor: '#4285f4',
        color: theme.palette.common.white,
        fontWeight: 'bold',
        padding: theme.spacing(1),
    },
    '&.MuiTableCell-body': {
        padding: theme.spacing(1),
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
}));

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    {children}
                </Box>
            )}
        </div>
    );
}

const RegionStatus = () => {
    const regions = [
        { name: 'NORTH', color: '#8BC34A', operations: 20, maintenance: 15, safety: 45 },
        { name: 'SOUTHWEST', color: '#42A5F5', operations: 80, maintenance: 90, safety: 85 },
        { name: 'SOUTHEAST', color: '#FFD54F', operations: 95, maintenance: 88, safety: 92 },
        { name: 'STATEWIDE', color: '#9E9E9E', operations: 85, maintenance: 60, safety: 78 },
        { name: 'WESTERN METRO', color: '#EF5350', operations: 82, maintenance: 35, safety: 88 },
        { name: 'CENTRAL METRO', color: '#1A237E', operations: 79, maintenance: 81, safety: 77 },
        { name: 'EASTERN METRO', color: '#546E7A', operations: 40, maintenance: 55, safety: 89 },
    ];

    const getStatusColor = (percentage: number) => {
        if (percentage >= 75) return '#4CAF50';
        if (percentage >= 25) return '#FFC107';
        return '#F44336';
    };

    const RegionCard = ({ region }: { region: typeof regions[0] }) => (
        <Box>
            <RegionHeader color={region?.color}>
                <Typography sx={{ fontSize: '0.8rem' }}>{region?.name}</Typography>
            </RegionHeader>
            <Box display="flex" justifyContent="space-around" mb={2}>
                <StatusCircle color={getStatusColor(region?.operations)}>
                    <div className="progress-wrapper">
                        <CircularProgress 
                            className="outer"
                            variant="determinate" 
                            value={region?.operations} 
                            size={80}
                            thickness={4}
                        />
                        <CircularProgress 
                            className="inner"
                            variant="determinate" 
                            value={100} 
                            size={60}
                            thickness={3}
                        />
                        <TrafficIcon className="icon" />
                    </div>
                    <Typography sx={{ fontSize: '0.8rem', color: 'blue' }}>Operation</Typography>
                </StatusCircle>
                <StatusCircle color={getStatusColor(region?.maintenance)}>
                    <div className="progress-wrapper">
                        <CircularProgress 
                            className="outer"
                            variant="determinate" 
                            value={region?.maintenance} 
                            size={80}
                            thickness={4}
                        />
                        <CircularProgress 
                            className="inner"
                            variant="determinate" 
                            value={100} 
                            size={60}
                            thickness={3}
                        />
                        <BuildIcon className="icon" />
                    </div>
                    <Typography sx={{ fontSize: '0.8rem', color: 'blue' }}>Maintenance</Typography>
                </StatusCircle>
                <StatusCircle color={getStatusColor(region?.safety)}>
                    <div className="progress-wrapper">
                        <CircularProgress 
                            className="outer"
                            variant="determinate" 
                            value={region?.safety} 
                            size={80}
                            thickness={4}
                        />
                        <CircularProgress 
                            className="inner"
                            variant="determinate" 
                            value={100} 
                            size={60}
                            thickness={3}
                        />
                        <EngineeringIcon className="icon" />
                    </div>
                    <Typography sx={{ fontSize: '0.8rem', color: 'blue' }}>Safety</Typography>
                </StatusCircle>
            </Box>
        </Box>
    );

    return (
        <Box sx={{ 
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gridTemplateRows: 'repeat(3, auto)',
            gap: 3,
            '& .map-container': {
                gridColumn: '2',
                gridRow: '2 / span 2',
                bgcolor: 'background.paper',
                borderRadius: 1,
                p: 2,
                minHeight: 400,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }
        }}>
            {/* Column 1 */}
            <RegionCard region={regions[0]} /> {/* 1,1 NORTH */}
            <RegionCard region={regions[3]} /> {/* 1,2 STATEWIDE */}
            <RegionCard region={regions[4]} /> {/* 1,3 WESTERN METRO */}

            {/* Column 2 */}
            <RegionCard region={regions[1]} /> {/* 2,1 SOUTHWEST */}
            <Box className="map-container">
                <Typography variant="h6" color="text.secondary">Georgia Map</Typography>
            </Box>

            {/* Column 3 */}
            <RegionCard region={regions[5]} /> {/* 3,1 SOUTHEAST */}
            <RegionCard region={regions[2]} /> {/* 2,3 CENTRAL METRO */}
            <RegionCard region={regions[6]} /> {/* 3,3 EASTERN METRO */}
        </Box>
    );
};

interface MetricsTableProps {
    type: 'Maintenance' | 'Operations' | 'Safety';
}

const MetricsTable = ({ type }: MetricsTableProps) => {
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    const data = [
        { zoneGroup: 'District 1', corridor: 'District 1', percentHealth: '23.71%', missingData: '', detectionUp: '0', pedActuation: '0', commUtil: '0', cctvUtil: '0', flashEvents: '0', detection: '0.00%' },
        { zoneGroup: 'District 1', corridor: 'District 1', percentHealth: '20.80%', missingData: '', detectionUp: '0', pedActuation: '0', commUtil: '0', cctvUtil: '0', flashEvents: '0', detection: '0.00%' },
        { zoneGroup: 'District 1', corridor: 'Downtown Monroe', percentHealth: '20.80%', missingData: '', detectionUp: '1.00', pedActuation: '1.00', commUtil: '1.00', cctvUtil: '1.00', flashEvents: '10.00', detection: '0.00%' },
        { zoneGroup: 'District 1', corridor: 'SR 10 - Gwinnett', percentHealth: '20.80%', missingData: '', detectionUp: '1.00', pedActuation: '1.00', commUtil: '1.00', cctvUtil: '1.00', flashEvents: '10.00', detection: '0.00%' },
        { zoneGroup: 'District 1', corridor: 'SR 10 - Monroe/Walton County', percentHealth: '20.80%', missingData: '', detectionUp: '1.00', pedActuation: '1.00', commUtil: '1.00', cctvUtil: '1.00', flashEvents: '10.00', detection: '0.00%' },
        { zoneGroup: 'District 1', corridor: 'SR 124', percentHealth: '20.80%', missingData: '', detectionUp: '1.00', pedActuation: '1.00', commUtil: '1.00', cctvUtil: '1.00', flashEvents: '10.00', detection: '0.00%' },
        { zoneGroup: 'District 1', corridor: 'SR 140 - Gwinnett', percentHealth: '35.35%', missingData: '', detectionUp: '4.50', pedActuation: '1.00', commUtil: '5.50', cctvUtil: '1.00', flashEvents: '10.00', detection: '83.33%' },
        { zoneGroup: 'District 1', corridor: 'SR 17 Alt - Toccoa/Stephens Co', percentHealth: '20.80%', missingData: '', detectionUp: '1.00', pedActuation: '1.00', commUtil: '1.00', cctvUtil: '1.00', flashEvents: '10.00', detection: '0.00%' },
        { zoneGroup: 'District 1', corridor: 'SR 20', percentHealth: '20.80%', missingData: '', detectionUp: '1.00', pedActuation: '1.00', commUtil: '1.00', cctvUtil: '1.00', flashEvents: '10.00', detection: '0.00%' },
        { zoneGroup: 'District 1', corridor: 'SR 8 - EM', percentHealth: '20.80%', missingData: '', detectionUp: '1.00', pedActuation: '1.00', commUtil: '1.00', cctvUtil: '1.00', flashEvents: '10.00', detection: '0.00%' },
    ];

    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    return (
        <Box>
            <TableContainer component={Paper}>
                <Table size="small">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>Zone Group</StyledTableCell>
                            <StyledTableCell>Corridor</StyledTableCell>
                            <StyledTableCell>Percent Health</StyledTableCell>
                            <StyledTableCell>Missing Data</StyledTableCell>
                            <StyledTableCell>Detection Up</StyledTableCell>
                            <StyledTableCell>Ped Actuation</StyledTableCell>
                            <StyledTableCell>Comm Util</StyledTableCell>
                            <StyledTableCell>CCTV Util</StyledTableCell>
                            <StyledTableCell>Flash Events</StyledTableCell>
                            <StyledTableCell>Detection</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((row, index) => (
                                <StyledTableRow key={index}>
                                    <StyledTableCell>{row.zoneGroup}</StyledTableCell>
                                    <StyledTableCell>{row.corridor}</StyledTableCell>
                                    <StyledTableCell>{row.percentHealth}</StyledTableCell>
                                    <StyledTableCell>{row.missingData}</StyledTableCell>
                                    <StyledTableCell>{row.detectionUp}</StyledTableCell>
                                    <StyledTableCell>{row.pedActuation}</StyledTableCell>
                                    <StyledTableCell>{row.commUtil}</StyledTableCell>
                                    <StyledTableCell>{row.cctvUtil}</StyledTableCell>
                                    <StyledTableCell>{row.flashEvents}</StyledTableCell>
                                    <StyledTableCell>{row.detection}</StyledTableCell>
                                </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[10, 25, 50]}
                component="div"
                count={data.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </Box>
    );
};

interface TrendGraphsProps {
    type: 'maintenance' | 'operation' | 'safety';
}

const TrendGraphs: React.FC<TrendGraphsProps> = ({ type }) => {
    const dispatch = useDispatch();
    const { trendData, loading, error } = useSelector((state: RootState) => state.metrics);

    useEffect(() => {
        dispatch(fetchMetricsTrendData({
            type,
            startDate: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString(), // Last 24 hours
            endDate: new Date().toISOString()
        }));
    }, [dispatch, type]);

    if (loading) {
        return (
            <Box display="flex" justifyContent="center" alignItems="center" height="400px">
                <CircularProgress />
            </Box>
        );
    }

    if (error) {
        return (
            <Box display="flex" justifyContent="center" alignItems="center" height="400px">
                <Typography color="error">{error}</Typography>
            </Box>
        );
    }

    if (!trendData || !trendData.length) {
        return (
            <Box display="flex" justifyContent="center" alignItems="center" height="400px">
                <Typography>No data available</Typography>
            </Box>
        );
    }

    const timestamps = trendData.map(d => d.timestamp);
    const values = trendData.map(d => d.value);
    const trends = trendData.map(d => d.trend);

    return (
        <Box display="flex" gap={2} sx={{ width: '100%', height: '400px' }}>
            <Plot
                data={[
                    {
                        x: timestamps,
                        y: values,
                        type: 'scatter',
                        mode: 'lines+markers',
                        marker: { color: '#4285f4' },
                        name: `${type} Health`
                    }
                ]}
                layout={{
                    title: `${type} Health Over Time`,
                    paper_bgcolor: 'transparent',
                    plot_bgcolor: 'transparent',
                    margin: { t: 30, r: 30, b: 50, l: 50 },
                    width: undefined,
                    height: undefined,
                    autosize: true,
                    showlegend: false,
                    xaxis: {
                        showgrid: true,
                        gridcolor: '#e0e0e0',
                        title: 'Time'
                    },
                    yaxis: {
                        showgrid: true,
                        gridcolor: '#e0e0e0',
                        range: [0, 100],
                        title: 'Health (%)'
                    }
                }}
                config={{ displayModeBar: false, responsive: true }}
                style={{ width: '50%', height: '100%' }}
            />
            <Plot
                data={[
                    {
                        x: timestamps,
                        y: trends,
                        type: 'bar',
                        marker: { color: '#34a853' },
                        name: `${type} Trend`
                    }
                ]}
                layout={{
                    title: `${type} Trend Analysis`,
                    paper_bgcolor: 'transparent',
                    plot_bgcolor: 'transparent',
                    margin: { t: 30, r: 30, b: 50, l: 50 },
                    width: undefined,
                    height: undefined,
                    autosize: true,
                    showlegend: false,
                    xaxis: {
                        showgrid: true,
                        gridcolor: '#e0e0e0',
                        title: 'Time'
                    },
                    yaxis: {
                        showgrid: true,
                        gridcolor: '#e0e0e0',
                        range: [0, 100],
                        title: 'Trend Value'
                    }
                }}
                config={{ displayModeBar: false, responsive: true }}
                style={{ width: '50%', height: '100%' }}
            />
        </Box>
    );
};

const HealthMetrics = () => {
    const [tabValue, setTabValue] = useState(0);

    const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
        setTabValue(newValue);
    };

    return (
        <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs 
                    value={tabValue} 
                    onChange={handleTabChange}
                    variant="scrollable"
                    scrollButtons="auto"
                >
                    <Tab label="Region Status" />
                    <Tab label="Maintenance" />
                    <Tab label="Maintenance Trend" />
                    <Tab label="Operations" />
                    <Tab label="Operation Trend" />
                    <Tab label="Safety" />
                    <Tab label="Safety Trend" />
                </Tabs>
            </Box>
            <TabPanel value={tabValue} index={0}>
                <RegionStatus />
            </TabPanel>
            <TabPanel value={tabValue} index={1}>
                <MetricsTable type="Maintenance" />
            </TabPanel>
            <TabPanel value={tabValue} index={2}>
                <TrendGraphs type="maintenance" />
            </TabPanel>
            <TabPanel value={tabValue} index={3}>
                <MetricsTable type="Operations" />
            </TabPanel>
            <TabPanel value={tabValue} index={4}>
                <TrendGraphs type="operation" />
            </TabPanel>
            <TabPanel value={tabValue} index={5}>
                <MetricsTable type="Safety" />
            </TabPanel>
            <TabPanel value={tabValue} index={6}>
                <TrendGraphs type="safety" />
            </TabPanel>
        </Box>
    );
};

export default HealthMetrics;