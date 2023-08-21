
import { CoursePart } from "../App";

interface PartProps {
    part: CoursePart;
}

const Part = (props: PartProps) : JSX.Element => {

    switch (props.part.kind) {
        case "basic":
            return (
                <p>
                    <b>{props.part.name} {props.part.exerciseCount}</b>
                    <br/>
                    <i>{props.part.description}</i>
                </p>
            )
        case "group":

            return (
                <p>
                    <b>{props.part.name} {props.part.exerciseCount}</b>
                    <br/>
                    Project exercises {props.part.groupProjectCount}
                </p>

            )  
        case "background":

            return (
                <p>
                    <b>{props.part.name} {props.part.exerciseCount}</b>
                    <br/>
                    <i>{props.part.description}</i>
                    <br/>
                    Background material: {props.part.backgroundMaterial}
                </p>

        )
        
        case "requirements":
            return (
                <p>
                    <b>{props.part.name} {props.part.exerciseCount}</b>
                    <br/>
                    <i>{props.part.description}</i>
                    <br/>
                    required skills: {props.part.requirements.map (
                        (requirement : string, index: number, array: string[]) : JSX.Element => 
                            <span key = {requirement}>{requirement}{index < array.length-1 ? <span>,</span> : null} </span>
                    )}
                </p>
            )
    }
}

export default Part;