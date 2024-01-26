import React, { useState, useEffect } from "react";

export const companytest = () => {
	const [stones, setStone] = useState([]);

	useEffect(() => {
		// APIをfetchする(呼び出す)
		fetch("http://localhost:8080/company-list", { method: "GET" })
			// レスポンスのデータ形式をjsonに設定
			.then((res) => res.json())
			// APIから渡されるレスポンスデータ(data)をstateにセットする
			//.then((json) >= setStone(json)) 
			.then((data) => {
				setStone(data);
				console.log(data)
			});
	}, []);

	return (
		<div>
		 {stones.map((data) => (
        <li key={data.companyid}>{data.companyid}{data.companyname}{data.number_of_employees}</li>
      ))}
		</div>
	);
};

export default companytest;