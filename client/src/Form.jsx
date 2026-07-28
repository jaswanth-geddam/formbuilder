import {DndProvider} from "react-dnd"
import {HTML5Backend} from "react-dnd-html5-backend"
import DragDrop from "./DragDrop"
function Form() {
 



  return (
    <>
    <DndProvider backend={HTML5Backend} >
      <DragDrop />
      </DndProvider>
   
    </>
    
  );
}

export default Form;
