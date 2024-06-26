// In ../Util/addNodeOnDblClick.js
import * as d3 from 'd3';

export const addNodeOnDblClick = (
  svg,
  nodes,
  setNodes,
  links,
  setLinks,
  lastNodeId,
  setLastNodeId,
  customNode = null
) => {
  const addNode = (x, y, id) => {
    const newNode = { id: id, reflexive: false, x: x, y: y };
    setNodes([...nodes, newNode]);
    setLastNodeId(lastNodeId + 1);

    // Add a link to the last node in the array
    if (nodes.length > 0) {
      const lastNode = nodes[nodes.length - 1];
      const newLink = { source: lastNode.id, target: id, left: false, right: true };
      setLinks([...links, newLink]);
    }
  };

  svg.on("dblclick", function (event) {
    const [x, y] = d3.pointer(event);
    const newId = String.fromCharCode(lastNodeId + 1);
    addNode(x, y, newId);
  });

  if (customNode) {
    const { x, y, id } = customNode;
    addNode(x, y, id);
  }
};
