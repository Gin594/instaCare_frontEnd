import Axios from "axios";

const USER_API_BASE_URL = "http://localhost:8080/users/api/save";

class RatingService {

    // addRating(rid, uid, ratingBean) {
    //     return Axios.post("http://localhost:8080/rating/"+rid+"/"+uid, ratingBean)
    // }

    insertRating(rid, ratingBean){
        return Axios.post("http://localhost:8080/rating/request/"+rid, ratingBean).then(r=>{
            console.log(r)
        }).catch(error=>error.message)
    }
}

export default new RatingService();
