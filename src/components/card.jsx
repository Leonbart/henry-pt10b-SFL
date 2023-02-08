export default function Card({ data }) {

    console.log(data);
    return (
        <div className="container">
            <div className="top">
                <div className="location">
                    {/* <p>{data.name}</p> */}
                    <p>{data.name}, {data.sys?.country}</p>
                </div>
                <div className="temp">
                    {data.main ? <h1>{data.main.temp.toFixed()} °c</h1> : null}
                </div>
                <div className="description">
                    {data.weather ? <p>{data.weather[0].description}</p> : null}
                </div>
            </div>

            {data.name !== undefined &&
                <div className="bottom">
                    <div className="feels">
                        {data.main ? <p className='bold'>{data.main.feels_like.toFixed()}</p> : null}
                        <p>Sensación</p>
                        <p>Térmica</p>
                    </div>
                    <div className="humidity">
                        {data.main ? <p className='bold'>{data.main.humidity} %</p> : null}
                        <p>Humedad</p>
                    </div>
                    <div className="wind">
                        {data.wind ? <p className='bold'>{((data.wind.speed) * 3.6).toFixed()} KM/H</p> : null}
                        <p>Viento</p>
                    </div>
                </div>
            }
        </div>
    )
}