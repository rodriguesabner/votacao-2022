import React from 'react';
import Avatar from "../Avatar";
import {
    CandidateCard,
    CandidateInfo,
    CandidatePartido,
    PercentInfo,
    Separator,
    TopInfoCandidate,
    WrapperInfo
} from "./styles";

const Candidate = ({candidate}) => {
    const sanitizeCandidateName = () => {
        const name = candidate.nm.toLowerCase();
        return name.charAt(0).toUpperCase() + name.slice(1);
    }

    let result = Math.round(candidate.vap*100)/100;

    return (
        <CandidateCard>
            <Avatar candidateName={candidate.nm}/>

            <CandidateInfo>
                <PercentInfo>
                    <h2>
                        {candidate.pvap}%
                    </h2>

                    <p>
                        {result.toLocaleString("pt-BR")} votos
                    </p>
                </PercentInfo>

                <WrapperInfo>
                    <Separator
                        className={'candidate-color'}
                        background={candidate.nm.includes("LULA") ? '#ad4343' : '#439143'}
                    />

                    <TopInfoCandidate>
                        <h2>
                            {sanitizeCandidateName()}
                        </h2>
                        <p>
                            {candidate.n}
                        </p>
                    </TopInfoCandidate>

                    <CandidatePartido>
                        {candidate.cc.split("-")[0]}
                    </CandidatePartido>
                </WrapperInfo>
            </CandidateInfo>
        </CandidateCard>
    );
};

export default Candidate;
