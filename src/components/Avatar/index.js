import React from 'react';
import {Image} from "./styles";

const Avatar = ({candidateName}) => {
    const candidatesImages = ({
        "LULA": "https://classic.exame.com/wp-content/uploads/2021/05/LULA-RICARDO-STUCKERT.jpg?quality=70&strip=info&w=1024",
        "BOLSONARO": "https://static.poder360.com.br/2022/06/jair-bolsonaro-20jun-2022.jpg"
    });

    const renderImage = () => {
        return (
            candidateName.includes('LULA') ? (
                <Image
                    alt={candidateName}
                    src={candidatesImages["LULA"]}
                />
            ) : (
                <Image
                    alt={candidateName}
                    src={candidatesImages["BOLSONARO"]}
                />
            )
        )
    }

    return (
        <>
            {renderImage()}
        </>
    );
};

export default Avatar;
