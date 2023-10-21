import { BtnLoad } from "./Button.styled"

export const Btn = ({ onclick }) => {
    return (
        <>
            <BtnLoad type="button" onClick={onClick}>
                Load more
            </BtnLoad>
        </>
    )
}