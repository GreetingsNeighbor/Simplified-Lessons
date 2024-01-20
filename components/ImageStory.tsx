/**
 * this component is used to display a story image. Takes a list of images or action then creates an animated story
 * the format of the images is as follows:
 * {
 * image: string,
 * duration: number
 * 
 * 
}
    */

class Instruction {
    constructor(
        public sentence: string,
        public visuals: Visual[]
    ) { }
}


class Visual {
    constructor(
        public type: string,
        public content: string,
        public attributes: object
    ) { }
}

const ImageStore = ({ instructions }: { instructions: Instruction[] }) => {
    return (
        <div> Image story {instructions.map((instruction) => {
            return (
                instruction.visuals.map((visual) => {
                    return (
                        <div>
                            {visual.type}
                            {visual.content}
                            {visual.attributes.toString()}
                        </div>
                    )
                })
            )
        })}
        </div>
    )
}
