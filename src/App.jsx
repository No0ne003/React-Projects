import { ThemeProvider } from "@/components/theme-provider";
import { Route, Routes } from "react-router-dom";
// Data
import menus from "./pages/tree-view/data";
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
import LightDarkMode from "./pages/light-dark-mode/Light-dark-mode";
import TabTest from "./pages/tree-view/custom-tabs/Tab-test";
import { ModalPopup } from "./pages/CustomModalPopup/ModalPopup";
import { GithubProfileFinder } from "./pages/GithubProfileFinder/GithubProfileFinder";
import { SearchAutoComplete } from "./pages/SearchAutoComplete/SearchAutoComplete";
import { TicTacToe } from "./pages/TicTacToe";
import FeatureFlagGlobalState from "./pages/Feature-flag/context/FeatureFlagsContext";
import { FeatureFlags } from "./pages/Feature-flag/FeatureFlags";
import UseFetchHookTest from "./pages/CustomHooks/use-fetch/test";
import UseOnClickOutsideTest from "./pages/CustomHooks/use-outside-click/test";
import { UseWindowResizeTest } from "./pages/CustomHooks/use-window-resize/test";
import ScrollToSection from "./pages/ScrollToSection";
import { useState } from "react";
import Cursor from "./components/Cursor";

function App() {
  const [cursorVariant, setCursorVariant] = useState("default");

  return (
    <ThemeProvider defaultTheme="system" storageKey="ui-theme">
      <Header setCursorVariant={setCursorVariant} />
      <Routes>
        <Route path="React-Projects">
          <Route
            index
            element={<HomeWithCursor cursorVariant={cursorVariant} />}
          />

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
          {/* Light Dark Mode */}
          <Route path="light-dark-mode" element={<LightDarkMode />} />
          {/* Custom tabs component */}
          <Route path="custom-tabs" element={<TabTest />} />
          {/* Custom Modal Popup */}
          <Route path="modal-popup" element={<ModalPopup />} />
          {/* Github Profile Finder */}
          <Route
            path="github-profile-finder"
            element={<GithubProfileFinder />}
          />
          {/* Search Auto-Complete */}
          <Route path="search-auto-complete" element={<SearchAutoComplete />} />
          {/* Tic Tac Toe */}
          <Route path="tic-tac-toe" element={<TicTacToe />} />
          {/* Feature Flag */}
          <Route
            path="feature-flags"
            element={
              <FeatureFlagGlobalState>
                <FeatureFlags />
              </FeatureFlagGlobalState>
            }
          />
          {/* useFetch */}
          <Route path="use-fetch" element={<UseFetchHookTest />} />
          {/* useOutsideClick */}
          <Route path="use-outside-click" element={<UseOnClickOutsideTest />} />
          {/* useWindowResize */}
          <Route path="use-window-resize" element={<UseWindowResizeTest />} />
          {/* scroll to particular section */}
          <Route
            path="scroll-to-particular-section"
            element={<ScrollToSection />}
          />

          {/* Error Page */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
}

function HomeWithCursor({ cursorVariant }) {
  return (
    <>
      <Home />
      <Cursor cursorVariant={cursorVariant} />
    </>
  );
}

export default App;
