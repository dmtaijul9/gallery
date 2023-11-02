import React, { useEffect, useState } from "react";
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
  const [items, setItems] = useState(
    [...images].map((item) => item?.id?.toString())
  );

  useEffect(() => {
    setItems([...images].map((item) => item?.id?.toString()));
  }, [images]);

  const [activeId, setActiveId] = useState(null);
  const sensors = useSensors(useSensor(MouseSensor), useSensor(TouchSensor));

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      onDragCancel={handleDragCancel}
    >
      <SortableContext items={items} strategy={rectSortingStrategy}>
        <Grid columns={5}>
          {items.map((item, index) => {
            const [image] = images.filter((image) => image.id === item);

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
          <UploadImage />
        </Grid>
      </SortableContext>

      <DragOverlay adjustScale={true}>
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

  function handleDragStart(event) {
    const [active] = images.filter((item) => item.id === event.active.id);

    setActiveId(active);
  }

  function handleDragEnd(event) {
    const { active, over } = event;

    if (active.id !== over?.id) {
      setItems((items) => {
        const oldIndex = items.indexOf(active?.id);
        const newIndex = items.indexOf(over?.id);

        return arrayMove(items, oldIndex, newIndex);
      });
    }

    setActiveId(null);
  }

  function handleDragCancel() {
    setActiveId(null);
  }
};

export default DragAndDrop;
