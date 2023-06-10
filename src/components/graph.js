import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const ForceGraph = ({ nodes, links }) => {
  const svgRef = useRef(null);

  useEffect(() => {
    const svg = d3.select(svgRef.current);

    const simulation = d3
      .forceSimulation(nodes)
      .force('link', d3.forceLink(links).id(d => d.id).distance(10))
      .force('charge', d3.forceManyBody().strength(-100))
      .force('center', d3.forceCenter(400, 400))
      .on('tick', () => {
        link
          .attr('x1', d => d.source.x)
          .attr('y1', d => d.source.y)
          .attr('x2', d => d.target.x)
          .attr('y2', d => d.target.y);

        node
          .attr('cx', d => d.x)
          .attr('cy', d => d.y);
      });

    const link = svg
      .append('g')
      .selectAll('line')
      .data(links)
      .enter()
      .append('line')
      .attr('stroke', '#999')
      .attr('stroke-opacity', 0.6);

    const node = svg
      .append('g')
      .selectAll('circle')
      .data(nodes)
      .enter()
      .append('circle')
      .attr('r', 10)
      .attr('fill', 'steelblue');

    return () => {
      simulation.stop();
    };
  }, [nodes, links]);

  return (
    <svg ref={svgRef} width="1440" height="800">
    </svg>
  );
};

export default ForceGraph;
