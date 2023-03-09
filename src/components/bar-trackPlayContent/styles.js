import styled from "styled-components";

export const TrackPlayContain = styled.div`
width: auto;
display: -ms-grid;
display: grid;
-ms-grid-columns: auto 1fr;
    grid-template-columns: auto 1fr;
    grid-template-areas: "image author" "image album";
-webkit-box-align: center;
    -ms-flex-align: center;
        align-items: center;
`;