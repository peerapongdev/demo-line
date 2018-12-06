const axios = require('axios');

class dataTns {
    
	async getTodayTopPick() {
		const urlTodayTopPick = "https://tnsapi.thanachartsec.com/tns/api/v1/home/todayTopPick";

		const data = axios.post(urlTodayTopPick)
			.then(response => {
				if (response && response.status == 200) {
					return response.data.result;
				}

				return false;
			})
			.catch(error => {
				return false;
			});

		if(data !== false) {
			return data;
		}

		return false;
	}

}

module.exports = dataTns;