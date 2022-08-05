import moment from "moment"


export const ajustDate = (date: Date): string => {
    return moment(date).format("DD/MM/YYYY")
}