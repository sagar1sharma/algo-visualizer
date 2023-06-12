import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

const ForceGraph = ({ nodes, links, startNode, traversal }) => {
  const svgRef = useRef(null);

  useEffect(() => {
    const svg = d3.select(svgRef.current);
    svg.selectAll("*").remove();

    const simulation = d3
      .forceSimulation(nodes)
      .force(
        "link",
        d3
          .forceLink(links)
          .id((d) => d.id)
          .distance(10)
      )
      .force("charge", d3.forceManyBody().strength(-100))
      .force("center", d3.forceCenter(400, 400))
      .on("tick", () => {
        link
          .attr("x1", (d) => d.source.x)
          .attr("y1", (d) => d.source.y)
          .attr("x2", (d) => d.target.x)
          .attr("y2", (d) => d.target.y);

        node.attr("transform", (d) => `translate(${d.x},${d.y})`);
      });

    const link = svg
      .append("g")
      .selectAll("line")
      .data(links)
      .enter()
      .append("line")
      .attr("stroke", "#999")
      .attr("stroke-opacity", 0.6);

    const node = svg
      .append("g")
      .selectAll("circle")
      .data(nodes)
      .enter()
      .append("g");

    node
      .append("circle")
      .attr("r", 10)
      .attr("fill", (d) => (d.id === startNode ? "green" : "steelblue"));

    node
      .append("text")
      .text((d) => d.id)
      .attr("fill", "white")
      .attr("text-anchor", "middle")
      .attr("dominant-baseline", "central");

    if (traversal) {
      let i = 0;
      const interval = setInterval(() => {
        if (i >= traversal.length) {
          clearInterval(interval);
          return;
        }

        const currentNode = traversal[i];
        node.select("circle").attr("fill", (d) => {
          if (d.id === currentNode) return "red";
          if (traversal.slice(0, i).includes(d.id)) return "orange";
          if (d.id === startNode) return "green";
          return "steelblue";
        });
        i++;
      }, 500);
    }

    return () => {
      simulation.stop();
    };
  }, [nodes, links, startNode, traversal]);

  return (
    <>
      <svg ref={svgRef} width="1440" height="800"></svg>
    </>
  );
};

export default ForceGraph;
