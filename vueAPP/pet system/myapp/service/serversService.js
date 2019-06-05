const { addServices,getServices,getServicesByPage,
    deleteServiceById,searchServer,serviceUpdate } = require("../dao/serversDao.js");

module.exports.addServices = async page => {
    const data = await addServices(page);
    if (data) {
        return true;
    }
    return false;
}

module.exports.getServices= async () => {
    return  await getServices();
}

module.exports.getServicesByPage = async (student) => {
    return  await getServicesByPage(student);
}

module.exports.deleteServiceById = async studentId => {
    const result = await deleteServiceById(studentId);
    if(result.ok === 1) {
        return true;
    }
    return false;
}

module.exports.searchServer = async (student) => {
    return data = await searchServer(student);
}
module.exports.serviceUpdate = async (student) => {
    return data = await serviceUpdate(student);
}
