import React from 'react';
import '../css/bootstrap.css';

import './styles.css';

function Table( { covid_stats }) {
    console.log(covid_stats);
    return (
        <div>
            <table class="table table-hover ">
                <thead class="thead-light">
                    <tr>
                    <th scope="col">地区</th>
                    <th scope="col">国家/省份</th>
                    <th scope="col">国家</th>
                    <th scope="col">感染</th>
                    <th scope="col">死亡</th>
                    <th scope="col">恢复</th>
                    </tr>
                </thead>
                <tbody>
                    {covid_stats.map(data=>(
                        <tr key={data.keyID}>
                    <td className="display-4">{data?.keyId.split(",")[0] ||""}</td>
                    <td className="display-4">{data?.keyId.split(",")[1] || data?.country||data?.province}</td>
                        <td className="display-4">{data?.keyId.split(",")[2] || data?.country}</td>
                    <td className="display-4">{data.confirmed}</td>
                    <td className="display-4">{data.deaths}</td>
                    <td className="display-4">{data.recovered}</td>
                    </tr>                              
                    ))}    
                </tbody>
            </table>
        </div>
    );
}

export default Table;