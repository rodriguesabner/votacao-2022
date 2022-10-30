import React from 'react';
import {AuthorCard, AuthorInfo, Layout, OriginData, SocialMediaWrapper} from "./styles";

const Footer = () => {
    return (
        <Layout>
            <OriginData>
                Fonte dos dados: TSE
            </OriginData>

            <AuthorCard>
                <img
                    draggable={false}
                    src={"https://github.com/rodriguesabner.png"}
                    alt={"Abner Rodrigues"}
                    id={"avatar"}
                />
                <AuthorInfo>
                    <h2>
                        Abner Rodrigues
                    </h2>
                    <p>
                        Software Engineer
                    </p>

                    <SocialMediaWrapper>
                        <a
                            target={"_blank"}
                            href={"https://github.com/rodriguesabner"}
                            rel="noreferrer"
                        >
                            <img
                                src={"https://cdn-icons-png.flaticon.com/512/25/25231.png"}
                                alt={"Github"}
                            />
                        </a>

                        <a
                            target={"_blank"}
                            href={"https://instagram.com/rodriguesabner_"}
                            rel="noreferrer"
                        >
                            <img
                                style={{marginLeft: "10px"}}
                                src={"https://upload.wikimedia.org/wikipedia/commons/5/58/Instagram-Icon.png"}
                                alt={"Instagram"}
                            />
                        </a>
                    </SocialMediaWrapper>
                </AuthorInfo>
            </AuthorCard>
        </Layout>
    );
};

export default Footer;
