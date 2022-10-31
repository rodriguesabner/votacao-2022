import React from 'react';
import {
    CandidatesList,
    Header, LastUpdateAt,
    Layout, UrnasApuradas,
} from "./styles";
import Candidate from "../../components/Candidate";

const Home = ({candidates, generalInfo}) => {
    return (
        <Layout>
            <Header>
                <p>
                    Resultados das Eleições
                </p>

                <LastUpdateAt>
                    Última atualização: {generalInfo.dt} {generalInfo.hg}
                </LastUpdateAt>
            </Header>

            <CandidatesList>
                {candidates.map(candidate => (
                    <Candidate
                        key={candidate.nm}
                        candidate={candidate}
                    />
                ))}
            </CandidatesList>

            <UrnasApuradas>
                Urnas apuradas: {generalInfo.pst}%
            </UrnasApuradas>
        </Layout>
    );
};

export default Home;
