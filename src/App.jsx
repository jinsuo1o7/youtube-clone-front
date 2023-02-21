import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Outlet } from "react-router-dom";
import { YoutubeApiProvider } from "./context/YoutubeApiContext";
import Navbar from "./layout/Navbar";

function App() {
  const queryClient = new QueryClient();

  return (
    <>
      <Navbar />
      <YoutubeApiProvider>
        <QueryClientProvider client={queryClient}>
          <Outlet />
        </QueryClientProvider>
      </YoutubeApiProvider>
    </>
  );
}

export default App;
