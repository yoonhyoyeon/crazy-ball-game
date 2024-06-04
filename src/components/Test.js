import { useParams } from 'react-router-dom';

const Test = () => {
    const { id } = useParams();
    return (
        <>
            <h1>test page params is ---> {id}</h1>
        </>
    );
};

export default Test;