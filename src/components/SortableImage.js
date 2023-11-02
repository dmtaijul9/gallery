import React from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

import { Image } from "./Image";

export const SortableImage = (props) => {
  const sortable = useSortable({ id: props.sort });

  const {
    attributes,
    listeners,
    isDragging,
    setNodeRef,
    transform,
    transition,
  } = sortable;

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

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
