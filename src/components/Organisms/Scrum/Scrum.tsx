import React, { useEffect } from "react";
import styled from "styled-components";
import { Sortable } from "@shopify/draggable";

import { useAddBoard, useMoveTask } from "../../../context/store/StoreHooks";

import TasksContainer from "../TasksContainer";

const Scrum = styled.div`
  width: 100%;
  max-width: 100vw;
  height: calc(100vh - 60px);

  display: flex;
  overflow-y: auto;
`;

const ScrumComponent: React.FC = () => {
  const addBoard = useAddBoard();
  const moveTask = useMoveTask();

  const containerId = "task_container";

  useEffect(() => {
    const containers = document.querySelectorAll(`#${containerId}`);

    if (containers) {
      const sortable = new Sortable(containers, {
        draggable: "article",
      });

      sortable.on("sortable:stop", (e) => {
        const { newContainer, oldContainer, newIndex, oldIndex } = e;

        const currentId = oldContainer.parentElement?.id;
        const parentId = newContainer.parentElement?.id;

        const changeContainer = currentId !== parentId;
        const changePosition = oldIndex !== newIndex;

        moveTask({
          container: "parentId",
          position: newIndex,
          data: {
            title: "aqui",
          },
        });

        console.log({ changePosition, changeContainer });
      });
    }

    addBoard();
  }, []);

  return (
    <Scrum>
      <TasksContainer
        containerName="to_do"
        containerId={containerId}
        title="To do"
      />
      <TasksContainer
        containerName="in_progress"
        containerId={containerId}
        title="In Progress"
      />
      <TasksContainer
        containerName="done"
        containerId={containerId}
        title="Done"
      />
    </Scrum>
  );
};

export default ScrumComponent;
