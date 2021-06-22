import gamePic from "../public/game.png"
import Image from 'next/image'

const GameBox = () =>{
    return(
        <Image src={gamePic} />
    )
}
export default GameBox;