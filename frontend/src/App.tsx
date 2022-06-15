import React, {useEffect, useState} from "react";
import {Content, EdgeSidebar, Root} from "@mui-treasury/layout";
import {
	Box,
	Container,
	CssBaseline,
	Divider,
	Icon,
	Link,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	Stack,
	Typography,
} from "@mui/material";
import {SnackbarProvider} from "notistack";
import {createTheme, ThemeProvider} from "@mui/material/styles";
import {FormatListBulleted, HelpOutline, PlaylistAdd} from "@mui/icons-material";
import SettingsIcon from '@mui/icons-material/Settings';

const theme = createTheme({});

const Layout = ({children}: {
	children: React.ReactNode
}) => {
	const [mounted, setMounted] = useState(false);
	useEffect(() => {
		setMounted(true)
	}, [])

	return (<ThemeProvider theme={theme}>
		<SnackbarProvider
			autoHideDuration={4000}
			preventDuplicate
			iconVariant={{
				success: '✅ ', error: '⚠️ ', warning: '⚠️ ', info: 'ℹ️ ',
			}}
			anchorOrigin={{
				vertical: 'top', horizontal: 'right',
			}}
			// @ts-ignore
			// TransitionComponent={Slide}
		>
			{/*<Root scheme={scheme}>*/}
			<Root
				// scheme={getFixedScheme()}
				scheme={{
					leftEdgeSidebar: {
						"autoCollapse": "md",
						config: {
							xs: {
								variant: "temporary", width: 256,
							},
							md: {
								variant: "permanent",
								width: 256,
								collapsible: true,
								collapsedWidth: 64,
								headerMagnetEnabled: true,
								uncollapsedOnHover: true, // in v4, it was `autoExpanded`
							},
						},
					},
				}}
			>
				<CssBaseline/>
				{mounted && <EdgeSidebar anchor="left">
                    <Typography variant="h5" component="h5" color="primary"
                                style={{textAlign: "center", margin: "40px auto 0", width: "100%"}}
                    >
                        <Link
                            href={"/"}
                            underline="none"
                        >

                        </Link>
                    </Typography>

                    <Box sx={{
						position: 'absolute', bottom: 0, width: "100%",
					}}>
                        <List
							// sx={style}
                            component="nav" aria-label="mailbox folders">
                            <ListItem button>
                                <Link
                                    href="/help"
                                    underline="none"
                                    sx={{m: 0, p: 0}}
                                >
                                    <Stack direction="row" alignItems="center">
                                        <ListItemIcon>
                                            <Icon><HelpOutline/></Icon>
                                        </ListItemIcon>
                                        <ListItemText>Wie erstelle ich mein individuelles Experiment</ListItemText>
                                    </Stack>

                                </Link>
                            </ListItem>
                            <Divider/>
                            <ListItem button>
                                <Link
                                    href="/settings"
                                    underline="none"
                                >
                                    <Stack direction="row" alignItems="center">
                                        <ListItemIcon>
                                            <Icon><SettingsIcon/></Icon>
                                        </ListItemIcon>
                                        <ListItemText>Einstellungen</ListItemText>
                                    </Stack>
                                </Link>
                            </ListItem>
                        </List>
                    </Box>

                </EdgeSidebar>}

				<Content>
					<Container
						sx={{pt: "46px"}}
						style={{
							width: "100%", padding: "46px 86px 0 86px ",
						}}
					>
						{children}
					</Container>
				</Content>
			</Root>
		</SnackbarProvider>
	</ThemeProvider>)

};

function App() {
	return (
		<Layout>
			=)
		</Layout>
	);
}

export default App;
