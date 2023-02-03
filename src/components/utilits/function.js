const saerchHander = (arr, term) => {
    if(term === 0){
        return arr
    }
    return arr.filter(item => item.name.toLowerCase().indexOf(term) >-1 )
}
const filterHander = (arr, filter) => {
    switch (filter) {
        case 'popular':
            return arr.filter(c => c.like)
        case 'mostviewers':
            return arr.filter(c => c.cookie > 1000000)
        default:
            return arr
    }
}

export {saerchHander, filterHander}