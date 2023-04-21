import ForceGraph3D from 'react-force-graph-3d';

const VisualizationThree = () => {

    const graphData = { "nodes": [{ "id": "id1", "name": "name1", "val": 1 }, { "id": "id2", "name": "name2", "val": 10 },], "links": [{ "source": "id1", "target": "id2" },] }

    return (
        <div>
            <ForceGraph3D
                graphData={graphData}
            />
        </div>
    )
}

export default VisualizationThree