import { Layout } from "./Layout";
import { Calendar } from "./Calendar/Calendar";
import { SideBar } from "./SideBar/SideBar";

function App() {
  return (
    <>
      <Layout>
        <SideBar />
        <Calendar />
      </Layout>
    </>
  );
}

export default App;
