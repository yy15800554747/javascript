function createThead(data) {
    //组装表头
    let theadContext = `<thead><tr>`;
    tableTheadData.forEach(function (item){
        //判断是否有宽度属性
        let width = item.width ? ` width = "${item.width}"` : ``;
        //判断是否有id属性
        let id = item.id ? ` id = "${item.id}"` : ``;
        theadContext += `<th${width}${id}>${item.label}</th>`
    })
    theadContext += `<thead><tr>`;
    return theadContext;
}

function createTable(data) {
    //组装Table内容
    let tableTbodyContext = `<tbody><tr>`;
    for(let i= 0;i<tableTbodyData.length;i++){
        let data = tableTbodyData[i];
        //头像
        tableTbodyContext += createFace(data.face);
        //姓名
        tableTbodyContext += createName(data.name);
        //性别
        tableTbodyContext += createGender(data.face);
        //年龄
        tableTbodyContext += createAge(data.age);
        //电话
        tableTbodyContext += createPhone(data.country,data.phone);
        //国籍
        tableTbodyContext += createCountry(data.country);
        //爱好
        tableTbodyContext += createLike(data.like);
        //头衔
        tableTbodyContext += createRank(data.rank);
        //操作
        tableTbodyContext += createOperation();
    }
    tableTbodyContext += `</tbody></tr>`;
    return tableTbodyContext;
}



function createFace(data){
    let FaceContext = `
        <td>
            <div class="face">
                  <span class="gender icon-${data.gender}"></span>
                  <img src="${data.img}" alt="">
            </div>
        </td>
    `;
    return FaceContext;
}

function createName(data) {
    let nameContext = `
        <td>
             <div class="people-name">
                  <h4 class="name">${data.trueName}</h4>
                  <span class="nickname option-05 fs-12">${data.nickname}</span>
             </div>
        </td>
    `;
    return nameContext;
}

function createGender(data) {
    let genderContext = `
        <td>
             <div class="gender-wrap">
                 <span class="gender icon-girl  ${data.gender === 'girl' ? "" : "option-05"}" ></span>
                 <span class="gender icon-boy   ${data.gender === 'boy' ? "" : "option-05"}" ></span>
             </div>
        </td>
    `;
    return genderContext;
}

function createAge(data) {
    let ageContext = `
        <td>
            <div class="age text-center">
                <p>${data.number}</p>
                <span class="option-05 fs-12">（单身狗）</span>
            </div>
        </td>
    `;
    return ageContext;
}

function createPhone(cData,pDate) {
    let phoneContext = `
        <td>
            <div class="phone">
                +86<span class="option-05">（${cData.name}）</span><br />
                ${pDate.number}
            </div>
        </td>
    `;
    return phoneContext;
}

function createCountry(data) {
    let countryContext = `
        <td>
            <div>
                <img src="${data.National_flag}" alt="${data.name}">
                <p class="country-name" style="color: ${data.color};">${data.name}</p>
            </div>
        </td>
    `;
    return countryContext;
}

function createLike(data) {
    let likeContexts = `
        <td>
            <div class="likes">
    `;
    let likeContext = '';
    data.forEach((item)=>{
        likeContext +=`
        <span style="background-color: ${item.color};">${item.tag}</span>
        `;
    })

    likeContexts += likeContext +`
            </div>
        </td>  
    `;
    return likeContexts;
}

function createRank(data) {
    const PER = 16.6666;
    let rankContext = `
        <td>
            <div class="grade">
                <span class="role-name">${data.name}</span>
                <div class="grade-wrap icon-grade">
                    <div class="grade-high icon-grade" style="width: ${data.level*PER}%;"></div>
                </div>
            </div>
        </td>
    `;
    return rankContext;
}

function createOperation() {
    return `
        <td>
            <div class="operation">
                <a href="javascript: void(0);" class="operation-btn">设置</a>
                <ul class="links">
                    <a href="javascript: void(0);">编辑</a>
                    <a href="javascript: void(0);">删除</a>
                    <a href="javascript: void(0);">锁定</a>
                    <a href="javascript: void(0);">收起</a>
                </ul>
            </div>
        </td>
    `;
}