import Root from "./root/Index";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <Root />
      <ToastContainer />
    </div>
  );
}

export default App;
