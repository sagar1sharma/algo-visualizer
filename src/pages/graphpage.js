import React from "react";
import Header from "../components/Header";
import ForceGraph from "../components/Graph";
import Data from "../components/data.json";
import GraphTraversal from "../algorithms/graphtraversal";

const Graphpage = () => {
  const [traversal, setTraversal] = React.useState([]);

  return (
    <div>
      <Header />
      <div className="graphpage">
        <ForceGraph
          nodes={Data.nodes}
          links={Data.links}
          startNode={Data.nodes[0].id}
          traversal={traversal}
        />
        <GraphTraversal data={Data} setTraversal={setTraversal} />
      </div>
    </div>
  );
};

export default Graphpage;
