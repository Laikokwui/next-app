
import styled from "@emotion/styled";

export const ToggleButton = styled.button`
    --toggle-width: 80px;
    --toggle-height: 38px;
    --toggle-padding: 4px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-around;
    font-size: 1.5rem;
    line-height: 1;
    width: var(--toggle-width);
    height: var(--toggle-height);
    padding: var(--toggle-padding);
    border: 0;
    border-radius: calc(var(--toggle-width) / 2);
    cursor: pointer;
    background: var(--color-bg-toggle);
    transition: background 0.25s ease-in-out;
`;

