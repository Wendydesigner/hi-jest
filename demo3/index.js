
const delayPromise = callback => {
    return new Promise((resolve, reject) => {

        try {
            setTimeout(() => {
                const res = callback && callback();
                resolve(res)
            }, 1000);
        } catch(e) {
            reject(e);
        }
    })
}
const getRandom = () => {
    return Math.floor(Math.random() * 10);
}
module.exports =  {delayPromise, getRandom};