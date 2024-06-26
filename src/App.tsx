import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import './App.css';
import MyTemplates from './pages/MyTemplates/MyTemplates';
import FillData from './pages/FillData/FillData';
import Verification from './pages/Verification/Verification';
import Tokenization from './pages/Tokenization/Tokenization';

const theme = createTheme({
});

const App: React.FC = () => {


  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App">
        <h1>ASSET TYPE:</h1>
        <div className='main-div'>
          <h1>My Templates</h1>
          <MyTemplates />
        </div>
        <h1>FILL DATA:</h1>
        <div className='main-div'>
          <h1>Fill Data</h1>
          <FillData />
        </div>
        <h1>VERIFICATION:</h1>
        <div className='main-div'>
          <h2>Verifiction Page:</h2>
          <Verification />
        </div>
        <h1>TOKENIZATION:</h1>
        <div className='main-div'>
          <h2>Tokenization Page:</h2>
          <Tokenization />
        </div>
      </div>
      
    </ThemeProvider>
  );
};

export default App;
