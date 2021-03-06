const mongoose = require("mongoose");

//新增
module.exports.addServices = async newStudent => {
    return await mongoose.model("serviceModel").create(newStudent);
}

//获取全部
module.exports.getServices = async () => {
    return await mongoose.model("serviceModel").find();
}

// 删除
module.exports.deleteServiceById = async studentId => {
    return await mongoose.model("serviceModel").remove(studentId);
}
  
//分页获取 
module.exports.getServicesByPage = async (page) => {
    const totalCount = await mongoose.model("serviceModel").countDocuments();
    const totalPage = Math.ceil(totalCount / page.pageSize);
    const ServicesData = await mongoose.model("serviceModel").find()
        .skip(page.pageSize * (page.currentPage - 1)).limit(page.pageSize - 0);
    return {
        totalCount, totalPage, ServicesData,
        pageSize: page.pageSize, currentPage: page.currentPage
    };
}

//模糊查询
module.exports.searchServer = async student => {
    if (student.name === 'name') {
        return await mongoose.model("serviceModel").find({
            name: { $regex: student.value, $options: '$i' }
        })
    } else if (student.name === 'category') {
        return await mongoose.model("serviceModel").find({
            category: { $regex: student.value, $options: '$i' }
        })
    } else if (student.name === 'cutting') {
        return await mongoose.model("serviceModel").find({
            cutting: { $regex: student.value, $options: '$i' }
        })
    } else if (student.name === 'price') {
        return await mongoose.model("serviceModel").find({
            price: { $regex: student.value, $options: '$i' }
        })
    } else {
        return await mongoose.model("serviceModel").find({
            $or: [
                { name: student.value },
                { cutting: student.value },
                { category: student.value },
                { price: student.value }
            ]
        })
    }
}


// 修改
module.exports.serviceUpdate = async datas => {
    const result= await mongoose.model("serviceModel").update({_id:datas._id},
       {name:datas.name,
           category:datas.category,
           cutting:datas.cutting,
           ServiceSpe:datas.ServiceSpe,
           hours:datas.hours,
           waiterLevel:datas.waiterLevel,
           price:datas.price,
           date:datas.date
       },(err, data) => {});
       return result;
}