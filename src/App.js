import {useEffect, useState} from "react";
import Home from "./pages/Home";
import {GlobalStyles} from "./styles/GlobalStyles";
import Header from "./components/Header";
import Footer from "./components/Footer";
import {resultEletions2022} from "./mock/result";

function App() {
    const [candidates, setCandidates] = useState([]);
    const [generalInfo, setGeneralInfo] = useState([]);

    useEffect(() => {
        function getData() {
            const data = resultEletions2022;
            setCandidates(data.cand);
            setGeneralInfo(data);
        }

        getData();

        return () => {
            setCandidates([]);
            setGeneralInfo([]);
        };
    }, []);


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
