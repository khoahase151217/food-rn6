import axios from "axios";

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization:
            'Bearer niJ-O2xFB0S6VOEJGO1M96cIQVcBVWctSU0k46h7UhuBmMmzXvLv9h0okA5gHNNDSm03c-VWu_KpB7dcrtZy7WnK_aDwR1g3ustlZtcVCALh7d1g38__4xACFwiYZnYx'
    }
})