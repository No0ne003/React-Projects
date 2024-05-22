import { lazy, Suspense, useState } from "react";
import { ThemeProvider } from "@/components/theme-provider";
import { Route, Routes } from "react-router-dom";
import { useLocation } from "react-router-dom";
// layout
import Header from "@/layouts/header";
// components
import Starfield from "react-starfield";
import Cursor from "@/components/Cursor";
import Loading from "@/components/ui/Loading";
import GoBack from "./components/ui/GoBack";
// Data
import menus from "./pages/tree-view/data";
import Footer from "./layouts/Footer";

// pages
const Home = lazy(() => import("@/pages/Home/Home"));
const NotFound = lazy(() => import("@/pages/404/404"));
const Accordion = lazy(() => import("@/pages/accordion/accordion"));
const RandomColor = lazy(() => import("@/pages/Random-Color/RandomColor"));
const StarRating = lazy(() => import("@/pages/StarRating/StarRating"));
const ImageSlider = lazy(() => import("@/pages/Image-Slider/ImageSlider"));
const LoadMoreData = lazy(() => import("@/pages/Load-More-Data/LoadMoreData"));
const TreeView = lazy(() => import("@/pages/tree-view/TreeView"));
const QRCodeGenerator = lazy(
  () => import("@/pages/Qr-Code-Generator/QRCodeGenerator"),
);
const LightDarkMode = lazy(
  () => import("@/pages/light-dark-mode/Light-dark-mode"),
);
const TabTest = lazy(() => import("@/pages/tree-view/custom-tabs/Tab-test"));
const ModalPopup = lazy(() => import("@/pages/CustomModalPopup/ModalPopup"));
const GithubProfileFinder = lazy(
  () => import("@/pages/GithubProfileFinder/GithubProfileFinder"),
);
const SearchAutoComplete = lazy(
  () => import("@/pages/SearchAutoComplete/SearchAutoComplete"),
);
const TicTacToe = lazy(() => import("@/pages/Tic-Tac-Toe/TicTacToe"));
const FeatureFlagGlobalState = lazy(
  () => import("@/pages/Feature-flag/context/FeatureFlagsContext"),
);
const FeatureFlags = lazy(() => import("@/pages/Feature-flag/FeatureFlags"));
const UseFetchHookTest = lazy(
  () => import("@/pages/CustomHooks/use-fetch/test"),
);
const UseOnClickOutsideTest = lazy(
  () => import("./pages/CustomHooks/use-outside-click/test"),
);
const UseWindowResizeTest = lazy(
  () => import("./pages/CustomHooks/use-window-resize/test"),
);
const ScrollToSection = lazy(
  () => import("./pages/Scroll-to-section/ScrollToSection"),
);
const WeatherApp = lazy(() => import("@/pages/Weather-app/index"));

function App() {
  const [cursorVariant, setCursorVariant] = useState("default");
  const location = useLocation();

  return (
    <ThemeProvider defaultTheme="dark" storageKey="ui-theme">
      <div className="hidden dark:block">
        <Starfield
          starCount={250}
          starColor={[205, 214, 244]}
          speedFactor={0.05}
          backgroundColor="black"
        />
      </div>

      <Header setCursorVariant={setCursorVariant} />
      {location.pathname !== "/React-Projects/" && <GoBack />}
      <Suspense
        fallback={
          <div className="absolute flex justify-center items-center m-auto inset-0">
            <Loading />
          </div>
        }
      >
        <Routes>
          <Route path="React-Projects">
            <Route
              index
              element={
                <>
                  <Home setCursorVariant={setCursorVariant} />
                  <Footer setCursorVariant={setCursorVariant} />
                  <Cursor cursorVariant={cursorVariant} />
                </>
              }
            />
            <Route path="accordion" element={<Accordion />} />
            <Route path="color-generator" element={<RandomColor />} />
            <Route path="star-rating" element={<StarRating />} />
            <Route
              path="image-slider"
              element={
                <ImageSlider url={"https://meme-api.com/gimme"} limit={10} />
              }
            />
            <Route path="load-more-data" element={<LoadMoreData />} />
            <Route path="tree-view" element={<TreeView menus={menus} />} />
            <Route path="qr-code-generator" element={<QRCodeGenerator />} />
            <Route path="light-dark-mode" element={<LightDarkMode />} />
            <Route path="custom-tabs" element={<TabTest />} />
            <Route path="modal-popup" element={<ModalPopup />} />
            <Route
              path="github-profile-finder"
              element={<GithubProfileFinder />}
            />
            <Route
              path="search-auto-complete"
              element={<SearchAutoComplete />}
            />
            <Route path="tic-tac-toe" element={<TicTacToe />} />
            <Route
              path="feature-flags"
              element={
                <FeatureFlagGlobalState>
                  <FeatureFlags />
                </FeatureFlagGlobalState>
              }
            />
            <Route path="use-fetch" element={<UseFetchHookTest />} />
            <Route
              path="use-outside-click"
              element={<UseOnClickOutsideTest />}
            />
            <Route path="use-window-resize" element={<UseWindowResizeTest />} />
            <Route
              path="scroll-to-particular-section"
              element={<ScrollToSection />}
            />
            <Route path="weather-app" element={<WeatherApp />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Suspense>
    </ThemeProvider>
  );
}

export default App;
