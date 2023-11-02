import React from "react";

import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

import { Image } from "./Image";

export const SortableImage = (props) => {
  /* introducing dnd kit ( how to sort my images after making dragging change ) */
  const sortable = useSortable({ id: props.sort });

  /* Distructuring variables from dnd kit sortable hook */
  const {
    attributes,
    listeners,
    isDragging,
    setNodeRef,
    transform,
    transition,
  } = sortable;

  /* making a style object for image component */
  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  /* returning the Image component and passing some usefull props throw this component */
  return (
    <Image
      ref={setNodeRef}
      product={props.image}
      handleCheck={props.handleCheck}
      checked={props.checked}
      isDragging={isDragging}
      style={style}
      {...props}
      {...attributes}
      {...listeners}
    />
  );
};
