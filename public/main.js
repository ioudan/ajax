getCss.onclick = ()=>{

    const request = new XMLHttpRequest();// readyState == 0
    request.open("GET", "/style.css");//readyState == 1

    // readyState === 3 //第一个请求出现在浏览器
    // readyState === 4 //下载完
    request.onreadystatechange = ()=>{
        console.log(request.readyState)
        // 下载完成，但可能是404的页面下载完成；也就是：2xx成功 或4xx 5xx失败都可以进入
        if(request.readyState === 4){
            console.log('下载完了')
            if(request.status >=200 && request.status <300){

                console.log('请求成功')
                // 创建 style标签
                const style = document.createElement('style');
                // 填写 style内容
                style.innerHTML = request.response;
                // 插入 head
                document.head.appendChild(style)
            }else{
                alert('加载css失败')
            }
        }
    }

    request.send();// readyState == 2

    // request.onload = () =>{
    //     console.log('成功了')
    //     console.log('request.response')
    //     console.log(request.response)

    //     // 创建 style标签
    //     const style = document.createElement('style');
    //     // 填写 style内容
    //     style.innerHTML = request.response;
    //     // 插入 head
    //     document.head.appendChild(style)
    // };
    
    // request.onerror = () =>{
    //     console.log('失败了')
    // };
    // request.send();
};

getJs.onclick = ()=>{
    const request = new XMLHttpRequest()
    request.open('GET', '/2.js')
    request.onload = () =>{
        console.log('request.response')
        console.log(request.response)

        // 创建 script标签
        const script = document.createElement('script')
        // 填写 script内容
        script.innerHTML = request.response
        // 插入到body里
        document.body.appendChild(script)
    };
    
    request.onerror = () =>{};
    request.send();
}

getHtml.onclick = ()=>{
    const request = new XMLHttpRequest()
    request.open('GET','/3.html')
    request.onload = ()=>{
        // 创建div元素
        const div = document.createElement('div')
        // 填写div内容
        div.innerHTML = request.response
        // 插入到body
        document.body.appendChild(div)

    }
    request.send()

}
getXml.onclick = ()=>{
    const request = new XMLHttpRequest();
    request.open('GET','/4.xml')
    request.onreadystatechange = ()=>{
        if(request.readyState === 4 && request.status === 200){
            // console.log(request.response)
            // console.log(request.responseXML)
            const dom = request.responseXML;
            const text = dom.getElementsByTagName('warning')[0].textContent
            console.log(text.trim())
        }
    };
    request.send();

}
getJson.onclick = ()=>{
    const request = new XMLHttpRequest();
    request.open('GET', '/5.json');
    request.onreadystatechange = ()=>{
        if(request.readyState === 4 && request.status === 200){
            const object = JSON.parse(request.response)
            // console.log(request.response)
            // console.log(typeof request.response)
            // console.log(object)
            // console.log(typeof object)
            myName.textContent = object.name;
        }
    };
    request.send();
}