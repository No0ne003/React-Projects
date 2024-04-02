import { ThemeProvider } from "@/components/theme-provider";
import { Route, Routes } from "react-router-dom";
// Data
import menus from "./pages/tree-view/data";
import { projects } from "./data/projects";
// Layouts
import Header from "@/layouts/header";
// Pages
import Home from "@/pages/Home";
import NotFound from "@/pages/404";
import Accordion from "@/pages/accordion/accordion";
import RandomColor from "@/pages/RandomColor";
import StarRating from "@/pages/StarRating";
import ImageSlider from "@/pages/ImageSlider";
import LoadMoreData from "./pages/LoadMoreData";
import TreeView from "./pages/tree-view/TreeView";
import QRCodeGenerator from "./pages/QRCodeGenerator";

function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="ui-theme">
      <Header />
      <Routes>
        <Route path="React-Project">
          <Route index element={<Home />} />
          {/* Accordion component */}
          <Route path="accordion" element={<Accordion />} />
          {/* Random color generator */}
          <Route path="color-generator" element={<RandomColor />} />
          {/* Star Rating */}
          <Route path="star-rating" element={<StarRating />} />
          {/* image Slider */}
          <Route
            path="image-slider"
            element={
              <ImageSlider url={"https://meme-api.com/gimme"} limit={10} />
            }
          />
          {/* load more data button */}
          <Route path="load-more-data" element={<LoadMoreData />} />
          {/* tree view */}
          <Route path="tree-view" element={<TreeView menus={menus} />} />
          {/* generate QR code */}
          <Route path="qr-code-generator" element={<QRCodeGenerator />} />

          {/* Error Page */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
