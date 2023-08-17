import { Btn, WrapBtn } from "./Button.styled"

export const Button = ({onClick}) => {
    return (
        <WrapBtn>
          <Btn type="button" onClick={onClick}>Load more</Btn>
        </WrapBtn> 
    )
}