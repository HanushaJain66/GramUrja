import App from "./App";
import DataProvider from "./context/dataContext";

const Home = ()=>{
    return (
        <DataProvider>
            <App/>
        </DataProvider>
    )
}
export default Home;