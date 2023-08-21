import { CoursePart } from "../App"
import Part from "./Part";

interface ContentProps {
    courseParts: CoursePart[];
}

const Content = (props : ContentProps): JSX.Element => {

    
return(
    <ul>
        {props.courseParts.map( 
            (part : CoursePart): JSX.Element  =>  <li key = {part.name}> <Part part={part} /> </li>
        )}
  </ul>
)};

export default Content;
