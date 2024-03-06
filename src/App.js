//1. Cài đặt các npm package cho Stater Code
//Để bắt đầu sử dụng được Starter Code, bạn sẽ cần cài đặt các Node Module phục vụ cho dự án. Bạn cần mở Terminal, truy cập vào thư mục Starter Code và chạy câu lệnh sau:
//npm install
// Sau khi đã hoàn thành, nếu bạn thấy xuất hiện thêm thư mục node_modules thì tức là bạn đã cài đặt thành công. Lúc này bạn có thể chạy dự án bằng câu lệnh:
// npm start
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Detail from "./pages/detail/Detail";
import Search from "./pages/search/Search";
import Register from "./pages/home/Register/Register";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/detail" element={<Detail />} />
        {/* <Route path="/Register" element={<Register />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
