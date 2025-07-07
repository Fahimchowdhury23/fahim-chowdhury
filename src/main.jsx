import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import Layout from "./Pages/Layout.jsx";
import ProjectDetails from "./Pages/ProjectDetails.jsx";
import Loader from "./Components/Loader.jsx";
import ScrollRevealSection from "./Components/ScrollRevealSection.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        index: true,
        element: <Layout></Layout>,
      },
      {
        path: "project/:id",
        loader: () => fetch("/projects.json"),
        element: (
          <ScrollRevealSection>
            <ProjectDetails></ProjectDetails>
          </ScrollRevealSection>
        ),
        hydrateFallbackElement: <Loader></Loader>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
