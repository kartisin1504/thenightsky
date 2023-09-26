import { useEffect, useState } from "react";

const Sidebar = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Define the API URL you want to fetch data from
        const apiUrl = process.env.REACT_APP_API_HOST || 'https://api-server.thenightsky.com/api/feeds/quotes?limit=5';

        // Use the fetch function to make the API call
        fetch(apiUrl)
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((resultData) => {
                setData(resultData);
                setLoading(false);
            })
            .catch((error) => {
                setError(error);
                setLoading(false);
            });
    }, []); // The empty dependency array ensures this effect runs once, like componentDidMount

   

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return <>
        <div className="secondary-titles desktopbar">
            {loading && <div>Loaiding .....</div>}
            {data?.map((item, index) => (
                <div className="title-frame" key={index}>
                    <div className="text-wrapper">{item.time.hour}: {item.time.minute.toString().padStart(2, '0')}</div>
                    <div className="div">&#34;{item.text}&#34;</div>
                    <p className="p">{item.textTitle} - {item.textDate} - {item.textLocation}</p>
                </div>
            ))}

        </div>
    </>
}
export default Sidebar