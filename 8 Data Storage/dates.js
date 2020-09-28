const date1 = new Date('January 25 2020 06:18:19')
const timeStamp1 = date1.getTime()
const date2 = new Date('June 2 2019 16:28:09')
const timeStamp2 = date2.getTime()

const dates = [timeStamp1,timeStamp2]
const sortDates = function(dates) {
    return dates.sort(function(a,b) {
        if (a<b) {
            return -1
        } else if (a>b) {
            return 1
        } else {
            return 0
        }
    })
}
const sortedDates = sortDates(dates)

console.log(sortedDates)
const earliestDate = new Date(sortedDates[0])
console.log(earliestDate.toString())