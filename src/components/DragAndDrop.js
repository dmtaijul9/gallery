import React, { useEffect, useState } from "react";

/* imported all required library for drag and drop component */
import {
  DndContext,
  closestCenter,
  MouseSensor,
  TouchSensor,
  DragOverlay,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  rectSortingStrategy,
} from "@dnd-kit/sortable";
import { Grid } from "./Grid";
import { SortableImage } from "./SortableImage";
import { Image } from "./Image";
import UploadImage from "./UploadImage";

const DragAndDrop = ({ images, checked, handleCheck }) => {
  /* making a array for sorting or reordering items (images) in gallery from id of images array of object */
  const [items, setItems] = useState(
    [...images].map((item) => item?.id?.toString())
  );

  /* state for active image which is grabbing*/
  const [activeId, setActiveId] = useState(null);

  /* using mouse and touch sensor for drag and drop */
  const sensors = useSensors(useSensor(MouseSensor), useSensor(TouchSensor));

  /* updating the items array when images array is updated */
  useEffect(() => {
    setItems([...images].map((item) => item?.id?.toString()));
  }, [images]);

  return (
    /* DndContext is the wrapper for drag and drop component */
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      onDragCancel={handleDragCancel}
    >
      {/* SortableContext is the wrapper for sortable items */}
      <SortableContext items={items} strategy={rectSortingStrategy}>
        {/* Grid is the wrapper for all images */}
        <Grid columns={5}>
          {/* mapping all images from images array */}
          {items.map((item, index) => {
            /* getting the image from images array by matching id of image with item */
            const [image] = images.filter((image) => image.id === item);

            /* returning the SortableImage component for each image and passing some usefull props throw this component */
            return (
              <SortableImage
                key={item}
                sort={item}
                image={image}
                checked={checked}
                handleCheck={handleCheck}
                index={index}
              />
            );
          })}
          {/* UploadImage component for uploading new images (JUST FOR UI PURPOSE )*/}
          <UploadImage />
        </Grid>
      </SortableContext>

      {/* DragOverlay is the wrapper for active image which is grabbing */}
      <DragOverlay adjustScale={true}>
        {/* returning the Image component for active image */}
        {activeId ? (
          <Image
            image={activeId}
            checked={checked}
            handleCheck={handleCheck}
            overlay
            index={items.indexOf(activeId)}
          />
        ) : null}
      </DragOverlay>
    </DndContext>
  );

  /* Event for dragging started and called in dragging time  */
  function handleDragStart(event) {
    /* getting ative item which is dragging  */
    const [active] = images.filter((item) => item.id === event.active.id);

    /* setting active item id in state */
    setActiveId(active);
  }

  /* Event for dragging ended and called when dragging is ended  */
  function handleDragEnd(event) {
    /* getting active and over item from event */
    const { active, over } = event;

    /* checking if active item id is not equal to over item id then reordering the items array */
    if (active.id !== over?.id) {
      /* updating the items array */
      setItems((items) => {
        /* getting the index of active and over item */
        const oldIndex = items.indexOf(active?.id);
        const newIndex = items.indexOf(over?.id);

        /* reordering the items array */

        return arrayMove(items, oldIndex, newIndex);
      });
    }

    /* setting active item id to null */
    setActiveId(null);
  }

  /* Event for dragging canceled and called when dragging is canceled  */
  function handleDragCancel() {
    setActiveId(null);
  }
};

export default DragAndDrop;
