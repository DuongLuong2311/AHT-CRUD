import httpService from '../httpService'
import url from '../urls'



const studentsAPI = {
    getStudents: (id) => {
        let uri = ""
        uri =url.getStudents+"/"+id;
        return httpService.GET(uri, null, null)
    },
    postStudent: (params) => {
        const uri = url.postStudents
        return httpService.POST(uri, params)
    },
    putStudent: (params, id) => {
        let uri = ""
        uri = url.putStudents+"/"+id;
        return httpService.PUT(uri, params)
    },
    deleteStudents: (params) => {
        const uri = url.deleteStudents
        return httpService.DELETE(uri, null, params)
    }
}

export default studentsAPI;