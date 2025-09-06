
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import HTMLIntro from "./pages/HTMLIntro";
import HTMLSetup from "./pages/html/setup";
import HTMLTags from "./pages/html/tags";
import HTMLSemantics from "./pages/html/semantics";
import HTMLExercise from "./pages/html/exercise";
import HTMLQuiz from "./pages/html/quiz";
import CSSIntro from "./pages/css/index";
import CSSExternal from "./pages/css/external";
import CSSSelectors from "./pages/css/selectors";
import CSSProperties from "./pages/css/styling";
import CSSExercise from "./pages/css/exercise";
import CSSFlexbox from "./pages/css/flexbox";
import CSSQuiz from "./pages/css/quiz";
import JavaScriptIntro from "./pages/javascript/index";
import JavaScriptScripts from "./pages/javascript/scripts";
import JavaScriptBasics from "./pages/javascript/basics";
import JavaScriptDOM from "./pages/javascript/dom";
import JavaScriptAsync from "./pages/javascript/async";
import JavaScriptExercise from "./pages/javascript/exercise";
import JavaScriptQuiz from "./pages/javascript/quiz";
import ReactBasics from "./pages/react-basics/index";
import VSCodeSetup from "./pages/react-basics/setup";
import TerminalBasics from "./pages/react-basics/terminal";
import CreateReactApp from "./pages/react-basics/create-react-app";
import ReactComponents from "./pages/react-basics/components";
import ReactExercise from "./pages/react-basics/exercise";
import ReactBasicsQuiz from "./pages/react-basics/quiz";
import ReactStateManagement from "./pages/react-intermediate/index";
import ReactHooks from "./pages/react-intermediate/hooks";
import ReactStructure from "./pages/react-intermediate/structure";
import ReactForms from "./pages/react-intermediate/forms";
import ReactAPI from "./pages/react-intermediate/api";
import ReactProject from "./pages/react-intermediate/project";
import ReactIntermediateQuiz from "./pages/react-intermediate/quiz";
import Resources from "./pages/Resources";
import Glossary from "./pages/Glossary";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/html" element={<HTMLIntro />} />
          <Route path="/html/setup" element={<HTMLSetup />} />
          <Route path="/html/tags" element={<HTMLTags />} />
          <Route path="/html/semantics" element={<HTMLSemantics />} />
          <Route path="/html/exercise" element={<HTMLExercise />} />
          <Route path="/html/quiz" element={<HTMLQuiz />} />
          <Route path="/css" element={<CSSIntro />} />
          <Route path="/css/external" element={<CSSExternal />} />
          <Route path="/css/selectors" element={<CSSSelectors />} />
          <Route path="/css/styling" element={<CSSProperties />} />
          <Route path="/css/exercise" element={<CSSExercise />} />
          <Route path="/css/flexbox" element={<CSSFlexbox />} />
          <Route path="/css/quiz" element={<CSSQuiz />} />
          <Route path="/javascript" element={<JavaScriptIntro />} />
          <Route path="/javascript/scripts" element={<JavaScriptScripts />} />
          <Route path="/javascript/basics" element={<JavaScriptBasics />} />
          <Route path="/javascript/dom" element={<JavaScriptDOM />} />
          <Route path="/javascript/async" element={<JavaScriptAsync />} />
          <Route path="/javascript/exercise" element={<JavaScriptExercise />} />
          <Route path="/javascript/quiz" element={<JavaScriptQuiz />} />
          <Route path="/react-basics" element={<ReactBasics />} />
          <Route path="/react-basics/setup" element={<VSCodeSetup />} />
          <Route path="/react-basics/terminal" element={<TerminalBasics />} />
          <Route path="/react-basics/create-react-app" element={<CreateReactApp />} />
          <Route path="/react-basics/components" element={<ReactComponents />} />
          <Route path="/react-basics/exercise" element={<ReactExercise />} />
          <Route path="/react-basics/quiz" element={<ReactBasicsQuiz />} />
          <Route path="/react-intermediate" element={<ReactStateManagement />} />
          <Route path="/react-intermediate/hooks" element={<ReactHooks />} />
          <Route path="/react-intermediate/structure" element={<ReactStructure />} />
          <Route path="/react-intermediate/forms" element={<ReactForms />} />
          <Route path="/react-intermediate/api" element={<ReactAPI />} />
          <Route path="/react-intermediate/project" element={<ReactProject />} />
          <Route path="/react-intermediate/quiz" element={<ReactIntermediateQuiz />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/glossary" element={<Glossary />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
