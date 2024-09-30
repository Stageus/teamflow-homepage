import './global.css';
import { DarkThemeProvider } from "@shared/store/darkTheme";

function App() {

  return (
    <>
    <DarkThemeProvider>
      <div>children</div>
    </DarkThemeProvider>
    </>
  )
}

export default App
