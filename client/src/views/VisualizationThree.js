import ForceGraph3D from 'react-force-graph-3d';
import apiUtils from "../utils/apiUtils"
import { useState, useEffect } from "react"

const VisualizationThree = () => {
    const [graphData, setGraphData] = useState();
    const URL = apiUtils.getUrl()

    useEffect(() => {
        const getGraphData = async () => {
            const response = await apiUtils.getAxios().get(URL + '/graph')
            setGraphData(response.data)
        }
        getGraphData()
    }, [URL]);

    // const graphData = { "nodes": [{ "id": "id1", "name": "name1", "val": 1 }, { "id": "id2", "name": "name2", "val": 10 },], "links": [{ "source": "id1", "target": "id2" },] }

    const GROUPS = 1;

    return (
        <div>
            <ForceGraph3D
                graphData={graphData}
            />
        </div>
    )
}

export default VisualizationThree