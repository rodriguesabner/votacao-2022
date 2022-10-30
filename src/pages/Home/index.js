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
                <UrnasApuradas>
                    Urnas apuradas: {generalInfo.pst}%
                </UrnasApuradas>

                <p>
                    Acompanhe em tempo real.
                </p>

                <LastUpdateAt>
                    Última atualização: {generalInfo.hg}
                </LastUpdateAt>
            </Header>

            <CandidatesList>
                {candidates.map(candidate => (
                    <Candidate key={candidate.nm} candidate={candidate}/>
                ))}
            </CandidatesList>
        </Layout>
    );
};

export default Home;
