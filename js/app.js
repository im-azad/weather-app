const API_key = `2bef68d50dc2d1b8a9118b3539426c6c`;
const searchTemp = () => {
	const city = document.getElementById('city-name').value;

	const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_key}&units=metric`;
	fetch(url)
		.then((res) => res.json())
		.then((data) => displayTemp(data));
};

const setInnerText = (id, text) => {
	document.getElementById(id).innerText = text;
};

const displayTemp = (temp) => {
	if (temp.cod === '404') {
		setInnerText('city', temp.message);
		setInnerText('temp', '00');
	} else {
		setInnerText('city', temp.name);
		setInnerText('temp', temp.main.temp);
		//set weather icon
		const url = `http://openweathermap.org/img/wn/${temp.weather[0].icon}@2x.png`;
		const imgIcon = document.getElementById('img-icon');
		imgIcon.setAttribute('src', url);
	}
};
