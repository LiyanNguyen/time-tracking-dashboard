let listMenus = document.querySelectorAll('li');
let dailyButton = document.querySelector('#dailyButton');
let weeklyButton = document.querySelector('#weeklyButton');
let monthlyButton = document.querySelector('#monthlyButton');
let currentData = document.querySelectorAll('.card-info h2');
let previousData = document.querySelectorAll('.card-info span');

let fetchDailyData = () => {
	fetch('data.json')
		.then((response) => {
			return response.json();
		})
		.then((data) => {
			// plug in the Work Data
			document.querySelector('.work-card h2').innerText = `${data[0].timeframes.daily.current}hrs`
			document.querySelector('.work-card span').innerText = `Yesterday - ${data[0].timeframes.daily.previous}hrs`;
			// Plug in the Play Data
			document.querySelector('.play-card h2').innerText = `${data[1].timeframes.daily.current}hrs`
			document.querySelector('.play-card span').innerText = `Yesterday - ${data[1].timeframes.daily.previous}hrs`;
			// Plug in the Study Data
			document.querySelector('.study-card h2').innerText = `${data[2].timeframes.daily.current}hrs`
			document.querySelector('.study-card span').innerText = `Yesterday - ${data[2].timeframes.daily.previous}hrs`;
			// Plug in the Exercise Data
			document.querySelector('.exercise-card h2').innerText = `${data[3].timeframes.daily.current}hrs`
			document.querySelector('.exercise-card span').innerText = `Yesterday - ${data[3].timeframes.daily.previous}hrs`;
			// Plug in the Social Data
			document.querySelector('.social-card h2').innerText = `${data[4].timeframes.daily.current}hrs`
			document.querySelector('.social-card span').innerText = `Yesterday - ${data[4].timeframes.daily.previous}hrs`;
			// Plug in the SelfCare Data
			document.querySelector('.selfCare-card h2').innerText = `${data[5].timeframes.daily.current}hrs`
			document.querySelector('.selfCare-card span').innerText = `Yesterday - ${data[5].timeframes.daily.previous}hrs`;
		});
};

let fetchWeeklyData = () => {
	fetch('data.json')
		.then((response) => {
			return response.json();
		})
		.then((data) => {
			// plug in the Work Data
			document.querySelector('.work-card h2').innerText = `${data[0].timeframes.weekly.current}hrs`
			document.querySelector('.work-card span').innerText = `Last Week - ${data[0].timeframes.weekly.previous}hrs`;
			// Plug in the Play Data
			document.querySelector('.play-card h2').innerText = `${data[1].timeframes.weekly.current}hrs`
			document.querySelector('.play-card span').innerText = `Last Week - ${data[1].timeframes.weekly.previous}hrs`;
			// Plug in the Study Data
			document.querySelector('.study-card h2').innerText = `${data[2].timeframes.weekly.current}hrs`
			document.querySelector('.study-card span').innerText = `Last Week - ${data[2].timeframes.weekly.previous}hrs`;
			// Plug in the Exercise Data
			document.querySelector('.exercise-card h2').innerText = `${data[3].timeframes.weekly.current}hrs`
			document.querySelector('.exercise-card span').innerText = `Last Week - ${data[3].timeframes.weekly.previous}hrs`;
			// Plug in the Social Data
			document.querySelector('.social-card h2').innerText = `${data[4].timeframes.weekly.current}hrs`
			document.querySelector('.social-card span').innerText = `Last Week - ${data[4].timeframes.weekly.previous}hrs`;
			// Plug in the SelfCare Data
			document.querySelector('.selfCare-card h2').innerText = `${data[5].timeframes.weekly.current}hrs`
			document.querySelector('.selfCare-card span').innerText = `Last Week - ${data[5].timeframes.weekly.previous}hrs`;
		});
};

let fetchMonthlyData = () => {
	fetch('data.json')
		.then((response) => {
			return response.json();
		})
		.then((data) => {
			// plug in the Work Data
			document.querySelector('.work-card h2').innerText = `${data[0].timeframes.monthly.current}hrs`
			document.querySelector('.work-card span').innerText = `Last Month - ${data[0].timeframes.monthly.previous}hrs`;
			// Plug in the Play Data
			document.querySelector('.play-card h2').innerText = `${data[1].timeframes.monthly.current}hrs`
			document.querySelector('.play-card span').innerText = `Last Month - ${data[1].timeframes.monthly.previous}hrs`;
			// Plug in the Study Data
			document.querySelector('.study-card h2').innerText = `${data[2].timeframes.monthly.current}hrs`
			document.querySelector('.study-card span').innerText = `Last Month - ${data[2].timeframes.monthly.previous}hrs`;
			// Plug in the Exercise Data
			document.querySelector('.exercise-card h2').innerText = `${data[3].timeframes.monthly.current}hrs`
			document.querySelector('.exercise-card span').innerText = `Last Month - ${data[3].timeframes.monthly.previous}hrs`;
			// Plug in the Social Data
			document.querySelector('.social-card h2').innerText = `${data[4].timeframes.monthly.current}hrs`
			document.querySelector('.social-card span').innerText = `Last Month - ${data[4].timeframes.monthly.previous}hrs`;
			// Plug in the SelfCare Data
			document.querySelector('.selfCare-card h2').innerText = `${data[5].timeframes.monthly.current}hrs`
			document.querySelector('.selfCare-card span').innerText = `Last Month - ${data[5].timeframes.monthly.previous}hrs`;
		});
};

let animateTheData = () => {
	currentData.forEach((element) => {element.classList.add('animate')})
	previousData.forEach((element) => { element.classList.add('animate') })
	
	setTimeout(() => {
		currentData.forEach((element) => {element.classList.remove('animate')})
		previousData.forEach((element) => { element.classList.remove('animate') })
	}, 500)
}

dailyButton.onclick = () => {
	fetchDailyData();
	animateTheData();
  dailyButton.classList.add('active');
  weeklyButton.classList.remove('active');
  monthlyButton.classList.remove('active');
};

weeklyButton.onclick = () => {
	fetchWeeklyData();
	animateTheData();
	dailyButton.classList.remove('active');
	weeklyButton.classList.add('active');
	monthlyButton.classList.remove('active');
};

monthlyButton.onclick = () => {
	fetchMonthlyData();
	animateTheData();
	dailyButton.classList.remove('active');
	weeklyButton.classList.remove('active');
	monthlyButton.classList.add('active');
};