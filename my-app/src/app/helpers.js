export const getStarImage =(index, rating)=>{
    if(index <= rating){
        return "https://cdn3.iconfinder.com/data/icons/web-93/48/web_star_favorit-128.png"
    }
    return   "https://cdn2.iconfinder.com/data/icons/connectivity/32/star-128.png"
}