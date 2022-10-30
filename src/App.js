import {useState} from "react";
import api from "./services/api";
import Home from "./pages/Home";
import {GlobalStyles} from "./styles/GlobalStyles";
import Header from "./components/Header";
import Footer from "./components/Footer";
import useInterval from "./hooks/useInterval";

function App() {
    const [candidates, setCandidates] = useState([]);
    const [generalInfo, setGeneralInfo] = useState([]);

    async function getData() {
        const {data} = await api.get(`/br-c0001-e000545-r.json`, {
            withCredentials: false,
        });
        setCandidates(data.cand);

        delete data.cand;
        setGeneralInfo(data);
    }

    useInterval(async () => {
        await getData();
    }, 5000);

    return (
        <div className="App">
            <Header/>
            <Home
                candidates={candidates}
                generalInfo={generalInfo}
            />
            <Footer/>
            <GlobalStyles/>
        </div>
    );
}

export default App;
