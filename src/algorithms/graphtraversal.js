import React from "react";

const GraphTraversal = ({ data, setTraversal }) => {
  const [traversalResult, setTraversalResult] = React.useState([]);

  const graph = data.nodes.reduce((acc, node) => {
    acc[node.id] = [];
    return acc;
  }, {});

  data.links.forEach((link) => {
    if (!graph[link.source]) {
      return;
    }
    if (!graph[link.target]) {
      return;
    }
    graph[link.source].push(link.target);
    graph[link.target].push(link.source);
  });


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
      <div className="card" style={{padding: "50px"}}>
                    <div className='mybutton' style = {{position: "absolute", top: "300px", right: '150px'}} onClick={handleDFSClick} >
                        <h2>Depth First Search</h2>
                    </div>
                    
                    <div className='mybutton' style = {{position: 'absolute', top: '400px', right: '130px'}} onClick={handleBFSClick}>
                        <h2>Breadth First Search</h2> 
                    </div>
                </div>
    </div>
  );
};

export default GraphTraversal;
