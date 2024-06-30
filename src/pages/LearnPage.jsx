import {useParams} from "react-router-dom";

const LearnPage = () => {
    console.log(useParams());
    return (
        <div>
            <h1>Learn Page</h1>
        </div>
    );
}

export default LearnPage;
