import styled from "styled-components";

export const SelectStepper = styled.div`

    width: 73px;
    height: 30px;

    border-radius: 4px;

    border: 1px solid ${props => props.theme.colors.primary};

    display: flex;
    align-items: center;
    justify-content: space-between;

    button {
        border: none;
        background: transparent;
        cursor: pointer;
    }

    .stepper__number {
        font-size: 14px;
        color: ${props => props.theme.colors.highEmphasis};
    }
`