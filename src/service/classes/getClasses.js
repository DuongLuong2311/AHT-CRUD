import httpService from '../httpService'
import url from '../urls'

const classesAPI = {
    getClasses: (id) => {
        let uri = ""
        uri = url.getClasses + "/" + id
        return httpService.GET(uri, null,  null)
    },
    postClasses: (params) => {
        const uri = url.postClasses
        return httpService.POST(uri, params)
    },
    putSClasses: (params, id) => {
        let uri = ""
        uri = url.putClasses + "/" + id
        return httpService.PUT(uri, params)
    },
    deleteClasses: (params) => {
        const uri = url.deleteClasses
        return httpService.DELETE(uri, null, params)
    }
}

export default classesAPI