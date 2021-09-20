import {
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  TextField,
} from '@material-ui/core';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import React, { useState } from 'react';
import { render } from 'velocityjs';
import './App.css';

function App() {
  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          type: 'dark',
        },
      }),
    []
  );

  const [template, setTemplate] = useState('');
  const [model, setModel] = useState('');
  const [html, setHtml] = useState('');

  const handleTemplateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTemplate(event.target.value);
  };
  const handleModelChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setModel(event.target.value);
  };

  const handlePreview = () => {
    const modelObj = JSON.parse(model);
    console.log(modelObj);
    const rendered = render(template, modelObj);
    setHtml(rendered);
  };

  // const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <div className="App">
        <main className="App-body">
          <Container maxWidth="lg">
            {/* <img src={logo} className="App-logo" alt="logo" /> */}
            <p>Enter the velocity template and JSON model and hit preview.</p>
            <Grid container justifyContent="center" spacing={3}>
              <Grid item xs={7}>
                <Card elevation={1}>
                  <CardContent>
                    <TextField
                      id="filled-multiline-flexible"
                      label="Velocity template"
                      multiline
                      maxRows={15}
                      rows={15}
                      value={template}
                      onChange={handleTemplateChange}
                      fullWidth
                    />
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={5}>
                <Card elevation={1}>
                  <CardContent>
                    <TextField
                      id="filled-multiline-flexible"
                      label="Velocity Context"
                      multiline
                      maxRows={15}
                      rows={15}
                      value={model}
                      onChange={handleModelChange}
                      fullWidth
                    />
                  </CardContent>
                </Card>
              </Grid>

              <Grid item xs={12}>
                <Button
                  color="primary"
                  variant="contained"
                  onClick={handlePreview}
                >
                  View Html
                </Button>
              </Grid>

              <Grid item xs={12}>
                <Card elevation={1}>
                  <CardContent>
                    <TextField
                      id="filled-multiline-flexible"
                      label="Rendered HTML"
                      multiline
                      maxRows={30}
                      rows={30}
                      value={html}
                      fullWidth
                    />
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Container>
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
