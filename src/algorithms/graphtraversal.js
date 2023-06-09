import React, { useState, useEffect } from "react";

const generateGraph = () => {
  const graph = { nodes: [], links: [] };
  for (let i = 0; i < 20; i++) {
    graph.nodes.push({
      id: i.toString(),
      label: Math.floor(Math.random() * 100).toString(),
      x: Math.random() * 800 + 100,
      y: Math.random() * 400 + 50,
      color: i === 0 ? "red" : "lightgreen",
    });
  }
  for (let i = 0; i < 20; i++) {
    for (let j = i + 1; j < 20; j++) {
      if (Math.random() < 0.1) {
        graph.links.push({
          source: i.toString(),
          target: j.toString(),
          label: Math.floor(Math.random() * 10).toString(),
        });
      }
    }
  }
  return graph;
};

const traverseGraph = (graph, method) => {
  let result = [];
  if (method === "BFS") {
    let visited = new Set();
    let queue = [graph.nodes[0]];
    while (queue.length > 0) {
      const node = queue.shift();
      if (!visited.has(node.id)) {
        result.push({ node, color: "orange" });
        visited.add(node.id);
        graph.links.forEach((link) => {
          if (link.source === node.id && !visited.has(link.target)) {
            queue.push(graph.nodes.find((n) => n.id === link.target));
          } else if (link.target === node.id && !visited.has(link.source)) {
            queue.push(graph.nodes.find((n) => n.id === link.source));
          }
        });
      }
    }
  } else if (method === "DFS") {
    let visited = new Set();
    const traverse = (node) => {
      if (!visited.has(node.id)) {
        result.push({ node, color: "yellow" });
        visited.add(node.id);
        graph.links.forEach((link) => {
          if (link.source === node.id && !visited.has(link.target)) {
            traverse(graph.nodes.find((n) => n.id === link.target));
          } else if (link.target === node.id && !visited.has(link.source)) {
            traverse(graph.nodes.find((n) => n.id === link.source));
          }
        });
      }
    };
    traverse(graph.nodes[0]);
  }
  return result;
};

const GraphDisplay = () => {
  const [graph, setGraph] = useState(generateGraph);
  const [traversalMethod, setTraversalMethod] = useState(null);

  useEffect(() => {
    if (traversalMethod) {
      const traversalSteps = traverseGraph(graph, traversalMethod);
      traversalSteps.forEach((step, index) => {
        setTimeout(() => {
          setGraph((prevGraph) => ({
            ...prevGraph,
            nodes: prevGraph.nodes.map((node) =>
              node.id === step.node.id ? { ...node, color: step.color } : node
            ),
          }));
        }, index * 1000);
      });
    }
  }, [traversalMethod]);

  return (
    <div>
      <div className="card" style={{ padding: "50px" }}>
        <svg width="1000" height="500">
          {graph.links.map((link) => {
            const sourceNode = graph.nodes.find((n) => n.id === link.source);
            const targetNode = graph.nodes.find((n) => n.id === link.target);
            return (
              <>
                <line
                  x1={sourceNode.x}
                  y1={sourceNode.y}
                  x2={targetNode.x}
                  y2={targetNode.y}
                  stroke="black"
                />
                <text
                  x={(sourceNode.x + targetNode.x) / 2}
                  y={(sourceNode.y + targetNode.y) / 2}
                >
                  {link.label}
                </text>
              </>
            );
          })}
          {graph.nodes.map((node) => (
            <>
              <circle cx={node.x} cy={node.y} r="10" fill={node.color} />
              <text
                x={node.x}
                y={node.y}
                textAnchor="middle"
                dominantBaseline="central"
              >
                {node.label}
              </text>
            </>
          ))}
        </svg>
      </div>
      <div className="card" style={{ padding: "50px" }}>
        <button className="mybutton" onClick={() => setTraversalMethod("BFS")}>
          BFS
        </button>
        <button className="mybutton" onClick={() => setTraversalMethod("DFS")}>
          DFS
        </button>
      </div>
      {traversalMethod && (
        <div className="card" style={{ padding: "50px" }}>
          Traversal result ({traversalMethod}):{" "}
          {traverseGraph(graph, traversalMethod)
            .map((step) => step.node.label)
            .join(", ")}
        </div>
      )}
    </div>
  );
};

export default GraphDisplay;
