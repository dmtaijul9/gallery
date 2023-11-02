import React, { useState } from "react";
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
import { SortablePhoto } from "./SortablePhoto";
import { Photo } from "./Photo";

const DragAndDrop = ({ products }) => {
  const [items, setItems] = useState(
    [...products].map((item) => item.id.toString())
  );

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
            const [product] = products.filter((product) => product.id === item);

            return (
              <SortablePhoto
                key={item}
                sort={item}
                product={product}
                index={index}
              />
            );
          })}
          <div className="border-dashed border rounded-lg overflow-hidden ">
            <div className="w-full h-full flex justify-center items-center flex-col space-y-2 hover:bg-gray-200">
              <img
                src="images/image-12.png"
                alt="image icon"
                className="max-w-[35px]"
              />
              <div className="text-sm text-gray-500">Add Files</div>
            </div>
          </div>
        </Grid>
      </SortableContext>

      <DragOverlay adjustScale={true}>
        {activeId ? (
          <Photo product={activeId} index={items.indexOf(activeId)} />
        ) : null}
      </DragOverlay>
    </DndContext>
  );

  function handleDragStart(event) {
    const [active] = products.filter((item) => item.id === event.active.id);

    setActiveId(active);
  }

  function handleDragEnd(event) {
    const { active, over } = event;

    if (active.id !== over.id) {
      setItems((items) => {
        const oldIndex = items.indexOf(active.id);
        const newIndex = items.indexOf(over.id);

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
