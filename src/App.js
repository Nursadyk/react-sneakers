import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Content from "./page/content/Content";
import Overlay from "./components/overlay/Overlay";
import Admin from "./components/admin/Admin";
import SortItems from "./page/sortItems/SortItems";
function App() {
  return (
    <div className="App">
      <Header />
      <Overlay />
      <Routes>
        <Route path="/" element={<SortItems />}>
          <Route index element={<Content />} />
        </Route>
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </div>
  );
}

export default App;
