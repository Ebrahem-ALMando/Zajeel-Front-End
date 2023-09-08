import React, {useEffect, useState} from "react";
import styled from "styled-components";
import Navbar from "./Navbar";

import ViewCardInfo from "./ViewCardInfo";
import Info from "./Info";
import LastAddItem from "./LastAddItem";
/*import Info from "./Info";
import ViewCardInfo from "./viewCardInfo";
import HomePage from "./GohomePage";
import Members from "./Members";
import { themeColor2} from "../../utils";
import Students from "./Students";*/
function MainContent() {
    return(
        <Container>
            <Navbar />
            <SubContainer>
                <SectionOne>
                    <ColumnOne1>
                        <ViewCardInfo title={"الرسائل الواردة"}
                                      /*count={countUsers||"0"}*/
                                      count={500||"0"}
                                      time={"  منذ اخر شهر"}
                                      increment={"10%"}
                        />
                        <Info
                            /*countSectionTow={countEnquiries}*/
                            countSectionTow={100}
                            titleSectionTow={'العربات'}
                            timeSectionTow={"هذا الاسبوع 10%"}
                            /*countSectionOne={countMessage}*/
                            countSectionOne={200}
                            timeSectionOne={"هذا الشهر 20%"}
                            titleSectionOne={"السائقين"}
                            badgeOne={"قديمة"}
                            badgeTow={"جديدة"}
                            url={"/Enquiries"}
                        />

                    </ColumnOne1>
                    <ColumnTwo1>
                        <TitleText>المضافين حديثا </TitleText>
                        <LastAddItem
                            dataDrivers={['']}
                            viewItem={'عرض جميع الاعضاء'}
                        />
                    </ColumnTwo1>
                </SectionOne>
                <SectionOne>
                    <ColumnOne1>
                        <ViewCardInfo title={"الرحلات"} count={70}
                                      time={"  منذ اخر شهر"}
                                      increment={"20%"}
                                      bgcolor={"#9b67e5"}
                        />
                        <Info
                            countSectionTow={100}
                            timeSectionTow={"هذا الشهر 20%"}
                            titleSectionTow={"الخطوط"}
                            countSectionOne={200}
                            timeSectionOne={"هذا الشهر 5%"}
                            titleSectionOne={"المناطق "}
                            badgeOne={"بعيدة"}
                            badgeTow={"قريبة"}
                            url={"/courses"}
                        />
                    </ColumnOne1>
                    <ColumnTwo1>
                        <LastAddItem
                            dataDrivers={['']}
                            viewItem={'عرض جميع العربات'}
                        />
                    </ColumnTwo1>
                </SectionOne>

                <SectionTwo>
                    {/*<ColumnOne2>*/}
                    {/*    <InvoiceContainer>*/}
                    {/*        <TitleText></TitleText>*/}

                    {/*    </InvoiceContainer>*/}
                    {/*</ColumnOne2>*/}
                    <ColumnTwo2>
                        <TitleText>الصفحة الرئيسية</TitleText>
                       {/* <HomePage/>*/}

                    </ColumnTwo2>

                </SectionTwo>

            </SubContainer>

        </Container>
    )
}

const Container = styled.div`
  width: 80%;
  color: white;
  border-bottom-right-radius: 2rem;
  border-top-right-radius: 2rem;
  margin: 1rem 8rem 1rem 4rem;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 1rem 0 0 0;
  }
`;

const SubContainer = styled.div`
  margin: 0.5rem 0;
  height: 80%;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 4rem;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    height: 100%;
  }
`;
const SectionOne = styled.div`
  display: flex;
  justify-content: space-between;
  height: 40%;
  gap: 2rem;
  width: 100%;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    flex-direction: column;
    align-items: center;
    height: max-content;
  }
`;
const ColumnOne1 = styled.div`
  display: flex;
  gap: 3rem;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    width: 100%;
  }
`;

const ColumnTwo1 = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    height: max-content;
    justify-content: center;
    align-items: center;
  }
`;

const TitleText = styled.h3`
  height: 26%;
  /* padding-top */
`;

const SectionTwo = styled.div`
  display: flex;
  gap: 2rem;
  height: 26vh;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    flex-direction: column;
    height: max-content;
    width: 100%;
  }
`;
const ColumnOne2 = styled.div`
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
  }
`;
const InvoiceContainer = styled.div`
  height: 60%;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    height: max-content;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
  }
`;

const ColumnTwo2 = styled.div`
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`;

export default MainContent;
