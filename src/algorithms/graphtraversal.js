import React from "react";

const GraphTraversal = ({ data, setTraversal }) => {
  const [traversalResult, setTraversalResult] = React.useState([]);

  const graph = data.nodes.reduce((acc, node) => {
    acc[node.id] = [];
    return acc;
  }, {});

  data.links.forEach((link) => {
    if (!graph[link.source]) {
      console.error(`Invalid source: ${link.source}`);
      return;
    }
    if (!graph[link.target]) {
      console.error(`Invalid target: ${link.target}`);
      return;
    }
    graph[link.source].push(link.target);
    graph[link.target].push(link.source);
  });

  console.log("Graph:", graph);

  const dfs = (graph, startNode) => {
    let stack = [startNode];
    let visited = new Set();
    let result = [];

    while (stack.length > 0) {
      let currentNode = stack.pop();

      if (!visited.has(currentNode)) {
        visited.add(currentNode);
        result.push(currentNode);

        let neighbors = graph[currentNode];
        for (let neighbor of neighbors) {
          stack.push(neighbor);
        }
      }
    }

    return result;
  };

  const bfs = (graph, startNode) => {
    let queue = [startNode];
    let visited = new Set();
    let result = [];

    while (queue.length > 0) {
      let currentNode = queue.shift();

      if (!visited.has(currentNode)) {
        visited.add(currentNode);
        result.push(currentNode);

        let neighbors = graph[currentNode];
        for (let neighbor of neighbors) {
          queue.push(neighbor);
        }
      }
    }

    return result;
  };

  const handleDFSClick = () => {
    const result = dfs(graph, data.nodes[0].id);
    setTraversal(result);
    setTraversalResult(result);
  };

  const handleBFSClick = () => {
    const result = bfs(graph, data.nodes[0].id);
    setTraversal(result);
    setTraversalResult(result);
  };

  return (
    <div>
      <button onClick={handleDFSClick}>DFS</button>
      <button onClick={handleBFSClick}>BFS</button>
      <p>{traversalResult.join(" -> ")}</p>
    </div>
  );
};

export default GraphTraversal;
