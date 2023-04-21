import apiUtils from "../utils/apiUtils"
import { useState, useEffect } from "react"

const VisualizationTwo = () => {
    const URL = apiUtils.getUrl()

    const [companyData, setCompanyData] = useState({ income: 0, employees: 0 });
    const [prediction, setPrediction] = useState("");
    const [isLoading, setIsLoading] = useState(true);

    const handleInput = (event) => {
        setCompanyData({ ...companyData, [event.target.id]: event.target.value })
    }

    const predict = async () => {
        try {
            const response = await apiUtils.getAxios().post(URL + '/predict', {
                income: companyData.income,
                employees: companyData.employees
            })
            setPrediction(response.data)
            setIsLoading(false)
        } catch (error) {
        }
    }

    return (
        <div className="container">
            <div className="center">
                <h1>Predict Company Location</h1>
                <form onChange={handleInput}>
                    <div className="mb-3 form-input">
                        <label className="form-label">Income</label>
                        <input type="text" className="form-control" id="income" />
                    </div>
                    <div className="mb-3 form-input">
                        <label className="form-label">Employees</label>
                        <input type="text" className="form-control" id="employees" />
                    </div>
                </form>
                <button onClick={predict} type="submit" className="btn btn-outline-secondary">Predict</button>
                <div>
                    {!isLoading ? <h3 className="prediction">The company is located in: {prediction}</h3> : (<h1></h1>)}
                </div>
            </div>
        </div>
    )
}

export default VisualizationTwo